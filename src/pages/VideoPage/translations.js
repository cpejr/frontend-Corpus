export function TranslateText(globalLanguage) {
  let buttonpdf;

  if (globalLanguage === "PT") {
    buttonpdf = "Download de Transcrição Automática";
  }
  if (globalLanguage === "EN") {
    buttonpdf = "Download Automatic Transcription";
  }
  if (globalLanguage === "ES") {
    buttonpdf = "Descargar Transcripción automática";
  }
  if (globalLanguage === "GE") {
    buttonpdf = "Transkription Automatische Transkription";
  }
  return {
    buttonpdf,
  };
}
