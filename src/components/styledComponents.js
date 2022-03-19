import styled from "styled-components";

export const StyleVariables = styled.div`
  --bg-main: rgb(27, 40, 56);
  --bg-header: rgb(23, 26, 33);
  --bg-dark: rgb(9, 19, 28);
  --bg-green: rgb(76, 107, 34);
  --bg-capcom: rgb(11, 71, 149);
  --bg-time-left: rgb(79, 149, 189);
  --bg-search: rgb(49, 98, 130);
  --bg-tag: rgb(56, 64, 71);
  --bg-price-medium: rgb(52, 69, 84);
  --bg-price-light: rgb(187, 225, 246);
  --bg-price-dark: rgb(14, 50, 66);
  --bg-price-opaque: rgba(0, 0, 0, 0.6);
  --tool-grad: linear-gradient(
    90deg,
    rgba(73, 116, 156, 0.9) 0%,
    rgba(48, 91, 154, 0.9) 53.02%,
    rgba(15, 33, 110, 0.9) 100%
  );
  --bg-grad-2: linear-gradient(
    180deg,
    rgb(70, 95, 119) 0%,
    rgb(27, 40, 56) 100%
  );
  --bg-grad-3: linear-gradient(
    90deg,
    rgb(49, 80, 109) 0%,
    rgb(64, 120, 152) 100%
  );
  --bg-grad-btn: linear-gradient(
    90deg,
    rgb(6, 190, 255) 0%,
    rgb(45, 115, 255) 100%
  );
  --bg-btn-grad: linear-gradient(90deg, #131d28 0%, rgba(19, 27, 40, 0) 100%);
  --font-color-blue: rgb(116, 187, 248);
  --font-color-blue2: #ACDBF5;
  --font-color-green: #A4D007;
  --font-color-prim: rgba(255, 255, 255, 0.88);
  --font-color-sec: rgba(0, 0, 0, 0.6);
  --shadow-prim: 0px 4px 8px rgba(0, 0, 0, 0.5);
  --shadow-2: 0px 2px 4px rgba(0, 0, 0, 0.6);
`;

export const HomePage = styled.div`
  background-color: var(--bg-main);
  min-height: 100vh;
`;
export const HeroCont = styled.div`
  background-color: var(--bg-capcom);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-x: hidden;
  position: relative;
`;
export const ArrowBtnCont = styled.button`
  height: 100px;
  width: 50px;
  background: var(--bg-btn-grad);
  border: none;
`;

export const PaginatorCont = styled.div`
  display: flex;
  width: fit-content;
  margin: auto;
  align-items: center;
`;

export const PageTracker = styled.div`
  display: flex;
  width: fit-content;
  margin: auto;
  & > div {
    width: fit-content;
    margin: 16px 4px;
    padding: 4px 8px;
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 2px;
  }
`;

export const SectionTitle = styled.h1`
  width: 90%;
  max-width: 940px;
  margin: auto;
  font-size: 15px;
  color: var(--font-color-prim);
  font-weight: 400;
  margin-bottom: 16px;
`;

export const Banner = styled.div`
  margin:  40px auto;
  width: fit-content;
  height: 150px;
  box-shadow: var(--shadow-prim);
`;

