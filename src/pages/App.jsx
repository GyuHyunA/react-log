import { useRoutes } from "react-router-dom";
import PraApp from "../components/pra_list/home";
import NotFound from "../components/pra_list/notfound";
import TestHome from "../components/testpage/home";
import { TodoMain } from "../components/todolist";
import Navi from "./navi";
import Wrapper from "./wrapper";


const isrouobj = [
  { path: "/", element: <Navi /> },
  { path: "prahome/*", element: <PraApp /> },
  { path: "todolist/*", element: <TodoMain /> },
  { path: "testpage/*", element: <TestHome /> },
  { path: "*", element: <NotFound /> },
];

function App() {
  const routing = useRoutes(isrouobj);
  return (
    <>
      <Navi />
      <Wrapper>{routing}</Wrapper>
    </>
  );
}

export default App;
