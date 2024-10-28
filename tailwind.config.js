import { nextui } from "@nextui-org/theme";

const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", // Enables dark mode based on the 'class' strategy
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "sans-serif"], // Custom font for sans-serif
        mono: ["var(--font-mono)", "monospace"], // Custom font for monospace
      },
      colors: {
        darkBg: "#010313", // Custom background color for dark mode
      },
      boxShadow: {
        input: `0px 2px 3px -1px rgba(0,0,0,0.1), 0px 1px 0px 0px rgba(25,28,33,0.02), 0px 0px 0px 1px rgba(25,28,33,0.08)`, // Custom box-shadow for inputs
      },
    },
  },
  plugins: [
    nextui(), // NextUI theme plugin
    addVariablesForColors, // Custom plugin for CSS color variables
  ],
};

// Custom plugin to create CSS variables for Tailwind colors
function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val]) // Mapping colors to CSS variables
  );

  addBase({
    ":root": newVars, // Add all color variables to the :root
  });
}
