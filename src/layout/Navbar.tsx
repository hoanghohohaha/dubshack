import { AppBar, Avatar, Button, Container, Grid, Link, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom'
import BrandName from '../components/Homepage/utils/BrandName';
import Logo from '../static/logo.png';

export default function Navbar() {
  const [isLogin, setIsLogin] = useState(false);
  const router = useHistory();
  const location = useLocation();

  useEffect(() => {
    const access_token = localStorage.getItem("access_token");
    if (access_token) {
      setIsLogin(true);
    }
  }, [])

  return (
    <AppBar position="fixed" style={{ zIndex: 1 }}>
      <Grid container style={{
        height: 60, padding: 2, background: "white", position: "-webkit-sticky",
      }}>
        <Container style={{ margin: "auto" }
        } >
          <Grid container alignItems='center' justifyContent='space-between'>
            <Grid item>
              <Link href="/" style={{ textDecoration: "none" }}>
                <Grid container alignItems='center'>
                  <Grid item>
                    <div style={{
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                      backgroundSize: "contain",
                      backgroundImage: `url("${Logo}")`,
                      height: 40,
                      width: 100,
                    }}></div>
                  </Grid>
                  <Grid item style={{ marginLeft: 16 }}>
                    <BrandName />
                  </Grid>
                </Grid>
              </Link>
            </Grid>
            <Grid item>
              <Grid container>
                <Grid item>
                  <Button variant='text' href='/trade'>
                    <Typography>Trader Platform</Typography>
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant='text' href='/about'>
                    <Typography>Our solution</Typography>
                  </Button>
                </Grid>
                <Grid item style={{ display: isLogin ? "" : "none" }}>
                  <Button variant='text' href='/dashboard'>
                    <Typography>Dashboard</Typography>
                  </Button>
                </Grid>
                <Grid item >
                  <Button variant='contained' onClick={() => {
                    if (isLogin) {
                      localStorage.clear();
                      if (location.pathname === "/") {
                        router.go(0);
                      }
                      else {
                        router.push("/");
                        router.go(0);
                      }
                    }
                    else {
                      router.push("/login")
                    }
                  }}>
                    <Typography>{isLogin ? "Logout" : "Login"}</Typography>
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </ Container>
      </Grid>
    </AppBar>
  )
}