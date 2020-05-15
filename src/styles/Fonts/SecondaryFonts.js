import * as secondary from "./secondary"

const SecondaryFonts = `
@font-face {
  font-family: 'Lato';
  font-style: normal;
  font-weight: 300;
  src: local('Lato Light'), local('Lato-Light'),
       url('${secondary.WOFF2_3}') format('woff2'),
       url('${secondary.WOFF_3}') format('woff');
}

@font-face {
  font-family: 'Lato';
  font-style: italic;
  font-weight: 300;
  src: local('Lato Light Italic'), local('Lato-LightItalic'),
       url('${secondary.WOFF2_3I}') format('woff2'),
       url('${secondary.WOFF_3I}') format('woff');
}

@font-face {
  font-family: 'Lato';
  font-style: italic;
  font-weight: 400;
  src: local('Lato Italic'), local('Lato-Italic'),
       url('${secondary.WOFF2_4}') format('woff2'),
       url('${secondary.WOFF_4}') format('woff');
}

@font-face {
  font-family: 'Lato';
  font-style: italic;
  font-weight: 400;
  src: local('Lato Italic'), local('Lato-Italic'),
       url('${secondary.WOFF2_4I}') format('woff2'),
       url('${secondary.WOFF_4I}') format('woff');
}

@font-face {
  font-family: 'Lato';
  font-style: normal;
  font-weight: 700;
  src: local('Lato Bold'), local('Lato-Bold'),
       url('${secondary.WOFF2_7}') format('woff2'),
       url('${secondary.WOFF_7}') format('woff');
}

@font-face {
  font-family: 'Lato';
  font-style: italic;
  font-weight: 700;
  src: local('Lato Bold Italic'), local('Lato-BoldItalic'),
       url('${secondary.WOFF2_7I}') format('woff2'),
       url('${secondary.WOFF_7I}') format('woff');
}



`

export default SecondaryFonts
