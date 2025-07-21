export function TranslateText({ globalLanguage }) {
  let title1;
  let title2;
  let button1;
  let placeholderSearch;
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
  let placeholder11;
  let successToast;
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
  let error11;
  let error12;
  let error13;

  if (globalLanguage === "PT") {
    title1 = "ADICIONAR VÍDEOS";
    title2 = "GERENCIAR VÍDEOS";
    successToast = "Vídeo adicionado com sucesso!";
    placeholderSearch = "Pesquisar";
    placeholder1 = "Título";
    placeholder2 = "Descrição";
    placeholder3 = "Selecionar Arquivo";
    error1 = "Erro ao fazer o upload!";
    error2 = "Nenhum arquivo selecionado.";
    placeholder4 = "Código";
    placeholder5 = "Contexto";
    placeholder6 = "Responsáveis da coleta";
    placeholder7 = "Número de participantes";
    placeholder8 = "País de origem";
    placeholder9 = "Língua";
    placeholder10 = "Duração da integração";
    placeholder11 = "Data da coleta";
    button1 = "Enviar";
    error3 = "O titulo é obrigatório";
    error4 = "A descrição é obrigatória";
    error5 = "O video é obrigatório";
    error6 = "O código é obrigatório";
    error7 = "O contexto é obrigatória";
    error8 = "Os responsáveis são obrigatórios";
    error9 = "O número total de participantes é obrigatório";
    error10 = "O país de origem é obrigatório";
    error11 = "O idioma falado é obrigatório";
    error12 = "A duração é obrigatória";
    error13 = "A data é obrigatória";
  }
  if (globalLanguage === "EN") {
    title1 = "ADD VIDEOS";
    title2 = "MANAGE VIDEOS";
    successToast = "Video added successfully!";
    placeholderSearch = "Search";
    placeholder1 = "Title";
    placeholder2 = "ShortDescription";
    placeholder3 = "Select File";
    error1 = "Error uploading!";
    error2 = "No file selected.";
    placeholder4 = "Code";
    placeholder5 = "Context";
    placeholder6 = "Collection Responsibles";
    placeholder7 = "Number of Participants";
    placeholder8 = "Country of Origin";
    placeholder9 = "Language";
    placeholder10 = "Integration Duration";
    placeholder11 = "Collection Date";
    button1 = "Submit";
    error3 = "Title is required";
    error4 = "ShortDescription is required";
    error5 = "Video is required";
    error6 = "Code is required";
    error7 = "Context is required";
    error8 = "Responsibles parties are required";
    error9 = "Total number of participants is required";
    error10 = "Country of origin is required";
    error11 = "Spoken language is required";
    error12 = "Duration is required";
    error13 = "Date is required";
  }
  if (globalLanguage === "ES") {
    title1 = "AÑADIR VÍDEOS";
    title2 = "GESTIONAR VIDEOS";
    successToast = "¡Video añadido con éxito!";
    placeholderSearch = "Buscar";
    placeholder1 = "Título";
    placeholder2 = "Descripción";
    placeholder3 = "Seleccionar Archivo";
    error1 = "¡Error al subir!";
    error2 = "Ningún archivo seleccionado.";
    placeholder4 = "Código";
    placeholder5 = "Contexto";
    placeholder6 = "Responsables de la recolección";
    placeholder7 = "Número de participantes";
    placeholder8 = "País de origen";
    placeholder9 = "Idioma";
    placeholder10 = "Duración de la integración";
    placeholder11 = "Fecha de la recolección";
    button1 = "Enviar";
    error3 = "El título es obligatorio";
    error4 = "La descripción es obligatoria";
    error5 = "El video es obligatorio";
    error6 = "El código es obligatorio";
    error7 = "El contexto es obligatorio";
    error8 = "Los responsables son obligatorios";
    error9 = "El número total de participantes es obligatorio";
    error10 = "El país de origen es obligatorio";
    error11 = "El idioma hablado es obligatorio";
    error12 = "La duración es obligatoria";
    error13 = "La fecha es obligatoria";
  }
  if (globalLanguage === "GE") {
    title1 = "VIDEOS HINZUFÜGEN";
    title2 = "VIDEOS VERWALTEN";
    successToast = "Video erfolgreich hinzugefügt!";
    placeholderSearch = "Suche";
    placeholder1 = "Titel";
    placeholder2 = "Kurzbeschreibung";
    placeholder3 = "Datei auswählen";
    error1 = "Fehler beim Hochladen!";
    error2 = "Keine Datei ausgewählt.";
    placeholder4 = "Code";
    placeholder5 = "Kontext";
    placeholder6 = "Verantwortliche der Sammlung";
    placeholder7 = "Anzahl der Teilnehmer";
    placeholder8 = "Herkunftsland";
    placeholder9 = "Sprache";
    placeholder10 = "Dauer der Integration";
    placeholder11 = "Datum der Sammlung";
    button1 = "Absenden";
    error3 = "Titel ist erforderlich";
    error4 = "Kurzbeschreibung ist erforderlich";
    error5 = "Video ist erforderlich";
    error6 = "Code ist erforderlich";
    error7 = "Kontext ist erforderlich";
    error8 = "Verantwortliche Parteien sind erforderlich";
    error9 = "Gesamtzahl der Teilnehmer ist erforderlich";
    error10 = "Herkunftsland ist erforderlich";
    error11 = "Gesprochene Sprache ist erforderlich";
    error12 = "Dauer ist erforderlich";
    error13 = "Datum ist erforderlich";
}

  return {
    title1,
    title2,
    placeholderSearch,
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
    placeholder11,
    successToast,
    button1,
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
    error11,
    error12,
    error13,
  };
}

export function TranslateToastError(globalLanguage, errorCode) {
  if (errorCode === 500) {
    if (globalLanguage === "PT") {
      return "Erro ao realizar o cadastro. Tente novamente!";
    }
    if (globalLanguage === "EN") {
      return "Error when registering. Try again!";
    }
    if (globalLanguage === "ES") {
      return "Error al registrarse. ¡Intentar otra vez!";
    }
  }
  if (errorCode === 409) {
    if (globalLanguage === "PT") {
      return "Usuário já cadastrado!";
    }
    if (globalLanguage === "EN") {
      return "User already registered!";
    }
    if (globalLanguage === "ES") {
      return "Usuario ya registrado!";
    }
  }
}
