import { createFileRoute, Link, useServerFn } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { z } from "zod";
import { submitContact } from "@/lib/contact.functions";
import { SiteFooter } from "@/components/SiteFooter";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const Schema = z.object({
  name: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(255),
  message: z.string().trim().min(1).max(2000),
});

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Quattro Studio" },
      { name: "description", content: "Have a project in mind? Send a note and I'll reply within two working days." },
      { property: "og:title", content: "Contact — Quattro Studio" },
      { property: "og:description", content: "Have a project in mind? Send a note and I'll reply within two working days." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const send = useServerFn(submitContact);
  const [pending, setPending] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const parsed = Schema.safeParse({
      name: form.get("name"),
      email: form.get("email"),
      message: form.get("message"),
    });
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Invalid input");
      return;
    }
    setPending(true);
    try {
      await send({ data: parsed.data });
      toast.success("Message sent. I'll be in touch.");
      e.currentTarget.reset();
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setPending(false);
    }
  };

  return (
    <>
      <main className="min-h-screen bg-background text-foreground">
        <div className="mx-auto max-w-3xl px-6 pb-24 pt-32">
          <Link to="/" className="text-sm text-muted-foreground hover:text-foreground" data-magnetic>
            ← Back
          </Link>

          <p className="mt-16 text-xs uppercase tracking-[0.24em] text-muted-foreground">
            Contact — 2026
          </p>
          <h1 className="mt-4 text-5xl font-semibold leading-[0.95] tracking-tight sm:text-7xl">
            Let's build <span className="text-primary">something worth shipping.</span>
          </h1>
          <p className="mt-6 max-w-xl text-muted-foreground">
            Tell me about the project, the deadline, and what "done" looks like. I read every note myself and reply within two working days.
          </p>

          <form onSubmit={onSubmit} className="mt-14 space-y-6">
            <div className="grid gap-6 sm:grid-cols-2">
              <label className="block">
                <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Name</span>
                <Input name="name" required maxLength={100} className="mt-2 h-12 border-border bg-background" />
              </label>
              <label className="block">
                <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Email</span>
                <Input name="email" type="email" required maxLength={255} className="mt-2 h-12 border-border bg-background" />
              </label>
            </div>
            <label className="block">
              <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Project</span>
              <Textarea name="message" required maxLength={2000} rows={7} className="mt-2 border-border bg-background" />
            </label>
            <Button
              type="submit"
              disabled={pending}
              data-magnetic
              className="h-12 rounded-full bg-primary px-8 text-primary-foreground hover:bg-primary/90"
            >
              {pending ? "Sending…" : "Send message →"}
            </Button>
          </form>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
