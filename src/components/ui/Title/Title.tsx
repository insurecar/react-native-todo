import { Text, StyleSheet } from "react-native";
import { useTheme } from "@/hooks/use-theme";
import { StyleProp, TextStyle } from "react-native";

interface TitleProps {
  size: "s" | "m" | "l";
  text: string;
  style?: StyleProp<TextStyle>;
}

export const Title = ({ text, size = "s", style }: TitleProps) => {
  const color = useTheme();
  return (
    <Text style={[styles.title, styles[size], { color: color.text }, style]}>
      {text}
    </Text>
  );
};

const styles = StyleSheet.create({
  title: {
    fontWeight: "bold",
    marginVertical: 5,
  },
  s: {
    fontSize: 28,
  },
  m: {
    fontSize: 30,
  },
  l: {
    fontSize: 32,
  },
});
