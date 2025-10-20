import { StyleSheet, View } from "react-native";
import Svg, { Defs, LinearGradient, Rect, Stop } from "react-native-svg";
import { colors } from "@/constants/theme";

const STOPS = [colors.z1, colors.z2, colors.z3, colors.z4, colors.z5];

/** Z1→Z5 gradient with a marker at `position` (0–100). */
export function ZoneScale({ position }: { position: number }) {
  return (
    <View style={styles.wrap} accessibilityLabel={`Current effort at ${position}% of the zone scale`}>
      <Svg width="100%" height={8}>
        <Defs>
          <LinearGradient id="zones" x1="0" y1="0" x2="1" y2="0">
            {STOPS.map((c, i) => (
              <Stop key={c} offset={i / (STOPS.length - 1)} stopColor={c} />
            ))}
          </LinearGradient>
        </Defs>
        <Rect x="0" y="0" width="100%" height="8" rx="4" fill="url(#zones)" />
      </Svg>
      <View style={[styles.marker, { left: `${position}%` }]} />
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { height: 18, justifyContent: "center" },
  marker: { position: "absolute", width: 4, height: 18, marginLeft: -2, borderRadius: 2, backgroundColor: "#fff" },
});
