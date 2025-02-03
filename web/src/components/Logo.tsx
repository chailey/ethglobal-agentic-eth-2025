export default function LettuceLogo() {
  return (
    <svg viewBox="0 0 200 200" className="w-full h-full">
      {/* Lettuce head - base */}
      <circle cx="100" cy="110" r="80" fill="#4CAF50" />

      {/* White inner part of lettuce */}
      <circle cx="100" cy="110" r="70" fill="#FFFFFF" />
      <ellipse cx="100" cy="130" rx="55" ry="45" fill="#F1F8E9" />

      {/* Stalky wild hair on top */}
      <path d="M60 70 Q 80 10, 100 50 Q 120 0, 140 70" fill="#4CAF50" />
      <path d="M70 65 Q 85 15, 100 45 Q 115 5, 130 65" fill="#8BC34A" />
      <path d="M80 60 Q 90 20, 100 40 Q 110 10, 120 60" fill="#CDDC39" />

      {/* Eyes */}
      <circle cx="75" cy="100" r="12" fill="#2E7D32" />
      <circle cx="125" cy="100" r="12" fill="#2E7D32" />
      <circle cx="75" cy="100" r="6" fill="#1B5E20" />
      <circle cx="125" cy="100" r="6" fill="#1B5E20" />

      {/* Smile */}
      <path
        d="M75 145 Q 100 165, 125 145"
        fill="none"
        stroke="#2E7D32"
        strokeWidth="6"
        strokeLinecap="round"
      />
    </svg>
  );
}
