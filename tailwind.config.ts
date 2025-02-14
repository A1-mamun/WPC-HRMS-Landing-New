import { heroui } from "@heroui/react";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xxs: "400px",

      xs: "480px",

      sm: "640px",

      md: "768px",

      lg: "1024px",

      xl: "1280px",

      "2xl": "1536px",

      "3xl": "1700px",

      "4xl": "1880px",
    },
    fontSize: {
      xs: ["12px", "16px"],
      sm: ["14px", "20px"],
      base: ["16px", "19.5px"],
      lg: ["18px", "21.94px"],
      xl: ["20px", "24.38px"],
      "2xl": ["24px", "29.26px"],
      "3xl": ["28px", "32px"],
      "4xl": ["32px", "38px"],
      "5xl": ["40px", "48px"],
      "6xl": ["48px", "58px"],
      "7xl": ["64px", "74px"],
      "8xl": ["96px", "106px"],
    },
    extend: {
      colors: {
        "hrms-blue": "#1C406F",
        "hrms-blue-light": "#3B5174",
        "hrms-blue-dark": "#233D64",
        "hrms-blue-hover": "#2561b4",
        "hrms-gold": "#DD8F27",
        "hrms-gold-dark": "#B1721F",
        "hrms-red": "#ED4A45",
        "hrms-red-light": "#982F2C",
        "hrms-red-dark": "#7A2623",
        "hrms-yellow": "#EFCB9C",
        "hrms-white": "#FAFAFA",
        "hrms-black": "#191818",
        "bg-primary": "#FFF7ED",
        "bg-text": "#FFEED9",
        "whatsapp-green": "#25D366",
      },
      fontFamily: {
        jura: ["Jura", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  darkMode: "class",
  plugins: [heroui()],
};
export default config;
