module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      borderWidth: {
        setBorder: "14px",
      },
      colors: {
        primary_color: "#292d33",
        secondry_color: "#e68c51",
        hf_color: "#333333",
        header_bg: "#f2f2f4",
        body_color: "#ffffff",
        btn_bg: "#2a405e ",
      },
      fontFamily: {
        body_font: "Poppins",
        title_font: "'Ubuntu'",
      },
      // height: {
      //   photoHeight: "250px",
      // },
    },
  },
  plugins: [],
};
