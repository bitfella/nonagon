import 'typeface-montserrat';
import { normalize } from 'styled-normalize';
import { createGlobalStyle } from 'styled-components/macro';

const theme = {
  colors: {
    a: '#FFFFFF', // white
    b: '#0028B3', // blue
    c: '#FFB948', // yellow
    d: '#F52174', // purple
    e: '#000000', // black
    f: '#CECECE', // grey
    g: '#353535', // dark grey
    h: '#DFDFDF', // light grey
    apple: {
      systemBlue: '#0A84FF',
      systemGreen: '#30D158'
    },
    spotify: {
      green: '#1DB954',
      greenHover: '#1ED760',
      red: '#E10000',
      redHover: '#F8000A'
    }
  },
  fonts: {
    body: `'Montserrat', sans-serif`
  },
  sizes: {
    phi: 1.61803398875,
    appMaxWidth: 768,
    headerHeight: 60
  }
};

const GlobalStyles = createGlobalStyle`
  ${normalize}

  html {
    color: ${theme.colors.e};
    font-family: ${theme.fonts.body};
    font-size: 1em;
    font-weight: 400;
    line-height: ${theme.sizes.phi};
    background-color: ${theme.colors.a};
  }

  *:focus {
    outline: none;
  }
`;

export { GlobalStyles, theme };
