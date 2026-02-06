import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["var(--font-poppins)"],
        cormorant: ["var(--font-cormorant)"],
        playfair: ["var(--font-playfair)"],
      },
    },
    
  },
  plugins: [],
};

export default config;