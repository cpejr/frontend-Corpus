export function TranslateText( globalLanguage ) {
    let title;
    let text;
    let button;
    let successToast;
  
    if (globalLanguage === "PT") {
        title = "Excluir Arquivo";
        text = "Tem certeza que você deseja excluir esse arquivo?";
        button = "EXCLUIR";
        successToast = "Vídeo excluído com sucesso!";
    }
    if (globalLanguage === "EN") {
        title = "Delete File";
        text = "Are you sure you want to delete this file?";
        button = "DELETE";
        successToast = "Video deleted successfully!";

    }
    if (globalLanguage === "ES") {
        title = "Eliminar archivo";
        text = "¿Está seguro de que desea eliminar este archivo?";
        button = "Eliminar";
        successToast = "¡Video eliminado exitosamente!";
    }
    if (globalLanguage === "GE") {
        title = "Datei löschen";
        text = "Sind Sie sicher, dass Sie diese Datei löschen möchten?";
        button = "LÖSCHEN";
        successToast = "Video erfolgreich gelöscht!";
    }
    return {
        title,
        text,
        button,
        successToast,
    };
}

export function TranslateToastError ( globalLanguage, errorCode ){
    if (errorCode === 500){
        if (globalLanguage === "PT"){
            return "Erro interno do servidor. Tente novamente mais tarde!";
        }
        if (globalLanguage === "EN"){
            return "Internal server error. Try again later!";
        }
        if (globalLanguage === "ES"){
            return "Error Interno del Servidor. ¡Inténtalo de nuevo más tarde!";
        }
    }
}