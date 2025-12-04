import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
    },
    extend: {
      colors: {
        // main logo red (100 YEARS / RASTI LARI)
        brand: {
          DEFAULT: "#e1253b",
          dark: "#b4192f",
          soft: "#fde4ea",
        },
        // violet outline color from the logo
        accent: {
          DEFAULT: "#4c4aa1",
          soft: "#e1def8",
        },
        // light grey-ish background like logo backdrop
        background: {
          DEFAULT: "#f5f5fb",
        },
      },
      boxShadow: {
        // softer, slightly violet shadow
        soft: "0 18px 45px rgba(76, 74, 161, 0.2)",
      },
      borderRadius: {
        "2xl": "1.25rem",
      },
    },
  },
  plugins: [],
};

export default config;
