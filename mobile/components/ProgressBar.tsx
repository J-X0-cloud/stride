import { StyleSheet, View } from "react-native";
import { colors } from "@/constants/theme";

export function ProgressBar({ value, color = colors.volt, height = 6 }: { value: number; color?: string; height?: number }) {
  const pct = Math.min(Math.max(value, 0), 100);
  return (
    <View
      style={[styles.track, { height, borderRadius: height }]}
      accessibilityRole="progressbar"
      accessibilityValue={{ min: 0, max: 100, now: Math.round(pct) }}
    >
      <View style={{ width: `${pct}%`, height: "100%", borderRadius: height, backgroundColor: color }} />
    </View>
  );
}

const styles = StyleSheet.create({
  track: { backgroundColor: colors.track, overflow: "hidden" },
});
