import { Grid, Typography, TextField, Button, Checkbox, Link } from "@mui/material";
import React, { ChangeEvent, useEffect, useState } from "react";
import withLayout from "../../layout/withLayout";
import axios from "axios";
import { authServer } from "../../config/apiUrl.json"
import { useHistory } from "react-router-dom";
import Google from "@mui/icons-material/Google";

function SignUpPage() {
  const router = useHistory();
  const [isUser, setIsUser] = useState(true);
  const [input, setInput] = useState({
    email: "",
    password: "",
    role: "User",
  });

  useEffect(() => {
    setInput((prev) => ({
      ...prev,
      role: isUser ? "User" : "Saler"
    }))
  }, [isUser])

  function submitProfile() {
    console.log(input)
    if (input.email !== "" || input.password !== "") {
      axios.post(authServer + "/user", input)
        .catch((e) => console.log(e))
        .then(res => {
          if (res) { router.push("/login") }
        })
      console.log("WWWWW");
    } else {
      console.log("invalid");
    }
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
    <Grid container justifyContent='space-between'>
      <Grid item xs={6}>
        <Grid style={{
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundImage: 'url("https://ds393qgzrxwzn.cloudfront.net/cat1/img/images/0/uIqmGYLat5.jpg")',
          height: "78vh",
          width: "100%",
        }}>
          <Grid container direction='column' justifyContent='space-evenly' alignItems='center' style={{
            height: "78vh",
            width: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.47)"
          }}>
            <Grid item style={{ width: 350 }}>
              <Typography style={{ color: "white", fontSize: 35, fontWeight: 700 }}>End your food waste here.</Typography>
            </Grid>
            <Grid item style={{ width: 350, marginTop: -200 }}>
              <Typography style={{ color: "white", fontSize: 35, fontWeight: 500 }}>Let's fight against the massive disruptions created by COVID-19.</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={5} style={{ marginTop: 100 }}>
        <Grid container direction='column' spacing={2}>
          <Grid item>
            <Typography align='left' variant='h1' style={{ fontSize: 24, fontWeight: 400, }}>Welcome.</Typography>
          </Grid>
          <Grid item>
            <Typography align='left' variant='h2'>Create your account</Typography>
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
            <Typography align='left'>Name</Typography>
          </Grid>
          <Grid item>
            <TextField style={{ width: "100%" }} placeholder='Name'></TextField>
          </Grid>
          <Grid item>
            <Grid container justifyContent='space-between' spacing={0}>
              <Grid item xs={5}>
                <Grid item>
                  <Typography align='left'>Company name</Typography>
                </Grid>
                <Grid item>
                  <TextField style={{ width: "100%" }} placeholder='Company name'></TextField>
                </Grid>
              </Grid>
              <Grid item xs={6}>
                <Grid item>
                  <Typography align='left'>Job title</Typography>
                </Grid>
                <Grid item>
                  <TextField style={{ width: "100%" }} placeholder='Job title'></TextField>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Typography align='left'>Zipcode</Typography>
          </Grid>
          <Grid item>
            <TextField style={{ width: "100%" }} placeholder='Ex:98195'></TextField>
          </Grid>
          <Grid item>
            <Grid container direction='column' justifyContent='space-between'>
              <Grid item>
                <Grid container justifyContent='flex-start' alignItems='center'>
                  <Checkbox checked={isUser} onClick={() => setIsUser(!isUser)}></Checkbox>
                  <Typography>I'm a buyer</Typography>
                </Grid>
              </Grid>
              <Grid item>
                <Grid container justifyContent='flex-start' alignItems='center'>
                  <Checkbox checked={!isUser} onClick={() => setIsUser(!isUser)}></Checkbox>
                  <Typography>I'm a retailer</Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Button onClick={() => { submitProfile() }} fullWidth variant='contained'>
              <Typography>Sign Up now</Typography>
            </Button>
          </Grid>
          <Grid item>
            <Button fullWidth variant='contained' startIcon={<Google />}>
              <Typography>Sign Up with Google</Typography>
            </Button>
          </Grid>
          <Grid item>
            <Typography display='inline'>Already have an account? </Typography>
            <Link href='/login' style={{ textDecoration: "none" }}>
              <Typography display='inline'>Sign in now</Typography>
            </Link>
          </Grid>
        </Grid>
      </Grid>
    </Grid >
  )
}

export default withLayout(SignUpPage);