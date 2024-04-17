export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        light: {
          text: '#08090c',
          background: '#f6f7f9',
          primary: '#6d799c',
          secondary: '#c3aac5',
          accent: '#b38fa5',
        },
        dark: {
          text: '#f3f4f7',
          background: '#060709',
          primary: '#636f92',
          secondary: '#533a55',
          accent: '#704c63',
        },
        margin: {
          'auto': 'auto',
          '0': '0',
        },
      },
    },
  },  
  plugins: [],
}
