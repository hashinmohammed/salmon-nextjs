import React from "react";
import useWhatsappRedirect from "../../hooks/useWhatsappRedirect";
import whatsappMessages from "../../data/messagedata";
import CommonButton from "../client/common/CommonButton";
import Image from "next/image";
import labGirlImage from "@/../public/images/lab-girl.png";
import tealBg from "@/../public/images/teal-bg.png";

function FifthSection() {
    const redirectToWhatsapp = useWhatsappRedirect();
  return (
    <div
      className="relative w-full bg-cover bg-top bg-no-repeat"
      style={{ backgroundImage: `url(${tealBg.src})` }}
    >
      {/* No height restriction on mobile; height applies only from md */}
      <section className="relative z-10 pt-12 md:pt-20 lg:flex md:min-h-[80vh] lg:items-end">
        <div className="container mx-auto px-6 h-full">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 h-full">
            
            {/* Content (Mobile centered - Desktop/Tablet original) */}
            <div
              className="
                order-1 lg:order-1 prose prose-invert max-w-none
                text-center lg:text-left
                flex flex-col items-center lg:items-start
                text-white
                pb-8 lg:pb-20
              "
            >
              <h2 className="mb-4 text-2xl md:text-4xl leading-tight text-white">
                <span className="block font-semibold text-2xl md:text-[2.5rem] text-white leading-tight">
                  Comprehensive Lab Solutions
                </span>
                <span className="block font-semibold text-2xl md:text-[2.5rem] text-white leading-tight">
                  For Precision & Progress
                </span>
              </h2>

              <div className="mb-6">
                <Image 
                  src="/images/stroke.svg" 
                  alt="Section underline" 
                  width={100} 
                  height={10} 
                  className="block mx-auto lg:mx-0"
                />
              </div>

              <p className="mb-8 text-sm md:text-base text-white leading-relaxed opacity-90 max-w-[32rem]">
                Salmon Medic delivers a full spectrum of laboratory equipment and solutions designed to meet the demands of modern science and healthcare. From high-performance analyzers and microscopes to essential glassware and consumables, we support clinical, research, and educational labs with products that ensure accuracy, reliability, and efficiency. Our expert team provides tailored guidance, seamless installation, and ongoing support, helping your laboratory achieve excellence in every experiment and test.
              </p>

              <div className="flex justify-center lg:justify-start">
                <CommonButton color="secondary" onClick={() => redirectToWhatsapp(whatsappMessages.fifthSection)}>
                  Contact Us
                </CommonButton>
              </div>
            </div>

            {/* Image (unchanged) */}
            <div className="order-2 lg:order-2 flex items-end justify-center lg:justify-end w-full h-full mt-auto">
              <Image
                src={labGirlImage}
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
        </div>
      </section>
    </div>
  );
}

export default FifthSection;
