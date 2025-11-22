import React from "react";
import Image from "next/image";
import labGirlImage from "@/../public/images/lab-girl.png";
import tealBg from "@/../public/images/teal-bg.png";

function FifthSection() {
  return (
    <div
      className="relative w-full bg-cover bg-top bg-no-repeat"
      style={{ backgroundImage: `url(${tealBg.src})` }}
    >
      {/* 1. Removed 'max-h-[80vh]' to prevent content cutting off on mobile.
        2. Changed 'lg:flex' to strictly flex/grid utility to handle alignment better.
        3. Added 'pb-0' specifically to keep image flush at bottom, but added vertical spacing for mobile content.
      */}
      <section className="relative z-10 pt-12 md:pt-20 lg:flex min-h-[60vh] md:min-h-[80vh] lg:items-end">
        <div className="container mx-auto px-6 h-full">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 h-full">
            
            {/* Content Left */}
            <div className="prose prose-invert max-w-none text-left order-1 lg:order-1 text-white pb-8 lg:pb-20">
              {/* <p className="mb-2 text-sm font-semibold text-white uppercase tracking-wider">
                Empowering Every Laboratory
              </p> */}
              <h2 className="mb-4 text-3xl md:text-4xl leading-tight text-white">
                <span className="block font-semibold text-3xl md:text-[2.5rem] text-white leading-tight">
                  Comprehensive Lab Solutions
                </span>
                <span className="block font-semibold text-3xl md:text-[2.5rem] text-white leading-tight">
                  For Precision & Progress
                </span>
              </h2>
              <div className="mb-6">
                <Image 
                  src="/images/stroke.svg" 
                  alt="Section underline" 
                  width={100} 
                  height={10} 
                  className="block"
                />
              </div>
              <p className="mb-8 text-base text-white leading-relaxed opacity-90">
                Salmon Medic delivers a full spectrum of laboratory equipment and solutions designed to meet the demands of modern science and healthcare. From high-performance analyzers and microscopes to essential glassware and consumables, we support clinical, research, and educational labs with products that ensure accuracy, reliability, and efficiency. Our expert team provides tailored guidance, seamless installation, and ongoing support, helping your laboratory achieve excellence in every experiment and test.
              </p>
              <div className="flex justify-start">
                <button className="px-8 py-3 rounded-lg bg-secondary text-white font-semibold shadow-lg hover:bg-primary-dark hover:shadow-xl transition-all transform hover:-translate-y-0.5 duration-200">
                  Contact Us
                </button>
              </div>
            </div>

            {/* Image Right */}
            {/* 1. 'mt-auto' ensures the image pushes to the bottom of the flex/grid container.
              2. 'lg:h-auto' ensures it scales correctly without forcing height.
            */}
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
                    objectPosition: 'bottom',
                    // Optional: If you want to ensure it doesn't get too massive on 4k screens
                    maxWidth: '100%' 
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