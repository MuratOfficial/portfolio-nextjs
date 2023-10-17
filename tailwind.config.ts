import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: "320px",
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "bg-theme": "rgba(30, 30, 38, 1)",
      },
      keyframes: {
        fadeDown: {
          "0%, 100%": {
            transform: "translateY(0%)",
            opacity: "0.2",
          },
          "50%": {
            transform: "translateY(80%)",
            opacity: "1",
          },
        },
      },
      animation: {
        fadeDown: "fadeDown 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
