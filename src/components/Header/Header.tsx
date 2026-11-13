import { useTheme } from "@/hooks/use-theme";
import { StyleSheet, Text, View } from "react-native";

export const Header = () => {
  const colors = useTheme();

  return (
    <View style={styles.header}>
      <Text style={[styles.eyebrow, { color: colors.primary }]}>
        Трохи щодня
      </Text>
      <Text style={[styles.title, { color: colors.text }]}>Мої задачі</Text>
      <Text style={[styles.subtitle, { color: colors.textSecondary }]}>
        Звільни голову для важливого
      </Text>
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
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginVertical: 5,
  },
  subtitle: {
    fontSize: 16,
  },
});
