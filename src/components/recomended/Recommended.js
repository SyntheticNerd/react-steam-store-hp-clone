import Paginator from "../Paginator";
import { SectionTitle } from "../StyledComponents";
import GameCluster from "./GameCluster";
import { RecCont } from "./RecStyles";
export default function Recommended() {
  return (
    <RecCont>
        <SectionTitle>FEATURED AND RECOMMENDED</SectionTitle>
        <Paginator>
            <GameCluster/>
        </Paginator>
    </RecCont>
  );
}
