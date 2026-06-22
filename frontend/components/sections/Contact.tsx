"use client";

import { AlertCircle, CheckCircle2 } from "lucide-react";
import { useState, type FormEvent } from "react";

import { Button } from "@/components/ui/Button";

type Status = "idle" | "loading" | "success" | "error";

const fieldClasses =
  "w-full rounded-sm border border-hairline bg-onyx-raised px-4 py-3 font-body " +
  "text-sm text-ink-primary placeholder:text-platinum/50 transition-colors " +
  "duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold";

const labelClasses =
  "mb-2 block font-display text-xs uppercase tracking-[0.15em] text-platinum";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    // Honeypot — real visitors never see or fill this field. Bail out
    // client-side too, but the backend is the actual enforcement point.
    if (String(formData.get("company") ?? "").trim().length > 0) {
      return;
    }

    setStatus("loading");

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/contact`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: formData.get("name"),
            email: formData.get("email"),
            message: formData.get("message"),
            company: formData.get("company"),
          }),
        }
      );

      if (!response.ok) throw new Error("Request failed");

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="bg-onyx-base py-28 md:py-36">
      <div className="mx-auto max-w-2xl px-6 text-center md:px-10">
        <h2 className="font-display text-3xl font-light text-ink-primary sm:text-4xl">
          Ready for One Trusted Partner?
        </h2>
        <p className="mt-4 font-body text-lg text-platinum">
          Tell us about your business — we&rsquo;ll follow up shortly.
        </p>

        <form onSubmit={handleSubmit} className="mt-12 text-left">
          {/* Honeypot: visually hidden, kept out of the tab order, ignored by screen readers */}
          <input
            type="text"
            name="company"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            className="absolute left-[-9999px] h-0 w-0 opacity-0"
          />

          <div>
            <label htmlFor="name" className={labelClasses}>
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              autoComplete="name"
              className={fieldClasses}
            />
          </div>

          <div className="mt-6">
            <label htmlFor="email" className={labelClasses}>
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              className={fieldClasses}
            />
          </div>

          <div className="mt-6">
            <label htmlFor="message" className={labelClasses}>
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              className={`${fieldClasses} resize-none`}
            />
          </div>

          <Button
            type="submit"
            disabled={status === "loading"}
            className={
              status === "loading"
                ? "mt-8 w-full cursor-not-allowed opacity-60 sm:w-auto"
                : "mt-8 w-full sm:w-auto"
            }
          >
            {status === "loading" ? "Sending..." : "Send Message"}
          </Button>

          {status === "success" && (
            <p className="mt-4 flex items-center gap-2 font-body text-sm text-gold-light">
              <CheckCircle2 className="h-4 w-4" strokeWidth={1.5} />
              Thanks — we&rsquo;ll be in touch shortly.
            </p>
          )}

          {status === "error" && (
            <p className="mt-4 flex items-center gap-2 font-body text-sm text-platinum">
              <AlertCircle className="h-4 w-4" strokeWidth={1.5} />
              Something went wrong. Please try again or email us directly.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
