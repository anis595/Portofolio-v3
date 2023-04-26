/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      screens: {
        phone: "380px",
        tablet: "834px",
        laptop: "1440px",
        desktop: "1920px",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          phone: "2rem",
          tablet: "3rem",
          laptop: "6rem",
          desktop: "4rem",
        },
      },
      plugins: [],
    },
  },
};
