import React from 'react';
import { Grid, Typography, Box, Button } from '@mui/material';
import MApImg from '../../images/1side.jpg';
import Kashmir1 from '../../images/kashf.jpg';
function Commerse() {
  return (
    <div>
      <Grid container sx={{ p: 2 }}>
        <Grid
          item
          md={6}
          sm={12}
          xs={12}
          sx={{
            width: '100%',
            height: '400px',
            backgroundColor: '#f5c3e6',
            textAlign: 'center',
            pt: 15,
          }}
        >
          <Typography
            sx={{
              fontSize: '35px',
              fontWeight: 'bold',
              color: 'orange',
            }}
          >
            Peri Set Do!
          </Typography>
          <Typography sx={{ fontSize: '24px' }}>
            we invite you to explore the fire
            <br /> that brings use all together
          </Typography>
          <Button
            variant="contained"
            sx={{
              backgroundColor: 'red',
              mt: 4,
              fontSize: '18px',
              borderRadius: '50px',
            }}
          >
            Order Now
          </Button>
        </Grid>
        <Grid item md={6} sm={12} xs={12}>
          <img src={Kashmir1} style={{ height: '400px', width: '100%' }} />
        </Grid>
      </Grid>
    </div>
  );
}

export default Commerse;
