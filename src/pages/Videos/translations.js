export function TranslateText({ globalLanguage }) {
  let title;
  let placeholder;
  let calendar;
  let buttonCard;

  if (globalLanguage === "PT") {
    title = "Vídeos";
    placeholder = "Pesquisar";
    calendar = "Filtrar por data";
    buttonCard = "Assistir";
  }
  if (globalLanguage === "EN") {
    title = "Videos";
    placeholder = "Search";
    calendar = "Filter by date";
    buttonCard = "Watch";
  }
  if (globalLanguage === "ES") {
    title = "Vídeos";
    placeholder = "Buscar";
    calendar = "Filtrar por fecha";
    buttonCard = "Asistir";
  }
  if (globalLanguage === "GE") {
    title = "Videos";
    placeholder = "Suchen";
    calendar = "Nach Datum filtern";
    buttonCard = "Ansehen";
}
  return {
    title,
    placeholder,
    calendar,
    buttonCard,
  };
}
