import Disp from "@/pages/disp/Disp.jsx";
import DispMain from "@/pages/disp/DispMain.jsx";
import NewList from "@/pages/disp/NewList.jsx";
import SaleList from "@/pages/disp/SaleList.jsx";

const DispRoutes = {
  path: "/disp",
  element: <Disp />,
  children: [
    {
      index: true, // (기본 페이지)
      element: <DispMain />,
    },
    {
      path: "new",
      element: <NewList />,
    },
    {
      path: "sale",
      element: <SaleList />,
    },
  ],
};

export default DispRoutes;
