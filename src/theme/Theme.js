import React from "react";
import { CssBaseline } from '@material-ui/core';
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import './Theme.css'
import color from "@material-ui/core/colors/amber";



const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Fira Sans',
      'Roboto',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    fontWeightRegular: '500',
  },
  palette: {
    primary: {
        main: '#124b73',
    },
    secondary: {
      main: '#dfdfdf',
    },
    text :{
      primary: "#000",
      secondary: "#fff",
    },
  },
  overrides:{
      
      MuiListItem :{
        root:{
          "&.Mui-selected": {
            backgroundColor: 'rgba(18, 75, 115,0.5)',
          },
          "&.Mui-selected:hover": {
            backgroundColor: 'rgba(18, 75, 115,0.7)',
          },
          "&:hover": {
            backgroundColor: 'black',
          },
          
        },   
        button:{
          "&:hover": {
            backgroundColor: 'rgba(18, 75, 115,0.7)',
          },
        } 
            
      },
      MuiCheckbox:{
        root:{
          
          "&:hover":{
            background: "rgba(18, 75, 115,0.7)",
          },
          // color:'#124b73',
          // background: 'rgba(0,0,0,0.1)',
          // '&:checked:hover':{
          //   backgroundColor: "##FC4136",
          // },

          // '&checked:hover':{
          //   backgroundColor: "##FC4136",
          // },

        },
        colorPrimary:{          
          background: 'rgba(0,0,0,0.1)',
          color:'#124b73',
          "&.Mui-checked": {
            backgroundColor: 'rgba(18, 75, 115,0.3)',
          },
          "&.Mui-checked:hover": {
            backgroundColor: 'red',
          },     
          
        },
        checked:{
          background: "#000",
          "&.Mui-checked:hover": {
            backgroundColor: 'red',
          },  
        }
      },
      
  }
});

export default function({ children }) {
  return <ThemeProvider theme={theme}>
    <CssBaseline />
    {children}
    </ThemeProvider>;
}
