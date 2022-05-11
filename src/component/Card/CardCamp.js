import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Footer from '../Footer/Footer';

const theme = createTheme();
const labels = [
  {
    label: 'School',
    number: 1,
    image: 'https://source.unsplash.com/random/800x500?2',
    heading: 'hj dc dc jd cdnd  dndbc dcnnd d c c ds cnbds cdn  d s cn bds ',
  },
  {
    label: 'Mountain',
    number: 2,
    image: 'https://source.unsplash.com/random/800x500?1',
    heading: 'Mount everist is the toppest of all the mountatin in the world ',
  },
  {
    label: 'Hills',
    number: 3,
    image: 'https://source.unsplash.com/random/800x500?3',
    heading:
      'Peer ki galy is the best of all the mountains in the indian there are verious.',
  },
  {
    label: 'Business',
    number: 4,
    image: 'https://source.unsplash.com/random/800x500?4',
    heading:
      'To be in bussiness you have to tacckle all the problems in the every day life',
  },
];
export default function CardCamp() {
  return (
    <div style={{ paddingTop: '1rem' }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <main>
          {/* Hero unit */}

          <Container>
            {/* End hero unit */}
            <Grid container>
              {labels.map(item => (
                <Grid item key={item.number} xs={12} sm={12} md={3}>
                  <Card
                    sx={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      pl: 1,
                    }}
                  >
                    <CardMedia
                      sx={{ height: '200px' }}
                      component="img"
                      src={item.image}
                      alt="random"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        {item.label}
                      </Typography>
                      <Typography>{item.heading}</Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small">View</Button>
                      <Button size="small">Edit</Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </main>
      </ThemeProvider>
    </div>
  );
}
