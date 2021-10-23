import { Avatar, Button, Container, Grid, Typography } from '@mui/material'
import React from 'react'

export default function Navbar() {
  return (
    <Grid container style={{ height: 60, padding: 2, background: "wheat" }}>
      <Container style={{ margin: "auto" }}>
        <Grid container alignItems='center' justifyContent='space-between'>
          <Grid item>
            <Grid container alignItems='center'>
              <Grid item>
                <Avatar></Avatar>
              </Grid>
              <Grid item style={{ marginLeft: 16 }}>
                <Typography>BeautiFood</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid container>
              <Grid item>
                <Button variant='text'>
                  <Typography>What we do</Typography>
                </Button>
              </Grid>
              <Grid item>
                <Button variant='text'>
                  <Typography>Our solution</Typography>
                </Button>
              </Grid>
              <Grid item >
                <Button variant='contained'>
                  <Typography>Login</Typography>
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Grid>
  )
}