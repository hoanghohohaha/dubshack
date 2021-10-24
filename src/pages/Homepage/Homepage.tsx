import { Grid, Typography } from '@mui/material';
import React from 'react';
import CircleStatusCard from '../../components/Homepage/CircleStatus';
import SquareStatusCard from '../../components/Homepage/SquareStatus';
import withLayout from '../../layout/withLayout';
import GetStartSection from '../../widgets/Homepage/GetStartSection';
import HeroSection from '../../widgets/Homepage/HeroSection';

import Circle1 from '../../static/circle1.svg';
import Circle2 from '../../static/circle2.svg';
import Circle3 from '../../static/circle3.svg';

function HomePage() {
  return (
    <>
      <HeroSection />
      <Grid container>
        <SquareStatusCard index="01" number="1/3" content="of all produced food ends up in the trash instead of on our plates." />
        <SquareStatusCard index="02" number="1 trillion" content="dollars is the value of the annually wasted food worldwide." />
        <SquareStatusCard index="03" number="25%" content="of our drinking water is used to grow food that is never eaten." />
      </Grid>
      <Grid container justifyContent='center' style={{ marginTop: 100 }}>
        <Grid item xs={6}>
          <Typography variant='h1' display='inline'>Why use{"  "}</Typography>
          <Typography display='inline' style={{ fontWeight: 700, fontSize: '64px', color: "#73A78E" }}>Compl</Typography>
          <Typography display='inline' style={{ fontWeight: 700, fontSize: '64px', color: "#FCAD8F" }}>eat</Typography>
          <Typography variant='h1' display='inline'>?</Typography>
        </Grid>
      </Grid>
      <Grid container justifyContent='space-between' style={{ marginTop: 80 }}>
        <CircleStatusCard image={Circle1} number="Meet your customers' demands" content="Assess your products before shipping to make sure they match customers' acceptable shelf life and quality level." />
        <CircleStatusCard image={Circle2} number="First Expired, First Out" content="Prioritize the shipping of batches based on shelf life measurements." />
        <CircleStatusCard image={Circle3} number="Connect with potential customers" content="Match products of various quality levels with potential buyers who can use that specific quality." />
      </Grid>
      <GetStartSection />
    </>
  )
}

export default withLayout(HomePage);