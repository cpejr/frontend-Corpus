import { z } from "zod";

export const validationSchema = () => {
  return z.object({
    ManualTranscriptionArchive: z
      .any()
      .refine((file) => file instanceof File, "Insira um arquivo válido")
      .optional(), // ou .nonempty() se quiser obrigatório
  });
};
