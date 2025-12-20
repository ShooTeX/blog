import { z } from "astro/zod";
import { defineAction } from "astro:actions";
import { drizzle } from "drizzle-orm/d1";

import { subscriberTable } from "../db/schema";

export const server = {
  submitEmail: defineAction({
    accept: "form",
    handler: async (input, ctx) => {
      const db = drizzle(ctx.locals.runtime.env.DB);

      await db.insert(subscriberTable).values({ email: input.email });

      // Founder mode

      return { success: true };
    },
    input: z.object({
      email: z.string().email(),
    }),
  }),
};
