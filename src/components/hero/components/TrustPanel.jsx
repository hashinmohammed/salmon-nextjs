import PropTypes from "prop-types";

const trustHighlights = [
  {
    label: "Trust",
    title: "Built on Relationships",
    body: "Long-standing partnerships with hospitals and clinics—transparent pricing, clear SLAs, and responsive local support.",
  },
  {
    label: "Credibility",
    title: "Regulatory & Vendor-Backed",
    body: "CE/FDA-compliant products, manufacturer warranties, and documented service records—trusted by clinicians and procurement officers.",
    bordered: true,
  },
  {
    label: "Quality",
    title: "Performance You Can Rely On",
    body: "Rigorous QA, certified calibration, and field-proven reliability to ensure accurate diagnostics and uninterrupted care.",
  },
];

export default function TrustPanel({ className = "" }) {
  return (
    <div className={`panel-primary -mt-4 p-4 md:p-6 ${className}`.trim()}>
      <div className="grid grid-cols-1 items-start gap-4 text-sm md:grid-cols-3 md:text-base">
        {trustHighlights.map((highlight) => (
          <div
            key={highlight.title}
            className={`flex flex-col ${
              highlight.bordered ? "border-dashed border-t-0 px-0 md:border-l md:border-r md:px-3" : ""
            }`}
            style={highlight.bordered ? { borderColor: "rgba(255,255,255,0.08)" } : undefined}
          >
            <span className="panel-label mb-1" style={{ color: "var(--color-secondary)" }}>
              {highlight.label}
            </span>
            <h3 className="panel-heading mb-1" style={{ color: "#ffffff" }}>
              {highlight.title}
            </h3>
            <p className="panel-copy text-white/60">{highlight.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

TrustPanel.propTypes = {
  className: PropTypes.string,
};
