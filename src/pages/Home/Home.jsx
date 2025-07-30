import {
  Container,
  Overlay,
  Section,
  Title,
  Column,
  ContainerLogo,
  TitleLogo,
  SubTitleLogo,
  ContainerText,
  Image,
  ImageMobile,
  ImageLogo,
} from "./Styles";

import { logo, UFMGHome, JLUHome, FALEHome } from "../../assets/index";

import { Button1 } from "./Styles";
import { useNavigate } from "react-router-dom";

import { useGlobalLanguage } from "../../stores/globalLanguage";
import { TranslateText } from "./translations";

export default function Home() {
  const navigate = useNavigate();

  //translations
  const { globalLanguage } = useGlobalLanguage();
  const translation = TranslateText({ globalLanguage });

  return (
    <Container>
      <Overlay>
        <ContainerLogo>
          <ImageLogo src={logo} />
          <ContainerText>
            <TitleLogo>{translation.titleLogo}</TitleLogo>
            <SubTitleLogo>{translation.subtitleLogo}</SubTitleLogo>
          </ContainerText>
        </ContainerLogo>
      </Overlay>

      <Section>
        <>
          <Column>
            <Title>{translation.title1}</Title>
            <p>{translation.paragraph1}</p>
            <ImageMobile src={UFMGHome} />
            <Button1 onClick={() => navigate("/")}>
              {translation.textButton1}
            </Button1>
          </Column>
        </>
        <Image src={UFMGHome} />
      </Section>

      <Section>
        <Image src={JLUHome} />
        <Column>
          <Title>{translation.title2}</Title>
          <p>{translation.paragraph2}</p>
          <ImageMobile src={JLUHome} />
          <Button1 onClick={() => navigate("/")}>
            {translation.textButton2}
          </Button1>
        </Column>
      </Section>

      <Section>
        <Column>
          <Title>{translation.title3}</Title>
          <p>{translation.paragraph3}</p>
          <ImageMobile src={FALEHome} />
          <Button1 onClick={() => navigate("/")}>
            {translation.textButton3}
          </Button1>
        </Column>
        <Image src={FALEHome} />
      </Section>
    </Container>
  );
}
