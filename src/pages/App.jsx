import { useRoutes } from "react-router-dom";
import { NotFound, PraApp } from "../components/pra_list/pra_router";
import { TodoMain } from "../components/todolist";
import Navi from "./navi";
import Wrapper from "./wrapper";


const isrouobj = [
  { path: "/", element: <Navi /> },
  { path: "/prahome/*", element: <PraApp /> },
  { path: "todolist/*", element: <TodoMain /> },
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
