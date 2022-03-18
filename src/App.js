import { StyleVariables } from "./components/StyledComponents";
import { HomePage, HeroCont } from "./components/StyledComponents";
import Navbar from "./components/nav/Navbar";
import SearchNav from "./components/searchNav/SearchNav";
import Recommended from "./components/recomended/Recommended";

function App() {
  return (
    <StyleVariables>
      <HomePage>
        <Navbar />
        <HeroCont>
          <SearchNav />
          <img src={process.env.PUBLIC_URL + "/images/capcom_hero.png"} alt="CAPCOM SALE"/>
        </HeroCont>
        <Recommended/>

      </HomePage>
    </StyleVariables>
  );
}

export default App;
