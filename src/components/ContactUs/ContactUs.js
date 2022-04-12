import React from 'react';
import './ContactUs.css';
import Banner from './pages/Banner';
import ContactUsForm from './pages/ContactForm';
import GoogleMap from './pages/GoogleMap';
import {
  Grid,
  Container,
} from "@mui/material";
import Footer from '../Footer';

const ContactUs = () => {
  
  return (
    <>
      <Banner />
      <br />
      <br />
      <Container >
        <Grid item xs={12} sx={{display: 'flex'}}>
          <Grid lg={8} sm={12} mb={4}>
            {" "}
            <ContactUsForm />
          </Grid>
          <Grid lg={4} sm={12}>
            <GoogleMap />
          </Grid>
        </Grid>
      </Container>
      <br />
      <br />
      <Footer />
    </>
  )
}

export default ContactUs;