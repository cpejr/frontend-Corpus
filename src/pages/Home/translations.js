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
    titleLogo = "NÚCLEO DE ESTUDOS DE COMUNICAÇÃO";
    subtitleLogo = "(Inter-)Cultural em Interação";
    title1 = "Sobre nós";
    paragraph1 =
      "Lorem ipsum dolor sit amet. Ut dolorum consequatur ut fugiat ducimus et quia saepe et recusandae incidunt qui impedit sunt et molestiae veniam et obcaecati ipsam. Id fugit iusto est possimus asperiores qui repellat nesciunt.";
    textButton1 = "saiba mais!";
    title2 = "Vídeos";
    paragraph2 =
      "Lorem ipsum dolor sit amet. Ut dolorum consequatur ut fugiat ducimus et quia saepe et recusandae incidunt qui impedit sunt et molestiae veniam et obcaecati ipsam. Id fugit iusto est possimus asperiores qui repellat nesciunt.";
    textButton2 = "saiba mais!";
    title3 = "Políticas de privacidade";
    paragraph3 =
      "Lorem ipsum dolor sit amet. Ut dolorum consequatur ut fugiat ducimus et quia saepe et recusandae incidunt qui impedit sunt et molestiae veniam et obcaecati ipsam. Id fugit iusto est possimus asperiores qui repellat nesciunt.";
    textButton3 = "saiba mais!";
  }
  if (globalLanguage === "EN") {
    titleLogo = "Core of Communication Studies";
    subtitleLogo = "(Inter-)Cultural in Interaction";
    title1 = "About us";
    paragraph1 =
      "Lorem ipsum dolor sit amet. Ut dolorum consequatur ut fugiat ducimus et quia saepe et recusandae incidunt qui impedit sunt et molestiae veniam et obcaecati ipsam. Id fugit iusto est possimus asperiores qui repellat nesciunt.";
    textButton1 = "learn more!";
    title2 = "Videos";
    paragraph2 =
      "Lorem ipsum dolor sit amet. Ut dolorum consequatur ut fugiat ducimus et quia saepe et recusandae incidunt qui impedit sunt et molestiae veniam et obcaecati ipsam. Id fugit iusto est possimus asperiores qui repellat nesciunt.";
    textButton2 = "learn more!";
    title3 = "Privacy policies";
    paragraph3 =
      "Lorem ipsum dolor sit amet. Ut dolorum consequatur ut fugiat ducimus et quia saepe et recusandae incidunt qui impedit sunt et molestiae veniam et obcaecati ipsam. Id fugit iusto est possimus asperiores qui repellat nesciunt.";
    textButton3 = "learn more!";
  }
  if (globalLanguage === "ES") {
    titleLogo = "Núcleo de Estudios de Comunicación";
    subtitleLogo = "(Inter-)Cultural en Interacción";
    title1 = "Sobre nosotros";
    paragraph1 =
      "Lorem ipsum dolor sit amet. Ut dolorum consequatur ut fugiat ducimus et quia saepe et recusandae incidunt qui impedit sunt et molestiae veniam et obcaecati ipsam. Id fugit iusto est possimus asperiores qui repellat nesciunt.";
    textButton1 = "aprende más!";
    title2 = "Administrar videos";
    paragraph2 =
      "Lorem ipsum dolor sit amet. Ut dolorum consequatur ut fugiat ducimus et quia saepe et recusandae incidunt qui impedit sunt et molestiae veniam et obcaecati ipsam. Id fugit iusto est possimus asperiores qui repellat nesciunt.";
    textButton2 = "aprende más!";
    title3 = "Politicas de privacidad";
    paragraph3 =
      "Lorem ipsum dolor sit amet. Ut dolorum consequatur ut fugiat ducimus et quia saepe et recusandae incidunt qui impedit sunt et molestiae veniam et obcaecati ipsam. Id fugit iusto est possimus asperiores qui repellat nesciunt.";
    textButton3 = "aprende más!";
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
