import React from 'react';
import './App.css';
import {NavBar} from "./components/NavBar";
import {theme} from "./themes/theme";
import {ThemeProvider} from "@material-ui/styles";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {Home} from "./components/Home";
import {PrevWorks} from "./components/PrevWorks";
import {FunStuff} from "./components/FunStuff";
import Resume from "./components/Resume";


const App: React.FC = () => {
  return (
    <div className="App">
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <NavBar/>
                <Switch>
                    <Route path={"/works"} component={PrevWorks}/>
                    <Route path={"/resume"} component={Resume}/>
                    <Route path={"/fun"} component={FunStuff}/>
                    <Route path={"/"} component={Home}/>
                </Switch>
            </BrowserRouter>
        </ThemeProvider>

    </div>
  );
}

export default App;
