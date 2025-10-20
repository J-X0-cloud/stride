import { StyleSheet, Text, View } from "react-native";
import { colors, fonts, radii } from "@/constants/theme";
import { formatZoneRange } from "@/lib/pace";
import type { ZoneRange } from "@/lib/types";
import { ProgressBar } from "./ProgressBar";

/** One zone: name, personal pace range and a time-in-zone bar. */
export function ZoneBar({ zone, share }: { zone: ZoneRange; share: number }) {
  return (
    <View style={styles.card}>
      <View style={styles.row}>
        <Text style={styles.name}>
          {zone.label} {zone.name}
        </Text>
        <Text style={styles.pace}>{formatZoneRange(zone)}</Text>
      </View>
      <ProgressBar value={share} color={colors[zone.id]} />
    </View>
  );
}

const styles = StyleSheet.create({
  card: { backgroundColor: colors.cardAlt, borderRadius: radii.md + 2, padding: 12, gap: 8 },
  row: { flexDirection: "row", justifyContent: "space-between", alignItems: "baseline" },
  name: { fontFamily: fonts.semibold, fontSize: 14.5, color: colors.text },
  pace: { fontFamily: fonts.display, fontSize: 13.5, color: "#C8D6E6" },
});
