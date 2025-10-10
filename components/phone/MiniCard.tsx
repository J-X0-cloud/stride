import { toneColor } from "@/lib/css-vars";
import { cn } from "@/lib/cn";
import { Icon, type IconName } from "@/components/ui/Icon";

interface MiniCardProps {
  icon: IconName;
  tone: string;
  title: string;
  detail: string;
  spaced?: boolean;
}

export function MiniCard({ icon, tone, title, detail, spaced = false }: MiniCardProps) {
  return (
    <div className={cn("card", spaced && "spaced")}>
      <div className="mini">
        <span className="ic" style={{ color: toneColor(tone) }}>
          <Icon name={icon} strokeWidth={2} />
        </span>
        <div>
          <b>{title}</b>
          <small>{detail}</small>
        </div>
      </div>
    </div>
  );
}
