import React from "react";
import { CssBaseline } from '@material-ui/core';
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
        main: '#124b73'
    },
    secondary: {
      main: '#dfdfdf'
    },
    text :{
      primary: "#000",
      secondary: "#fff",
    },
  },
  overrides:{
    
  }
});

export default function({ children }) {
  return <ThemeProvider theme={theme}>
    <CssBaseline />
    {children}
    </ThemeProvider>;
}
