import { useState, type ReactNode } from "react";
import { CheckCircle2 } from "lucide-react";
import { GENRES } from "@/content/site";
import { cn } from "@/lib/utils";

type Field = {
  name: string;
  label: string;
  type?: "text" | "email" | "url" | "textarea" | "select";
  required?: boolean;
  options?: readonly string[];
  placeholder?: string;
  full?: boolean;
};

const inputClass =
  "mt-2 w-full min-h-12 rounded-sm border border-input bg-card px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary";

export function LeadForm({
  fields,
  submitLabel,
  confirmation,
  note,
}: {
  fields: Field[];
  submitLabel: string;
  confirmation: { title: string; body: string };
  note?: ReactNode;
}) {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div className="border border-gold/40 bg-card p-10 text-center shadow-editorial">
        <CheckCircle2 className="mx-auto h-10 w-10 text-gold" />
        <h3 className="display-3 mt-6 text-foreground">{confirmation.title}</h3>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
          {confirmation.body}
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
      className="border border-border bg-card p-6 shadow-editorial sm:p-10"
    >
      <div className="grid gap-6 sm:grid-cols-2">
        {fields.map((f) => (
          <div key={f.name} className={cn(f.full || f.type === "textarea" ? "sm:col-span-2" : "")}>
            <label htmlFor={f.name} className="text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
              {f.label}
              {f.required ? <span className="ml-1 text-primary">*</span> : null}
            </label>
            {f.type === "textarea" ? (
              <textarea
                id={f.name}
                name={f.name}
                rows={4}
                required={f.required}
                placeholder={f.placeholder}
                className={inputClass}
              />
            ) : f.type === "select" ? (
              <select id={f.name} name={f.name} required={f.required} defaultValue="" className={inputClass}>
                <option value="" disabled>
                  Select an option
                </option>
                {(f.options ?? GENRES).map((o) => (
                  <option key={o} value={o}>
                    {o}
                  </option>
                ))}
              </select>
            ) : (
              <input
                id={f.name}
                name={f.name}
                type={f.type ?? "text"}
                required={f.required}
                placeholder={f.placeholder}
                className={inputClass}
              />
            )}
          </div>
        ))}
      </div>

      <button
        type="submit"
        className="mt-8 inline-flex min-h-12 w-full items-center justify-center rounded-sm bg-primary px-8 text-[0.75rem] font-semibold uppercase tracking-[0.16em] text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lift sm:w-auto"
      >
        {submitLabel}
      </button>
      {note ? <p className="mt-5 text-xs leading-relaxed text-muted-foreground">{note}</p> : null}
    </form>
  );
}
