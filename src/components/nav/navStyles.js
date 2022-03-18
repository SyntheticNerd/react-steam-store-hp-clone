import styled from "styled-components";

export const NavCont = styled.nav`
  width: 100%;
  background-color: var(--bg-header);
  color: var(--font-color-prim);
`;
export const NavBox = styled.div`
  display: flex;
  max-width: 940px;
  margin: auto;
  padding: 28px 0px;
  position: relative;
`;
export const Logo = styled.img`
  margin-right: 10%;
`;
export const NavLinks = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
`;
export const Link = styled.li`
  margin: 12px;
`;
export const NavUtil = styled.div`
  margin-left: auto;
  margin-top: -20px;
  display: flex;
  height: 24px;
`;
export const InstallBtn = styled.button`
  display: flex;
  width: fit-content;
  border: none;
  outline: none;
  background-color: var(--bg-green);
  padding: 4px 0px 4px 8px;
  color: var(--font-color-prim);
  font-size: 12px;
  & > p {
    width: 80px;
    margin: 0px 4px;
  }
`;
export const Anchor = styled.p`
  margin: 0px 10px;
`;
export const Language = styled.p`
  margin: 0px 10px;
`;
export const Line = styled.hr``;
