import {
  Container,
  Facebook,
  Instagram,
  LogoFooter,
  SocialContainer,
  SocialIcon,
  Whatsapp,
} from "./Styles";
//import { logoFooter } from "../../../../assets";
import { logo } from "../../../../assets";

import { useGlobalLanguage } from "../../../../stores/globalLanguage";
import { TranslateText } from "./translations";
import { useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();
  //translations
  const { globalLanguage } = useGlobalLanguage();
  const translation = TranslateText({ globalLanguage });

  return (
    <Container>
      <LogoFooter src={logo} onClick={() => navigate("/")}></LogoFooter>
      <SocialContainer>
        <p>{translation.footer1}</p>
        <SocialIcon>
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
            <Instagram />
          </a>
          <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
            <Facebook />
          </a>
          <a href="http://wa.me/" target="_blank" rel="noreferrer">
            <Whatsapp />
          </a>
        </SocialIcon>
      </SocialContainer>
    </Container>
  );
}
