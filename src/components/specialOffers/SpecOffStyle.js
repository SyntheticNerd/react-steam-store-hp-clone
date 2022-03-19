import styled from "styled-components";

export const OffersCont = styled.div``;
export const GridBox = styled.div`
  width: 940px;
  height: 390px;
  display: grid;
  gap: 14px;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
`;
export const SpotLightLgCont = styled.div`
  position: relative;
  background-color: lightblue;
  display: flex;
  grid-row: 1/3;
  & > img {
    position: absolute;
  }
`;
export const SpotLightSmCont = styled.div`
  position: relative;
  background-color: lightblue;
  display: flex;
  & > img {
    position: absolute;
  }
`;

export const InfoLg = styled.div`
  height: fit-content;
  width: 100%;
  margin-top: auto;
  z-index: 1;
  color: var(--font-color-prim);
  padding: 16px;
  background: url(${process.env.PUBLIC_URL + "/images/background_spotlight.png"});
  & > div {
    display: flex;
  }
  & > h1 {
    font-size: 14px;
    font-weight: 600;
  }
  & > p {
    font-size: 12px;
    margin: 12px 0px;
  }
`;
export const InfoSm = styled.div`
  height: fit-content;
  width: 100%;
  margin-top: auto;
  z-index: 1;
  color: var(--font-color-prim);
  padding: 5px;
  display: flex;
  justify-self: flex-end;
  & > div {
    & > h1 {
      font-size: 12px;
      font-weight: 400;
      color: var(--font-color-sec);
    }
  }
  & > section {
    display: flex;
    margin-left: auto;
  }
`;
export const LiveIcon = styled.img`
  display: absolute;
  z-index: 1;
  margin: 8px 16px;
`;
export const PrevDisc = styled.div`
  display: flex;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.15);
  padding: 0px 8px;
  font-weight: 600;
  font-size: 24px;
  color: var(--font-color-sec);
`;
export const Disc = styled.div`
  padding: 0px 8px;
  display: flex;
  align-items: center;
  background-color: var(--bg-green);
  font-weight: 600;
  font-size: 24px;
  color: var(--font-color-green);
`;
export const Price = styled.div`
  text-align: right;
  font-size: 10px;
  padding: 2px 16px;
  background-color: var(--bg-price-dark);
  color: var(--font-color-blue2);
  & > strong {
    font-size: 12px;
    font-weight: 700;
  }
`;

export const TimeLeft = styled.p`
  background-color: var(--bg-time-left);
  font-size: 10px;
  color: var(--font-color-blue2);
  padding: 0px 2px;
`;
