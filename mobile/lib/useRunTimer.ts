import { useEffect, useRef, useState } from "react";

/**
 * Ticks an elapsed-seconds counter once per second while `running` is true.
 * Uses wall-clock deltas so a dropped frame or a backgrounded JS thread never loses time.
 */
export function useRunTimer(initialSeconds: number, running: boolean): number {
  const [elapsed, setElapsed] = useState(initialSeconds);
  const lastTick = useRef<number | null>(null);

  useEffect(() => {
    if (!running) {
      lastTick.current = null;
      return;
    }
    lastTick.current = Date.now();
    const id = setInterval(() => {
      const now = Date.now();
      const delta = (now - (lastTick.current ?? now)) / 1000;
      lastTick.current = now;
      setElapsed((s) => s + delta);
    }, 1000);
    return () => clearInterval(id);
  }, [running]);

  return elapsed;
}
