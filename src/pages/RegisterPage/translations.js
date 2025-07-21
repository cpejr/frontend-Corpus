export function TranslateText( globalLanguage ) {
    let name;
    let birthday;
    let phone;
    let password;
    let acceptTerms;
    let toastCreate;
    let toastLogin;
    let titleLogin;
    let forgotPassword;
    let here;
    let titleRegister;
    let buttonLogin;
    let buttonRegister;

    // validatorsTexts
    let nameStringError;
    let nameMinError;
    let nameMaxError;
    let birthdayStringError;
    let birthdayCorrectDateError;
    let birthdayValidDateError;
    let emailStringError;
    let emailMinError;
    let emailError;
    let passwordStringError;
    let passwordMinError;
    let passwordMaxError;
    let phoneStringError;
    let phoneError;
    let acceptTermsError;
    let emailStringLoginError;
    let emailMinLoginError;
    let emailLoginError;
    let passwordStringLoginError;
    let passwordMinLoginError;
  
    if (globalLanguage === "PT") {
        name = "Nome";
        birthday = "Data de nascimento";
        phone = "Telefone (Ex: 55XX9XXXXXXXX)";
        password = "Senha";
        acceptTerms = "Concordo com as politícas de privacidade";
        toastCreate = "Usuário cadastrado com sucesso!";
        toastLogin = "Login realizado com sucesso!";
        titleLogin = "Já possui cadastro? Se sim, faça seu login:";
        forgotPassword = "Esqueceu a senha? Recupere";
        here = "aqui";
        titleRegister = "Se não, faça ele agora:";
        buttonLogin = "Fazer Login";
        buttonRegister = "Fazer Cadastro";

        nameStringError = "O nome é obrigatório";
        nameMinError = "O nome deve ter pelo menos 2 caracteres";
        nameMaxError = "O nome não pode exceder 60 caracteres";
        birthdayStringError = "A data de nascimento é obrigatória";
        birthdayCorrectDateError = "Selecione uma data de nascimento";
        birthdayValidDateError = "Data de nascimento inválida";
        emailStringError = "A email é obrigatório";
        emailMinError = "Insira um e-mail!";
        emailError = "O email deve ser válido!";
        passwordStringError = "A senha é obrigatória";
        passwordMinError = "Senha do usuário precisa ter pelo menos 4 caracteres!";
        passwordMaxError = "Senha do usuário não pode ultrapassar 16 caracteres!";
        phoneStringError = "O telefone é obrigatório";
        phoneError = "Coloque um número de telefone válido";
        acceptTermsError = "Você deve aceitar os termos e condições";
        emailStringLoginError = "Insira um e-mail!";
        emailMinLoginError = "Preencha o campo e-mail!";
        emailLoginError = "Insira um email válido!";
        passwordStringLoginError = "Insira uma senha!";
        passwordMinLoginError = "Preencha o campo senha!";
    }
    if (globalLanguage === "EN") {
        name = "Name";
        birthday = "Birthday";
        phone = "Telephone (Ex: 55XX9XXXXXXXX)";
        password = "Password";
        acceptTerms = "I agree with the privacy policies";
        toastCreate = "User registered successfully!";
        toastLogin = "Login successfully!";
        titleLogin = "Already have a registration? If yes, log in:";
        forgotPassword = "Forgot your password? Recover";
        here = "here";
        titleRegister = "If not, do it now:";
        buttonLogin = "Login";
        buttonRegister = "Register";

        nameStringError = "Name is required";
        nameMinError = "Name must be at least 2 characters long";
        nameMaxError = "Name cannot exceed 60 characters";
        birthdayStringError = "Date of birth is required";
        birthdayCorrectDateError = "Select a date of birth";
        birthdayValidDateError = "Invalid date of birth";
        emailStringError = "Email is required";
        emailMinError = "Enter an email!";
        emailError = "The email must be valid!";
        passwordStringError = "Password is required";
        passwordMinError = "Password must be at least 4 characters long!";
        passwordMaxError = "Password cannot exceed 16 characters!";
        phoneStringError = "Phone number is required";
        phoneError = "Enter a valid phone number";
        acceptTermsError = "You must accept the terms and conditions";
        emailStringLoginError = "Enter an email!";
        emailMinLoginError = "Fill in the email field!";
        emailLoginError = "Enter a valid email!";
        passwordStringLoginError = "Enter a password!";
        passwordMinLoginError = "Fill in the password field!";
    }
    if (globalLanguage === "ES") {
        name = "Nombre";
        birthday = "Fecha de nacimiento";
        phone = "Teléfono (Ej: 55XX9XXXXXXXXX)";
        password = "Contraseña";
        acceptTerms = "Estoy de acuerdo con las políticas de privacidad";
        toastCreate = "Usuario registrado exitosamente!";
        toastLogin = "¡Inicia sesión exitosamente!";
        titleLogin = "¿Ya tienes un registro? En caso afirmativo, inicie sesión:";
        forgotPassword = "¿Olvidaste tu contraseña? Recuperar";
        here = "aquí";
        titleRegister = "Si no, hazlo ahora:";
        buttonLogin = "Acceso";
        buttonRegister = "Registro";

        nameStringError = "El nombre es obligatorio";
        nameMinError = "El nombre debe tener al menos 2 caracteres";
        nameMaxError = "El nombre no puede exceder los 60 caracteres";
        birthdayStringError = "La fecha de nacimiento es obligatoria";
        birthdayCorrectDateError = "Selecciona una fecha de nacimiento";
        birthdayValidDateError = "Fecha de nacimiento inválida";
        emailStringError = "El correo electrónico es obligatorio";
        emailMinError = "¡Introduce un correo electrónico!";
        emailError = "¡El correo electrónico debe ser válido!";
        passwordStringError = "La contraseña es obligatoria";
        passwordMinError = "¡La contraseña debe tener al menos 4 caracteres!";
        passwordMaxError = "¡La contraseña no puede superar los 16 caracteres!";
        phoneStringError = "El teléfono es obligatorio";
        phoneError = "Introduce un número de teléfono válido";
        acceptTermsError = "Debes aceptar los términos y condiciones";
        emailStringLoginError = "¡Introduce un correo electrónico!";
        emailMinLoginError = "¡Rellena el campo de correo electrónico!";
        emailLoginError = "¡Introduce un correo electrónico válido!";
        passwordStringLoginError = "¡Introduce una contraseña!";
        passwordMinLoginError = "¡Rellena el campo de la contraseña!";
    }
    if (globalLanguage === "GE") {
        name = "Name";
        birthday = "Geburtstag";
        phone = "Telefon (Bsp: 55XX9XXXXXXXX)";
        password = "Passwort";
        acceptTerms = "Ich stimme den Datenschutzrichtlinien zu";
        toastCreate = "Benutzer erfolgreich registriert!";
        toastLogin = "Erfolgreich eingeloggt!";
        titleLogin = "Hast du bereits ein Konto? Wenn ja, logge dich ein:";
        forgotPassword = "Passwort vergessen? Wiederherstellen";
        here = "hier";
        titleRegister = "Wenn nicht, erstelle es jetzt:";
        buttonLogin = "Login";
        buttonRegister = "Registrieren";
    
        nameStringError = "Name ist erforderlich";
        nameMinError = "Der Name muss mindestens 2 Zeichen lang sein";
        nameMaxError = "Der Name darf 60 Zeichen nicht überschreiten";
        birthdayStringError = "Geburtsdatum ist erforderlich";
        birthdayCorrectDateError = "Wählen Sie ein Geburtsdatum";
        birthdayValidDateError = "Ungültiges Geburtsdatum";
        emailStringError = "E-Mail ist erforderlich";
        emailMinError = "Geben Sie eine E-Mail-Adresse ein!";
        emailError = "Die E-Mail muss gültig sein!";
        passwordStringError = "Passwort ist erforderlich";
        passwordMinError = "Das Passwort muss mindestens 4 Zeichen lang sein!";
        passwordMaxError = "Das Passwort darf 16 Zeichen nicht überschreiten!";
        phoneStringError = "Telefonnummer ist erforderlich";
        phoneError = "Geben Sie eine gültige Telefonnummer ein";
        acceptTermsError = "Sie müssen den Nutzungsbedingungen zustimmen";
        emailStringLoginError = "Geben Sie eine E-Mail-Adresse ein!";
        emailMinLoginError = "Füllen Sie das E-Mail-Feld aus!";
        emailLoginError = "Geben Sie eine gültige E-Mail-Adresse ein!";
        passwordStringLoginError = "Geben Sie ein Passwort ein!";
        passwordMinLoginError = "Füllen Sie das Passwort-Feld aus!";
    }
    
    return {
        name,
        birthday,
        phone,
        password,
        acceptTerms,
        toastCreate,
        toastLogin,
        titleLogin,
        forgotPassword,
        here,
        titleRegister,
        buttonLogin,
        buttonRegister,
        nameStringError,
        nameMinError,
        nameMaxError,
        birthdayStringError,
        birthdayCorrectDateError,
        birthdayValidDateError,
        emailStringError,
        emailMinError,
        emailError,
        passwordStringError,
        passwordMinError,
        passwordMaxError,
        phoneStringError,
        phoneError,
        acceptTermsError,
        emailStringLoginError,
        emailMinLoginError,
        emailLoginError,
        passwordStringLoginError,
        passwordMinLoginError,
    };
}

