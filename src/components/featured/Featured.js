import Paginator from "../Paginator";
import { SectionTitle } from "../StyledComponents";
import GameCluster from "./GameCluster";
import { FeatCont } from "./FeatStyles";
export default function Featured() {
  return (
    <FeatCont>
        <SectionTitle>FEATURED AND RECOMMENDED</SectionTitle>
        <Paginator>
            <GameCluster/>
        </Paginator>
    </FeatCont>
  );
}
