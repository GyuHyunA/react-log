import { BasicHome, ReduxHome, RouHome, UrlRouter } from "../components/pra_list/";
import { PraApp, TodoMain, TestHome, NotFound } from "../components/index";
import { About, Counter, Hello, InputSample, UserMain } from "../components/pra_list/pra_router";
import Navi from "../pages/navi";


// export const isrouobj = [
//   { path: "/", element: <Navi /> },
//   {
//     path: "prahome/*",
//     element: <PraApp />,
//     children: [
//       { path: "basic/*", element: <BasicHome />, children: [
//         {path: "hello", element:<Hello/>},
//         {path: "about", element:<About/>},
//         {path: "input", element:<InputSample/>},
//         {path: "counter", element:<Counter/>},
//         {path: "userMain", element:<UserMain/>},
//       ]},
//       { path: "router/*", element: <RouHome /> },
//       { path: "redux/*", element: <ReduxHome /> },
//       { path: "redux/*", element: <UrlRouter /> },
//     ],
//   },
//   { path: "todolist/*", element: <TodoMain /> },
//   { path: "testpage/*", element: <TestHome /> },
//   { path: "chatgpt/*", element: <TestHome /> },
//   { path: "*", element: <NotFound /> },
// ];