import { useTheme } from "@/hooks/use-theme";
import { StyleSheet, Text, Pressable } from "react-native";
import { SymbolView } from "expo-symbols";

interface BackButtonProps {
  onPress: () => void;
}

export const BackButton = ({ onPress }: BackButtonProps) => {
  const colors = useTheme();
  const styles = createStyles(colors);

  return (
    <Pressable style={styles.box} onPress={onPress} accessibilityRole="button">
      <SymbolView
        name={{
          ios: "chevron.left",
          android: "chevron_left",
          web: "chevron_left",
        }}
        size={20}
        tintColor={colors.primary}
      />
      <Text style={styles.text}>Назад</Text>
    </Pressable>
  );
};

const createStyles = (colors: ReturnType<typeof useTheme>) =>
  StyleSheet.create({
    box: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
    },
    text: {
      color: colors.primary,
      fontSize: 16,
    },
  });
