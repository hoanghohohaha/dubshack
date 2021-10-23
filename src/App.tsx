import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from '@mui/material/styles';
import { mainTheme } from "./style/theme";
import HomePage from "./pages/Homepage/Homepage";
import AboutPage from "./pages/Aboutpage/Aboutpage";


function App() {
  return (
    <>
      <ThemeProvider theme={mainTheme}>
        <div className="App">
          <Router>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/about" component={AboutPage} />
            </Switch>
          </Router>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
