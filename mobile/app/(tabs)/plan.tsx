import { StyleSheet, Text, View } from "react-native";
import { PlanDayRow } from "@/components/PlanDayRow";
import { ProgressBar } from "@/components/ProgressBar";
import { Screen } from "@/components/Screen";
import { colors, fonts, spacing } from "@/constants/theme";
import { todaysWorkout, trainingBlock } from "@/lib/data";

const TODAY_DATE = 14;

export default function PlanScreen() {
  const b = trainingBlock;
  const progress = (b.week / b.totalWeeks) * 100;

  return (
    <Screen kicker={b.race} title="Your plan">
      <View style={styles.progress}>
        <View style={styles.progressRow}>
          <Text style={styles.meta}>
            Week {b.week} of {b.totalWeeks} · {b.phase}
          </Text>
          <Text style={styles.meta}>{b.weeklyMiles.toFixed(1)} mi</Text>
        </View>
        <ProgressBar value={progress} />
      </View>

      <View style={styles.days} accessibilityLabel={`This week, ${todaysWorkout.title} today`}>
        {b.days.map((day) => (
          <PlanDayRow key={day.weekday} day={day} today={day.date === TODAY_DATE} />
        ))}
      </View>

      <Text style={styles.hint}>Drag a session to another day and Stride rebalances the rest of the week.</Text>
    </Screen>
  );
}

const styles = StyleSheet.create({
  progress: { gap: 6 },
  progressRow: { flexDirection: "row", justifyContent: "space-between" },
  meta: { fontFamily: fonts.medium, fontSize: 12, color: colors.textMuted },
  days: { gap: spacing.sm - 2 },
  hint: { fontFamily: fonts.body, fontSize: 12.5, color: colors.textFaint, textAlign: "center", marginTop: spacing.sm },
});
