import { StyleSheet, Text, View } from "react-native";
import { colors, fonts, radii } from "@/constants/theme";
import type { PlanDay } from "@/lib/types";
import { toneColor } from "./MiniRow";

export function PlanDayRow({ day, today = false }: { day: PlanDay; today?: boolean }) {
  return (
    <View style={[styles.row, today && styles.today]}>
      <View style={[styles.bar, { backgroundColor: toneColor(day.tone) }]} />
      <View style={styles.text}>
        <Text style={styles.date}>
          {day.weekday.toUpperCase()} {day.date}
        </Text>
        <Text style={styles.title}>{day.title}</Text>
      </View>
      <Text style={styles.amount}>{day.amount}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    backgroundColor: colors.cardAlt,
    borderRadius: radii.md + 2,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  today: { borderWidth: 1, borderColor: colors.volt },
  bar: { width: 5, height: 32, borderRadius: 3 },
  text: { flex: 1 },
  date: { fontFamily: fonts.medium, fontSize: 10.5, letterSpacing: 0.6, color: colors.textFaint },
  title: { fontFamily: fonts.semibold, fontSize: 14.5, color: colors.text },
  amount: { fontFamily: fonts.body, fontSize: 12.5, color: colors.textMuted },
});
