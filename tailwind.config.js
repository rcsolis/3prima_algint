module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily:{
        'body': ["Open Sans", "Helvetica", "Times"],
      },
      colors:{
        primary:{
            light: '#9cddff',
            DEFAULT: '#5E9FC6',
            dark: '#02516A',
        },
        secondary:{
          light:'#7dd4ca',
          DEFAULT: '#508983',
          dark: '#1f786e',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
      require('daisyui'),
  ],
  daisyui: {
    themes: [
      {
        'mytheme': {
          'primary': '#5E9FC6',
          'primary-focus': '#02516A',
          'primary-content': '#ffffff',
          'secondary': '#508983',
          'secondary-focus': '#1f786e',
          'secondary-content': '#ffffff',
          'accent': '#37cdbe',
          'accent-focus': '#2aa79b',
          'accent-content': '#ffffff',
          'neutral': '#3d4451',
          'neutral-focus': '#2a2e37',
          'neutral-content': '#ffffff',
          'base-100': '#ffffff',
          'base-200': '#f9fafb',
          'base-300': '#d1d5db',
          'base-content': '#1f2937',
          'info': '#2094f3',
          'success': '#7dd4ca',
          'warning': '#ff9900',
          'error': '#ff5724',
        },
      },
    ],
  },
}
