export function TranslateText(globalLanguage) {
  let buttonpdf,
    upload,
    send,
    download,
    transcriptionUpload,
    transcriptionWaiting;

  if (globalLanguage === "PT") {
    buttonpdf = "Download de Transcrição Automática";
    upload = "Upload";
    send = "Enviar";
    download = "Transcrição";
    transcriptionUpload = "Transcrição manual enviada com sucesso!";
    transcriptionWaiting = "Um instante para o arquivo carregar";
  }
  if (globalLanguage === "EN") {
    buttonpdf = "Download Automatic Transcription";
    upload = "Upload";
    send = "Send";
    download = "download Polished File";
    transcriptionUpload = "Manual transcription uploaded successfully!";
    transcriptionWaiting = "Just a moment for the file to load";
  }
  if (globalLanguage === "ES") {
    buttonpdf = "Descargar Transcripción automática";
    upload = "Subir";
    send = "send";
    download = "Descargar Archivo Pulido";
    transcriptionUpload = "¡Transcripción manual enviada con éxito!";
    transcriptionWaiting = "Un momento para que el archivo se cargue";
  }
  if (globalLanguage === "GE") {
    buttonpdf = "Transkription Automatische Transkription";
    upload = "Hochladen";
    send = "Senden";
    download = "Polierte Datei herunterladen";
    transcriptionUpload = "Manuelle Transkription erfolgreich hochgeladen!";
    transcriptionWaiting = "Einen Moment, bis die Datei geladen ist";
  }

  return {
    buttonpdf,
    upload,
    send,
    download,
    transcriptionUpload,
    transcriptionWaiting,
  };
}
