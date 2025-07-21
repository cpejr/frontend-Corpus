export function TranslateText({ globalLanguage }) {
  let titleLogo;
  let subtitleLogo;
  let title1;
  let title2;
  let title3;
  let paragraph1;
  let paragraph2;
  let paragraph3;
  let textButton1;
  let textButton2;
  let textButton3;

  if (globalLanguage === "PT") {
    titleLogo = "Comunicação Intercultural";
    subtitleLogo = "em Interações Multimodais";
    title1 = "Sobre nós";
    paragraph1 =
      "O Centro de Pesquisa Internacional Intercultural Communication in Multimodal Interactions (ICMI) é uma rede interinstitucional e internacional de pesquisadores. Desde 2010, nosso trabalho tem sido pioneiro na investigação de fenômenos conversacionais, interacionais, translinguísticos, multimodais e linguístico-cognitivos. Atualmente, nossos pesquisadores têm se dedicado ao desenvolvimento de metodologias inovadoras para a transcrição e análise multimodal de interações mediadas por vídeo, em contextos virtuais.";
    textButton1 = "saiba mais!";
    title2 = "Dados e Preservação";
    paragraph2 =
      "Os dados presentes neste projeto, registrados sob o (CAAE: 55218521.1.1001.5149), são um recurso em expansão desde 2010, documentando interações em contextos interculturais variados. Esta é uma plataforma que vem sendo construída para a preservação e disponibilização desses dados, com o objetivo de criar um banco robusto que suporte análises multimodais detalhadas.";
    textButton2 = "saiba mais!";
    title3 = "Políticas de privacidade";
    paragraph3 = "Em construção";
    textButton3 = "saiba mais!";
  }
  if (globalLanguage === "EN") {
    titleLogo = "Intercultural Communication";
    subtitleLogo = "in Multimodal Interactions";
    title1 = "About us";
    paragraph1 =
      "The International Research Center Intercultural Communication in Multimodal Interactions (ICMI) is an interinstitutional and international network of researchers. Since 2010, our work has pioneered the investigation of conversational, interactional, translingual, multimodal, and linguistic-cognitive phenomena. Currently, our researchers have been dedicated to developing innovative methodologies for the transcription and multimodal analysis of video-mediated interactions in virtual contexts.";
    textButton1 = "learn more!";
    title2 = "Data and Preservation";
    paragraph2 =
      "The data in this project, registered under (CAAE: 55218521.1.1001.5149), have been an expanding resource since 2010, documenting interactions in diverse intercultural contexts. This platform has been developed for the preservation and availability of these data, with the aim of creating a robust repository that supports detailed multimodal analyses.";
    textButton2 = "learn more!";
    title3 = "Privacy policies";
    paragraph3 = "Under construction";
    textButton3 = "learn more!";
  }
  if (globalLanguage === "ES") {
    titleLogo = "Comunicación Intercultural";
    subtitleLogo = "en Interacciones Multimodales";
    title1 = "Sobre nosotros";
    paragraph1 =
      "El Centro de Investigación Internacional Intercultural Communication in Multimodal Interactions (ICMI) es una red interinstitucional e internacional de investigadores. Desde 2010, nuestro trabajo ha sido pionero en la investigación de fenómenos conversacionales, interaccionales, translingüísticos, multimodales y lingüístico-cognitivos. Actualmente, nuestros investigadores se han dedicado al desarrollo de metodologías innovadoras para la transcripción y el análisis multimodal de interacciones mediadas por video, en contextos virtuales.";
    textButton1 = "aprende más!";
    title2 = "Datos y Preservación";
    paragraph2 =
      "Los datos de este proyecto, registrados bajo el (CAAE: 55218521.1.1001.5149), son un recurso en expansión desde 2010, documentando interacciones en diversos contextos interculturales. Esta plataforma ha sido construida para la preservación y la disponibilidad de estos datos, con el objetivo de crear un banco robusto que respalde análisis multimodales detallados.";
    textButton2 = "aprende más!";
    title3 = "Politicas de privacidad";
    paragraph3 = "En construcción";
    textButton3 = "aprende más!";
  }
  if (globalLanguage === "GE") {
    titleLogo = "Interkulturelle Kommunikation";
    subtitleLogo = "in multimodalen Interaktionen";
    title1 = "Über uns";
    paragraph1 =
      "Das Internationale Forschungszentrum Intercultural Communication in Multimodal Interactions (ICMI) ist ein interinstitutionelles und internationales Netzwerk von Forschenden. Seit 2010 leistet unsere Arbeit Pionierarbeit in der Untersuchung von konversationellen, interaktionalen, translingualen, multimodalen und sprachlich-kognitiven Phänomenen. Derzeit widmen sich unsere Forschenden der Entwicklung innovativer Methoden zur Transkription und multimodalen Analyse von videobasierten Interaktionen in virtuellen Kontexten.";
    textButton1 = "mehr erfahren!";
    title2 = "Daten und Erhaltung";
    paragraph2 =
      "Die in diesem Projekt enthaltenen Daten, registriert unter (CAAE: 55218521.1.1001.5149), stellen seit 2010 eine wachsende Ressource dar, die Interaktionen in verschiedenen interkulturellen Kontexten dokumentiert. Diese Plattform wurde zur Bewahrung und Bereitstellung dieser Daten aufgebaut, mit dem Ziel, eine robuste Datenbank zu schaffen, die detaillierte multimodale Analysen unterstützt.";
    textButton2 = "mehr erfahren!";
    title3 = "Datenschutzrichtlinien";
    paragraph3 = "Im Aufbau";
    textButton3 = "mehr erfahren!";
  }

  return {
    titleLogo,
    subtitleLogo,
    title1,
    title2,
    title3,
    paragraph1,
    paragraph2,
    paragraph3,
    textButton1,
    textButton2,
    textButton3,
  };
}
