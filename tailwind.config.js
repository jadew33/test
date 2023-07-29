/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        light: ["var(--font-gotham-light)"],
        medium: ["var(--font-gotham-medium)"],
        bold: ["var(--font-gotham-bold)"],
        book: ["var(--font-gotham-book)"],
      },
    },
  },
  plugins: [],
};
