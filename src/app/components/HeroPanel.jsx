// Server component: HeroPanel.jsx
export default function HeroPanel() {
  return (
    <div
      className="left-1/2 w-[92%] max-w-[980px] z-30 mx-auto md:absolute md:left-1/2 md:bottom-0 md:transform md:-translate-x-1/2 md:translate-y-1/2 mt-6 md:mt-0"
    >
      <div className="panel-primary p-4 md:p-6 -mt-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start text-sm md:text-base">
          <div className="flex flex-col">
            <span
              className="panel-label mb-1"
              style={{ color: "var(--color-secondary)" }}
            >
              Trust
            </span>
            <h3 className="panel-heading mb-1" style={{ color: "#ffffff" }}>
              Built on Relationships
            </h3>
            <p className="panel-copy text-white/60">
              Long-standing partnerships with hospitals and
              clinics—transparent pricing, clear SLAs, and responsive local
              support.
            </p>
          </div>

          <div
            className="flex flex-col border-t-0 md:border-l md:border-r border-dashed px-0 md:px-3"
            style={{ borderColor: "rgba(255,255,255,0.08)" }}
          >
            <span
              className="panel-label mb-1"
              style={{ color: "var(--color-secondary)" }}
            >
              Credibility
            </span>
            <h3 className="panel-heading mb-1" style={{ color: "#ffffff" }}>
              Regulatory & Vendor-Backed
            </h3>
            <p className="panel-copy text-white/60">
              CE/FDA-compliant products, manufacturer warranties, and
              documented service records—trusted by clinicians and procurement
              officers.
            </p>
          </div>

          <div className="flex flex-col">
            <span
              className="panel-label mb-1"
              style={{ color: "var(--color-secondary)" }}
            >
              Quality
            </span>
            <h3 className="panel-heading mb-1" style={{ color: "#ffffff" }}>
              Performance You Can Rely On
            </h3>
            <p className="panel-copy text-white/60">
              Rigorous QA, certified calibration, and field-proven reliability
              to ensure accurate diagnostics and uninterrupted care.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
