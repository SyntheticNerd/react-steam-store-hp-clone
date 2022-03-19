import { StyleVariables } from "./components/StyledComponents";
import { HomePage, HeroCont, Banner } from "./components/StyledComponents";
import Navbar from "./components/nav/Navbar";
import SearchNav from "./components/searchNav/SearchNav";
import Recommended from "./components/recomended/Recommended";
import SpecialOffers from "./components/specialOffers/SpecialOffers";

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
        <Banner>
          <img src={process.env.PUBLIC_URL + '/images/jrpg_banner.png'} alt="" />
        </Banner>
        <SpecialOffers/>
      </HomePage>
    </StyleVariables>
  );
}

export default App;
