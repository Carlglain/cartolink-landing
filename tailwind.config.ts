// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  theme: {
    fontFamily: {
      sans: ["var(--font-geist-sans)", "ui-sans-serif", "system-ui"],
      mono: ["var(--font-geist-mono)", "ui-monospace", "SFMono-Regular"],
    },

    extend: {
        keyframes: {
            "fade-in": {
                "0%": { opacity: "0" },
                "100%": { opacity: "1" },
            },
            "fade-out": {
                "0%": { opacity: "1" },
                "100%": { opacity: "0" },
            },
        },
        colors:{
            background: "var(--background)",
            foreground: "var(--foreground)",
            border: "var(--border)",
        },
        green:{
            100: "#d1fae5",
            200: "#a7f3d0",
            300: "#6ee7b7",
        },
      animations: {
        "fade-in": "fade-in 0.3s ease-in forwards",
        "fade-out": "fade-out 0.2s ease-out forwards",
    }
    },
  },
  plugins: [],
};

export default config;
