import { Avatar, Grid, Typography } from '@mui/material'
import React from 'react'

export default function Footer() {
  return (
    <Grid container style={{ padding: 120, background: "wheat" }} alignItems='center'>
      <Grid item xs={3}>
        <Grid container alignItems='center'>
          <Grid item>
            <Avatar></Avatar>
          </Grid>
          <Grid item style={{ marginLeft: 16 }}>
            <Typography>BeautiFood</Typography>
          </Grid>
        </Grid></Grid>
      <Grid item xs={5}>
        <Grid container justifyContent='space-evenly' style={{ padding: "0px 60px" }}>
          <Grid item>
            <Typography>Mobile app</Typography>
          </Grid>
          <Grid item>
            <Typography>Mobile app</Typography>
          </Grid>
          <Grid item>
            <Typography>Mobile app</Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={4}>
        <Typography>© Photo, Inc. 2019. We love our users!</Typography>
      </Grid>
    </Grid>
  )
}