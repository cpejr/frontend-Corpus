import { useMediaQuery } from "react-responsive";
import {
  Title,
  Container,
  Line,
  TextColumn,
  Banner,
  TextLine,
  SubTitle,
  ImageLine,
  PintaColumn,
  TextPintaColumn,
  BackgroundTitle,
} from "./Styles";
import { image } from "../../assets";
import { breakpoints } from "../../styles/stylesVariables";

import { useGlobalLanguage } from "../../stores/globalLanguage";
import { TranslateText } from "./translations";

export default function AboutUs() {
  //translations
  const { globalLanguage } = useGlobalLanguage();
  const translation = TranslateText({ globalLanguage });

  const isMobileScreen = useMediaQuery({ maxWidth: breakpoints.mobile });

  return (
    <Container>
    
      <BackgroundTitle>
        <Title>{translation.title1}</Title>
      </BackgroundTitle>
      <Line>
        <TextColumn>
          <img
            style={{ border: "none", maxWidth: "250px", alignSelf: "center" }}
            src={image}
            alt="image"
          />
        </TextColumn>
        <TextPintaColumn>
          <p>{translation.paragraph1}</p>
        </TextPintaColumn>
      </Line>
      <ImageLine style={{ marginBottom: "2rem", height: "40rem" }}>
        <TextPintaColumn>
          <p>{translation.paragraph2}</p>
        </TextPintaColumn>
        <TextColumn>
          <img
            style={{ border: "none", maxWidth: "250px", alignSelf: "center" }}
            src={image}
            alt="image"
          />
        </TextColumn>
      </ImageLine>
      <Banner>
        <p>{translation.paragraph3}</p>
      </Banner>


      {isMobileScreen ? (
        <SubTitle>{translation.subtitle1}</SubTitle>
      ) : (
        <SubTitle> &ensp; &ensp;{translation.subtitle1}</SubTitle>
      )}
      <TextLine>
        <p>{translation.paragraph4}</p>
      </TextLine>
      <Line>
      <TextColumn>
          <img
            style={{ border: "none", maxWidth: "250px", alignSelf: "center" }}
            src={image}
            alt="image"
          />
        </TextColumn>
        <TextPintaColumn>
          <p>{translation.paragraph5}</p>
        </TextPintaColumn>
      </Line>
      <ImageLine style={{ marginBottom: "2rem", height: "40rem" }}>
        <TextPintaColumn>
          <p>{translation.paragraph6}</p>
        </TextPintaColumn>
        <TextColumn>
          <img
            style={{ border: "none", maxWidth: "250px", alignSelf: "center" }}
            src={image}
            alt="image"
          />
        </TextColumn>
      </ImageLine>


      {isMobileScreen ? (
        <SubTitle>{translation.subtitle2}</SubTitle>
      ) : (
        <SubTitle> &ensp; &ensp;{translation.subtitle2}</SubTitle>
      )}
      <Line>
        <TextColumn>
          <img
            style={{ border: "none", maxWidth: "250px", alignSelf: "center" }}
            src={image}
            alt="image"
          />
        </TextColumn>
        <TextPintaColumn>
          <p>{translation.paragraph7}</p>
        </TextPintaColumn>
      </Line>

      {isMobileScreen ? (
        <SubTitle>{translation.subtitle3}</SubTitle>
      ) : (
        <SubTitle> &ensp; &ensp;{translation.subtitle3}</SubTitle>
      )}
      <ImageLine style={{ marginBottom: "2rem", height: "40rem" }}>
        <TextPintaColumn>
          <p>{translation.paragraph8}</p>
        </TextPintaColumn>
        <TextColumn>
          <img
            style={{ border: "none", maxWidth: "250px", alignSelf: "center" }}
            src={image}
            alt="image"
          />
        </TextColumn>
      </ImageLine>


    </Container>
  );
}
