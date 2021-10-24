import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import HeroImage from '../../static/heroImage.svg'

export default function HeroSection() {
  return (
    <Grid container justifyContent='space-between' style={{ marginTop: 180 }}>
      <Grid item xs={7}>
        <Grid container direction='column' alignItems='flex-start'>
          <Grid item>
            <Grid container justifyContent='flex-start'>
              <Typography style={{ fontSize: "56px", fontWeight: 500 }} variant='h1' align='left' display='inline'>
                {"Track Products' "}
              </Typography>
              <Typography style={{ fontSize: "56px", fontWeight: 600, color: "#425D50" }} align='left' display='inline'>
                {"Quality "}
              </Typography >
              <Typography style={{ fontSize: "56px", fontWeight: 500 }} align='left' display='inline'>
                &nbsp;{"and"}&nbsp;
              </Typography>
              <Typography style={{ fontSize: "56px", fontWeight: 600, color: "#FCAD8F" }} align='left' display='inline'>
                Connect {" "}
              </Typography >
              <Typography style={{ fontSize: "56px", fontWeight: 500 }} align='left' display='inline'>
                with Vendors{" "}
              </Typography>
            </Grid>
          </Grid>
          <Grid item>
            <Typography align='left'>We help you to track the shelf life of your products along the  supply chain as well as to ship the right produce to the right buyers at the right time. </Typography>
          </Grid>
          <Grid item style={{ marginTop: 40 }}>
            <Button variant='contained'><Typography>See in action</Typography></Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={5}>
        <div style={{
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "contain",
          backgroundImage: `url("${HeroImage}")`,
          height: 500,
          width: "100%",
        }}></div>
      </Grid>
    </Grid>
  )

}