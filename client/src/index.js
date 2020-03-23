import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { ThemeProvider } from './theme';
import { AppContextProvider } from './context';

ReactDOM.render(
        
        <ThemeProvider>
            <AppContextProvider>
                <div style={{backgroundColor: "#333333", paddingBottom: "10px"}}><App /></div>
                
            </AppContextProvider>
            
        </ThemeProvider>, document.getElementById('root'));
    


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
