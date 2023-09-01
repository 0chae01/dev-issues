import ReactDOM from "react-dom/client";
import "./styles/reset.css";
import "./index.css";
import "./styles/global.css";
import { RouterProvider } from "react-router-dom";
import { Router } from "./Router";
import { RecoilRoot } from "recoil";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <RecoilRoot>
    <RouterProvider router={Router} />
  </RecoilRoot>
);
