export function TranslateText(globalLanguage) {
  let buttonpdf;

  if (globalLanguage === "PT") {
    buttonpdf = "Download de Legenda";
  }
  if (globalLanguage === "EN") {
    buttonpdf = "Download Subtitles";
  }
  if (globalLanguage === "ES") {
    buttonpdf = "Descargar Subtítulos";
  }
  if (globalLanguage === "GE") {
    buttonpdf = "Transkription herunterladen";
  }
  return {
    buttonpdf,
  };
}
