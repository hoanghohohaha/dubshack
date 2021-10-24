import { Checkbox, Grid, TextField, Typography } from '@mui/material'
import React from 'react'
import withLayout from '../../layout/withLayout'
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

import TradingMatching from "../../config/TradingMatching.json"
import TraderCard from '../../components/TraderCard';

function CheckBoxwithText({ text }: any) {
  return (
    <Grid container justifyContent='flex-start' alignItems='center'>
      <Checkbox ></Checkbox>
      <Typography>{text}</Typography>
    </Grid>
  )
}

const marks = [
  {
    value: 0,
    label: '0 miles',
  },
  {
    value: 2500,
    label: '2500 miles',
  },
];

function TraderPage() {
  return <Grid container style={{ marginTop: 124 }}>
    <Grid container>
      <Typography>Trading Center</Typography>
    </Grid>
    <Grid container>
      <Grid item xs={3}>
        <Grid container justifyContent='flex-start' spacing={4} direction='column'>
          <Grid item>
            <Grid container justifyContent='flex-start' spacing={4} direction='column'>
              <Grid item>
                <Typography align='left'>Filters:</Typography>
              </Grid>
              <Grid item>
                <TextField placeholder='Enter your zipcode'></TextField>
              </Grid>
              <Grid item>
                <TextField placeholder='Search by industry'></TextField>
              </Grid>
              <Grid item>
                <CheckBoxwithText text={"Filter by favorites"} />
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid container justifyContent='flex-start' direction='column'>
              <Grid item>
                <Typography align='left'>Type</Typography>
              </Grid>
              <Grid item>
                <CheckBoxwithText text={"Fruits"} />
              </Grid>
              <Grid item>
                <CheckBoxwithText text={"Vegetables"} />
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid container justifyContent='flex-start' direction='column'>
              <Grid item>
                <Typography align='left'>Quantity</Typography>
              </Grid>
              <Grid item>
                <CheckBoxwithText text={"0 - 500 lb"} />
              </Grid>
              <Grid item>
                <CheckBoxwithText text={"500 - 1000 lb"} />
              </Grid>
              <Grid item>
                <CheckBoxwithText text={"1000 - 1500 lb"} />
              </Grid>
              <Grid item>
                <CheckBoxwithText text={"1500 - 2000 lb"} />
              </Grid>
              <Grid item>
                <CheckBoxwithText text={"2000 - 2500 lb"} />
              </Grid>
              <Grid item>
                <CheckBoxwithText text={"2500 + lb"} />
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid container justifyContent='flex-start' direction='column'>
              <Grid item>
                <Typography align='left'> Distance</Typography>
              </Grid>
              <Box width={200}>
                <Slider defaultValue={50} max={2500} aria-label="Default" valueLabelDisplay="auto" marks={marks} />
              </Box>
            </Grid>
          </Grid>
          <Grid item>
            <Grid container justifyContent='flex-start' direction='column'>
              <Grid item>
                <Typography align='left'>Category</Typography>
              </Grid>
              <Grid item>
                <CheckBoxwithText text={"Reject"} />
              </Grid>
              <Grid item>
                <CheckBoxwithText text={"Exceptional"} />
              </Grid>
              <Grid item>
                <CheckBoxwithText text={"Acceptable"} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={9}>
        <Grid container>
          {TradingMatching.map((e, i) => <TraderCard image={"https://cdn.shopify.com/s/files/1/0077/9508/1316/files/something-and-nothing-yuzu-cucumber-rose-seltzers-online-store-usa_720x.gif?v=1593600773"} key={i} market={e.market_name} matching={e.matching_per} foodType={e.Food_type} location={e.Location} />)}
        </Grid>
      </Grid>
    </Grid>
  </Grid>
}

export default withLayout(TraderPage);