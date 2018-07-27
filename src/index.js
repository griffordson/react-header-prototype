
import React from 'react';
import { render } from 'react-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Demo from './demo';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#003366"
    },
    secondary: {
      // main: "#FFCC00"
      main: "#edf3fe"
    },
    text: {
      secondary: "rgba(0, 51, 102, 1)"
    }
  }
});

const rootElement = document.querySelector('#root');
if (rootElement) {
  render((
    <MuiThemeProvider theme={theme}>
      <Demo />
    </MuiThemeProvider>
  ), rootElement);
}
      
