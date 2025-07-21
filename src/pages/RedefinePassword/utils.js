import { z } from 'zod';
import { useGlobalLanguage } from '../../stores/globalLanguage';
import { TranslateText } from './translations';

export const validationSchema  = () => {
  // Translations
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { globalLanguage } = useGlobalLanguage();
  const translation = TranslateText(globalLanguage);
  
  return z.object({
      newPassword: z
        .string({ required_error: translation.passwordStringError })
        .min(6, translation.passwordMinError)
        .max(16, translation.passwordMaxError),

      confirmation: z.string({ required_error: translation.passwordStringError }).min(1, translation.confirmationError),
    })
    .refine((data) => data.newPassword === data.confirmation, {
      path: ['confirmation'],
      message: translation.differentPasswords,
    });
}