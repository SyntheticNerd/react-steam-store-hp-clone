import { StyleVariables } from "./components/styledComponents";
import { HomePage, HeroCont } from "./components/styledComponents";
import Navbar from "./components/nav/Navbar";
import SearchNav from "./components/searchNav/SearchNav";

function App() {
  return (
    <StyleVariables>
      <HomePage>
        <Navbar />
        <HeroCont>
          <SearchNav />
          <img src={process.env.PUBLIC_URL + "/images/capcom_hero.png"} alt="CAPCOM SALE"/>
        </HeroCont>

      </HomePage>
    </StyleVariables>
  );
}

export default App;
