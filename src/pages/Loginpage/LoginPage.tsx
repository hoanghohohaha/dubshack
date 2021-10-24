import { Button, Checkbox, Grid, Link, TextField, Typography } from '@mui/material';
import React, { ChangeEvent, useState } from 'react';
import withLayout from '../../layout/withLayout';
import axios from 'axios';
import { authServer } from "../../config/apiUrl.json"

import { useHistory } from 'react-router-dom'

import Login from '../../static/login.svg';
import GoogleIcon from '@mui/icons-material/Google';

interface Itoken {
  access_token: string;
  refresh_token: string;
}

function LoginPage() {
  const [input, setInput] = useState({
    email: "",
    password: ""
  })
  const router = useHistory();

  function login() {
    axios.post<Itoken>(authServer + "/token", input)
      .then(res => {
        localStorage.setItem("access_token", res.data.access_token);
        router.push("/dashboard")
      }).catch(e => console.log(e))
  }

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    e.persist();
    setInput((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };


  return (
    <Grid container justifyContent='space-between' style={{ marginTop: 250, marginBottom: 250 }}>
      <Grid item xs={6}>
        <div style={{
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "contain",
          backgroundImage: `url("${Login}")`,
          height: 500,
          width: "100%",
        }}></div>
      </Grid>
      <Grid item xs={5}>
        <Grid container direction='column' spacing={2}>
          <Grid item>
            <Typography align='left' variant='h1' style={{ fontSize: 24, fontWeight: 400, marginBottom: 24 }}>Welcome back</Typography>
          </Grid>
          <Grid item>
            <Typography align='left' variant='h2' style={{ fontSize: 30, fontWeight: 700, marginBottom: 24 }}>Login to your account</Typography>
          </Grid>
          <Grid item>
            <Typography align='left'>Email</Typography>
          </Grid>
          <Grid item>
            <TextField name="email" value={input.email} onChange={(e) => { handleInputChange(e) }} style={{ width: "100%" }} placeholder='Email'></TextField>
          </Grid>
          <Grid item>
            <Typography align='left'>Password</Typography>
          </Grid>
          <Grid item>
            <TextField name="password" value={input.password} onChange={(e) => { handleInputChange(e) }} style={{ width: "100%" }} placeholder='Password'></TextField>
          </Grid>
          <Grid item>
            <Grid container justifyContent='space-between' alignItems='center'>
              <Grid item>
                <Grid container justifyContent='center' alignItems='center'>
                  <Checkbox></Checkbox>
                  <Typography>Remember me</Typography>
                </Grid>
              </Grid>
              <Grid item>
                <Typography style={{ color: "#425D50" }}>Forgot password?</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Button onClick={() => { login() }} fullWidth variant='contained'>
              <Typography>Login now</Typography>
            </Button>
          </Grid>
          <Grid item>
            <Button fullWidth variant='contained' startIcon={<GoogleIcon />}>
              <Typography>Login with Google</Typography>
            </Button>
          </Grid>
          <Grid item>
            <Typography display='inline'>Don't have an account </Typography>
            <Link href='/signup' style={{ textDecoration: "none" }}>
              <Typography display='inline' style={{ color: "#425D50" }}>Join free today</Typography>
            </Link>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )

}

export default withLayout(LoginPage);
