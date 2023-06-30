/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx,html}",
    "./app/**/*.{js,ts,jsx,tsx,mdx,html}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx,html}",
    "./components/**/*.{js,ts,jsx,tsx,mdx,html}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      listStyleImage: {
        checkmark: 'url("https://js.pngtree.com/web3/images/multiImage01.svg")',
    },
    listStyleType: {
      none: 'none',
      square: 'square',
      roman:'upper-roman',
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    plugin(function({ addUtilities }){
      addUtilities({
        '.content-auto': {
          'content-visibility': 'auto',
        },
        '.content-hidden': {
          'content-visibility': 'hidden',
        },
        '.content-visible': {
          'content-visibility': 'visible',
        },
        '.vertical-text': {
          'writing-mode': 'vertical-rl',
          'text-orientation': 'mixed',
        }
      })
    }),
    // plugin(function({ addBase, theme }) {
    //   addBase({
    //     'h1': { fontSize: theme('fontSize.2xl') },
    //     'h2': { fontSize: theme('fontSize.xl') },
    //     'h3': { fontSize: theme('fontSize.lg') },
    //   })
    // })
  ],
}
}
