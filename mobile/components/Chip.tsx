import { StyleSheet, Text, View } from "react-native";
import { colors, fonts, radii } from "@/constants/theme";

const TONES = {
  amber: { bg: "rgba(255,178,63,0.14)", fg: colors.z4 },
  blue: { bg: "rgba(63,162,255,0.15)", fg: "#7CC0FF" },
  volt: { bg: "rgba(212,255,63,0.14)", fg: colors.volt },
} as const;

export function Chip({ label, tone = "amber" }: { label: string; tone?: keyof typeof TONES }) {
  const t = TONES[tone];
  return (
    <View style={[styles.chip, { backgroundColor: t.bg }]}>
      <Text style={[styles.text, { color: t.fg }]}>{label.toUpperCase()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  chip: { alignSelf: "flex-start", borderRadius: radii.pill, paddingHorizontal: 9, paddingVertical: 4 },
  text: { fontFamily: fonts.semibold, fontSize: 10.5, letterSpacing: 0.3 },
});
