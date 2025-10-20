import { useRouter } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import { Card } from "@/components/Card";
import { Chip } from "@/components/Chip";
import { Icon } from "@/components/Icon";
import { MiniRow } from "@/components/MiniRow";
import { PrimaryButton } from "@/components/PrimaryButton";
import { Screen } from "@/components/Screen";
import { StatRow } from "@/components/StatRow";
import { WeekStrip } from "@/components/WeekStrip";
import { WorkoutStructure } from "@/components/WorkoutStructure";
import { colors, spacing, text } from "@/constants/theme";
import { runner, todayLabel, todaysWorkout, upcoming, week } from "@/lib/data";

export default function TodayScreen() {
  const router = useRouter();
  const w = todaysWorkout;

  return (
    <Screen kicker={todayLabel} title={`Morning, ${runner.firstName}`}>
      <WeekStrip days={week} />

      <Card style={styles.workout}>
        <Chip label={w.chip} />
        <View>
          <Text style={text.cardTitle}>{w.title}</Text>
          <Text style={text.caption}>{w.detail}</Text>
        </View>
        <StatRow
          stats={[
            { value: w.distanceMi.toFixed(1), label: "miles" },
            { value: String(w.durationMin), label: "min" },
            { value: w.targetPace, label: "target" },
          ]}
        />
        <WorkoutStructure blocks={w.blocks} />
        <PrimaryButton
          label="Start workout"
          icon={<Icon name="play" color={colors.ink} size={14} />}
          onPress={() => router.push("/run")}
        />
      </Card>

      {upcoming.map((session) => (
        <MiniRow key={session.id} icon={session.icon} tone={session.tone} title={session.title} detail={session.detail} />
      ))}
    </Screen>
  );
}

const styles = StyleSheet.create({
  workout: { gap: spacing.md },
});
