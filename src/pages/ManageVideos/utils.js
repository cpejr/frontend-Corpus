import { z } from "zod";
import { TranslateText } from "./translations";
import { useGlobalLanguage } from "../../stores/globalLanguage";

// Form Validation
export const validationSchema = () => {
  // Translations
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { globalLanguage } = useGlobalLanguage();
  const translation = TranslateText(globalLanguage);
  const MAX_FILE_SIZE = 2000 * 1024 * 1024;
  const ACCEPTED_VIDEO_TYPES = ["video/mp4"];
  return z.object({
    title: z
      .string({ required_error: translation.error3 })
      .min(1, { message: translation.error3 }),
    ShortDescription: z
      .string({ required_error: translation.error4 })
      .min(1, { message: translation.error4 }),
    videoFile: z
      .any()
      .refine((file) => file, { message: translation.error5 })
      .refine((file) => file.size <= MAX_FILE_SIZE, {
        message: `O arquivo não pode ser maior que 2GB.`,
      }),
    // .refine((file) => ACCEPTED_VIDEO_TYPES.includes(file?.[0]?.type), {
    //   message:
    //     "Tipo de arquivo inválido. Apenas MP4, WebM e OGG são permitidos.",
    // }),
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

    birthday: z.date({ required_error: translation.error13 }),
  });
};
