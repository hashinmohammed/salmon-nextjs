"use client";

import { useState } from "react";
import Image from "next/image";

const faqs = [
  {
    q: "What products does Salmon Medic offer for veterinary clinics?",
    a: "We provide a full range of equipment including surgical units, diagnostic imaging systems, and daily supplies tailored for veterinary departments.",
  },
  {
    q: "Do you offer installation and training for new equipment?",
    a: "Yes, our team provides seamless installation and comprehensive training for all products to ensure your staff is fully prepared.",
  },
  {
    q: "Are your products compliant with regulatory standards?",
    a: "All our equipment meets or exceeds industry standards and regulatory requirements for safety and performance.",
  },
  {
    q: "Can I get after-sales support for maintenance and repairs?",
    a: "Absolutely. We offer ongoing support, maintenance, and repair services to keep your clinic running smoothly.",
  },
  {
    q: "How do I request a quote or place an order?",
    a: "You can contact us directly through our website or by phone to request a quote or place an order.",
  },
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(null);

  return (
    <div
      className="relative w-full bg-top bg-no-repeat bg-cover"
      style={{ backgroundImage: "url(/images/teal-bg.png)" }} // from public/images
    >
      <section className="relative z-10 min-h-[60vh] md:min-h-[80vh] pt-12 md:pt-20 lg:flex lg:items-end">
        <div className="container mx-auto px-6 h-full">
          <div className="grid h-full grid-cols-1 items-center gap-8 lg:grid-cols-2">
            {/* IMAGE SECTION - left on desktop, bottom on mobile */}
            <div className="order-2 flex w-full items-end justify-center lg:order-1 lg:justify-start">
              <div className="relative w-full max-w-xl aspect-4/3">
                <Image
                  src="/images/faq.png" // from public/images
                    alt="Doctors visual"
                width={1940}
                height={1440}
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                className="w-full h-auto object-contain rounded-lg"
                style={{
                  objectPosition: "bottom",
                  maxWidth: "100%",
                }}
                />
              </div>
            </div>

            {/* CONTENT SECTION - right on desktop, top on mobile */}
            <div className="prose prose-invert order-1 max-w-none pb-8 text-left text-white lg:order-2 lg:pb-20">
              <div className="flex flex-col items-center">
                <h2 className="mb-2 text-center text-3xl font-semibold text-white md:text-4xl">
                  FAQs
                </h2>
                <svg
                  width="100"
                  height="10"
                  viewBox="0 0 237 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mb-6 mx-auto block"
                  aria-hidden="true"
                >
                  <path
                    d="M5.50098 15.5C80.6343 2.16667 155.768 2.16667 230.901 15.5"
                    stroke="#F95B1C"
                    strokeWidth="11"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              <div className="space-y-4" role="list">
                {faqs.map((item, idx) => {
                  const isOpen = openIdx === idx;
                  const answerId = `faq-answer-${idx}`;
                  const questionId = `faq-question-${idx}`;

                  return (
                    <div
                      key={idx}
                      className={`rounded-lg border-[5px] border-white p-4 text-white transition-colors ${
                        isOpen ? "bg-secondary" : "bg-white/10"
                      }`}
                    >
                      <button
                        id={questionId}
                        className="group flex w-full cursor-pointer items-center justify-between text-left text-base font-normal focus:outline-none"
                        aria-expanded={isOpen}
                        aria-controls={answerId}
                        onClick={() => setOpenIdx(isOpen ? null : idx)}
                      >
                        <span>{item.q}</span>
                        <span className="ml-4 select-none text-xl font-bold">
                          {isOpen ? "-" : "+"}
                        </span>
                      </button>

                      {isOpen && (
                        <p
                          id={answerId}
                          className="mt-2 text-base text-white/80"
                          role="region"
                          aria-labelledby={questionId}
                        >
                          {item.a}
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
