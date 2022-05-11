import React from 'react';
import Logo from '../../images/logo2.png';
import { Grid, Typography, Box } from '@mui/material';
function Footer(props) {
  return (
    <div>
      <Grid
        container
        sx={{
          backgroundColor: props.color ? '#0073a8' : 'red',
          height: '100%',
          mt: 0.3,
        }}
      >
        <Grid item md={5.7} sm={12} xs={12}>
          <div
            style={{
              display: 'block',
              marginLeft: '6rem',
              paddingTop: '3rem',
            }}
          >
            <img
              src={Logo}
              style={{
                width: '130px',
                height: '70px',

                display: 'block',
              }}
            />
          </div>
          <Box sx={{ pl: 8, pr: 4 }}>
            <Typography
              sx={{ fontSize: 'bold', fontSize: '20px', color: '#fff' }}
            >
              {' '}
              UBICACIÓN
            </Typography>
            <Typography sx={{ pt: 2, color: '#fff' }}>
              Quicentro Shopping está ubicado en el centro ejecutivo financiero
              de la ciudad de Quito, rodeado de hoteles de primera clase y otros
              puntos de interés turístico.
            </Typography>
            <Typography sx={{ pt: 1, color: '#fff' }}>
              {' '}
              Dirección: <br />
              Avenida Naciones Unidas entre Avenida 6 de Diciembre y Avenida De
              Los Shyris.
            </Typography>
            <br />
            <Typography sx={{ color: '#fff' }}>Telf.: +917006747612</Typography>
          </Box>
        </Grid>
        <Grid
          item
          md={0.3}
          sm={0}
          xs={0}
          sx={{ display: { md: 'block', sm: 'none', xs: 'none' } }}
        >
          {' '}
          <Box
            sx={{
              borderLeft: ' 2px solid #fff',
              height: '300px',
              mt: 8,
            }}
          ></Box>
        </Grid>
        <Grid item md={2} sm={4} xs={6}>
          <Box sx={{ pt: 3, pl: { md: 0, sm: 7, xs: 6 } }}>
            {' '}
            <Typography
              sx={{ color: '#fff', fontSize: '20px', fontWeight: 'bold' }}
            >
              ADDRESS
            </Typography>
            <Typography sx={{ pt: 2, color: '#fff' }}>
              Acerca de Nosotros
            </Typography>{' '}
            <Typography sx={{ pt: 2, color: '#fff' }}>
              Trabaja con nosotros
            </Typography>{' '}
            <Typography sx={{ pt: 2, color: '#fff' }}>Contacto</Typography>
          </Box>
        </Grid>{' '}
        <Grid item md={2} sm={4} xs={6}>
          <Box sx={{ pt: 3 }}>
            <Typography
              sx={{ color: '#fff', fontSize: '20px', fontWeight: 'bold' }}
            >
              {' '}
              CONTACT
            </Typography>
            <Typography sx={{ color: '#fff', pt: 2 }}>
              {' '}
              Wifi Gratis
            </Typography>{' '}
            <Typography sx={{ color: '#fff', pt: 2 }}> Parqueadero</Typography>
          </Box>
        </Grid>{' '}
        <Grid item md={2} sm={4} xs={12}>
          <Box sx={{ pt: 3, pl: { md: 0, sm: 7, xs: 6 } }}>
            <Typography
              sx={{ color: '#fff', fontSize: '20px', fontWeight: 'bold' }}
            >
              {' '}
              POLICIES
            </Typography>
            <Typography sx={{ color: '#fff', pt: 2 }}> ncnb djvn</Typography>
            <Typography sx={{ color: '#fff', pt: 2 }}>
              {' '}
              bxchhjd djcjhd dnvfd
            </Typography>
            <Typography sx={{ color: '#fff', pt: 2 }}>
              {' '}
              dndbvhjdf dsjcnmdsn
            </Typography>
            <Typography sx={{ color: '#fff', pt: 2 }}>
              {' '}
              dvhjd dvjhfd dvj
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <Grid container sx={{ backgroundColor: 'gray', height: '100%' }}>
        <Grid item md={12} sm={12} xs={12} sx={{ p: 2 }}>
          <Typography
            sx={{
              textAlign: 'center',
              alignItems: 'center',
              color: '#fff',
            }}
          >
            {' '}
            &#169; All rights Reserved ! Faisal Ashraf wani
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}

export default Footer;
