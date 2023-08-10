import PraApp from "../components/velopert/home";
import NotFound from "../components/velopert/notfound";
import TestHome from "../components/testpage/home";
import TodoMain from "../components/todolist/todomain";
import { BasicHome, RouHome } from "../components/velopert";
import { About, Counter, Hello, InputSample, UserMain } from "../components/velopert/pra_router";
import Navi from "../pages/navi";
import { AdContentsHome, ApiConnect, ClassCompMain, VeInControl } from "../components/velopert/test";
import VeTestHome from "../components/velopert/test/testhome";
import RouterHome from "../components/routercomp/routerHome";
import ReduxHome from "../components/reduxcomp/reduxHome";

export const isrouobj = [
  { path: "/", element: <Navi /> },
  {
    path: "velo/*",
    element: <PraApp />,
    children: [
      {
        path: "basic/*",
        element: <BasicHome />,
        children: [
          { path: "hello", element: <Hello /> },
          { path: "about", element: <About /> },
          { path: "counter", element: <Counter /> },
          { path: "input", element: <InputSample /> },
          { path: "userMain", element: <UserMain /> },
        ],
      },
      { path: "router/*", element: <RouHome /> },
      {
        path: "velotest",
        element: <VeTestHome />,
        children: [
          { path: "veloco", element: <VeInControl /> },
          { path: "adcote/*", element: <AdContentsHome /> },
          { path: "classComp", element: <ClassCompMain /> },
        ],
      },
    ],
  },
  { path: "todolist/*", element: <TodoMain /> },
  { path: "testpage/*", element: <TestHome />, children: [{ path: "apiconnect", element: <ApiConnect /> }] },
  { path: "router/*", element: <RouterHome /> },
  { path: "redux/*", element: <ReduxHome /> },
  { path: "*", element: <NotFound /> },
];
