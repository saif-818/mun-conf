import React from 'react'
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import { Link as Take} from "react-router-dom";

import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import MailIcon from "@mui/icons-material/Mail";
import FooterIcon from './images/footer_logo1.png';


import { CardMedia, Typography } from "@mui/material";



export default function Footer() {

  return (
    <footer>
      <Box
        px={{ xs: 3, sm: 10 }}
        py={{ xs: 5, sm: 10 }}
        // sx={{ backgroundColor: "hsl(205,64%,22%)" }}
        sx={{backgroundColor: "#A49592"}}
        color="grey"
      >
        <Container maxWidth="lg">
          <Grid container spacing={6}>
            <Grid item xs={12} sm={4}>
              <Box>
                <CardMedia 
                  sx={{width:'45%',marginLeft:'30px'}}
                  component="img"
                  height="auto"
                  image={FooterIcon}
                />
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box sx={{ m: 1, borderBottom:'3px solid',borderColor: '#eed8c9',width: '30%',fontSize: '1.2em',fontWeight: '350',fontFamily: 'Helvetica Neue'}}>Links</Box>
              <Box sx={{ m: 1 }}>
                <Take to='/ourteam' color="inherit" style={{textDecoration:'none'}}>
                  <li style={{color:'black',listStyle: 'none'}}>Our Team</li>
                </Take>
              </Box>
              <Box sx={{ m: 1 }}>
                <Take to="/committees" color="inherit" style={{textDecoration:'none'}}>
                  <li style={{color:'black',listStyle: 'none'}}>Committees</li>
                </Take>
              </Box>
              <Box sx={{ m: 1 }}>
                <Take to="/contactus" color="inherit" style={{textDecoration:'none'}}>
                  <li style={{color:'black',listStyle: 'none'}}>Contact Us</li>
                </Take>
              </Box>
            </Grid>

            <Grid
              item
              xs={8}
              sm={4}
              container
              direction="column"
              alignItems="center"
              spacing={2}
            >
              <Grid item xs={4}>
                <Typography sx={{borderBottom:'3px solid',borderColor: '#eed8c9',fontFamily: 'Helvetica Neue',fontSize: '1.2em'}}gutterBottom variant="subtitle1" component="div">
                  Connect with Us!
                </Typography>
              </Grid>
              <Grid
                item
                xs={4}
                sm={4}
                container
                direction="row"
                justifyContent="space-evenly"
                alignItems="center"
              >
                <Box>
                  <Link
                    sx={{ color: "white"}}
                    style={{textDecoration: 'none'}}
                    href="https://www.instagram.com/pictmun/"
                    target='_blank'
                  >
                    <InstagramIcon fontSize="large" />
                  </Link>
                </Box>
                <Box>
                  <Link
                    sx={{ color: "white"}}
                    style={{textDecoration: 'none'}}
                    href="https://www.facebook.com/pictmun"
                    target='_blank'
                  >
                    <FacebookIcon fontSize="large" />
                  </Link>
                </Box>
                <Box>
                  <Link
                    sx={{ color: "white"}}
                    style={{textDecoration: 'none'}}
                    href="https://www.linkedin.com/company/pict-model-united-nations/"
                    target='_blank'
                  >
                    <LinkedInIcon fontSize="large" />
                  </Link>
                </Box>
                <Box>
                  <Link
                    sx={{ color: "white"}}
                    style={{textDecoration: 'none'}}
                    href="https://twitter.com/pictmun?t=G9UUXlAFZRCoP7soIYidhQ&s=09"
                    target='_blank'
                  >
                    <TwitterIcon fontSize="large" />
                  </Link>
                </Box>
                <Box>
                  <Link
                    sx={{ color: "white"}}
                    href="mailto:pictmun@gmail.com"
                    target='_blank'
                  >
                    <MailIcon fontSize="large" />
                  </Link>
                </Box>
              </Grid>
            </Grid>
          </Grid>

          <Box textAlign="center" pt={{ xs: 5, sm: 10 }} pb={{ xs: 5, sm: 0 }}>
            PICT MUN &reg; {new Date().getFullYear()}
          </Box>
        </Container>
      </Box>
    </footer>
  );
}
