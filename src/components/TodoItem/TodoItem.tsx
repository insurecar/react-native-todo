import { useTheme } from "@/hooks/use-theme";
import { StyleSheet, Text, View } from "react-native";
import { Checkbox } from "expo-checkbox";
import { SymbolView } from "expo-symbols";

interface TodoItemProps {
  title: string;
  subtitle: string;
  isCompleted: boolean;
}

export const TodoItem = ({ title, subtitle, isCompleted }: TodoItemProps) => {
  const colors = useTheme();

  return (
    <View
      style={[
        styles.item,
        {
          backgroundColor: colors.backgroundCard,
          borderColor: colors.borderCard,
        },
      ]}
    >
      <Checkbox
        value={isCompleted}
        color={isCompleted ? colors.primary : colors.checkboxBorder}
        style={styles.checkbox}
      />
      <View style={styles.titles}>
        <Text style={[styles.title, { color: colors.text }]}>{title}</Text>
        <Text style={[styles.subtitle, { color: colors.textSecondary }]}>
          {subtitle}
        </Text>
      </View>
      <SymbolView
        name={{
          ios: "chevron.right",
          android: "chevron_right",
          web: "chevron_right",
        }}
        size={20}
        tintColor={colors.textSecondary}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 17,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 16,
    borderWidth: 1,
    gap: 12,
  },
  checkbox: {
    width: 18,
    height: 18,
  },
  titles: {
    display: "flex",
    alignContent: "space-between",
    flex: 1,
    gap: 4,
  },
  title: {
    fontSize: 16,
  },
  subtitle: {
    fontSize: 12,
  },
});
