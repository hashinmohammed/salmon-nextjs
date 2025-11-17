"use client";

import { forwardRef, useState } from "react";

const contactOptions = [
  {
    label: "Email",
    value: "hello@salmonmedic.com",
    href: "mailto:hello@salmonmedic.com",
  },
  {
    label: "Phone",
    value: "+1 (555) 123-4567",
    href: "tel:+15551234567",
  },
  {
    label: "Schedule Call",
    value: "Book a consult",
    href: "#consult",
  },
];

const ContactDropDown = forwardRef(function ContactDropDown(
  { className = "", buttonClass = "" },
  ref,
) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`relative ${className}`} ref={ref}>
      <button
        type="button"
        className={buttonClass || "rounded bg-primary px-4 py-2 text-white"}
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
      >
        Contact Us
      </button>
      {open ? (
        <div className="absolute left-0 top-full z-30 mt-2 w-56 overflow-hidden rounded-xl border border-black/10 bg-white text-sm text-black shadow-xl dark:border-white/10 dark:bg-zinc-900 dark:text-white">
          <ul className="divide-y divide-black/5 dark:divide-white/10">
            {contactOptions.map((option) => (
              <li key={option.label}>
                <a
                  className="flex flex-col gap-0.5 px-4 py-3 transition hover:bg-primary/10 dark:hover:bg-white/5"
                  href={option.href}
                  onClick={() => setOpen(false)}
                >
                  <span className="font-medium">{option.label}</span>
                  <span className="text-xs text-zinc-500 dark:text-zinc-400">{option.value}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
});

export default ContactDropDown;
