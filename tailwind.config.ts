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
        "deep-burgundy": "#641e1e",
        "golden-ochre": "#c39a1c",
        "walnut-brown": "#3d2f22",
        "slate-gray": "#717679",
        "soft-ivory": "#efeee9",
      },
    },
  },
  plugins: [],
} satisfies Config;
