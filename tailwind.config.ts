import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: { min: "640px", max: "767px" },
        md: { min: "768px", max: "1023px" },
        lg: { min: "1280px", max: "1535px" },
        xl: { min: "1536px" },
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        neuBold: ["var(--font-neu-bold)"],
        neuMedium: ["var(--font-neu-medium)"],
        neuBook: ["var(--font-neu-book)"],
        neuThin: ["var(--font-neu-thin)"],
      },
    },
    plugins: [],
  },
};
export default config;
