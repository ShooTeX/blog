import { z } from "astro/zod";
import { defineAction } from "astro:actions";

export const server = {
  submitEmail: defineAction({
    accept: "form",
    input: z.object({
      email: z.string().email(),
    }),
    handler: (input) => {
      console.log(input);
      return { success: true };
    }
  })
};
