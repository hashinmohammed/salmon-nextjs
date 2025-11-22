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
      <section className="relative z-10 pt-12 md:pt-20 lg:flex min-h-[70vh] md:min-h-[80vh]  md:max-h-[86vh] lg:items-end">
        <div className="container mx-auto px-6 h-full">
          {/* 1. Changed gap-12 to 'gap-0 lg:gap-12' to remove large gap on mobile 
          */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-12 h-full">
            
            {/* Content Left */}
            {/* 2. Changed pb-12 to 'pb-6 lg:pb-20' to reduce space under the button 
            */}
           {/* Content Left */}
            <div className="prose md:mt-32 prose-invert max-w-none text-left order-1 lg:order-1 pb-6 lg:pb-20 self-center">
              
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
                Our dedicated supply chain management minimizes downtime, ensuring that critical tools are always available when patient lives are at stake. 
                Furthermore, we offer continuous technical consultation and upgrades, adapting your capabilities as medical technology evolves.
              </p>

              <div className="flex flex-col gap-4 md:flex-row md:items-center mb-8">
                {/* Empty placeholder */}
              </div>
              <div className="flex justify-start">
                <button className="px-8 py-3 rounded-lg bg-primary text-white font-semibold shadow-lg hover:bg-primary-dark transition-all hover:-translate-y-0.5 duration-200">
                  Connect Us
                </button>
              </div>
            </div>

            {/* Image Right */}
            {/* 3. Changed 'mt-auto' to 'lg:mt-auto'. On mobile, we let it sit naturally.
               4. Added '-mt-4' on mobile to pull the image up slightly into the text space 
                  (useful if the image file has transparent space at the top).
            */}
            <div className="order-2 lg:order-2 flex items-end justify-center w-full lg:mt-auto -mt-4 md:mt-0">
              <Image
                src={heroImage}
                alt="Company visual"
                width={1920}
                height={1440}
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="w-full h-[50vh] md:h-[70vh] lg:h-auto object-contain rounded-lg"
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