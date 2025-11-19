// /api/hero-panel/route.js
// Returns static data for HeroPanel as JSON

export async function GET() {
  return Response.json({
    panels: [
      {
        label: 'Trust',
        heading: 'Built on Relationships',
        copy: 'Long-standing partnerships with hospitals and clinics—transparent pricing, clear SLAs, and responsive local support.'
      },
      {
        label: 'Credibility',
        heading: 'Regulatory & Vendor-Backed',
        copy: 'CE/FDA-compliant products, manufacturer warranties, and documented service records—trusted by clinicians and procurement officers.'
      },
      {
        label: 'Quality',
        heading: 'Performance You Can Rely On',
        copy: 'Rigorous QA, certified calibration, and field-proven reliability to ensure accurate diagnostics and uninterrupted care.'
      }
    ]
  });
}
