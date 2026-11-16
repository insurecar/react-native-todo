import { useTheme } from "@/hooks/use-theme";
import { Pressable, StyleSheet, Text } from "react-native";

export const Button = ({
  text,
  onPress,
}: {
  text: string;
  onPress: () => void;
}) => {
  const colors = useTheme();

  return (
    <Pressable
      accessibilityRole="button"
      onPress={onPress}
      style={({ pressed }) => [
        styles.button,
        { backgroundColor: colors.primary },
        pressed && styles.pressed,
      ]}
    >
      <Text style={[styles.text, { color: colors.onPrimary }]}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    minHeight: 56,
    paddingHorizontal: 24,
    paddingVertical: 16,
    borderRadius: 28,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "stretch",
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "600",
    textAlign: "center",
  },
  pressed: {
    opacity: 0.8,
  },
});
