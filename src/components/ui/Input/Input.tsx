import { useTheme } from "@/hooks/use-theme";
import { TextInput, StyleSheet, View, Text } from "react-native";
import { StyleProp, ViewStyle } from "react-native";

interface InputProps {
  placeholder: string;
  value: string;
  multiline?: boolean;
  onChangeText?: (text: string) => void;
  size?: "s" | "m" | "l";
  title: string;
  style?: StyleProp<ViewStyle>;
}

export const Input = ({
  placeholder,
  value,
  multiline = false,
  onChangeText,
  size = "s",
  title,
  style,
}: InputProps) => {
  const colors = useTheme();

  return (
    <View style={[style]}>
      <Text style={{ color: colors.textSecondary }}>{title}</Text>
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
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderRadius: 16,
    paddingHorizontal: 16,
    marginVertical: 8,
  },
  s: {
    height: 58,
  },
  m: {
    height: 132,
    textAlignVertical: "top",
    paddingVertical: 16,
  },
  l: {
    height: 160,
  },
  text: {
    fontSize: 13,
  },
});
