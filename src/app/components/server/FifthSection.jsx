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
      <section className="relative z-10 pt-12 pb-0 md:pt-20 md:pb-0 lg:flex min-h-[60vh] md:min-h-[80vh] overflow-hidden max-h-[80vh] lg:items-center">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
            {/* Content Left */}
            <div className="prose prose-invert max-w-none text-left order-1 md:order-1 text-white">
              <p className="mb-2 text-sm font-semibold text-white">Empowering Every Laboratory</p>
              <h2 className="mb-2 text-3xl md:text-4xl leading-tight text-white">
                <span className="block font-semibold text-[2rem] md:text-[2.5rem] text-white">
                  Comprehensive Lab Solutions
                </span>
                <span className="block font-semibold text-[2rem] md:text-[2.5rem] text-white">
                  For Precision & Progress
                </span>
              </h2>
              <div className="mb-4">
                <Image src="/images/stroke.svg" alt="Section underline" width={100} height={10} style={{display: 'block'}} />
              </div>
              <p className="mb-6 text-base text-white">
                Salmon Medic delivers a full spectrum of laboratory equipment and solutions designed to meet the demands of modern science and healthcare. From high-performance analyzers and microscopes to essential glassware and consumables, we support clinical, research, and educational labs with products that ensure accuracy, reliability, and efficiency. Our expert team provides tailored guidance, seamless installation, and ongoing support, helping your laboratory achieve excellence in every experiment and test.
              </p>
              <div className="flex justify-start mt-8">
                <button className="px-6 cursor-pointer py-3 rounded-lg bg-secondary text-white font-semibold shadow hover:bg-primary-dark transition">Contact Us</button>
              </div>
            </div>
            {/* Image Right */}
            <div className="order-2 md:order-2 flex items-end h-full pb-0 justify-end w-full overflow-visible">
              <Image
                src={labGirlImage}
                alt="Doctors visual"
                width={1940}
                height={1440}
                priority
                sizes="100vw"
                className="w-full h-auto object-contain rounded-lg"
                style={{objectPosition: 'bottom'}}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default FifthSection;
