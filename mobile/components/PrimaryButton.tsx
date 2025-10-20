import type { ReactNode } from "react";
import { Pressable, StyleSheet, Text } from "react-native";
import { colors, fonts, radii } from "@/constants/theme";

interface PrimaryButtonProps {
  label: string;
  onPress: () => void;
  variant?: "volt" | "white";
  icon?: ReactNode;
}

export function PrimaryButton({ label, onPress, variant = "volt", icon }: PrimaryButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="button"
      style={({ pressed }) => [styles.base, variant === "white" ? styles.white : styles.volt, pressed && styles.pressed]}
    >
      {icon}
      <Text style={styles.label}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  base: {
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: radii.pill,
    paddingVertical: 13,
  },
  volt: { backgroundColor: colors.volt },
  white: { backgroundColor: "#fff" },
  pressed: { opacity: 0.85, transform: [{ scale: 0.98 }] },
  label: { fontFamily: fonts.semibold, fontSize: 15, color: colors.ink },
});
