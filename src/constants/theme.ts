import "@/global.css";

import { Platform } from "react-native";

export const Colors = {
  light: {
    background: "#FAF9FD",
    primary: "#6750A4",
    text: "#252330",
    textSecondary: "#716C7D",
    backgroundElement: "#F0F0F3",
    backgroundCard: "#FFFFFF",
    borderCard: "#EAE6EF",
    checkboxBorder: "#49454F",
    backgroundSelected: "#E0E1E6",
  },
  dark: {
    background: "#141218",
    primary: "#D0BCFF",
    text: "#FFFFFF",
    textSecondary: "#B0B4BA",
    backgroundElement: "#212225",
    backgroundCard: "#212225",
    borderCard: "#49454F",
    checkboxBorder: "#CAC4D0",
    backgroundSelected: "#2E3135",
  },
} as const;

export type ThemeColor = keyof typeof Colors.light & keyof typeof Colors.dark;

export const Fonts = Platform.select({
  ios: {
    mono: "ui-monospace",
  },
  default: {
    mono: "monospace",
  },
  web: {
    mono: "var(--font-mono)",
  },
});

export const Spacing = {
  half: 2,
  one: 4,
  two: 8,
  three: 16,
  four: 24,
  five: 32,
  six: 64,
} as const;

export const BottomTabInset = Platform.select({ ios: 50, android: 80 }) ?? 0;
export const MaxContentWidth = 800;
