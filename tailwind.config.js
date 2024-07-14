export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: 'var(--body-background)',
        text: 'var(--body-color)',
        btnCol : 'var(--btn-hover)',
        btnText : 'var(--btn-hover-text)'
      },
      fontFamily : {
        'bold' : ['bold','sans-serif'],
        'regular' : ['regular','sans-serif'],
        'medium' : ['medium','sans-serif'],
        'thin' : ['thin','sans-serif']

      },
    
      
    },
  },
  plugins: [],
}