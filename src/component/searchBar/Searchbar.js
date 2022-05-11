import React from 'react';
import { Grid, Typography, Box } from '@mui/material';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { AddRounded } from '@mui/icons-material';
import Img from '../../images/1side.jpg';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Copy from '../../images/copy.jpg';
import Kashmir from '../../images/kashmir.jpg';
import Pen1 from '../../images/copy.jpg';

import './style.css';
// import { stockData } from './data';
function Searchbar() {
  const top100Films = [
    { label: 'The Shawshank Redemption', code: 'PT', year: 1994 },
    { label: 'The Godfather', code: 'SA', year: 1972 },
    { label: 'The Godfather: Part II', code: 'PT', year: 1974 },
    { label: 'The Dark Knight', code: 'SB', year: 2008 },
    { label: 'Dream Angry Men', code: 'PT', year: 1957 },
    { label: "Schindler's List", code: 'PT', year: 1993 },
    { label: 'Pulp Fiction', code: 'PT', year: 1994 },
    {
      label: 'The Lord of the Rings: The Return of the King',
      year: 2003,
      code: 'SB',
    },
    { label: 'The Good, the Bad and the Ugly', code: 'SB', year: 1966 },
    { label: 'Fight Club', code: 'SB', year: 1999 },
    {
      label: 'The Lord of the Rings: The Fellowship of the Ring',
      year: 2001,
      code: 'SB',
    },
    {
      label: 'Star Wars: Episode V - The Empire Strikes Back',
      year: 1980,
      code: 'SB',
    },
    { label: 'Forrest Gump', year: 1994, code: 'SB' },
    { label: 'Inception fash', year: 2010, code: 'SB' },
    {
      label: 'The Lord of the Rings: The Two Towers',
      year: 2002,
      code: 'SB',
    },
    { label: 'One Flew ', code: 'SB', year: 1975 },
    { label: 'Good fellas', year: 1990, code: 'SB' },
    { label: 'The Matrix', code: 'SB', year: 1999 },
    { label: 'Seven Samurai', code: 'SB', year: 1954 },
    {
      label: 'Star Wars: Episode IV - A New Hope',
      code: 'SJ',
      year: 1977,
    },
    { label: 'City of God', code: 'SJ', year: 2002 },
    { label: 'Se7en nnmd', code: 'SJ', year: 1995 },
    { label: 'The Silence of the Lambs', code: 'SJ', year: 1991 },
    { label: "It's a Wonderful Life", code: 'SJ', year: 1946 },
    { label: 'Life Is Beautiful', code: 'SJ', year: 1997 },
    { label: 'The Usual Suspects', code: 'SJ', year: 1995 },
    { label: 'Léon The Professional', code: 'SJ', year: 1994 },
    { label: 'Spirited Away', code: 'SJ', year: 2001 },
    { label: 'Saving Private Ryan', code: 'SJ', year: 1998 },
    { label: 'Once Upon a Time in the West', code: 'SJ', year: 1968 },
    { label: 'American History X', code: 'SJ', year: 1998 },
    { label: 'Interstellar yuop', code: 'SK', year: 2014 },
    { label: 'Casablanca hiop', code: 'SK', year: 1942 },
    { label: 'City Lights', code: 'SK', year: 1931 },
    { label: 'Psycho dnnd', code: 'SK', year: 1960 },
    { label: 'The Green Mile ', code: 'SK', year: 1999 },
    { label: 'The Intouchables', code: 'SK', year: 2011 },
    { label: 'Modern Times', code: 'SK', year: 1936 },
    { label: 'Raiders of the Lost Ark', code: 'SK', year: 1981 },
    { label: 'Rear Window', code: 'SK', year: 1954 },
    { label: 'The Pianist', code: 'SK', year: 2002 },
    { label: 'The Departed', code: 'SK', year: 2006 },
    { label: 'Terminator 2: Judgment Day', code: 'SJ', year: 1991 },
    { label: 'Back to the Future', code: 'SJ', year: 1985 },
    { label: 'Whiplash xnn', code: 'SJ', year: 2014 },
    { label: 'Gladiator dnnc', code: 'SJ', year: 2000 },
    { label: 'Memento tyhu', code: 'SJ', year: 2000 },
    { label: 'The Prestige', code: 'SJ', year: 2006 },
    { label: 'The Lion King', code: 'SJ', year: 1994 },
    { label: 'Apocalypse Now', code: 'SJ', year: 1979 },
    { label: 'Alien Oip', code: 'SJ', year: 1979 },
    { label: 'Sunset Boulevard', code: 'SJ', year: 1950 },
    {
      label:
        'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb',
      year: 1964,
      code: 'SJ',
    },
    { label: 'The Great Dictator', code: 'SM', year: 1940 },
    { label: 'Cinema Paradiso', code: 'SM', year: 1988 },
    { label: 'The Lives of Others', code: 'SM', year: 2006 },
    { label: 'Grave of the Fireflies', code: 'SM', year: 1988 },

    { label: 'Citizen Kane', year: 1941, code: 'SM' },

    { label: 'The Kid', year: 1921, code: 'SM' },
    { label: 'Inglourious Basterds', year: 2009, code: 'SM' },
    { label: 'Snatch Roip', year: 2000, code: 'SM' },
    { label: 'Top Idiots', year: 2009, code: 'SM' },
    { label: 'Monty Python and the Holy Grail', code: 'SM', year: 1975 },
  ];
  const [searchField, setSearchField] = React.useState([]);
  const [added, setAdded] = React.useState(false);
  function stringToColor(string) {
    let hash = 0;
    let i;

    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = '#';

    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */

    return color;
  }

  function stringAvatar(name) {
    return {
      sx: {
        bgcolor: stringToColor(name),
      },
      children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
    };
  }
  return (
    <Grid container>
      <Grid item md={4} sm={12} xs={12} sx={{ backgroundColor: '#004b56' }}>
        <Box
          sx={{
            pt: 6,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Autocomplete
            id="country-select-demo"
            sx={{
              width: 300,
              backgroundColor: 'white',
              borderRadius: '50px',
              height: '40px',
            }}
            size="small"
            onChange={(event, newValue) => {
              setSearchField(newValue);
              if (newValue !== null) {
                setAdded(true);
              } else {
                setAdded(false);
              }
              console.log(newValue, 'new');
            }}
            options={top100Films}
            autoHighlight
            getOptionLabel={option => option.label}
            renderInput={params => (
              <TextField
                placeholder="Search"
                {...params}
                inputProps={{
                  ...params.inputProps,
                }}
              />
            )}
          />
        </Box>
        {added ? (
          <Box sx={{ height: '250px', display: 'flex', pl: 7, pt: 2 }}>
            <img
              loading="lazy"
              width="30"
              height="30px"
              src={`https://flagcdn.com/w20/${searchField.code.toLowerCase()}.png`}
              srcSet={`https://flagcdn.com/w40/${searchField.code.toLowerCase()}.png 2x`}
              alt=""
            />
            <Typography sx={{ pl: 1, color: 'white' }}>
              {searchField.label}
            </Typography>
          </Box>
        ) : (
          <Box
            sx={{
              height: '250px',
              pl: 10,
              pt: 2,
              overflowY: 'scroll',
              pb: 1,
              mr: 5,
            }}
          >
            {top100Films.map(item => {
              let newi = item.label;

              return (
                <>
                  <List sx={{ display: 'flex', pt: 1, pr: 2, color: 'white' }}>
                    <ListItem button className="namefield">
                      <ListItemIcon>
                        <Stack direction="row" spacing={2}>
                          <Avatar {...stringAvatar(`${item.label}`)} />
                        </Stack>
                      </ListItemIcon>
                      <ListItemText primary={item.label} />
                    </ListItem>
                  </List>
                </>
              );
            })}
          </Box>
        )}
      </Grid>
      <Grid item md={8} sm={12} xs={12}>
        <Box className="relative">
          <img
            src={Kashmir}
            style={{
              height: '400px',
              width: '100%',
              paddingTop: '5px',
              paddingLeft: '5px',
            }}
          />
          {/* <List
            className="absolute"
            sx={{ backgroundColor: '#fff', opacity: '0.9' }}
          >
            <ListItem button sx={{ height: '12px' }}>
              <ListItemText primary="Keyboard" />
            </ListItem>{' '}
            <ListItem button sx={{ height: '12px' }}>
              <ListItemText primary="Kashmir" />
            </ListItem>{' '}
            <ListItem button sx={{ height: '12px' }}>
              <ListItemText primary="Jamia" />
            </ListItem>{' '}
            <ListItem button sx={{ height: '12px' }}>
              <ListItemText primary="Apple" />
            </ListItem>{' '}
            <ListItem button sx={{ height: '12px' }}>
              <ListItemText primary="Pen" />
            </ListItem>{' '}
            <ListItem button sx={{ height: '12px' }}>
              <ListItemText primary="Copy" />
            </ListItem>{' '}
            <ListItem button sx={{ height: '12px' }}>
              <ListItemText primary="Children" />
            </ListItem>
          </List> */}
        </Box>
      </Grid>
    </Grid>
  );
}

export default Searchbar;
