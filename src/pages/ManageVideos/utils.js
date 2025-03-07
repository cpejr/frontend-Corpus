import { z } from "zod";
import { TranslateText } from "./translations";
import { useGlobalLanguage } from "../../stores/globalLanguage";

// Form Validation
export const validationSchema = () => {
  // Translations
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { globalLanguage } = useGlobalLanguage();
  const translation = TranslateText(globalLanguage);

  return z.object({
    title: z
      .string({ required_error: translation.error3 })
      .min(1, { message: translation.error3 }),
    ShortDescription: z
      .string({ required_error: translation.error4 })
      .min(1, { message: translation.error4 }),
    videoFile: z
      .string({ required_error: translation.error5 })
      .min(1, { message: translation.error5 }),
    code: z
      .string({ required_error: translation.error6 })
      .min(1, { message: translation.error6 }),
    context: z
      .string({ required_error: translation.error7 })
      .min(1, { message: translation.error7 }),
    responsibles: z
      .string({ required_error: translation.error8 })
      .min(1, { message: translation.error8 }),
    totalParticipants: z
      .string({ required_error: translation.error9 })
      .min(1, { message: translation.error9 }),
    country: z
      .string({ required_error: translation.error10 })
      .min(1, { message: translation.error10 }),
    language: z
      .string({ required_error: translation.error11 })
      .min(1, { message: translation.error11 }),
    duration: z
      .string({ required_error: translation.error12 })
      .min(1, { message: translation.error12 }),
    date: z
      .string({ required_error: translation.error13 })
      .min(1, { message: translation.error13 }),
  });
};
