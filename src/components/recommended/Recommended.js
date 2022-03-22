import React from "react";
import Paginator from "../Paginator";
import { SectionTitle, SectionTitleLg } from "../StyledComponents";
import Recommendation from "./Recommendation";
import { RecCont } from "./RecStyles";

export default function Recomended() {
  return (
    <RecCont>
      <SectionTitleLg>THE COMMUNITY RECOMMENDS</SectionTitleLg>
      <SectionTitle>THESE GAMES TODAY</SectionTitle>
      <Paginator>
        <Recommendation />
      </Paginator>
    </RecCont>
  );
}
