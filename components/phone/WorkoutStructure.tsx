import type { WorkoutBlock } from "@/types/training";

/** Bar chart of a structured workout: one bar per block, height = relative effort. */
export function WorkoutStructure({ blocks }: { blocks: WorkoutBlock[] }) {
  return (
    <div className="struct">
      {blocks.map((block, i) => (
        <i key={i} style={{ height: `${block.height}%`, background: `var(--${block.tone})` }} />
      ))}
    </div>
  );
}
