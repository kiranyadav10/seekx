/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#F5385D",
      },
      boxShadow: {
        "3xl": "0px 8px 21px rgba(0, 0, 0, 0.16)",
      },
    },
  },
  plugins: [],
};
