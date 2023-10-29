/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#fff",
        offwhite: "#D2D2D3",
        secondary_45: "rgba(0, 0, 0, 0.45)",
        secondary_06: "rgba(0, 0, 0, 0.06)",
        black: "#000",
        grey: "#FAFAFA",
        light_grey: "rgb(144, 158, 162,0.5)",
        dark_grey: "#8C8C8C",
        secondary_button: "#D9D9D9",
        black_85: "rgba(0, 0, 0, 0.85)",
        success: "#237804",
        danger: "#CF1322",
        blue: "#1890FF",
        skyBlue: "#E6F7FF",
        green: "#119758",
        
        green_gradient:
          "linear-gradient(265.05deg, #EBF9FF 8.66%, #DDF8F7 48.17%, #DDF8ED 89.52%)",
      },
      boxShadow: {
        dark: "0 2px 1px -1px rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 1px 3px 0 rgba(0,0,0,.12)", //White shadow
        light_grey: "rgba(100, 100, 111, 0.2) 0px 2px 5px 0px",
      },
    },
    fontFamily: {
      display: ["Open Sans", "sans-serif"],
    },
  },
  plugins: [],
};
