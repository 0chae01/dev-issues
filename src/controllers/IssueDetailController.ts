import * as api from "../apis/issues";
import { AxiosError } from "axios";
import { useState } from "react";
import { issueDetailStateType, issueDetailType } from "../types/issueType";

const IssueDetailController = () => {
  const [issueDetail, setIssueDetail] = useState<issueDetailStateType>({
    isLoading: true,
    errorStatus: 0,
    issue: {
      number: 0,
      title: "",
      user: {
        login: "",
        avatar_url: "",
      },
      created_at: "",
      comments: 0,
      body: "",
    },
  });

  const getIssue = async (id: number) => {
    try {
      const res = await api.getIssueItem(id);
      setIssueDetail((prev) => ({
        ...prev,
        issue: res.data as issueDetailType,
      }));
      if (res.data.state !== "open") {
        const error = new AxiosError();
        setIssueDetail((prev) => ({
          ...prev,
          errorStatus: error.response?.status ?? "open 상태가 아닙니다",
        }));
      }
    } catch (e) {
      const error = e as AxiosError;
      setIssueDetail((prev) => ({
        ...prev,
        errorStatus: error.response?.status ?? "유효하지 않은 에러 발생",
      }));
    } finally {
      setIssueDetail((prev) => ({ ...prev, isLoading: false }));
    }
  };

  return { issueDetail, getIssue };
};

export default IssueDetailController;
