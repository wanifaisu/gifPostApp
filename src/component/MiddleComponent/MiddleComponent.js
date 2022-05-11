import React from 'react';
import { Grid, Typography, Button, Box } from '@mui/material';
import { Map, GoogleApi, Wrapper } from 'google-maps-react';
import { GoogleApiWrapper } from 'google-maps-react';
import MApImg from '../../images/1side.jpg';
import Logo from '../../images/logo2.png';
import './style.css';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
class MiddleComponent extends React.Component {
  render() {
    return (
      <Grid container>
        <Grid item md={6} sx={{ width: '100%', height: '600px' }}>
          <Map
            google={this.props.google}
            style={{ width: '100%', height: '600px' }}
            zoom={10}
            initialCenter={{
              lat: 34.0837,
              lng: 74.7973,
            }}
          />
        </Grid>
        <Grid
          item
          md={6}
          sx={{ width: '100%', height: '600px' }}
          className="imageOpac"
        >
          <img
            src={MApImg}
            style={{ height: '500px', width: '100%', opacity: 0.3 }}
          />
          <div class="content" style={{ textAlign: 'center' }}>
            <div style={{ paddingTop: '6rem' }}>
              <img
                src={Logo}
                style={{
                  width: '170px',
                  height: '70px',
                }}
              />
              <h1
                style={{
                  color: 'white',
                  fontSize: '35px',
                  fontWeight: 'bold',
                  paddingTop: '3rem',
                }}
              >
                NEWTEC SOLU
              </h1>
              <p style={{ color: 'white', paddingTop: '10px' }}>
                Lorem ipsum dolor sit amet, an his etiam torquatos.
              </p>
              <div
                style={{
                  justifyContent: 'center',
                  display: 'flex',
                  paddingTop: '10px',
                }}
              >
                <h1
                  style={{
                    fontWeight: 'bold',
                    fontSize: '24px',
                    color: 'white',
                  }}
                >
                  Phone Number :
                </h1>
                <h1
                  style={{
                    fontSize: '24px',
                    color: 'white',
                  }}
                >
                  &nbsp; 7006747612
                </h1>
              </div>
              <div style={{ justifyContent: 'center', display: 'flex' }}>
                <h1
                  className="emailIc"
                  style={{
                    fontWeight: 'bold',
                    fontSize: '24px',
                    color: 'white',
                  }}
                >
                  Email :
                </h1>
                <h1
                  className="emailIc"
                  style={{
                    fontSize: '24px',
                    color: 'white',
                  }}
                >
                  &nbsp; wanifaisal155223@gmail.com
                </h1>
              </div>
              <h1
                style={{
                  fontWeight: 'bold',
                  fontSize: '35px',
                  color: '#f8efa7',
                  marginTop: '2rem',
                }}
              >
                Contact On
              </h1>

              <Button
                variant="contained"
                sx={{
                  backgroundColor: 'green',
                  opacity: '0.6',
                  mt: 3,
                  '&.MuiButtonBase-root:hover': {
                    bgcolor: 'transparent',
                  },
                  // '&:hover': { backgroundColor: 'transparent' },
                  borderRadius: '8px',
                }}
              >
                <WhatsAppIcon
                  sx={{
                    color: '#fff',
                    pr: 1,
                    '&:hover': { backgroundColor: 'green' },
                  }}
                />
                <Typography
                  sx={{ color: 'blue', fontSize: '20px', fontWeight: 'bold' }}
                >
                  <a
                    href="https://api.whatsapp.com/send?phone=917006747612"
                    style={{ textDecoration: 'none', color: '#fff' }}
                  >
                    WhatsApp Me
                  </a>
                </Typography>
              </Button>
            </div>
          </div>
        </Grid>
      </Grid>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: 'AIzaSyCM11 - OW1ExF9ppDm8rhb2f0OjOBbjnV5I',
})(MiddleComponent);
// AIzaSyCM11 - OW1ExF9ppDm8rhb2f0OjOBbjnV5I;