export function TranslateLoginToastError ( globalLanguage, errorCode ){
    if (errorCode === 404){
        if (globalLanguage === "PT"){
            return "Usuário não existe. Realize o cadastro!";
        }
        if (globalLanguage === "EN"){
            return "User does not exist. Register!";
        }
        if (globalLanguage === "ES"){
            return "El usuario no existe. ¡Registro!";
        }
    }
    if (errorCode === 401){
        if (globalLanguage === "PT"){
            return "E-mail ou senha incorreto";
        }
        if (globalLanguage === "EN"){
            return "Incorrect email or password";
        }
        if (globalLanguage === "ES"){
            return "Correo electrónico o contraseña incorrectos";
        }
    }
    if (errorCode === 500){
        if (globalLanguage === "PT"){
            return "Erro ao realizar o login. Tente novamente!";
        }
        if (globalLanguage === "EN"){
            return "Error when logging in. Try again!";
        }
        if (globalLanguage === "ES"){
            return "Error al iniciar sesión. ¡Intentar otra vez!";
        }
    }
}

export function TranslateRegisterToastError ( globalLanguage, errorCode ){
    if (errorCode === 500){
        if (globalLanguage === "PT"){
            return "Erro ao realizar o cadastro. Tente novamente!";
        }
        if (globalLanguage === "EN"){
            return "Error when registering. Try again!";
        }
        if (globalLanguage === "ES"){
            return "Error al registrarse. ¡Intentar otra vez!";
        }
    }
    if (errorCode === 409){
        if (globalLanguage === "PT"){
            return "Usuário já cadastrado!";
        }
        if (globalLanguage === "EN"){
            return "User already registered!";
        }
        if (globalLanguage === "ES"){
            return "Usuario ya registrado!";
        }
    }
}