export function TranslateText(globalLanguage) {
  let buttonpdf, upload, send, download;

  if (globalLanguage === "PT") {
    buttonpdf = "download de Transcrição Automática";
    upload = "Upload";
    send = "Enviar";
    download = "Baixar Arquivo Polido";
  }
  if (globalLanguage === "EN") {
    buttonpdf = "download Automatic Transcription";
    upload = "Upload";
    send = "Send";
    download = "download Polished File";
  }
  if (globalLanguage === "ES") {
    buttonpdf = "Descargar Transcripción automática";
    upload = "Subir";
    send = "send";
    download = "Descargar Archivo Pulido";
  }
  if (globalLanguage === "GE") {
    buttonpdf = "Transkription Automatische Transkription";
    upload = "Hochladen";
    send = "Senden";
    download = "Polierte Datei herunterladen";
  }
  return {
    buttonpdf,
    upload,
    send,
    download,
  };
}
