import { z } from "zod";

export const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email"),
  file: z.any().refine((file) => file instanceof File && file.size > 0, {
    message: "File is required",
  }),
});

export type FormSchemaType = z.infer<typeof formSchema>;
