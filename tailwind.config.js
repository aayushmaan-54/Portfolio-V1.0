/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main': '#2C2B27',
        'lhtMain': '#f3f2ec',
        'primary': '#F5F4EF',
        'secondary': '#B8B5A9',
        'tertiary': '#2E2F2A',
        'brdr': '#41403D',
        'dull': '#6C6C60',
        'oyellow': '#F9C041',
        'bgreen': '#105652',
        'cherryRed': '#B91646',
        'yorange': '#AF5631',
      },
      fontFamily: {
        'chi': ["cursive-heavy-italic", "cursive"],
        'cbi': ["cursive-bold-italic", "cursive"],
        'cb': ["cursive-bold", "cursive"],
        'nb': ["normal-black", "sans-serif"],
        'cnl': ["CursiveNormal-light"],
        'cnli': ["CursiveNormal-light-italic", "sans-serif"],
        'cns': ["CursiveNormal-semiBold", "sans-serif"],
      },
      keyframes: {
        darkBlink: {
          'from, to': { color: 'transparent' },
          '35%': { color: '#F9C041' }
        },

        lightBlink: {
          'from, to': { color: 'transparent' },
          '35%': { color: '#105652' }
        },
      },
      animation: {
        darkBlink: 'darkBlink 1s step-end infinite',
        lightBlink: 'lightBlink 1s step-end infinite',
      },
    },
  },
  plugins: [],
  darkMode: "class",
}