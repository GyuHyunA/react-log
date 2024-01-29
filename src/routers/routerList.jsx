import TestApp from "../components/Basic/testApp";
import MainApp from "../components/MainApp";
import NotFound from "../components/error/NotFound";

export const routerList = [
  {
    path: "/",
    element: <MainApp />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
  {
    path: "testApp",
    element: <TestApp />,
  },
];
