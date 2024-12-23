
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {

    },
  },
  plugins: [require("daisyui"), require('@tailwindcss/typography')],

  daisyui: {
    themes: ["retro", "dracula"],
    darkTheme: "retro",
  },
}

