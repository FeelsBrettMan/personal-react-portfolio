import React from 'react';
import './App.css';
import {NavBar} from "./components/NavBar";
import {theme} from "./themes/theme";
import {ThemeProvider} from "@material-ui/styles";



const App: React.FC = () => {
  return (
    <div className="App">
        <ThemeProvider theme={theme}>
            <NavBar/>
        </ThemeProvider>
    </div>
  );
}

export default App;
