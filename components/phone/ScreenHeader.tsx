import { runner } from "@/lib/data/app-screens";

interface ScreenHeaderProps {
  kicker: string;
  title: string;
  avatar?: boolean;
}

export function ScreenHeader({ kicker, title, avatar = true }: ScreenHeaderProps) {
  return (
    <div className="s-head">
      <div>
        <small>{kicker}</small>
        <strong>{title}</strong>
      </div>
      {avatar ? <div className="av">{runner.initials}</div> : null}
    </div>
  );
}
