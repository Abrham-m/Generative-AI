/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        blueness: "#02645b",
        greenish: "#015965",
        blue_btn_color: "rgb(44 93 118)",
        blue_btn_hover_color: "rgb(60 133 171)",
        service_color: "#00235c",
        service_box_color: "rgb(50 70 102)",
        user_bg_color: "#415a77",
      },
    },
  },
  plugins: [],
};
