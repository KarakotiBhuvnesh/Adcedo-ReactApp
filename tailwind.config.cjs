module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#030302",
        secondary: "#BDBDBF",
        light: "#d6dae5",
        dark: "#ecd703",
        body: "#686A6F",
      },
      fontFamily: {
        sans: ["Rubik", "sans-serif"],       // body
        heading: ["Oswald", "sans-serif"],   // headings
      },
      fontWeight: {
        bold: 700,
        semibold: 600,
        medium: 500,
      },
      spacing: {
        30: "7.5rem",  // matches Bootstrap-style padding values
        45: "11.25rem",
      },
    },
  },
  plugins: [],
}
