import { Button, Grid, Typography } from "@mui/material";
import React from "react";

export default function HeroSection() {
  return (
    <Grid container justifyContent='space-between' style={{ marginTop: 124 }}>
      <Grid item xs={5}>
        <Grid container direction='column' alignItems='flex-start'>
          <Grid item>
            <Typography variant='h1' align='left'>
              Track Products' Quality and Connect with Vendors
            </Typography>
          </Grid>
          <Grid item>
            <Typography align='left'>We help you to track the shelf life of your products along the  supply chain as well as to ship the right produce to the right buyers at the right time. </Typography>
          </Grid>
          <Grid item>
            <Button variant='contained'><Typography>See in action</Typography></Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={6}>
        <div style={{
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundImage: 'url("https://upload.wikimedia.org/wikipedia/commons/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg")',
          height: 500,
          width: "100%",
        }}></div>
      </Grid>
    </Grid>
  )

}