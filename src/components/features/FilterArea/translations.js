export function TranslateText({ globalLanguage }) {
  let totalParticipantsPlaceholder;
  let countryPlaceholder;
  let languagePlaceholder;
  let durationPlaceholder;
  let calendarPlaceholder;

 
  if (globalLanguage === "EN") {
    totalParticipantsPlaceholder = "Total Participants";
    countryPlaceholder = "Nacionality";
    languagePlaceholder = "Language";
    durationPlaceholder = "Duration Time";
    calendarPlaceholder = "Date of Interaction";
  }
  if (globalLanguage === "ES") {
    totalParticipantsPlaceholder = "Total de Participantes";
    countryPlaceholder = "Nacionalidad";
    languagePlaceholder = "Idioma";
    durationPlaceholder = "Tiempo de Duración";
    calendarPlaceholder = "Fecha de Interacción";
  }

   if (globalLanguage === "PT") {
    totalParticipantsPlaceholder = "Total de Participantes";
    countryPlaceholder = "Nacionalidade";
    languagePlaceholder = "Idioma";
    durationPlaceholder = "Tempo de Duração";
    calendarPlaceholder = "Data da Interação";
  }
  if (globalLanguage === "GE") {
    totalParticipantsPlaceholder = "Gesamtzahl der Teilnehmer";
    countryPlaceholder = "Nationalität";
    languagePlaceholder = "Sprache";
    durationPlaceholder = "Dauer";
    calendarPlaceholder = "Datum der Interaktion";
  }
  return {
    totalParticipantsPlaceholder,
    countryPlaceholder,
    languagePlaceholder,
    durationPlaceholder,
    calendarPlaceholder,
  };
}
