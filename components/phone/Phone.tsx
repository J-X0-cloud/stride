import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

interface PhoneProps {
  children: ReactNode;
  large?: boolean;
}

/** Device frame for the in-app screens. Purely decorative, so hidden from assistive tech. */
export function Phone({ children, large = false }: PhoneProps) {
  return (
    <div className={cn("phone", large && "lg")} aria-hidden="true">
      <div className="island" />
      <div className="scr">
        <div className="sb">
          <span>9:41</span>
          <i />
        </div>
        {children}
      </div>
    </div>
  );
}
