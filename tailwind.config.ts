import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        customWhite: "#eee8b2",
        customCream:"#c18d52",
        customDarkBlue:"#081b1b",
        custonBlue:"#203b37",
        customLightBlue:"#5a8f76",
        customWhiteBlue:"#96cdb0",
        
      },
    },
  },
  plugins: [],
} satisfies Config;
