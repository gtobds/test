import { createBrowserRouter } from "react-router";

import MainRoutes from "./mainRoutes";
import DispRoutes from "./DispRoutes";
import GdsRoutes from "./GdsRoutes";

const router = createBrowserRouter([
  MainRoutes,
  DispRoutes,
  GdsRoutes,
  {
    path: "*",
    element: <div>페이지를 찾을 수 없습니다</div>,
  },
]);

export default router;
