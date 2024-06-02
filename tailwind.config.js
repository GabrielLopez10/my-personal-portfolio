/* eslint-disable @typescript-eslint/no-var-requires */
// @ts-check
const { spacing, fontFamily } = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

export const content = ['./node_modules/pliny/**/*.js', './src/data/**/*.mdx', './src/pages/**/*.{js,ts,tsx}', './src/app/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,tsx}', './src/layouts/**/*.{js,ts,tsx}']
export const theme = {
  extend: {
    colors: {
      'blue-opaque': 'rgb(13 42 148 / 18%)',
      gray: {
        0: '#fff',
        100: '#fafafa',
        200: '#eaeaea',
        300: '#999999',
        400: '#d4d4d4',
        500: '#666666',
        600: '#444444',
        700: '#333333',
        800: '#222222',
        900: '#111010'
      },
      primary: colors.pink
    },
    lineHeight: {
      11: '2.75rem',
      12: '3rem',
      13: '3.25rem',
      14: '3.5rem'
    },
    fontFamily: {
      sans: ['var(--font-space-grotesk)', ...fontFamily.sans]
    },
    typography: (/** @type {(arg0: string) => any} */ theme) => ({
      DEFAULT: {
        css: {
          color: theme('colors.gray.200'),
          a: {
            color: theme('colors.primary.500'),
            '&:hover': {
              color: theme('colors.blue.700')
            },
            code: { color: theme('colors.blue.400') }
          },
          'h2,h3,h4': {
            'scroll-margin-top': spacing[32]
          },
          thead: {
            borderBottomColor: theme('colors.gray.200')
          },
          code: { color: theme('colors.pink.500') },
          'blockquote p:first-of-type::before': false,
          'blockquote p:last-of-type::after': false
        }
      },
      invert: {
        css: {
          a: {
            color: theme('colors.primary.500'),
            '&:hover': {
              color: `${theme('colors.primary.400')}`
            },
            code: { color: theme('colors.primary.400') }
          },
          'h1,h2,h3,h4,h5,h6': {
            color: theme('colors.gray.100')
          }
        }
      }
    })
  }
}
export const plugins = [
  require('@tailwindcss/typography')
]
