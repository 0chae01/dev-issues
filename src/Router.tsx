import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "./App";
import IssueList from "./pages/IssueList";
import NotFound from "./pages/NotFound";

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
    ],
    errorElement: <NotFound />,
  },
]);
