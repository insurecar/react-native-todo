import { Input } from "@/components/ui";
import { useTheme } from "@/hooks/use-theme";
import { useState } from "react";
import { StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const AddTask = () => {
  const colors = useTheme();
  const [title, setTitle] = useState("");

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: colors.background }]}
      edges={["top", "left", "right"]}
    >
      <Text style={[styles.title, { color: colors.text }]}>Нова задача</Text>
      <Input
        placeholder="Назва задачі"
        value={title}
        onChangeText={setTitle}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 12,
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
    marginBottom: 16,
  },
});

export default AddTask;
