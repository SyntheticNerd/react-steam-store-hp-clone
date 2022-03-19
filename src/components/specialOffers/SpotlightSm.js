import React from "react";
import {
  Disc,
  InfoSm,
  LiveIcon,
  PrevDisc,
  Price,
  SpotLightSmCont,
  TimeLeft,
} from "./SpecOffStyle";

export default function SpotlightSm({ image, live }) {
  return (
    <SpotLightSmCont>
        {live && (
        <LiveIcon
          src={process.env.PUBLIC_URL + "/images/live_icon.svg"}
          alt='LIVE'
        />
      )}
      <img src={process.env.PUBLIC_URL + image} alt={image} />
      <InfoSm>
        <div>
          <h1>Todays Deal!</h1>
          <TimeLeft>Time Left</TimeLeft>
        </div>
        <section>
          <PrevDisc>
            <p>-00%</p>
          </PrevDisc>
          <Disc>
            <p>-00%</p>
          </Disc>
          <Price>
            <p>$00.00</p>
            <strong>$00.00</strong>
          </Price>
        </section>
      </InfoSm>
    </SpotLightSmCont>
  );
}
