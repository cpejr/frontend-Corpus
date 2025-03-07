export function TranslateText( globalLanguage ) {
    let title;
    let text;
    let button;
    let loading;
    let successToast;
    let placeholder1;
    let placeholder2;
    let placeholder3;
    let placeholder4;
    let placeholder5;
    let placeholder6;
    let placeholder7;
    let placeholder8;
    let placeholder9;
    let placeholder10;
    let error1;
    let error2;
    let error3;
    let error4;
    let error5;
    let error6;
    let error7;
    let error8;
    let error9;
    let error10;

  
    if (globalLanguage === "PT") {
        title = "Atualização do vídeo";
        text = "Insira abaixo o valor que deseja alterar:";
        button = "Alterar";
        loading = "Realizando alteração...";
        successToast = "Alteração realizada com sucesso";

        placeholder1 = "Título";
        placeholder2 = "Descrição";
        placeholder3 = "Contexto";
        placeholder4 = "Responsáveis da coleta";
        placeholder5 = "Número de participantes";
        placeholder6 = "País de origem";
        placeholder7 = "Língua";
        placeholder8 = "Duração da integração";
        placeholder9 = "Data da coleta";
        placeholder10 = "Transcrição";

        error1 = "O titulo precisa ter mais de 1 carácter";
        error2 = "A descrição precisa ter mais de 1 carácter";
        error3 = "O contexto precisa ter mais de 1 carácter";
        error4 = "Os responsáveis precisa ter mais de 1 carácter";
        error5 = "O número total de participantes precisa ter mais de 1 carácter";
        error6 = "O país de origem precisa ter mais de 1 carácter";
        error7 = "O idioma falado precisa ter mais de 1 carácter";
        error8 = "A duração precisa ter mais de 1 carácter";
        error9 = "A data precisa ter mais de 1 carácter"
        error9 = "A transcrição precisa ter mais de 1 carácter";

    }
    if (globalLanguage === "EN") {
        title = "Video Update";
        text = "Enter the value you want to change below:";
        button = "Change";
        loading = "Making the change...";
        successToast = "Change made successfully";

        placeholder1 = "Title";
        placeholder2 = "Description";
        placeholder3 = "Context";
        placeholder4 = "Collection Team";
        placeholder5 = "Number of Participants";
        placeholder6 = "Country of Origin";
        placeholder7 = "Language";
        placeholder8 = "Integration Duration";
        placeholder9 = "Collection Date";
        placeholder10 = "Transcription";

        error1 = "The title must have more than 1 character";
        error2 = "The description must have more than 1 character";
        error3 = "The context must have more than 1 character";
        error4 = "The collection team must have more than 1 character";
        error5 = "The total number of participants must have more than 1 character";
        error6 = "The country of origin must have more than 1 character";
        error7 = "The spoken language must have more than 1 character";
        error8 = "The duration must have more than 1 character";
        error9 = "The date must have more than 1 character";
        error10 = "The transcription must have more than 1 character";

    }
    if (globalLanguage === "ES") {
        title = "Actualización del video";
        text = "Ingrese el valor que desea cambiar a continuación:";
        button = "Cambiar";
        loading = "Realizando el cambio...";
        successToast = "Cambio realizado con éxito";

        placeholder1 = "Título";
        placeholder2 = "Descripción";
        placeholder3 = "Contexto";
        placeholder4 = "Equipo de recolección";
        placeholder5 = "Número de participantes";
        placeholder6 = "País de origen";
        placeholder7 = "Idioma";
        placeholder8 = "Duración de la integración";
        placeholder9 = "Fecha de recolección";
        placeholder10 = "Transcripción";

        error1 = "El título debe tener más de 1 carácter";
        error2 = "La descripción debe tener más de 1 carácter";
        error3 = "El contexto debe tener más de 1 carácter";
        error4 = "El equipo de recolección debe tener más de 1 carácter";
        error5 = "El número total de participantes debe tener más de 1 carácter";
        error6 = "El país de origen debe tener más de 1 carácter";
        error7 = "El idioma hablado debe tener más de 1 carácter";
        error8 = "La duración debe tener más de 1 carácter";
        error9 = "La fecha debe tener más de 1 carácter";
        error10 = "La transcripción debe tener más de 1 carácter";

    }
    if (globalLanguage === "GE") {
        title = "Videoaktualisierung";
        text = "Geben Sie unten den Wert ein, den Sie ändern möchten:";
        button = "Ändern";
        loading = "Änderung wird vorgenommen...";
        successToast = "Änderung erfolgreich durchgeführt";
    
        placeholder1 = "Titel";
        placeholder2 = "Beschreibung";
        placeholder3 = "Kontext";
        placeholder4 = "Sammlungsteam";
        placeholder5 = "Anzahl der Teilnehmer";
        placeholder6 = "Herkunftsland";
        placeholder7 = "Sprache";
        placeholder8 = "Integrationsdauer";
        placeholder9 = "Sammlungsdatum";
        placeholder10 = "Transkription";
    
        error1 = "Der Titel muss mehr als 1 Zeichen haben";
        error2 = "Die Beschreibung muss mehr als 1 Zeichen haben";
        error3 = "Der Kontext muss mehr als 1 Zeichen haben";
        error4 = "Das Sammlungsteam muss mehr als 1 Zeichen haben";
        error5 = "Die Gesamtzahl der Teilnehmer muss mehr als 1 Zeichen haben";
        error6 = "Das Herkunftsland muss mehr als 1 Zeichen haben";
        error7 = "Die gesprochene Sprache muss mehr als 1 Zeichen haben";
        error8 = "Die Dauer muss mehr als 1 Zeichen haben";
        error9 = "Das Datum muss mehr als 1 Zeichen haben";
        error10 = "Die Transkription muss mehr als 1 Zeichen haben";
    }
    return {
        title,
        text,
        button,
        loading,
        successToast,
        placeholder1,
        placeholder2,
        placeholder3,
        placeholder4,
        placeholder5,
        placeholder6,
        placeholder7,
        placeholder8,
        placeholder9,
        placeholder10,
        error1,
        error2,
        error3,
        error4,
        error5,
        error6,
        error7,
        error8,
        error9,
        error10,
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