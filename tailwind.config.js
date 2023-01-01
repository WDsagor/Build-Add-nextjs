/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        light: {
          primary: "#269c20",
          secondary: "#96f28c",
          accent: "#ffd8a5",
          neutral: "#2E3238",
          "base-100": "#ffffff",
          info: "#21B5DE",
          success: "#4ED491",
          warning: "#F68813",
          error: "#F12230",
        },
      },
      {
        dark: {
          primary: "#2E3238",
          secondary: "#FDE68A",
          accent: "#4B5563",
          neutral: "#D9F99D",
          "base-100": "#1F2937",
          info: "#98A8DD",
          success: "#1BBB70",
          warning: "#F59E0B",
          error: "#FB7185",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
