import { Avatar, Grid, Typography } from "@mui/material";
import React from "react";

export default function CircleStatusCard({ image, number, content }: any) {

  return (
    <Grid item xs={4}>
      <Grid container direction='column' alignItems='center' style={{ padding: "10px 20px" }}>
        <Grid item>
          <div
            style={{
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "180px",
              backgroundImage: `url("${image ? image : ""}")`,
              width: 233,
              height: 233, borderRadius: "100%",
              border: "1px solid #425D50"
            }} />
        </Grid>
        <Grid item style={{ marginTop: 40 }}>
          <Typography variant='h2' style={{ fontSize: 20, fontWeight: 500 }}>{number}</Typography>
        </Grid>
        <Grid item style={{
          marginTop: number === "Connect with potential customers" ? 50 : 80
        }}>
          <Typography style={{ fontSize: 18, fontWeight: 400 }}>{content}</Typography>
        </Grid>
      </Grid>
    </Grid>
  )
}