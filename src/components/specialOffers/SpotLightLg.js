import React from "react";
import {
  Disc,
  InfoLg,
  LiveIcon,
  PrevDisc,
  Price,
  SpotLightLgCont,
} from "./SpecOffStyle";

export default function SpotLightLg({ image, live }) {
  return (
    <SpotLightLgCont>
      {live && (
        <LiveIcon
          src={process.env.PUBLIC_URL + "/images/live_icon.svg"}
          alt='LIVE'
        />
      )}
      <img src={process.env.PUBLIC_URL + image} alt={image} />
      <InfoLg>
        <h1>TITLE SECTION</h1>
        <p>Offer Ends Date</p>
        <div>
          <PrevDisc><p>-00%</p></PrevDisc>
          <Disc><p>-00%</p></Disc>
          <Price><p>$00.00</p><strong>$00.00</strong></Price>
        </div>
      </InfoLg>
    </SpotLightLgCont>
  );
}
