import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        night: "#020617",
        ink: "#030712",
        panel: "#07111f",
        emeraldGlow: "#22c55e",
        skyGlow: "#38bdf8"
      },
      boxShadow: {
        glow:
          "0 0 42px rgba(244, 114, 182, 0.16), 0 0 30px rgba(34, 197, 94, 0.12)",
        blueGlow:
          "0 0 42px rgba(56, 189, 248, 0.12), 0 0 26px rgba(244, 114, 182, 0.1)"
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif"
        ]
      }
    }
  },
  plugins: []
};

export default config;
