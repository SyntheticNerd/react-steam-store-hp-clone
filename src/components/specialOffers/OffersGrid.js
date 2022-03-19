import { GridBox } from "./SpecOffStyle";
import SpotLightLg from "./SpotLightLg";
import SpotlightSm from "./SpotlightSm";

export default function OffersGrid() {
  return (
    <GridBox>
      <SpotLightLg live={true} image={"/images/foundation_spotlight.png"} />
      <SpotLightLg live={true} image={"/images/egosoft_spotlight.png"} />
      <SpotlightSm
        live={true}
        image={"/images/jupiter_hell_spotlight_sm.png"}
      />
      <SpotlightSm
        live={true}
        image={"/images/city_gangster_spotlight_sm.png"}
      />
    </GridBox>
  );
}
