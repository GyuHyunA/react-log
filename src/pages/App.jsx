import { useRoutes } from "react-router-dom";
import { isrouobj } from "../config/rotuers";
import Navi from "./navi";
import Wrapper from "./wrapper";

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
