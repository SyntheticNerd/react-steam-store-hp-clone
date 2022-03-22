import React from "react";
import Paginator from "../Paginator";
import { SectionTitle } from "../StyledComponents";
import { GameList } from "./GameListStyle";
import VrGame from "./VrGame";

export default function VrGames() {
  return (
    <>
    <SectionTitle>THESE GAMES TODAY</SectionTitle>
      <Paginator>
        <GameList>
          <VrGame />
          <VrGame />
          <VrGame />
          <VrGame />
        </GameList>
      </Paginator>
    </>
  );
}
