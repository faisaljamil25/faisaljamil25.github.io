const colors = require('tailwindcss/colors');
const { fontFamily, spacing } = require('tailwindcss/defaultTheme');

module.exports = {
  purge: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/layouts/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class', // or 'media' or 'class'
  mode: 'jit',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', ...fontFamily.sans],
      },
      colors: {
        'dark-mode': '#1A202C',
        subtext: '#757575',
        accent: '#3c8bd6',
        'accent-light': '#5FA0DD',
        'accent-dark': '#256DB1',
        'light-black': '#1A1A1B',
        teal: colors.teal,
        sky: colors.sky,
        gray: colors.gray,
      },
      typography: {
        DEFAULT: {
          css: {
            a: {
              color: '#3c8bd6',
              '&:hover': {
                color: '#256DB1',
              },
            },
            ' h2, h3, h4': {
              'scroll-margin-top': spacing['24'],
            },
          },
        },
        dark: {
          css: {
            color: colors['gray']['200'],

            a: {
              color: '#5FA0DD',
              '&:hover': {
                color: '#3c8bd6',
              },
              code: { color: colors['blue']['400'] },
            },
            'h2,h3,h4': {
              color: colors['white'],
              'scroll-margin-top': spacing['24'],
            },
            strong: {
              color: colors['gray']['200'],
            },
            blockquote: {
              color: colors['gray']['200'],
            },
            ul: {
              li: {
                '&:before': { backgroundColor: colors['gray']['400'] },
              },
            },
          },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
  ],
};
