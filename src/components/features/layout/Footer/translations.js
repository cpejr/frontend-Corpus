export function TranslateText({ globalLanguage }) {
  let footer1;

  if (globalLanguage === "PT") {
    footer1 = "Dúvidas? Entre em contato conosco:";
  }
  if (globalLanguage === "EN") {
    footer1 = "Questions? Contact us:";
  }
  if (globalLanguage === "ES") {
    footer1 = "¿Preguntas? Contáctenos:";
  }
  if (globalLanguage === "GE") {
    footer1 = "Fragen? Kontaktieren Sie uns:";
  }
  return {
    footer1,
  };
}
