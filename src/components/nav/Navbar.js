import {
  Anchor,
  InstallBtn,
  Language,
  Link,
  Logo,
  NavCont,
  NavLinks,
  NavUtil,
  Line
} from "./navStyles";

export default function Navbar() {
  return (
    <NavCont>
      <Logo></Logo>
      <NavLinks>
        <Link>STORE</Link>
        <Link>COMMUNITY</Link>
        <Link>ABOUT</Link>
        <Link>SUPPORT</Link>
      </NavLinks>
      <NavUtil>
        <InstallBtn>
          <img />
          <p>Install Steam</p>
        </InstallBtn>
        <Anchor>login</Anchor>
        <Line />
        <Language>
          language
          <img />
        </Language>
      </NavUtil>
    </NavCont>
  );
}
