import type { Config } from "tailwindcss";
const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#0b0d10",
        panel: "#111418",
        panel2: "#15191e",
        border: "#23272e",
        muted: "#8b94a3",
        text: "#e6e8eb",
        accent: "#10b981",
      },
    },
  },
  plugins: [],
};
export default config;
