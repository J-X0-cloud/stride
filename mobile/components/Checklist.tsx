import * as Haptics from "expo-haptics";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { colors, fonts } from "@/constants/theme";
import type { ChecklistItem } from "@/lib/types";

export function Checklist({ items, onToggle }: { items: ChecklistItem[]; onToggle: (id: string) => void }) {
  return (
    <View style={styles.list}>
      {items.map((item) => (
        <Pressable
          key={item.id}
          style={styles.row}
          accessibilityRole="checkbox"
          accessibilityState={{ checked: item.done }}
          onPress={() => {
            void Haptics.selectionAsync();
            onToggle(item.id);
          }}
        >
          <View style={[styles.box, item.done && styles.boxDone]}>{item.done ? <View style={styles.inner} /> : null}</View>
          <Text style={[styles.label, item.done && styles.labelDone]}>{item.label}</Text>
        </Pressable>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  list: { gap: 10, marginTop: 8 },
  row: { flexDirection: "row", alignItems: "center", gap: 10 },
  box: { width: 18, height: 18, borderRadius: 5, borderWidth: 1.5, borderColor: colors.rest, alignItems: "center", justifyContent: "center" },
  boxDone: { borderColor: colors.volt, backgroundColor: colors.volt },
  inner: { width: 8, height: 8, borderRadius: 2, backgroundColor: colors.card },
  label: { fontFamily: fonts.body, fontSize: 14, color: colors.text },
  labelDone: { color: colors.textMuted },
});
