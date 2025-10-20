import { useMemo, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Card } from "@/components/Card";
import { Checklist } from "@/components/Checklist";
import { Chip } from "@/components/Chip";
import { ElevationProfile } from "@/components/ElevationProfile";
import { Screen } from "@/components/Screen";
import { colors, fonts, spacing, text } from "@/constants/theme";
import { harborGrades, raceGoal } from "@/lib/data";
import { courseSplits, formatDuration, formatPace, pacePerMile } from "@/lib/pace";

export default function RacePrepScreen() {
  const [checklist, setChecklist] = useState(raceGoal.checklist);
  const [fast, slow] = raceGoal.rangeSeconds;
  const pace = formatPace(pacePerMile(raceGoal.predictedSeconds, raceGoal.distanceMeters));
  const splits = useMemo(
    () => courseSplits(raceGoal.predictedSeconds, raceGoal.distanceMeters, harborGrades),
    [],
  );

  function toggle(id: string) {
    setChecklist((items) => items.map((item) => (item.id === id ? { ...item, done: !item.done } : item)));
  }

  return (
    <Screen kicker={`${raceGoal.dateLabel} · ${raceGoal.daysOut} days`} title="Race prep">
      <Card style={styles.gap}>
        <Chip label="Predicted finish" tone="volt" />
        <Text style={text.big}>{formatDuration(raceGoal.predictedSeconds)}</Text>
        <Text style={text.caption}>
          Likely range {formatDuration(fast)} – {formatDuration(slow)} · {pace} /mi
        </Text>
        <ElevationProfile points={raceGoal.elevation} landmarks={raceGoal.landmarks} />
      </Card>

      <Card>
        <Text style={styles.cardTitle}>Taper checklist</Text>
        <Checklist items={checklist} onToggle={toggle} />
      </Card>

      <Card>
        <Text style={styles.cardTitle}>Course-aware splits</Text>
        <View style={styles.splits}>
          {splits.map((split, i) => (
            <View key={i} style={styles.split}>
              <Text style={styles.mile}>Mi {i + 1}</Text>
              <Text style={styles.splitPace}>{formatPace(split)}</Text>
            </View>
          ))}
        </View>
      </Card>
    </Screen>
  );
}

const styles = StyleSheet.create({
  gap: { gap: spacing.sm },
  cardTitle: { fontFamily: fonts.semibold, fontSize: 14, color: colors.text },
  splits: { flexDirection: "row", flexWrap: "wrap", gap: 8, marginTop: 10 },
  split: { width: "22%", backgroundColor: colors.cardAlt, borderRadius: 10, paddingVertical: 8, alignItems: "center" },
  mile: { fontFamily: fonts.medium, fontSize: 10.5, color: colors.textFaint },
  splitPace: { fontFamily: fonts.display, fontSize: 14, color: colors.text },
});
