import { Button, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import Footer from '../../layout/Footer';
import Navbar from '../../layout/Navbar';

import About1 from '../../static/about1.svg';


function AboutPage() {

  const ThinkingElement = ({ number, title, content }: any) => {
    return (
      <Grid item style={{ marginBottom: 40 }}>
        <Grid container direction='row' justifyContent='space-between'>
          <Grid item xs={3}>
            <Grid container>
              <Grid item xs={3}>
                <Typography align='left' style={{ lineHeight: 1.6, fontSize: 36, fontWeight: 500, color: "#73A78E" }}>{number}</Typography>
              </Grid>
              <Grid item xs={9}>
                <Typography align='left' style={{ paddingLeft: 80, marginRight: -80, lineHeight: 1.6, fontSize: 36, fontWeight: 500, color: "#73A78E" }}>{title}</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={7}>
            <Typography align='left' style={{ fontWeight: 300 }}>{content}</Typography>
          </Grid>
        </Grid>
      </Grid >

    )
  }

  return (
    <>
      <Navbar />
      <Grid container style={{ marginTop: 180 }}>
        <Container>
          <Grid container justifyContent='space-around'>
            <Grid item xs={5}>
              <div style={{
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "contain",
                backgroundImage: `url("${About1}")`,
                height: 600,
                width: "100%",
              }}>
              </div>
            </Grid>
            <Grid item xs={7} style={{ paddingLeft: 60, }}>
              <Grid container>
                <Grid item>
                  <Typography style={{ fontWeight: 500, fontSize: 30, color: "#425D50", marginBottom: 40 }}>
                    Our Mission
                  </Typography>
                </Grid>
                <Grid item>
                  <Grid container justifyContent='flex-start'>
                    <Typography align='left' display='inline' style={{ fontWeight: 400, fontSize: 40, color: "black" }}>
                      Give anyone the power to
                    </Typography>
                    <Typography align='left' display='inline' style={{ fontWeight: 700, fontSize: 40, color: "black", textDecoration: "solid underline #425D50 7px" }}>
                      instantly assess quality
                    </Typography>
                    <Typography align='left' display='inline' style={{ fontWeight: 400, fontSize: 40, color: "black" }}>and make</Typography>
                    <Typography align='left' display='inline' style={{ fontWeight: 700, fontSize: 40, color: "black", textDecoration: "solid underline #425D50 7px" }}>smarter decisions</Typography>
                    <Typography align='left' display='inline' style={{ fontWeight: 400, fontSize: 40, color: "black" }}>about fresh produce.</Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
        <Grid container
          style={{
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundImage: 'url("https://domf5oio6qrcr.cloudfront.net/medialibrary/11499/3b360279-8b43-40f3-9b11-604749128187.jpg")',
            height: 632,
            width: "100%",
          }}>
          <div style={{ width: "100%", height: 632, backgroundColor: "rgba(12, 12, 12, 0.5)" }}>
            <Container>
              <Grid container>
                <Grid item>
                  <Grid container style={{ marginLeft: 80, borderRadius: 38, marginTop: 80, padding: "30px 40px", width: 488, height: 488, background: "#FEEEE4" }}>
                    <Grid item >
                      <Typography variant='h1' align='left' style={{ fontSize: 48, color: "#425D50" }}>
                        The Problem
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Grid container justifyContent='flex-start'>
                        <Typography align='left' display='inline'>
                          <b>Covid-19 pandemic has created massive disruptions in the food system.</b>
                          <Typography align='left' display='inline'>
                            {" "}In some cases, we have observed and experienced severe food shortages. In others, food cannot reach end consumers and is ultimately wasted. Factors contribute:
                          </Typography>
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid container direction='column' style={{ marginTop: -30, marginBottom: 30 }} alignItems='left' justifyContent='space-around' >
                      <Grid item>
                        <Typography align='left' color='primary'>• Optical quality deficits</Typography>
                      </Grid>
                      <Grid item>
                        <Typography align='left' color='primary'>• Supply chain disruptions e.g. container delays</Typography>
                      </Grid>
                      <Grid item>
                        <Typography align='left' color='primary'>• Miscommunication about stock supply</Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Container>
          </div>
        </Grid>
        <Grid container style={{ margin: "124px 0" }}>
          <Container>
            <Grid container>
              <ThinkingElement number="/01" title="Our Purpose" content="Our solutions for distributors and retailers allow for high-accuracy shelf life prediction of produce at any stage of the supply chain. This ensures the right product gets to the right place at the right time." />
              <ThinkingElement number="/02" title="Educate & Expand" content="Through our dashboards, we would have a real time overview of where food was saved. This means that there is a traceable, verifiable record of food waste, the efforts to prevent it, and CO2 savings." />
              <ThinkingElement number="/03" title="Our Vision" content="With expertise in data analysis and image recognition, we are positioned to make a large economic and environmental impact. Using our passion and creativity, we deliver meaningful solutions to improve sustainability efforts, feed those in need and save customers money.  " />
            </Grid>
            <Grid container justifyContent='center' style={{ marginTop: 80 }}>
              <Grid item>
                <Button href='signup' variant='contained' >
                  <Typography>Try it out</Typography>
                </Button>
              </Grid>
            </Grid>
          </Container>
        </Grid>
      </Grid>
      <Footer />
    </>
  )
}


export default AboutPage;