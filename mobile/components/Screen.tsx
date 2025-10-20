import type { ReactNode } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors, fonts, spacing, text } from "@/constants/theme";
import { runner } from "@/lib/data";

interface ScreenProps {
  kicker: string;
  title: string;
  showAvatar?: boolean;
  children: ReactNode;
}

export function Screen({ kicker, title, showAvatar = true, children }: ScreenProps) {
  return (
    <SafeAreaView style={styles.safe} edges={["top"]}>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <View>
            <Text style={text.kicker}>{kicker}</Text>
            <Text style={text.title} accessibilityRole="header">
              {title}
            </Text>
          </View>
          {showAvatar ? (
            <View style={styles.avatar} accessibilityLabel={`${runner.firstName}'s profile`}>
              <Text style={styles.avatarText}>{runner.initials}</Text>
            </View>
          ) : null}
        </View>
        {children}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.screen },
  content: { paddingHorizontal: spacing.lg, paddingBottom: spacing.xxl, gap: spacing.md },
  header: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingVertical: spacing.sm },
  avatar: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: colors.blue,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "#7A5CFF",
  },
  avatarText: { fontFamily: fonts.semibold, fontSize: 13, color: "#fff" },
});
