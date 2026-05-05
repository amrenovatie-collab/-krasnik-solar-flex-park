import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        carbon: "#0d1110",
        graphite: "#151918",
        field: "#88a36a",
        copper: "#c99a57",
        mineral: "#d7e2d5"
      },
      boxShadow: {
        soft: "0 20px 70px rgba(0, 0, 0, 0.24)"
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
