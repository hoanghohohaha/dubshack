import { Grid, Typography } from '@mui/material';
import React from 'react';
import CircleStatusCard from '../../components/Homepage/CircleStatus';
import SquareStatusCard from '../../components/Homepage/SquareStatus';
import withLayout from '../../layout/withLayout';
import GetStartSection from '../../widgets/Homepage/GetStartSection';
import HeroSection from '../../widgets/Homepage/HeroSection';

function HomePage() {
  return (
    <>
      <HeroSection />
      <Grid container>
        <SquareStatusCard index="1" number="1/3" content="of all produced food ends up in the trash instead of on our plates." />
        <SquareStatusCard index="1" number="1/3" content="of all produced food ends up in the trash instead of on our plates." />
        <SquareStatusCard index="1" number="1/3" content="of all produced food ends up in the trash instead of on our plates." />
      </Grid>
      <Grid container justifyContent='center' style={{ marginTop: 80 }}>
        <Grid item xs={6}>
          <Typography variant='h1'>Why use CompleatFood?</Typography>
        </Grid>
      </Grid>
      <Grid container justifyContent='space-between' style={{ marginTop: 124 }}>
        <CircleStatusCard image="" number="Meet your customers' demands" content="Assess your products before shipping to make sure they match customers' acceptable shelf life and quality level." />
        <CircleStatusCard image="" number="Meet your customers' demands" content="Assess your products before shipping to make sure they match customers' acceptable shelf life and quality level." />
        <CircleStatusCard image="" number="Meet your customers' demands" content="Assess your products before shipping to make sure they match customers' acceptable shelf life and quality level." />
      </Grid>
      <GetStartSection />
    </>
  )
}

export default withLayout(HomePage);