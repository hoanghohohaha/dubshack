import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import GetStarted from '../../static/getStarted.svg'

const StartedDetail = ({ number, title, content }: any) => (
  <Grid container style={{ marginTop: 60 }}>
    <Grid item xs={2}><Typography variant='h2' style={{ fontSize: "24px", fontWeight: 700, color: "#FCCEC0" }}>{number}</Typography></Grid>
    <Grid item xs={10}>
      <Grid container direction='column'>
        <Grid item>
          <Typography align='left' variant='h2' style={{ fontSize: "24px", fontWeight: 700, color: "#73A78E", marginBottom: 20 }} gutterBottom>{title}</Typography>
        </Grid>
        <Grid item>
          <Typography align='left'>{content}</Typography>
        </Grid>
      </Grid>
    </Grid>
  </Grid>
)

export default function GetStartSection() {
  return (

    <Grid container justifyContent='space-evenly' style={{ marginTop: 180, marginBottom: 240 }}>
      <Grid item xs={12} style={{ marginBottom: 64 }}>
        <Typography align='left' variant='h1' color='primary'>How to get started?</Typography>
      </Grid>
      <Grid item>
        <div style={{
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "contain",
          backgroundImage: `url("${GetStarted}")`,
          height: 500,
          width: 400,
        }}></div>
      </Grid>
      <Grid item xs={6}>
        <Grid container>
          <Grid item>
            <Grid container direction='row'>
              <StartedDetail number="01" content="A digitized system that will help traders identify produce in your storage that will rot in the near future." title="Quality Control & Analytics" />
              <StartedDetail number="02" title="Data Visualization" content="Traders can use this data to track what is in the warehouse and sell the produce to the right buyers before it is too late." />
              <StartedDetail number="03" title="Matching" content="Based on this data, we will have a digital marketplace to suggest buyes who match your produce's specific quality levels and stocks." />
            </Grid>
          </Grid>
          <Grid item></Grid>
          <Grid item></Grid>
        </Grid>
      </Grid>
      <Grid container>
        <Grid container justifyContent='center' style={{ marginTop: 64 }}>
          <Button variant='contained'>
            <Typography>Get Started</Typography>
          </Button>
        </Grid>
      </Grid>
    </Grid>
  )
}