import { Avatar, Container, Grid, Link, Typography } from '@mui/material'
import React from 'react';
import BrandName from '../components/Homepage/utils/BrandName';
import Logo from "../static/logo.png";

export default function Footer() {
  return (
    <div style={{ background: "#FCFCFC" }}>
      <Container>
        <Grid container alignItems='center' style={{ padding: "120px 0px", borderTop: "2px solid black" }}>
          <Grid item xs={3}>
            <Link href="/" style={{ textDecoration: "none" }}>
              <Grid container alignItems='center'>
                <Grid item>
                  <div style={{
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "contain",
                    backgroundImage: `url("${Logo}")`,
                    height: 40,
                    width: 100,
                  }}></div>
                </Grid>
                <Grid item style={{ marginLeft: 16 }}>
                  <BrandName />
                </Grid>
              </Grid>
            </Link>
          </Grid>
          <Grid item xs={5}>
            <Grid container justifyContent='space-evenly' style={{ padding: "0px 30px" }}>
              <Grid item>
                <Typography>Mobile app</Typography>
              </Grid>
              <Grid item>
                <Typography>Community</Typography>
              </Grid>
              <Grid item>
                <Typography>Company</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={4}>
            <Typography align='right' style={{ fontWeight: 300 }}>© Compleat, Inc. 2021. Built with ☕ & 💚!</Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}