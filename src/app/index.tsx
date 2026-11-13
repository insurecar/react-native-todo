import { useTheme } from "@/hooks/use-theme";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Header, TodoList } from "@/components";
import { Button } from "@/components/ui";

export default function HomeScreen() {
  const colors = useTheme();

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: colors.background }]}
      edges={["top", "left", "right"]}
    >
      <Header />
      <TodoList />
      <View style={styles.actions}>
        <Button text="+ Додати задачу" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  actions: {
    marginTop: 24,
  },
  container: {
    flex: 1,
    paddingHorizontal: 24,
  },
});
