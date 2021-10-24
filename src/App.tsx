import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, useHistory, Redirect } from "react-router-dom";
import { ThemeProvider } from '@mui/material/styles';
import { mainTheme } from "./style/theme";
import HomePage from "./pages/Homepage/Homepage";
import AboutPage from "./pages/Aboutpage/Aboutpage";
import LoginPage from "./pages/Loginpage/LoginPage";
import SignupPage from "./pages/SignupPage/SignupPage";
import ScannerPage from "./pages/ScannerPage/ScannerPage";




function App() {
  const [isLogin, setIsLogin] = useState(false);
  const router = useHistory();

  useEffect(() => {
    const access_token = localStorage.getItem("access_token");
    if (access_token) {
      setIsLogin(true);
    }
  }, [])
  return (
    <>
      <ThemeProvider theme={mainTheme}>
        <div className="App">
          <Router>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/about" component={AboutPage} />
              <Route exact path='/login' render={() => (isLogin ? <Redirect to="/dashboard" /> : <LoginPage />)} />
              <Route exact path='/signup' render={() => (isLogin ? <Redirect to="/dashboard" /> : <SignupPage />)} />
              <Route exact path="/scanner" component={ScannerPage} />
            </Switch>
          </Router>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
