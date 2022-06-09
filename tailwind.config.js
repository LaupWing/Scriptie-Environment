module.exports = {
   // Er is hier een comment bij gezet
   purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
   darkMode: false, // or 'media' or 'class'
   theme: {
      fontFamily:{
         sans: ['Montserrat', 'sans-serif']
      },
      extend: {
         colors:{
            main: '#ffff',
            background: '#EDF0F2',
            mainLight: '#fafafa',
            mainDark: '#dadce0',
            highlight: '#2EA3F2',
            highlightDark: '#2990d6',
            accept:  '#69e6bb',
            warning: '#ff4f59',
            update: '#ffb366',
            copy: '#eb77d8',
            send: '#1facca',
            font: '#2c3e50',
            pop: '#b1b1b1',
            border: '#ced2d9',
            logo: '#E5323C'
         }
      },
   },
   variants: {
      extend: {},
   },
   plugins: [],
}