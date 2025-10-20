import { StyleSheet, View } from "react-native";
import Svg, { Circle, G, Path } from "react-native-svg";
import { colors } from "@/constants/theme";

/** Street grid with the route so far. Replaced by a live map tile layer once GPS locks. */
export function RouteMap() {
  return (
    <View style={styles.map}>
      <Svg width="100%" height="100%" viewBox="0 0 240 300" preserveAspectRatio="xMidYMid slice">
        <G stroke="#1A2B40" strokeWidth={7} fill="none">
          <Path d="M-10 60L250 30M-10 140L250 120M-10 230L250 215M40 -10L70 310M130 -10L150 310M200 -10L215 310" />
        </G>
        <G stroke="#15253A" strokeWidth={3} fill="none">
          <Path d="M-10 95L250 78M-10 185L250 168M90 -10L110 310M170 -10L185 310" />
        </G>
        <Path
          d="M60 250C60 200 40 170 70 140S140 130 150 95 190 40 205 55"
          stroke={colors.volt}
          strokeWidth={4}
          fill="none"
          strokeLinecap="round"
        />
        <Circle cx="205" cy="55" r="7" fill={colors.volt} stroke={colors.ink} strokeWidth={3} />
        <Circle cx="60" cy="250" r="5" fill="#fff" />
      </Svg>
    </View>
  );
}

const styles = StyleSheet.create({
  map: { flex: 1, backgroundColor: "#0E1A28" },
});
