/** Stylised street grid with today's route traced in volt. */
export function RouteMap() {
  return (
    <div className="map">
      <svg viewBox="0 0 240 300" preserveAspectRatio="xMidYMid slice">
        <g stroke="#1A2B40" strokeWidth="7" fill="none">
          <path d="M-10 60L250 30M-10 140L250 120M-10 230L250 215M40 -10L70 310M130 -10L150 310M200 -10L215 310" />
        </g>
        <g stroke="#15253A" strokeWidth="3" fill="none">
          <path d="M-10 95L250 78M-10 185L250 168M90 -10L110 310M170 -10L185 310" />
        </g>
        <path
          d="M60 250C60 200 40 170 70 140S140 130 150 95 190 40 205 55"
          stroke="#D4FF3F"
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
        />
        <circle cx="205" cy="55" r="7" fill="#D4FF3F" stroke="#0B1622" strokeWidth="3" />
        <circle cx="60" cy="250" r="5" fill="#fff" />
      </svg>
    </div>
  );
}
