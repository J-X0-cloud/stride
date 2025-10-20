import * as Haptics from "expo-haptics";
import { useRouter } from "expo-router";
import { useMemo, useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Chip } from "@/components/Chip";
import { Icon } from "@/components/Icon";
import { PrimaryButton } from "@/components/PrimaryButton";
import { RouteMap } from "@/components/RouteMap";
import { StatRow } from "@/components/StatRow";
import { ZoneScale } from "@/components/ZoneScale";
import { colors, fonts, spacing, text } from "@/constants/theme";
import { liveRunSnapshot as snap, runner } from "@/lib/data";
import { formatDuration, formatPace, parseDuration, zoneScalePosition, zonesFrom5k } from "@/lib/pace";
import { useRunTimer } from "@/lib/useRunTimer";

/** Live run: map on top, a sheet with current pace, metrics and zone position below. */
export default function LiveRunScreen() {
  const router = useRouter();
  const [running, setRunning] = useState(true);
  const elapsed = useRunTimer(snap.elapsedSec, running);
  const zones = useMemo(() => zonesFrom5k(parseDuration(runner.recent5k)), []);
  const position = zoneScalePosition(zones, snap.currentPaceSec);

  function togglePause() {
    void Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    setRunning((r) => !r);
  }

  return (
    <View style={styles.root}>
      <RouteMap />
      <SafeAreaView edges={["top"]} style={styles.topBar} pointerEvents="box-none">
        <Pressable onPress={() => router.back()} accessibilityRole="button" accessibilityLabel="End run" style={styles.close}>
          <Icon name="close" color="#fff" size={18} />
        </Pressable>
      </SafeAreaView>

      <SafeAreaView edges={["bottom"]} style={styles.sheet}>
        <View style={styles.row}>
          <Chip label={`Interval ${snap.interval} of ${snap.intervals}`} />
          <Text style={styles.remaining}>{snap.remainingMi.toFixed(2)} mi left</Text>
        </View>
        <Text style={styles.paceLabel}>Current pace</Text>
        <Text style={text.big}>
          {formatPace(snap.currentPaceSec)}
          <Text style={styles.unit}> /mi</Text>
        </Text>
        <StatRow
          columns={2}
          size={24}
          stats={[
            { value: snap.distanceMi.toFixed(2), label: "miles" },
            { value: formatDuration(elapsed), label: "time" },
            { value: String(snap.heartRate), label: "bpm" },
            { value: `+${snap.elevationGainFt}`, label: "ft gain" },
          ]}
        />
        <ZoneScale position={position} />
        <PrimaryButton
          variant="white"
          label={running ? "Pause" : "Resume"}
          icon={<Icon name={running ? "pause" : "play"} color={colors.ink} size={16} strokeWidth={3} />}
          onPress={togglePause}
        />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: colors.screen },
  topBar: { position: "absolute", top: 0, left: 0, right: 0, paddingHorizontal: spacing.lg },
  close: {
    marginTop: spacing.sm,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "rgba(11,22,34,0.7)",
    alignItems: "center",
    justifyContent: "center",
  },
  sheet: {
    backgroundColor: colors.tabBar,
    borderTopLeftRadius: 26,
    borderTopRightRadius: 26,
    marginTop: -24,
    paddingHorizontal: spacing.xl,
    paddingTop: spacing.lg,
    gap: spacing.md,
  },
  row: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
  remaining: { fontFamily: fonts.medium, fontSize: 12.5, color: colors.textMuted },
  paceLabel: { fontFamily: fonts.medium, fontSize: 12, color: colors.textFaint, marginBottom: -8 },
  unit: { fontFamily: fonts.display, fontSize: 18, color: colors.textMuted, letterSpacing: 0 },
});
