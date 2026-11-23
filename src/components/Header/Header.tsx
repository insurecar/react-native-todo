import { useTheme } from "@/hooks/use-theme";
import { StyleSheet, Text, View } from "react-native";

import { Title, SubTitle } from "../ui";

export const Header = () => {
  const colors = useTheme();

  return (
    <View style={styles.header}>
      <Text style={[styles.eyebrow, { color: colors.primary }]}>
        Трохи щодня
      </Text>
      <Title size="l" text="Мої задачі" />
      <SubTitle size="l" text="Звільни голову для важливого." />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "column",
    paddingTop: 12,
  },
  eyebrow: {
    fontSize: 11,
  },
  subtitle: {
    fontSize: 16,
  },
});
