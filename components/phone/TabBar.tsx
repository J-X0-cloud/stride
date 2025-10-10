import { cn } from "@/lib/cn";
import { Icon, type IconName } from "@/components/ui/Icon";

export type AppTab = "today" | "plan" | "progress" | "coach";

const TABS: { id: AppTab; label: string; icon: IconName }[] = [
  { id: "today", label: "Today", icon: "home" },
  { id: "plan", label: "Plan", icon: "calendar" },
  { id: "progress", label: "Progress", icon: "bars" },
  { id: "coach", label: "Coach", icon: "chat" },
];

export function TabBar({ active }: { active: AppTab }) {
  return (
    <div className="tabbar">
      {TABS.map((tab) => (
        <span key={tab.id} className={cn(tab.id === active && "on")}>
          <Icon name={tab.icon} strokeWidth={2} />
          {tab.label}
        </span>
      ))}
    </div>
  );
}
