import { View, Text } from "react-native";
import { StyleSheet } from "react-native";
import { TodoItem } from "..";
import { useTheme } from "@/hooks/use-theme";

export const TodoList = () => {
  const colors = useTheme();

  return (
    <View style={styles.container}>
      <Text style={[styles.sectionTitle, { color: colors.textSecondary }]}>
        Сьогодні · 3
      </Text>
      <TodoItem
        title="Sample Title"
        subtitle="Sample Subtitle"
        isCompleted={false}
      />
      <TodoItem
        title="Sample Title"
        subtitle="Sample Subtitle"
        isCompleted={false}
      />
      <TodoItem
        title="Sample Title"
        subtitle="Sample Subtitle"
        isCompleted={true}
      />
      <TodoItem
        title="Sample Title"
        subtitle="Sample Subtitle"
        isCompleted={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: 12,
    lineHeight: 16,
    fontWeight: "600",
    letterSpacing: 1,
    textTransform: "uppercase",
  },
  container: {
    display: "flex",
    rowGap: 10,
  },
});
