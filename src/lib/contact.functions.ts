import { createServerFn } from "@tanstack/react-start";
import { createClient } from "@supabase/supabase-js";
import { z } from "zod";
import type { Database } from "@/integrations/supabase/types";

const ContactSchema = z.object({
  name: z.string().trim().min(1, "Please enter your name").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  message: z.string().trim().min(1, "Please write a message").max(2000),
});

export const submitContact = createServerFn({ method: "POST" })
  .inputValidator((data) => ContactSchema.parse(data))
  .handler(async ({ data }) => {
    const url = process.env.SUPABASE_URL!;
    const key = process.env.SUPABASE_PUBLISHABLE_KEY!;
    const supabase = createClient<Database>(url, key, {
      auth: {
        storage: undefined,
        persistSession: false,
        autoRefreshToken: false,
      },
    });

    const { error } = await supabase
      .from("contact_messages" as never)
      .insert(data as never);

    if (error) {
      console.error("[contact] insert failed", error);
      throw new Error("Could not send message. Please try again.");
    }

    return { ok: true };
  });
