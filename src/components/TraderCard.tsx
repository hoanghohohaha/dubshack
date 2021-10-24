import { Grid, Typography } from "@mui/material";
import React from "react";

export default function TraderCard({ image, matching, foodType, market, location }) {
  return <Grid item xs={6} style={{ border: "2px solid white", marginBottom: 60 }}>
    <Grid container direction='column' spacing={3}>
      <Grid item style={{
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundImage: image ? `url("${image}")` : "pink",
        height: 400,
        width: 400,
      }}>
        <Grid item style={{ width: "50%", marginTop: 16, marginLeft: 16, padding: "12px 40px", borderRadius: 29, backgroundColor: matching > 50 ? "#006233" : "#A91E00" }}>
          <Typography>{matching} matching</Typography>
        </Grid>
      </Grid>
      <Grid item>
        <Typography align='left' style={{ fontSize: 24, fontWeight: 600 }}>{market}</Typography>
      </Grid>
      <Grid item>
        <Typography align='left'>Food Type: {foodType}</Typography>
      </Grid>
      <Grid item>
        <Typography align='left' style={{ marginTop: -24 }}>Location: {location}</Typography>
      </Grid>
    </Grid>
  </Grid>
}