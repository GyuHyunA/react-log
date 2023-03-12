import PraApp from "../components/pra_list/home";
import NotFound from "../components/pra_list/notfound";
import TestHome from "../components/testpage/home";
import TodoMain from "../components/todolist/todomain";
import { BasicHome, ReduxHome, RouHome, UrlRouter } from "../components/pra_list/";
// import { PraApp, TodoMain, TestHome, NotFound } from "../components/index";
import { About, Counter, Hello, InputSample, UserMain } from "../components/pra_list/pra_router";
import UrlRouterMain from "../components/pra_list/urlrouter/home";
import { A1, Aa1, Aa2, B1 } from "../components/pra_list/urlrouter";
import Navi from "../pages/navi";

export const isrouobj = [
  { path: "/", element: <Navi /> },
  {
    path: "prahome/*",
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
      { path: "redux/*", element: <ReduxHome /> },
      {
        path: "urlrouter/*",
        element: <UrlRouter />,
        children: [
          {
            path: "",
            element: <UrlRouterMain />,
          },
          {
            path: "a1",
            element: <A1 />,
            children: [
              { path: "", element: <Aa1 /> },
              { path: "aa1", element: <Aa2 /> },
            ],
          },
          {
            path: "b1",
            element: <B1 />,
          },
        ],
      },
    ],
  },
  { path: "todolist/*", element: <TodoMain /> },
  { path: "testpage/*", element: <TestHome /> },
  { path: "chatgpt/*", element: <TestHome /> },
  { path: "*", element: <NotFound /> },
];
