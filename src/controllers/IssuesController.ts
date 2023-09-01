import { useRecoilState } from "recoil";
// import {issuesStateAtom} from 'stores/atom';
import { issueType, issuesStateType } from "../types/issueType";
import * as api from "../apis/issues";
import { AxiosError } from "axios";
import { issuesStateAtom } from "../stores/atom";

export const IssuesController = () => {
  const [issuesState, setIssuesState] = useRecoilState(issuesStateAtom);

  const getIssues = async (page: number) => {
    try {
      setIssuesState((prev: issuesStateType) => ({ ...prev, moreData: false }));
      const res = await api.getIssueList(page);
      // 마지막 불러온 페이지가 빈 (마지막 페이지 +1 )페이지인 경우 더이상 무한스크롤 안되게 세팅
      if (!res.data.length) {
        setIssuesState((prev: issuesStateType) => ({
          ...prev,
          moreData: false,
        }));
      }
      setIssuesState((prev: issuesStateType) => {
        const newIssues = res.data;
        // 서버 통신 전 코멘트 정렬이 변경될 경우 기존 배열 필터링하고 새로운 값 받기
        const filteredIssues = prev.issues.filter(
          (preIssue) =>
            !newIssues.some(
              (newIssue: issueType) => newIssue.number === preIssue.number
            )
        );
        return {
          ...prev,
          moreData: true,
          issues: [...filteredIssues, ...newIssues],
        };
      });
    } catch (e) {
      const error = e as AxiosError;
      setIssuesState((prev: issuesStateType) => ({
        ...prev,
        errorStatus: error.response?.status ?? "유효하지 않은 에러 발생",
      }));
    } finally {
      setIssuesState((prev: issuesStateType) => ({
        ...prev,
        isLoading: false,
      }));
    }
  };

  const getNextPage = () => {
    const newPageCount = issuesState.pageCount + 1;
    setIssuesState((prev: issuesStateType) => ({
      ...prev,
      isLoading: true,
      pageCount: prev.pageCount + 1,
    }));
    getIssues(newPageCount);
  };

  return { getIssues, getNextPage };
};
