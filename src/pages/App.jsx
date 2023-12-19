import { useRoutes } from "react-router-dom";
import { routerList } from "../routers/routerList";

function App() {
  let router = useRoutes(routerList);
  return <>{router}</>;
}

export default App;
