import { Button, Grid, Typography } from "@mui/material";
import React from "react";

const StartedDetail = ({ number, title, content }: any) => (
  <Grid container style={{ marginTop: 60 }}>
    <Grid item xs={2}><Typography variant='h2'>{number}</Typography></Grid>
    <Grid item xs={10}>
      <Grid container direction='column'>
        <Grid item>
          <Typography align='left' variant='h2' gutterBottom>{title}</Typography>
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

    <Grid container justifyContent='space-evenly' style={{ marginTop: 80, marginBottom: 80 }}>
      <Grid item xs={12} style={{ marginBottom: 64 }}>
        <Typography align='left' variant='h1'>How to get started?</Typography>
      </Grid>
      <Grid item>
        <div style={{
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundImage: 'url("https://upload.wikimedia.org/wikipedia/commons/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg")',
          height: 500,
          width: 400,
        }}></div>
      </Grid>
      <Grid item xs={6}>
        <Grid container>
          <Grid item>
            <Grid container direction='row'>
              <StartedDetail number="01" content="A digitized system that will help traders identify produce in your storage that will rot in the near future." title="Quality Control & Analytics" />
              <StartedDetail number="01" content="A digitized system that will help traders identify produce in your storage that will rot in the near future." title="Quality Control & Analytics" />
              <StartedDetail number="01" content="A digitized system that will help traders identify produce in your storage that will rot in the near future." title="Quality Control & Analytics" />
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