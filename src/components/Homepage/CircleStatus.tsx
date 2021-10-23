import { Avatar, Grid, Typography } from "@mui/material";
import React from "react";

export default function CircleStatusCard({ image, number, content }: any) {

  return (
    <Grid item xs={4}>
      <Grid container direction='column' alignItems='center' style={{ padding: "10px 20px" }}>
        <Grid item>
          <Avatar style={{ width: 233, height: 233 }} src={image ? image : ""} />
        </Grid>
        <Grid item style={{ marginTop: 24 }}>
          <Typography variant='h2'>{number}</Typography>
        </Grid>
        <Grid item style={{ marginTop: 16 }}>
          <Typography>{content}</Typography>
        </Grid>
      </Grid>
    </Grid>
  )
}