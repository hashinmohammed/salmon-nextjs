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
      {/* 1. Removed 'overflow-hidden' and 'md:max-h-[90vh]' to allow content to flow naturally on all screens.
          2. Added 'lg:items-end' to align the image to the bottom of the section. */}
      <section className="relative z-10 pt-12 md:pt-20 lg:flex min-h-[70vh] md:min-h-[90vh] lg:items-end">
        <div className="container mx-auto px-6 h-full">
          {/* Changed to lg:grid-cols-2 so tablets display in a readable single column */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 h-full">
            
            {/* Content Left */}
            <div className="prose prose-invert max-w-none text-left order-1 lg:order-1 pb-12 lg:pb-20 self-center">
              
              <h2 className="mb-6 text-3xl md:text-4xl leading-tight">
                <span className="block text-secondary font-bold text-3xl md:text-[2.5rem] leading-tight">
                  360° Medical
                </span>
                <span className="block text-black font-extrabold text-3xl md:text-[2.5rem] leading-tight">
                  Equipment &amp; Solutions
                </span>
              </h2>
              <p className="mb-6 text-base text-gray-600 leading-relaxed">
                Salmon Medic provides end-to-end (360°) medical equipment and supplies tailored to your facility&apos;s needs —
                from product selection and procurement to installation, staff training, and ongoing after-sales support.
                We ensure clinics and hospitals receive the right equipment, on time, and with the service to keep it running.
              </p>

              {/* <blockquote className="mb-8 border-l-4 border-gray-300 pl-4 italic text-gray-500">
                “Our mission is to empower healthcare teams with complete, dependable medical solutions — so they can focus
                on patient care while we handle the rest.”
              </blockquote> */}

              <div className="flex flex-col gap-4 md:flex-row md:items-center mb-8">
                {/* <div className="flex-1">
                  <p className="text-sm text-gray-400 font-medium">Founder — Salmon Medic</p>
                </div> */}
              </div>
              <div className="flex justify-start">
                <button className="px-8 py-3 rounded-lg bg-primary text-white font-semibold shadow-lg hover:bg-primary-dark transition-all hover:-translate-y-0.5 duration-200">
                  Connect Us
                </button>
              </div>
            </div>

            {/* Image Right */}
            {/* mt-auto ensures the image sits at the bottom of the container */}
            <div className="order-2 lg:order-2 flex items-end justify-center w-full mt-auto">
              <Image
                src={heroImage}
                alt="Company visual"
                width={1920}
                height={1440}
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                // Kept specific height classes as requested, but used object-contain to prevent awkward cropping
                className="w-full h-[50vh] md:h-[70vh] lg:h-[86vh] object-contain rounded-lg"
                style={{ objectPosition: 'bottom' }}
              />
            </div>
            
          </div>
        </div>
      </section>
    </div>
  );
}

export default SecondSection;