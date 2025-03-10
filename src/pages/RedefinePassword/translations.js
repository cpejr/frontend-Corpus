export function TranslateText( globalLanguage ) {
    let title;
    let text;
    let button;
    let successToast;
    let newPassword;
    let confirmationPassword;

    // validatorsTexts
    let passwordStringError;
    let passwordMinError;
    let passwordMaxError;
    let confirmationError;
    let differentPasswords;
  
    if (globalLanguage === "PT") {
        title = "Recuperação de Senha";
        text = "Escolha uma nova senha";
        button = "Salvar";
        successToast = "Senha alterada com sucesso!";
        newPassword = "Nova Senha";
        confirmationPassword = "Confirmação da Nova Senha";

        passwordStringError = "A senha é obrigatória";
        passwordMinError = "A senha não pode ter menos de 6 caracteres";
        passwordMaxError = "A senha não pode ter mais de 16 caracteres";
        confirmationError = "Confirme sua senha"
        differentPasswords = "Senhas não coincidem";
    }
    if (globalLanguage === "EN") {
        title = "Password Recovery";
        text = "Choose a new password";
        button = "Save";
        successToast = "Password changed successfully!";
        newPassword = "New Password";
        confirmationPassword = "Confirm New Password";

        passwordStringError = "Password is required";
        passwordMinError = "Password must be at least 6 characters long";
        passwordMaxError = "Password cannot exceed 16 characters";
        confirmationError = "Confirm your password";
        differentPasswords = "Passwords do not match";
    }
    if (globalLanguage === "ES") {
        title = "Recuperación de Contraseña";
        text = "Elige una nueva contraseña";
        button = "Guardar";
        successToast = "¡Contraseña cambiada con éxito!";
        newPassword = "Nueva Contraseña";
        confirmationPassword = "Confirmación de la Nueva Contraseña";

        passwordStringError = "La contraseña es obligatoria";
        passwordMinError = "La contraseña debe tener al menos 6 caracteres";
        passwordMaxError = "La contraseña no puede tener más de 16 caracteres";
        confirmationError = "Confirma tu contraseña";
        differentPasswords = "Las contraseñas no coinciden";
    }
    if (globalLanguage === "GE") {
        title = "Passwortwiederherstellung";
        text = "Wählen Sie ein neues Passwort";
        button = "Speichern";
        successToast = "Passwort erfolgreich geändert!";
        newPassword = "Neues Passwort";
        confirmationPassword = "Bestätigung des neuen Passworts";
    
        passwordStringError = "Passwort ist erforderlich";
        passwordMinError = "Das Passwort muss mindestens 6 Zeichen lang sein";
        passwordMaxError = "Das Passwort darf nicht länger als 16 Zeichen sein";
        confirmationError = "Bestätigen Sie Ihr Passwort";
        differentPasswords = "Passwörter stimmen nicht überein";
    }
    
    return {
        title,
        text,
        button,
        successToast,
        newPassword,
        confirmationPassword,
        passwordMaxError,
        passwordMinError,
        passwordStringError,
        confirmationError,
        differentPasswords,
    };
}

export function TranslateToastError ( globalLanguage, errorCode ){
    if (errorCode === 404){
        if (globalLanguage === "PT"){
            return "Usuário não encontrado no banco de dados";
        }
        if (globalLanguage === "EN"){
            return "User not found in database";
        }
        if (globalLanguage === "ES"){
            return "Usuario no encontrado en la base de datos";
        }
    }
    if (errorCode === 403){
        if (globalLanguage === "PT"){
            return "Link expirado ou inválido";
        }
        if (globalLanguage === "EN"){
            return "Expired or invalid link";
        }
        if (globalLanguage === "ES"){
            return "Enlace caducado o no válido";
        }
    }
    if (errorCode === 500){
        if (globalLanguage === "PT"){
            return "Erro ao realizar a redefinição de senha. Tente novamente mais tarde!";
        }
        if (globalLanguage === "EN"){
            return "Error performing password reset. Try again later!";
        }
        if (globalLanguage === "ES"){
            return "Error al restablecer la contraseña. ¡Inténtalo de nuevo más tarde!";
        }
    }
}