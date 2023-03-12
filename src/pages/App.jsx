import { useRoutes } from "react-router-dom";
import { isrouobj } from "../config/rotuers";
import Navi from "./navi";
import Wrapper from "./wrapper";
// import { BasicHome, ReduxHome, RouHome, UrlRouter } from "../components/pra_list/";


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
