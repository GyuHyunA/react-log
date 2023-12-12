import { useRoutes } from "react-router-dom";
import { routerList } from "../routers/routerList";

function App() {
  let router = useRoutes(routerList)
  return (
    <>
      <h2>{router}</h2>
    </>
  );
}

export default App;
