import { z } from 'zod';
import { useGlobalLanguage } from '../../../../stores/globalLanguage';
import { TranslateText } from './translations';

export const validationSchema  = () => {
  // Translations
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { globalLanguage } = useGlobalLanguage();
  const translation = TranslateText(globalLanguage);
  
  return z.object({
    email: z
      .string({ required_error: translation.emailStringError })
      .min(1, translation.emailMinError)
      .email(translation.emailError),
    });
}