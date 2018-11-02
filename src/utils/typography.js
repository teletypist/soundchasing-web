import Typography from 'typography'

const typography = new Typography({
  baseFontSize: '16px',
  baseLineHeight: 1.5,
  scaleRatio: 2.0,
  googleFonts: [
      {
        name: 'Rubik',
        styles: [
          '300',
        ],
      },
      {
        name: 'Lato',
        styles: [
          '300',
          '300i',
          '400',
          '400i',
        ],
      },
    ],
  headerFontFamily: ['Rubik', 'sans-serif'],
  bodyFontFamily: ['Lato', 'sans-serif'],
  // See below for the full list of options.
})

export default typography
