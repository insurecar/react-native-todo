import { Input, SubTitle } from "@/components/ui";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { router } from "expo-router";
import { Screen } from "@/components";
import { Title, BackButton, Button } from "@/components/ui";

export const AddTaskScreen = () => {
  const [title, setTitle] = useState<string>("");
  const [subTitle, setSubTitle] = useState<string>("");
  const saveTask = () => {
    const task = { title, subTitle, isCompleted: false };
  };

  return (
    <Screen>
      <View style={styles.wrapper}>
        <BackButton onPress={() => router.back()} />
        <View>
          <Title size="m" text="Деталі задачі" />
          <SubTitle size="l" text="Один крок ближче до результату" />
        </View>
        <Input
          placeholder="Зібрати перший todo"
          value={title}
          onChangeText={(text) => setTitle(text)}
          title="Назва"
        />
        <Input
          placeholder="Зібрати перший todo"
          size="m"
          value={subTitle}
          onChangeText={(text) => setSubTitle(text)}
          title="Опис"
          multiline={true}
        />
        <Button text="Зберегти зміни" onPress={saveTask} />
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    display: "flex",
    rowGap: 24,
  },
});
