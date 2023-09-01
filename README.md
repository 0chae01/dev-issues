# 원티드 프리온보딩 2주차 과제 - 개인

## 프로젝트 실행 방법

```
1. 루트 경로에 .env 파일 추가 후 `REACT_APP_GIT_TOKEN = "{{개인 깃헙 토큰}}" 추가 (미설정 시 api 호출 횟수 제한)
2. $ npm install
3. $ npm start
``````

## 배포 링크


## 개발 기간
2023.08.29-2023.09.01

## 사용 기술 스택


### Development

<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=Javascript&logoColor=white"> <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=white">
<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white">


### Library
<img src="https://img.shields.io/badge/styled%20components-DB7093?style=for-the-badge&logo=styledcomponents&logoColor=white"> <img src="https://img.shields.io/badge/Axios-DA291C?style=for-the-badge&logo=axios&logoColor=white"> <img src="https://img.shields.io/badge/Recoil-3578E5?style=for-the-badge&logo=Recoil&logoColor=white">
<img src="https://img.shields.io/badge/React%20markdown%20preview-000000?style=for-the-badge&logo=Markdown&logoColor=white"> <img src="https://img.shields.io/badge/React Router Dom-3178C6?style=for-the-badge&logo=&logoColor=white">

## 디렉토리 구조
```
📦src
 ┣ 📂apis
 ┣ 📂components
 ┣ 📂constants
 ┣ 📂containers
 ┣ 📂hooks
 ┣ 📂pages
 ┣ 📂stores
 ┣ 📂styles
 ┣ 📂types
 ┣ 📂utils
 ```

## 주요 기능

1. 이슈 리스트
- Github REST API를 활용해 open 상태의 이슈 목록을 불러옵니다.
- 이슈는 코멘트가 많은 순으로 정렬됩니다.
- 이슈번호, 이슈제목, 작성자, 작성일, 코멘트수 정보를 출력합니다.
- 다섯 번째 셀마다 광고 이미지를 출력합니다.
- 화면을 아래로 스크롤 할 시 이슈 목록이 추가로 로딩됩니다.(인피니티 스크롤)

2. 이슈 세부 정보
- 이슈번호, 이슈제목, 작성자, 작성일, 코멘트 수, 작성자 프로필 이미지, 본문이 표시됩니다.
- 이슈의 본문은 마크다운 문법에 맞게 스타일링되어 출력됩니다.

3. 에러 페이지
- 잘못된 url로 접근 시 에러페이지로 이동됩니다.