module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        desktop: "80em",
        tablet: "60em",
        phone: "17.5em",
      },
      width: {
        container: "1280px",
      },
      maxWidth: {
        container: "1280px",
      },
      colors: {
        "app-light-gray": "hsl(0, 0%, 63%)",
        "app-black": "rgba(0,0,0)",
        "app-white": "hsl(0, 0%, 100%)",
        "app-dark-gray": "hsl(0, 0%, 27%)",
      },
      fontSize: {
        "app-heading": "30px",
        "app-heading-secondary": "22px",
      },
      letterSpacing: {
        "app-widest": "3px",
      },
      height:{
        'app-screen-60':'60vh',
        "app-screen-40":'40vh'
      }
    },
  },
  plugins: [],
};
