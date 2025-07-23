import { z } from "zod";

// Form Validation
export const validationSchema = () => {
  return z.object({
    //ManualTranscriptionArchive: z.string({ required_error: "insira um video" }),
  });
};
