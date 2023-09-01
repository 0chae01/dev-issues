import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "./App";
import IssueList from "./pages/IssueList";
import IssueDetail from "./pages/IssueDetail";
import NotFound from "./pages/NotFound";
import Header from "./components/common/Header";

export const Router = createBrowserRouter([
  {
    path: "",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Navigate to={"/issues"} replace={true} />,
      },
      {
        path: "/issues",
        element: <IssueList />,
      },
      {
        path: "/issues/:id",
        element: <IssueDetail />,
      },
    ],
    errorElement: (
      <>
        <Header />
        <NotFound />
      </>
    ),
  },
]);
