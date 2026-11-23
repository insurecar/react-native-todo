import { useTheme } from "@/hooks/use-theme";
import { StyleSheet, View } from "react-native";
import { router } from "expo-router";

import { Header, TodoList, Screen } from "@/components";
import { Button } from "@/components/ui";

export default function HomeScreen() {
  const colors = useTheme();

  return (
    <Screen>
      <Header />
      <TodoList />
      <View style={styles.actions}>
        <Button
          text="+ Додати задачу"
          onPress={() => router.push("/add-task")}
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  actions: {
    marginTop: 24,
  },
});
