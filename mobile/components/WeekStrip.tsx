import { StyleSheet, Text, View } from "react-native";
import { colors, fonts } from "@/constants/theme";
import type { WeekDay } from "@/lib/types";

export function WeekStrip({ days }: { days: WeekDay[] }) {
  return (
    <View style={styles.row}>
      {days.map((day) => (
        <View key={`${day.letter}-${day.date}`} style={styles.cell}>
          <Text style={styles.letter}>{day.letter}</Text>
          <View style={[styles.dot, day.state === "done" && styles.done, day.state === "now" && styles.now]}>
            <Text style={[styles.date, day.state === "done" && styles.doneText, day.state === "now" && styles.nowText]}>
              {day.date}
            </Text>
          </View>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: "row", justifyContent: "space-between" },
  cell: { alignItems: "center", gap: 5 },
  letter: { fontFamily: fonts.medium, fontSize: 11, color: colors.textFaint },
  dot: { width: 34, height: 34, borderRadius: 17, backgroundColor: "#16263A", alignItems: "center", justifyContent: "center" },
  done: { backgroundColor: "#1F3A2B" },
  now: { backgroundColor: colors.volt },
  date: { fontFamily: fonts.semibold, fontSize: 13, color: "#DDE7F3" },
  doneText: { color: colors.volt },
  nowText: { color: colors.ink },
});
