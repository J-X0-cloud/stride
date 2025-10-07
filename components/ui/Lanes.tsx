/** Concentric track lanes used as a background motif behind dark heroes. */
const LANES = Array.from({ length: 8 }, (_, i) => {
  const inset = 60 + i * 34;
  return { inset, size: 900 - inset * 2, opacity: (0.34 - i * 0.035).toFixed(3) };
});

function LaneRings({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 900 900" fill="none" aria-hidden="true">
      {LANES.map((lane) => (
        <rect
          key={lane.inset}
          x={lane.inset}
          y={lane.inset}
          width={lane.size}
          height={lane.size}
          rx={lane.size / 2}
          stroke="#2F6BFF"
          strokeOpacity={lane.opacity}
          strokeWidth="1.5"
        />
      ))}
    </svg>
  );
}

export function Lanes({ double = false }: { double?: boolean }) {
  return (
    <div className="lanes">
      <LaneRings />
      {double ? <LaneRings className="r" /> : null}
    </div>
  );
}
