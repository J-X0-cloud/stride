import { StyleSheet, Text, View } from "react-native";
import { colors, fonts } from "@/constants/theme";

export interface Stat {
  value: string;
  label: string;
}

/** Evenly spaced stats; `columns` wraps them into a grid (e.g. 2 for the live-run sheet). */
export function StatRow({ stats, columns, size = 17 }: { stats: Stat[]; columns?: number; size?: number }) {
  const basis = columns ? `${100 / columns - 2}%` : undefined;
  return (
    <View style={[styles.row, columns ? styles.wrap : null]}>
      {stats.map((s) => (
        <View key={s.label} style={[styles.cell, basis ? { flexBasis: basis as `${number}%` } : styles.flex]}>
          <Text style={[styles.value, { fontSize: size }]}>{s.value}</Text>
          <Text style={styles.label}>{s.label}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: "row", gap: 8 },
  wrap: { flexWrap: "wrap", rowGap: 12 },
  cell: {},
  flex: { flex: 1 },
  value: { fontFamily: fonts.display, color: colors.textStrong, letterSpacing: -0.4 },
  label: { fontFamily: fonts.body, fontSize: 11.5, color: colors.textFaint },
});
