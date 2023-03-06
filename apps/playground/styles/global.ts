import { globalCss } from '@zaut-ui-beta/react'

export const globalStyles = globalCss({
  '*': {
    boxSizing: 'border-box',
    padding: '$0',
    margin: '$0',
  },

  body: {
    backgroundColor: '$white',
    color: '$gray-900',
    fontFamily: '$default',
    '-webkit-font-smoothing': 'antialiased',
  },

  a: {
    all: 'unset',
    appearance: 'none',
    display: 'block',
  },

  '@import': [
    "url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap')",
  ],

  '@font-face': [
    {
      fontFamily: 'Poppins, sans-serif',
      src: "url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap')",
    },
  ],
})
