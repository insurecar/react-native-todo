import { useTheme } from "@/hooks/use-theme";
import { TextInput, StyleSheet } from "react-native";

interface InputProps {
  placeholder: string;
  value: string;
  multiline?: boolean;
  onChangeText?: (text: string) => void;
  size?: "s" | "m" | "l";
}

export const Input = ({
  placeholder,
  value,
  multiline = false,
  onChangeText,
  size = "s",
}: InputProps) => {
  const colors = useTheme();

  return (
    <TextInput
      style={[
        styles.input,
        styles[size],
        { borderColor: colors.primary, color: colors.text },
      ]}
      multiline={multiline}
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      placeholderTextColor={colors.textSecondary}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 16,
    marginVertical: 8,
  },
  s: {
    height: 58,
  },
  m: {
    height: 132,
  },
  l: {
    height: 160,
  },
});
