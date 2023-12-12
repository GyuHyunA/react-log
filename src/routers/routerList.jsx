import BasicHome from "../components/Basic/BasicHome";
import NotFound from "../components/error/NotFound";

export const routerList = [
  {
    path: "/",
    element: <BasicHome />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];
