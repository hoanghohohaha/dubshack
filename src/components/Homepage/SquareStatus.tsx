import { Grid, Typography } from '@mui/material';
import React from 'react';

export default function SquareStatusCard({ index, number, content }: any) {
  return (
    <>
      <Grid item xs={4} style={{ marginTop: "120px", padding: "36px 40px", background: "wheat", borderRadius: 24, border: "10px white solid" }}>
        <Grid container>
          <Grid item>
            <Typography>{index}</Typography>
          </Grid>
          <Grid item xs={5} style={{ borderBottom: "2px black solid", transform: "translateY(-40%)" }}>

          </Grid>
        </Grid>
        <Grid container style={{ marginTop: 64 }}>
          <Typography variant='h1'>{number}</Typography>
        </Grid>
        <Grid container style={{ marginTop: 8 }}>
          <Typography align='left'>{content}</Typography>
        </Grid>
      </Grid>
    </>
  )
}