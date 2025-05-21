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
      "Lorem ipsum dolor sit amet. Ut dolorum consequatur ut fugiat ducimus et quia saepe et recusandae incidunt qui impedit sunt et molestiae veniam et obcaecati ipsam. Id fugit iusto est possimus asperiores qui repellat nesciunt. Lorem ipsum dolor sit amet. Ut dolorum consequatur ut fugiat ducimus et quia saepe et recusandae incidunt qui impedit sunt et molestiae veniam et obcaecati ipsam.";
    textButton1 = "learn more!";
    title2 = "Videos";
    paragraph2 =
      "Lorem ipsum dolor sit amet. Ut dolorum consequatur ut fugiat ducimus et quia saepe et recusandae incidunt qui impedit sunt et molestiae veniam et obcaecati ipsam. Id fugit iusto est possimus asperiores qui repellat nesciunt. Lorem ipsum dolor sit amet. Ut dolorum consequatur ut fugiat ducimus et quia saepe et recusandae incidunt qui impedit sunt et molestiae veniam et obcaecati ipsam.";
    textButton2 = "learn more!";
    title3 = "Privacy policies";
    paragraph3 =
      "Lorem ipsum dolor sit amet. Ut dolorum consequatur ut fugiat ducimus et quia saepe et recusandae incidunt qui impedit sunt et molestiae veniam et obcaecati ipsam. Id fugit iusto est possimus asperiores qui repellat nesciunt. Lorem ipsum dolor sit amet. Ut dolorum consequatur ut fugiat ducimus et quia saepe et recusandae incidunt qui impedit sunt et molestiae veniam et obcaecati ipsam.";
    textButton3 = "learn more!";
  }
  if (globalLanguage === "ES") {
    titleLogo = "Comunicación Intercultural";
    subtitleLogo = "en Interacciones Multimodales";
    title1 = "Sobre nosotros";
    paragraph1 =
      "Lorem ipsum dolor sit amet. Ut dolorum consequatur ut fugiat ducimus et quia saepe et recusandae incidunt qui impedit sunt et molestiae veniam et obcaecati ipsam. Id fugit iusto est possimus asperiores qui repellat nesciunt. Lorem ipsum dolor sit amet. Ut dolorum consequatur ut fugiat ducimus et quia saepe et recusandae incidunt qui impedit sunt et molestiae veniam et obcaecati ipsam.";
    textButton1 = "aprende más!";
    title2 = "Administrar videos";
    paragraph2 =
      "Lorem ipsum dolor sit amet. Ut dolorum consequatur ut fugiat ducimus et quia saepe et recusandae incidunt qui impedit sunt et molestiae veniam et obcaecati ipsam. Id fugit iusto est possimus asperiores qui repellat nesciunt. Lorem ipsum dolor sit amet. Ut dolorum consequatur ut fugiat ducimus et quia saepe et recusandae incidunt qui impedit sunt et molestiae veniam et obcaecati ipsam.";
    textButton2 = "aprende más!";
    title3 = "Politicas de privacidad";
    paragraph3 =
      "Lorem ipsum dolor sit amet. Ut dolorum consequatur ut fugiat ducimus et quia saepe et recusandae incidunt qui impedit sunt et molestiae veniam et obcaecati ipsam. Id fugit iusto est possimus asperiores qui repellat nesciunt. Lorem ipsum dolor sit amet. Ut dolorum consequatur ut fugiat ducimus et quia saepe et recusandae incidunt qui impedit sunt et molestiae veniam et obcaecati ipsam.";
    textButton3 = "aprende más!";
  }
  if (globalLanguage === "GE") {
    titleLogo = "Interkulturelle Kommunikation";
    subtitleLogo = "in multimodalen Interaktionen";
    title1 = "Über uns";
    paragraph1 =
      "Lorem ipsum dolor sit amet. Ut dolorum consequatur ut fugiat ducimus et quia saepe et recusandae incidunt qui impedit sunt et molestiae veniam et obcaecati ipsam. Id fugit iusto est possimus asperiores qui repellat nesciunt. Lorem ipsum dolor sit amet. Ut dolorum consequatur ut fugiat ducimus et quia saepe et recusandae incidunt qui impedit sunt et molestiae veniam et obcaecati ipsam.";
    textButton1 = "mehr erfahren!";
    title2 = "Videos";
    paragraph2 =
      "Lorem ipsum dolor sit amet. Ut dolorum consequatur ut fugiat ducimus et quia saepe et recusandae incidunt qui impedit sunt et molestiae veniam et obcaecati ipsam. Id fugit iusto est possimus asperiores qui repellat nesciunt. Lorem ipsum dolor sit amet. Ut dolorum consequatur ut fugiat ducimus et quia saepe et recusandae incidunt qui impedit sunt et molestiae veniam et obcaecati ipsam.";
    textButton2 = "mehr erfahren!";
    title3 = "Datenschutzrichtlinien";
    paragraph3 =
      "Lorem ipsum dolor sit amet. Ut dolorum consequatur ut fugiat ducimus et quia saepe et recusandae incidunt qui impedit sunt et molestiae veniam et obcaecati ipsam. Id fugit iusto est possimus asperiores qui repellat nesciunt. Lorem ipsum dolor sit amet. Ut dolorum consequatur ut fugiat ducimus et quia saepe et recusandae incidunt qui impedit sunt et molestiae veniam et obcaecati ipsam.";
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
