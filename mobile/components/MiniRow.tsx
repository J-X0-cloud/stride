import { StyleSheet, Text, View } from "react-native";
import { colors, fonts, radii } from "@/constants/theme";
import type { SessionTone } from "@/lib/types";
import { Card } from "./Card";
import { Icon, type IconName } from "./Icon";

export function toneColor(tone: SessionTone): string {
  if (tone === "rest") return colors.rest;
  if (tone === "volt") return colors.volt;
  return colors[tone];
}

interface MiniRowProps {
  icon: IconName;
  tone: SessionTone;
  title: string;
  detail: string;
}

export function MiniRow({ icon, tone, title, detail }: MiniRowProps) {
  return (
    <Card style={styles.card}>
      <View style={styles.icon}>
        <Icon name={icon} color={toneColor(tone)} size={18} />
      </View>
      <View style={styles.text}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.detail}>{detail}</Text>
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: { flexDirection: "row", alignItems: "center", gap: 12, paddingVertical: 12 },
  icon: { width: 38, height: 38, borderRadius: radii.md, backgroundColor: "#1E3350", alignItems: "center", justifyContent: "center" },
  text: { flex: 1 },
  title: { fontFamily: fonts.semibold, fontSize: 14.5, color: colors.text },
  detail: { fontFamily: fonts.body, fontSize: 12.5, color: colors.textFaint },
});
