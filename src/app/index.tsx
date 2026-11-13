import { useTheme } from "@/hooks/use-theme";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Header, TodoList } from "@/components";

export default function HomeScreen() {
  const colors = useTheme();

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: colors.background }]}
      edges={["top", "left", "right"]}
    >
      <Header />
      <TodoList />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
  },
});
