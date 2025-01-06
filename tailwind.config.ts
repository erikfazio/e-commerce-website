import type { Config } from "tailwindcss";
import { PluginAPI } from "tailwindcss/types/config";

export default {
  corePlugins: {
    container: false,
  },
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      mobile: "375px",
      tablet: "768px",
      desktop: "1440px",
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [
    function ({ addComponents }: PluginAPI) {
      addComponents({
        ".container": {
          width: "100%",
          "@screen mobile": {
            maxWidth: "100%",
            padding: "0 1rem",
          },
          "@screen tablet": {
            maxWidth: "100%",
            padding: "0 2rem",
          },
          "@screen desktop": {
            maxWidth: "1280px",
            padding: "0 2rem",
          },
        },
      });
    },
  ],
} satisfies Config;
