export default function PlayPauseIcon({ playing, progress }) {
  return (
    <svg
      width="56"
      height="56"
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs />
      <circle
        cx="28"
        cy="28"
        r="20"
        stroke="rgba(255,255,255,0.35)"
        strokeWidth="4"
      />
      <circle
        cx="28"
        cy="28"
        r="20"
        strokeWidth="4"
        strokeLinecap="round"
        strokeDasharray={Math.PI * 2 * 20}
        strokeDashoffset={(1 - progress) * Math.PI * 2 * 20}
        transform="rotate(-90 28 28)"
        style={{
          transition: "stroke-dashoffset 200ms linear",
          stroke: "var(--color-secondary)",
        }}
      />
      {playing ? (
        <>
          <rect
            x="25"
            y="23"
            width="2.5"
            height="10"
            rx="0.5"
            fill="white"
          />
          <rect
            x="31"
            y="23"
            width="2.5"
            height="10"
            rx="0.5"
            fill="white"
          />
        </>
      ) : (
        <path d="M27 22 L36 28 L27 34 Z" fill="white" />
      )}
    </svg>
  );
}
