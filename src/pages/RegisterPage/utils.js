import { z } from "zod";
import { useGlobalLanguage } from "../../stores/globalLanguage";
import { TranslateText } from "./translations";

// Regex para validar o formato DD/MM/YYYY
//const dateRegex = /^\d{2}\/\d{2}\/\d{4}$/;

// Função para verificar se a data é válida
// const isValidDate = (dateString) => {
//   const [day, month, year] = dateString.split("/").map(Number);
//   const date = new Date(year, month - 1, day);
//   return (
//     date.getFullYear() === year &&
//     date.getMonth() === month - 1 &&
//     date.getDate() === day
//   );
// };

export const validationSchemaRegister = () => {
  // Translations
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { globalLanguage } = useGlobalLanguage();
  const translation = TranslateText(globalLanguage);

  return z.object({
    name: z
      .string({ required_error: translation.nameStringError })
      .min(2, { message: translation.nameMinError })
      .max(60, { message: translation.nameMaxError }),

    birthday: z.date({ required_error: translation.birthdayStringError }),
    // .refine((value) => dateRegex.test(value), {
    //   message: translation.birthdayCorrectDateError,
    // })
    // .refine(isValidDate, {
    //   message: translation.birthdayValidDateError,
    // })
    email: z
      .string({ required_error: translation.emailStringError })
      .min(1, translation.emailMinError)
      .email(translation.emailError),

    password: z
      .string({ required_error: translation.passwordStringError })
      .min(4, {
        message: translation.passwordMinError,
      })
      .max(16, {
        message: translation.passwordMaxError,
      }),

    phone: z
      .string({ required_error: translation.phoneStringError })
      .min(13, { message: translation.phoneError })
      .max(13, { message: translation.phoneError }),

    acceptTerms: z
      .boolean()
      .refine((val) => val === true, { message: translation.acceptTermsError }),
  });
};

export const validationSchemaLogin = () => {
  // Translations
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { globalLanguage } = useGlobalLanguage();
  const translation = TranslateText(globalLanguage);

  return z.object({
    email: z
      .string({ required_error: translation.emailStringLoginError })
      .min(1, { message: translation.emailMinLoginError })
      .email(translation.emailLoginError),

    password: z
      .string({ required_error: translation.passwordStringLoginError })
      .min(1, { message: translation.passwordMinLoginError }),
  });
};
