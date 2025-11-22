import React from "react";
import Image from "next/image";
import heroImage from "@/../public/images/pic-1.png";
import firstBg from "@/../public/images/first-bg.png";

function SecondSection() {
  return (
    <div
      className="relative w-full bg-cover bg-bottom bg-no-repeat"
      style={{ backgroundImage: `url(${firstBg.src})` }}
    >
      <section className="relative z-10 pt-12 pb-0 overflow-hidden md:pt-20 md:pb-0 lg:flex min-h-[70vh] md:min-h-[90vh] md:max-h-[90vh]  lg:items-center">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
            <div className="prose prose-invert max-w-none text-left order-0 md:order-0">
              <p className="mb-2 text-sm font-semibold text-primary">WELCOME TO SALMON MEDIC</p>
              <h2 className="mb-4 text-3xl md:text-4xl leading-tight">
                <span className="block text-secondary font-bold text-[2rem] md:text-[2.5rem]">
                  360° Medical
                </span>
                <span className="block text-black font-extrabold text-[2rem] md:text-[2.5rem]">
                  Equipment &amp; Solutions
                </span>
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
                </div>
              </div>
              <div className="flex justify-start  mt-8">
                <button className="px-6 cursor-pointer py-3 rounded-lg bg-primary text-white font-semibold shadow hover:bg-primary-dark transition">Connect Us</button>
              </div>
            </div>
            <div className="order-1 md:order-1 flex items-end h-full pb-0">
              <Image
                src={heroImage}
                alt="Company visual"
                width={1920}
                height={1440}
                priority
                sizes="100vw"
                className="w-full h-[50vh] md:h-[70vh] lg:h-[86vh] object-cover rounded-lg"
                style={{objectPosition: 'bottom'}}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SecondSection;
