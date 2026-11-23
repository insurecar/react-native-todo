import { Text, StyleSheet } from "react-native";
import { useTheme } from "@/hooks/use-theme";

interface SubTitleProps {
  size: "s" | "m" | "l";
  text: string;
}

export const SubTitle = ({ text, size = "s" }: SubTitleProps) => {
  const color = useTheme();
  return (
    <Text style={[styles.title, styles[size], { color: color.textSecondary }]}>
      {text}
    </Text>
  );
};

const styles = StyleSheet.create({
  title: {
    marginVertical: 5,
  },
  s: {
    fontSize: 11,
  },
  m: {
    fontSize: 13,
  },
  l: {
    fontSize: 15,
  },
});
