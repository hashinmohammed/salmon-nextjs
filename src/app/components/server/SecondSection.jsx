import React from "react";
import WhatsappButton from "@/app/components/client/common/ConnectUsButton";
import whatsappMessages from "../../data/messagedata";
import Image from "next/image";
import heroImage from "@/../public/images/pic-1.png";
import firstBg from "@/../public/images/first-bg.png";

function SecondSection() {
    // Removed client logic; now using ConnectUsButton client component
  return (
    <div
      className="relative w-full bg-cover bg-bottom bg-no-repeat"
      style={{ backgroundImage: `url(${firstBg.src})` }}
    >
      {/* No min height on mobile; same min height as before from md and up */}
      <section className="relative z-10 pt-12 md:pt-20 lg:flex md:min-h-[60vh] lg:items-end">
        <div className="container mx-auto px-6 h-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-12 h-full">

            {/* IMAGE – on top in mobile, right on desktop */}
            <div className="order-1 lg:order-2 flex items-end justify-center w-full lg:mt-auto -mt-4 md:mt-0">
              <Image
                src={heroImage}
                alt="Company visual"
                width={1920}
                height={1440}
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                className="w-full h-auto object-contain rounded-lg"
                style={{ objectPosition: "bottom", display: "block" }}
              />
            </div>

            {/* CONTENT – centered on mobile, original look on laptop */}
            <div
              className="
                order-2 lg:order-1
                flex flex-col lg:block
                items-center lg:items-start
                prose md:mt-32 prose-invert max-w-none
                text-center lg:text-left
                pb-6 lg:pb-20
                self-center
              "
            >
              <h2 className="mb-6 text-3xl md:text-4xl leading-tight">
                <span className="block text-secondary font-bold text-3xl md:text-[2.5rem] leading-tight">
                  360° Medical
                </span>
                <span className="block text-black font-extrabold text-3xl md:text-[2.5rem] leading-tight">
                  Equipment &amp; Solutions
                </span>
              </h2>

              <p className="mb-6 text-base text-gray-600 leading-relaxed max-w-[32rem]">
                Salmon Medic provides end-to-end (360°) medical equipment and supplies tailored to your facility&apos;s needs —
                from product selection and procurement to installation, staff training, and ongoing after-sales support.
                We ensure clinics and hospitals receive the right equipment, on time, and with the service to keep it running.
                Our dedicated supply chain management minimizes downtime, ensuring that critical tools are always available when patient lives are at stake. 
                Furthermore, we offer continuous technical consultation and upgrades, adapting your capabilities as medical technology evolves.
              </p>

              <div className="flex justify-center lg:justify-start">
                <WhatsappButton color="primary" message={whatsappMessages.fourthSection}>Connect Us</WhatsappButton>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

export default SecondSection;
