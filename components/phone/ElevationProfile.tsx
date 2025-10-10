const WIDTH = 200;
const HEIGHT = 42;

/** Builds "M0 34L20 30 38 32 …" from [x, y] samples. */
function toLinePath(points: [number, number][]): string {
  const [first, ...rest] = points;
  if (!first) return "";
  return `M${first[0]} ${first[1]}L${rest.map(([x, y]) => `${x} ${y}`).join(" ")}`;
}

/** Course elevation as a filled line. Points sit in a 200×42 box with y growing downwards. */
export function ElevationProfile({ points }: { points: [number, number][] }) {
  const line = toLinePath(points);
  return (
    <div className="elev">
      <svg viewBox={`0 0 ${WIDTH} ${HEIGHT}`} preserveAspectRatio="none">
        <path d={`${line}V${HEIGHT}H0z`} fill="rgba(47,107,255,.35)" />
        <path d={line} stroke="#6E9BFF" strokeWidth="1.5" fill="none" />
      </svg>
    </div>
  );
}
