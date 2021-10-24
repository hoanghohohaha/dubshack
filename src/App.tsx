import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, useHistory, Redirect, useLocation } from "react-router-dom";
import { ThemeProvider } from '@mui/material/styles';
import { mainTheme } from "./style/theme";
import HomePage from "./pages/Homepage/Homepage";
import AboutPage from "./pages/Aboutpage/Aboutpage";
import LoginPage from "./pages/Loginpage/LoginPage";
import SignupPage from "./pages/SignupPage/SignupPage";
import ScannerPage from "./pages/ScannerPage/ScannerPage";



import DashBoardPage from "./pages/DashBoardPage/DashBoardPage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const router = useHistory();
  // const yy = useLocation();

  useEffect(() => {
    const access_token = localStorage.getItem("access_token");
    if (access_token) {
      setIsLogin(true);
      console.log("Logined")
    }
  }, [])

  return (
    <>
      <ThemeProvider theme={mainTheme}>
        <div className="App">
          <Router>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/scanner" component={ScannerPage} />
              <Route path="/about" component={AboutPage} />
              <Route path='/login' render={() => (isLogin ? <Redirect to="/dashboard" /> : <LoginPage />)} />
              <Route path='/signup' render={() => (isLogin ? <Redirect to="/dashboard" /> : <SignupPage />)} />
              {isLogin && <Route path="/dashboard" component={DashBoardPage} />}
              <Route path='*'>
                <ErrorPage />
              </Route>
            </Switch>
          </Router>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
