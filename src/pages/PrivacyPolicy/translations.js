export function TranslateText({ globalLanguage }) {
  let title1;
  let paragraph1;
  let paragraph2;
  let paragraph3;

  if (globalLanguage === "PT") {
    title1 = "Políticas de privacidade";
    paragraph1 = "Em desenvolvimento";
    paragraph2 = "";
    paragraph3 = "";
  }
  if (globalLanguage === "EN") {
    title1 = "Privacy policies";
    paragraph1 = "In development";
    paragraph2 = "";
    paragraph3 = "";
  }
  if (globalLanguage === "ES") {
    title1 = "Políticas de privacidad";
    paragraph1 = "En desarrollo";
    paragraph2 = "";
    paragraph3 = "";
  }
  if (globalLanguage === "GE") {
    title1 = "Datenschutzrichtlinien";
    paragraph1 = "In der Entwicklung";
    paragraph2 = "";
    paragraph3 = "";
  }

  return {
    title1,
    paragraph1,
    paragraph2,
    paragraph3,
  };
}
