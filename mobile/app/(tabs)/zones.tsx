import { useMemo } from "react";
import { StyleSheet, Text, View } from "react-native";
import { MiniRow } from "@/components/MiniRow";
import { Screen } from "@/components/Screen";
import { ZoneBar } from "@/components/ZoneBar";
import { colors, fonts, spacing } from "@/constants/theme";
import { runner, timeInZone } from "@/lib/data";
import { parseDuration, zonesFrom5k } from "@/lib/pace";

export default function ZonesScreen() {
  const zones = useMemo(() => zonesFrom5k(parseDuration(runner.recent5k)), []);

  return (
    <Screen kicker={`From your ${runner.recent5k} 5K`} title="Pace zones">
      <Text style={styles.note}>Time in zone, last 4 weeks</Text>
      <View style={styles.list}>
        {zones.map((zone) => (
          <ZoneBar key={zone.id} zone={zone} share={timeInZone[zone.id]} />
        ))}
      </View>
      <MiniRow
        icon="refresh"
        tone="volt"
        title={`Zones updated ${runner.zonesUpdated}`}
        detail={`Threshold pace improved ${runner.thresholdGainSec} sec/mi`}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  note: { fontFamily: fonts.medium, fontSize: 12, color: colors.textMuted },
  list: { gap: spacing.sm },
});
