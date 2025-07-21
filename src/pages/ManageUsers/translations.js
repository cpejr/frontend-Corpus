export function TranslateText({ globalLanguage }) {
  let title1;
  let placeholderSearch;
  let typeAdm;
  let typeInvited;
  let typeExt;
  let tableHeaderName;
  let tableHeaderEmail;
  let tableHeaderType;
  let toastOnSuccessDelete;
  let toastOnErroDelete;
  let toastOnSuccessChange;
  let toastOnErroChange;

  if (globalLanguage === "PT") {
    title1 = "gerenciar usuários";
    placeholderSearch = "Pesquisar usuário";
    typeAdm = "Administrador";
    typeInvited = "Convidado";
    typeExt = "Externo";
    tableHeaderName = "Nome";
    tableHeaderEmail = "Email";
    tableHeaderType = "Tipo";
    toastOnSuccessDelete = "Usuário deletado com sucesso";
    toastOnErroDelete = "Erro ao deletar usuário";
    toastOnSuccessChange = "Tipo do usuário alterado com sucesso";
    toastOnErroChange = "Erro ao alterar o tipo do usuário";
  }
  if (globalLanguage === "EN") {
    title1 = "manage users";
    placeholderSearch = "Search user";
    typeAdm = "Admin";
    typeInvited = "Invited";
    typeExt = "External";
    tableHeaderName = "Name";
    tableHeaderEmail = "Email";
    tableHeaderType = "Type";
    toastOnSuccessDelete = "User successfully deleted";
    toastOnErroDelete = "Error deleting user";
    toastOnSuccessChange = "User type changed successfully";
    toastOnErroChange = "Error changing user type";
  }
  if (globalLanguage === "ES") {
    title1 = "administrar usuarios";
    placeholderSearch = "Buscar usuario";
    typeAdm = "Administrador";
    typeInvited = "Invitado";
    typeExt = "Externo";
    tableHeaderName = "Nombre";
    tableHeaderEmail = "Email";
    tableHeaderType = "Tipo";
    toastOnSuccessDelete = "Usuario eliminado exitosamente";
    toastOnErroDelete = "Error al eliminar usuario";
    toastOnSuccessChange = "El tipo de usuario se cambió correctamente";
    toastOnErroChange = "Error al cambiar el tipo de usuario";
  }
  if (globalLanguage === "GE") {
    title1 = "Benutzer verwalten";
    placeholderSearch = "Benutzer suchen";
    typeAdm = "Administrator";
    typeInvited = "Eingeladen";
    typeExt = "Extern";
    tableHeaderName = "Name";
    tableHeaderEmail = "E-Mail";
    tableHeaderType = "Typ";
    toastOnSuccessDelete = "Benutzer erfolgreich gelöscht";
    toastOnErroDelete = "Fehler beim Löschen des Benutzers";
    toastOnSuccessChange = "Benutzertyp erfolgreich geändert";
    toastOnErroChange = "Fehler beim Ändern des Benutzertyps";
}

  return {
    title1,
    placeholderSearch,
    typeAdm,
    typeInvited,
    typeExt,
    tableHeaderName,
    tableHeaderEmail,
    tableHeaderType,
    toastOnSuccessDelete,
    toastOnErroDelete,
    toastOnSuccessChange,
    toastOnErroChange,
  };
}
