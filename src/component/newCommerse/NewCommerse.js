import React from 'react';
import { Grid, Typography, Box, Button } from '@mui/material';
import Fruit from '../../images/fruit2.jpg';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
function NewCommerse() {
  return (
    <div>
      <Grid container>
        <Grid
          item
          md={12}
          sm={12}
          xs={12}
          sx={{ display: 'flex', justifyContent: 'center' }}
        >
          <Button
            variant="contained"
            sx={{
              color: 'red',
              backgroundColor: 'white',
              borderRadius: '50px',
              border: '1px solid red',
            }}
          >
            More Menu
          </Button>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item md={6} sm={12} xs={12}>
          <Box sx={{ pl: { md: 7, sm: 2, xs: 0 } }}>
            <Typography
              sx={{ fontSize: '28px', FontWeight: 'bold', textAlign: 'center' }}
            >
              Follow Our Social Media
            </Typography>
          </Box>
          <Box sx={{ pl: { md: 18, sm: 4, xs: 4 }, pt: 5 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', pt: 2 }}>
              <Button
                variant="contained"
                sx={{
                  color: 'black',
                  backgroundColor: 'white',
                  borderRadius: '50px',
                  textTransform: 'capitalize',
                  border: '1pr solid gray',
                }}
              >
                <FacebookIcon />
                <Typography sx={{ ml: 2, fontSize: '16px' }}>
                  {' '}
                  www.Facebook.com
                </Typography>
              </Button>
            </Box>{' '}
            <Box sx={{ display: 'flex', alignItems: 'center', pt: 2 }}>
              <Button
                variant="contained"
                sx={{
                  color: 'black',
                  backgroundColor: 'white',
                  borderRadius: '50px',
                  textTransform: 'capitalize',
                  border: '1pr solid gray',
                }}
              >
                <InstagramIcon />
                <Typography sx={{ ml: 2, fontSize: '16px' }}>
                  {' '}
                  www.Instagram.com
                </Typography>
              </Button>
            </Box>{' '}
            <Box sx={{ display: 'flex', alignItems: 'center', pt: 2 }}>
              <Button
                variant="contained"
                sx={{
                  color: 'black',
                  backgroundColor: 'white',
                  borderRadius: '50px',
                  textTransform: 'capitalize',
                  border: '1pr solid gray',
                }}
              >
                <TwitterIcon />
                <Typography sx={{ ml: 2, fontSize: '16px' }}>
                  {' '}
                  www.twitter.com
                </Typography>
              </Button>
            </Box>{' '}
          </Box>
        </Grid>
        <Grid item md={6} sx={12} xs={12}>
          <Box sx={{ p: 2 }}>
            <img src={Fruit} style={{ height: '250px', width: '100%' }} />
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}

export default NewCommerse;
