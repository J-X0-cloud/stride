import { Tabs } from "expo-router";
import { Icon, type IconName } from "@/components/Icon";
import { colors, fonts } from "@/constants/theme";

const TABS: { name: string; title: string; icon: IconName }[] = [
  { name: "index", title: "Today", icon: "home" },
  { name: "plan", title: "Plan", icon: "calendar" },
  { name: "zones", title: "Zones", icon: "bars" },
  { name: "race", title: "Race prep", icon: "flag" },
];

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.volt,
        tabBarInactiveTintColor: colors.tabInactive,
        tabBarLabelStyle: { fontFamily: fonts.medium, fontSize: 11 },
        tabBarStyle: { backgroundColor: colors.tabBar, borderTopColor: "rgba(255,255,255,0.06)" },
      }}
    >
      {TABS.map((tab) => (
        <Tabs.Screen
          key={tab.name}
          name={tab.name}
          options={{
            title: tab.title,
            tabBarIcon: ({ color, size }) => <Icon name={tab.icon} color={color} size={size - 2} />,
          }}
        />
      ))}
    </Tabs>
  );
}
