export function TranslateText( globalLanguage ) {
    let title;
    let text;
    let button;
    let loading;
    let successToast;

    // validatorsTexts
    let emailStringError;
    let emailMinError;
    let emailError;
  
    if (globalLanguage === "PT") {
        title = "Confirmação do Email";
        text = "Digite o e-mail o qual quer recuperar a senha:";
        button = "Enviar";
        loading = "Enviando email...";
        successToast = "E-mail de recuperação enviado com sucesso!";

        emailStringError = "A email é obrigatório";
        emailMinError = "Favor digitar o email!";
        emailError = "Insira um email no formato email@email.com";
    }
    if (globalLanguage === "EN") {
        title = "Email Confirmation";
        text = "Enter the email you want to recover your password:";
        button = "Send";
        loading = "Sending email...";
        successToast = "Recovery email sent successfully!";

        emailStringError = "Email is mandatory";
        emailMinError = "Enter an email!";
        emailError = "The email must be valid!";
    }
    if (globalLanguage === "ES") {
        title = "Confirmación por correo electrónico";
        text = "Ingresa el correo electrónico donde deseas recuperar tu contraseña:";
        button = "Enviar";
        loading = "Enviando correo electrónico...";
        successToast = "¡El correo electrónico de recuperación se envió correctamente!";

        emailStringError = "El correo electrónico es obligatorio.";
        emailMinError = "¡Ingresa un correo electrónico!";
        emailError = "¡El correo electrónico debe ser válido!";
    }
    if (globalLanguage === "GE") {
        title = "E-Mail-Bestätigung";
        text = "Geben Sie die E-Mail-Adresse ein, mit der Sie Ihr Passwort wiederherstellen möchten:";
        button = "Senden";
        loading = "E-Mail wird gesendet...";
        successToast = "Wiederherstellungs-E-Mail erfolgreich gesendet!";
    
        emailStringError = "E-Mail ist erforderlich.";
        emailMinError = "Bitte geben Sie eine E-Mail-Adresse ein!";
        emailError = "Geben Sie eine gültige E-Mail-Adresse im Format email@email.com ein.";
    }
    return {
        title,
        text,
        button,
        loading,
        successToast,
        emailStringError,
        emailMinError,
        emailError,
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