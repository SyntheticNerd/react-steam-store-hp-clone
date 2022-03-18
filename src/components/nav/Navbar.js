import {
  Anchor,
  InstallBtn,
  Language,
  Link,
  Logo,
  NavCont,
  NavLinks,
  NavUtil,
  Line,
  NavBox
} from "./navStyles";

export default function Navbar() {
  return (
    <NavCont>
      <NavBox>
        <Logo
          src={process.env.PUBLIC_URL + "/images/main_steam_logo.svg"}
          alt='STEAM'
        />
        <NavLinks>
          <Link>STORE</Link>
          <Link>COMMUNITY</Link>
          <Link>ABOUT</Link>
          <Link>SUPPORT</Link>
        </NavLinks>
        <NavUtil>
          <InstallBtn>
            <img
              src={process.env.PUBLIC_URL + "/images/download.png"}
              alt='download'
            />
            <p>Install Steam</p>
          </InstallBtn>
          <Anchor>login</Anchor>
          <Line />
          <Language>
            language
            <img
              src={process.env.PUBLIC_URL + "/images/btn_arrow_down_padded.png"}
              alt='expand'
            />
          </Language>
        </NavUtil>
      </NavBox>
    </NavCont>
  );
}
