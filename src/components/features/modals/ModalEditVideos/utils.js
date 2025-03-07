import { z } from 'zod';
import { useGlobalLanguage } from '../../../../stores/globalLanguage';
import { TranslateText } from './translations';

export const validationSchema  = () => {
  // Translations
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { globalLanguage } = useGlobalLanguage();
  const translation = TranslateText(globalLanguage);
  
  return z.object({
    title: z.string({ required_error: translation.error1 }).min(1, { message: translation.error1 }).optional,
    description: z.string({ required_error: translation.error2 }).min(1, { message: translation.error2 }).optional,
    context: z.string({ required_error: translation.error3 }).min(1, { message: translation.error3 }).optional,
    responsible: z.string({ required_error: translation.error4 }).min(1, { message: translation.error4 }).optional,
    totalParticipants: z.string({ required_error: translation.error5 }).min(1, { message: translation.error5 }).optional,
    country: z.string({ required_error: translation.error6 }).min(1, { message: translation.error6 }).optional,
    language: z.string({ required_error: translation.error7 }).min(1, { message: translation.error7 }).optional,
    duration: z.string({ required_error: translation.erro8 }).min(1, { message: translation.error8 }).optional,
    date: z.string({ required_error: translation.error9 }).min(1, { message: translation.error9 }).optional,
    transcription: z.string({ required_error: translation.error10 }).min(1, { message: translation.error10 }).optional,
});

}