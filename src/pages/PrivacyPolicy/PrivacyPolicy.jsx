import { Title, Container, TextLine, BackgroundTitle, Line } from "./Styles";

import { useGlobalLanguage } from "../../stores/globalLanguage";
import { TranslateText } from "./translations";

export default function PrivacyPolicy() {
  //translations
  const { globalLanguage } = useGlobalLanguage();
  const translation = TranslateText({ globalLanguage });

  return (
    <Container>
      <BackgroundTitle>
        <Title>{translation.title1}</Title>
        <Line />
      </BackgroundTitle>
      <TextLine>
        <p>{translation.paragraph1}</p>
      </TextLine>
      <TextLine>
        <p>{translation.paragraph2}</p>
      </TextLine>
      <TextLine>
        <p>{translation.paragraph3}</p>
      </TextLine>
    </Container>
  );
}
