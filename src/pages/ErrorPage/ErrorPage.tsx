import { Grid, Typography } from "@mui/material";
import React from "react";
import withLayout from "../../layout/withLayout";

function ErrorPage() {
  return (
    <Grid container justifyContent="center" alignItems='center' style={{ height: "77vh" }}>
      <Typography variant='h1'>404</Typography>
    </Grid>
  )
}

export default withLayout(ErrorPage)