import { StyleSheet, View } from "react-native";
import { colors } from "@/constants/theme";
import type { WorkoutBlock } from "@/lib/types";

export function WorkoutStructure({ blocks, height = 44 }: { blocks: WorkoutBlock[]; height?: number }) {
  return (
    <View style={[styles.row, { height }]} accessibilityLabel="Workout structure">
      {blocks.map((block, i) => (
        <View key={i} style={[styles.bar, { height: `${block.height}%`, backgroundColor: colors[block.tone] }]} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: "row", alignItems: "flex-end", gap: 3 },
  bar: { flex: 1, borderTopLeftRadius: 4, borderTopRightRadius: 4, borderBottomLeftRadius: 1, borderBottomRightRadius: 1 },
});
