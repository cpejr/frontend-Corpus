export function TranslateText({ globalLanguage }) {
  let logoutButton;

  if (globalLanguage === "PT") {
    logoutButton = "Sair";
  }
  if (globalLanguage === "EN") {
    logoutButton = "Logout";
  }
  if (globalLanguage === "ES") {
    logoutButton = "Salir";
  }
  if (globalLanguage === "GE") {
    logoutButton = "Abmelden";
  }
  return {
    logoutButton,
  };
}
