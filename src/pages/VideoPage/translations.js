export function TranslateText( globalLanguage ) {
    let buttonpdf;

    if (globalLanguage === "PT") {
        buttonpdf = "Baixar Transcrição";
    }
    if (globalLanguage === "EN") {
        buttonpdf = "Download Transcript";
    }
    if (globalLanguage === "ES") {
        buttonpdf = "Descargar Transcripción";
    }
    if (globalLanguage === "GE") {
        buttonpdf = "Transkription herunterladen";
    }
    return{
        buttonpdf
    }
}