import { StyleSheet, Text, View } from "react-native";
import Svg, { Path } from "react-native-svg";
import { colors, fonts } from "@/constants/theme";

function linePath(points: [number, number][]): string {
  const [first, ...rest] = points;
  if (!first) return "";
  return `M${first[0]} ${first[1]}L${rest.map(([x, y]) => `${x} ${y}`).join(" ")}`;
}

export function ElevationProfile({ points, landmarks }: { points: [number, number][]; landmarks: string[] }) {
  const line = linePath(points);
  return (
    <View style={styles.wrap}>
      <Svg width="100%" height={56} viewBox="0 0 200 42" preserveAspectRatio="none">
        <Path d={`${line}V42H0z`} fill="rgba(47,107,255,0.35)" />
        <Path d={line} stroke={colors.blueLight} strokeWidth={1.5} fill="none" />
      </Svg>
      <View style={styles.axis}>
        {landmarks.map((l) => (
          <Text key={l} style={styles.label}>
            {l}
          </Text>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { gap: 4, marginTop: 6 },
  axis: { flexDirection: "row", justifyContent: "space-between" },
  label: { fontFamily: fonts.medium, fontSize: 11, color: colors.textFaint },
});
