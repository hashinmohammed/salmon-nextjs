"use client";

import React, { useRef } from "react";
import Image from "next/image";

import ContactDropDown from "@/components/common/ContactDropDown";
import heroImage from "@/../public/images/pic-1.png";
import productBackground from "@/../public/images/product-bg.webp";

function SecondSection() {
  const contactRef = useRef(null);

  return (
    <div
      className="relative w-full bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${productBackground.src})` }}
    >
      <div className="pointer-events-none absolute inset-0 bg-white/75" />
      <section className="relative z-10 pt-12 pb-0 md:pt-20 md:pb-0 lg:flex lg:min-h-[90vh] lg:items-center">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
            <div className="order-1 md:order-0">
              <Image
                src={heroImage}
                alt="Company visual"
                width={1200}
                height={800}
                priority
                sizes="(min-width: 768px) 50vw, 90vw"
                className="mx-auto h-auto max-h-[300px] w-full max-w-xl rounded-lg object-cover md:max-h-[600px]"
              />
            </div>

            <div className="prose prose-invert max-w-none text-left">
              <p className="mb-2 text-sm font-semibold text-secondary">WELCOME TO SALMON MEDIC</p>
              <h2 className="mb-4 text-3xl font-medium text-tertiary md:text-4xl">
                Salmon Medic — 360° Medical Equipment &amp; Solutions
              </h2>
              <p className="mb-6 text-base text-gray-500">
                Salmon Medic provides end-to-end (360°) medical equipment and supplies tailored to your facility&apos;s needs —
                from product selection and procurement to installation, staff training, and ongoing after-sales support.
                We ensure clinics and hospitals receive the right equipment, on time, and with the service to keep it running.
              </p>

              <blockquote className="mb-6 border-l-4 border-gray-300 pl-4 italic text-gray-500">
                “Our mission is to empower healthcare teams with complete, dependable medical solutions — so they can focus
                on patient care while we handle the rest.”
              </blockquote>

              <div className="flex flex-col gap-4 md:flex-row md:items-center">
                <div className="flex-1">
                  <p className="text-sm text-gray-400">Founder — Salmon Medic</p>
                  <div className="mt-4 md:mt-2">
                    <ContactDropDown
                      ref={contactRef}
                      className="inline-block"
                      buttonClass="inline-block rounded bg-primary px-5 py-3 text-white shadow transition hover:bg-primary-dark"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SecondSection;
