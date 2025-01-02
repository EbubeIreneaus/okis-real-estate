import type { Config } from "tailwindcss";
import daisyui from "daisyui";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./component/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#1E293B",

          secondary: "#f59e0b",

          accent: "#1E293B",

          neutral: "#162524",

          "base-100": "#f5f5f4",

          info: "#007ed7",

          success: "#009b6f",

          warning: "#d27e00",

          error: "#dc2626",
        },
      },
      "acid",
    ],
  },
} satisfies Config;
