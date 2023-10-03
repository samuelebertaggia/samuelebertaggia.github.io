module.exports = {
  darkMode: "class",
  content: ["**/*.{ts,tsx}"],
  theme: {
    extend: {
      screens: {
        print: { raw: "print" },
        screen: { raw: "screen" },
      },
    },
    fontFamily: {
      sans: ["Noto Sans Display", "sans-serif"],
    },
  },
};
