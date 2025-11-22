import React from "react";

export default function HeroPanel() {
  return (
    <div
      className="relative w-[92%] max-w-[1100px] pt-3 md:pt-0 z-30 mx-auto mt-0 md:absolute md:left-1/2 md:bottom-0 md:transform md:-translate-x-1/2 md:translate-y-1/2"
    >
      {/* Panel Container - Reduced padding slightly to p-5 md:p-8 to match shorter Hero height */}
      <div className="panel-primary bg-[#0a2540] backdrop-blur-md bg-opacity-95 md:bg-opacity-100 rounded-xl shadow-2xl p-5 md:p-4 md:px-8 border border-white/10">
        
        <div className="grid grid-cols-1 md:grid-cols-3 items-start text-left gap-8 md:gap-4">
          
          {/* --- Col 1: Trust --- */}
          <div className="flex flex-col md:pr-6">
            <span className="text-secondary font-bold text-sm mb-1 uppercase tracking-wider">
              Trust
            </span>
            <h3 className="text-white font-semibold text-lg mb-2">
              Built on Relationships
            </h3>
            <p className="text-white/70 text-sm leading-relaxed">
              Long-standing partnerships with hospitals and clinics—transparent pricing, clear SLAs, and responsive local support.
            </p>
          </div>

          {/* --- Col 2: Credibility --- */}
          <div className="flex flex-col pb-8 md:pb-0 border-b md:border-b-0 md:border-l md:border-r border-dashed border-white/20 md:px-8 justify-start h-full">
            <span className="text-secondary font-bold text-sm mb-1 uppercase tracking-wider">
              Credibility
            </span>
            <h3 className="text-white font-semibold text-lg mb-2">
              Regulatory & Vendor-Backed
            </h3>
            <p className="text-white/70 text-sm leading-relaxed">
              CE/FDA-compliant products, manufacturer warranties, and documented service records—trusted by clinicians and procurement officers.
            </p>
          </div>

          {/* --- Col 3: Quality --- */}
          <div className="flex flex-col md:pl-6">
            <span className="text-secondary font-bold text-sm mb-1 uppercase tracking-wider">
              Quality
            </span>
            <h3 className="text-white font-semibold text-lg mb-2">
              Performance You Can Rely On
            </h3>
            <p className="text-white/70 text-sm leading-relaxed">
              Rigorous QA, certified calibration, and field-proven reliability to ensure accurate diagnostics and uninterrupted care.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}