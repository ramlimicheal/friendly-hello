import { useEffect, useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { toast } from "sonner";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { caseStudies } from "@/content/case-studies";

const EMAIL = "hiremike.lee@gmail.com";

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.key === "k" || e.key === "K") && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((o) => !o);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const go = (fn: () => void) => {
    setOpen(false);
    fn();
  };

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput placeholder="Jump to a page or action…  (⌘K)" />
      <CommandList>
        <CommandEmpty>No results.</CommandEmpty>
        <CommandGroup heading="Navigate">
          <CommandItem onSelect={() => go(() => navigate({ to: "/" }))}>Home</CommandItem>
          <CommandItem onSelect={() => go(() => navigate({ to: "/work" }))}>Work</CommandItem>
          
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Case studies">
          {caseStudies.map((c) => (
            <CommandItem
              key={c.slug}
              onSelect={() =>
                go(() =>
                  navigate({ to: "/work/$slug", params: { slug: c.slug } }),
                )
              }
            >
              <span className="mr-3 text-xs text-muted-foreground">{c.index}</span>
              {c.title}
            </CommandItem>
          ))}
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Actions">
          <CommandItem
            onSelect={() =>
              go(() => {
                navigator.clipboard.writeText(EMAIL).then(() => {
                  toast.success("Email copied", { description: EMAIL });
                });
              })
            }
          >
            Copy email — {EMAIL}
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
}
