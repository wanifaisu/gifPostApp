import React, { useState } from 'react';
import { Grid, Typography, Box, Button, TextField } from '@mui/material';
import './style.css';
import { GiphyFetch } from '@giphy/js-fetch-api';
import { useTheme } from '@mui/material/styles';

import axios from 'axios';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';

import IconButton from '@mui/material/IconButton';
import { red } from '@mui/material/colors';

import MoreVertIcon from '@mui/icons-material/MoreVert';
import CameraIndoorIcon from '@mui/icons-material/CameraIndoor';
import GifIcon from '@mui/icons-material/Gif';
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: '100%',
    },
  },
};
let date = new Date();
function GifSearchApp() {
  const [text, setText] = useState(false);
  const [resultst, setResultst] = useState([]);
  const [comment, setComment] = useState('');
  const [err, setErr] = useState(false);
  const [gifti, setGifti] = useState([]);
  const [showGif, setShowGif] = useState(false);
  const [resultstf, setResultstf] = useState([]);
  const [showfacebookGif, setShowfacebookGif] = useState([]);
  React.useEffect(() => {
    const fetchData = async () => {
      const results = await axios('https://api.giphy.com/v1/gifs/trending', {
        params: {
          api_key: 'qvO4qndu6qjFhAuCnIikyQptFXY3EZNY',
        },
      });
      console.log(results, 'pp');
      setResultst(results.data.data);
      setResultstf(results.data.data);
    };
    fetchData();
  }, []);
  const handleInput = e => {
    let searchMin = e.target.value;
    let searchterm = resultst.filter(items => {
      return items.username.toLowerCase().includes(searchMin.toLowerCase());
    });
    setResultst(searchterm);
  };

  const handleGid = () => {
    let data = {
      ...gifti,
      comment: comment,
    };
    setText(false);
    setShowfacebookGif([...showfacebookGif, data]);
  };
  return (
    <div>
      <Typography
        sx={{
          textAlign: 'center',
          fontSize: '20px',
          color: 'red',
          fontweight: 'bold',
          pt: 2,
        }}
      >
        Gif searching and Posting app by clicking compose post button
      </Typography>
      <div
        class="dropdown"
        style={{ display: 'flex', justifyContent: 'center', marginTop: '3rem' }}
      >
        <button
          onClick={() => {
            document.getElementById('myDropdown').classList.toggle('show');
          }}
          class="dropbtn"
        >
          Compose Post
        </button>
        <div id="myDropdown" class="dropdown-content">
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Stack sx={{ mt: 1.2 }}>
              <Avatar src="/broken-image.jpg" />
            </Stack>
            <input
              type="text"
              placeholder="Write SomeThing Hare"
              id="myInput"
              onChange={event => {
                setComment(event.target.value);
              }}
              value={comment}
            />
          </div>
          {text ? (
            <div>
              <Typography
                sx={{
                  fontSize: '16px',
                  textAlign: 'center',
                  mt: 2,
                  color: 'red',
                  fontWeight: 'bold',
                }}
              >
                please post the gif now by clicking post button
              </Typography>
            </div>
          ) : null}
          <Box class="padd">
            <Button
              onClick={() => {
                setShowGif(true);
              }}
              sx={{
                fontSize: '17px',
                textTransform: 'capitalize',
                backgroundColor: '#ddd',
                borderRadius: '30px',
                width: '200px',
                ml: 0.5,
                mb: 0.3,
              }}
            >
              <GifIcon color="green" sx={{ fontSize: '30px' }} />
            </Button>
            <Button
              type="submit"
              // class="btnpost"
              sx={{
                fontSize: '17px',
                textTransform: 'capitalize',
                backgroundColor: '#ddd',
                borderRadius: '30px',
                width: '200px',
                ml: 0.5,
                mb: 0.3,
              }}
              onClick={() => {
                document.getElementById('myDropdown').classList.remove('show');
                handleGid();
                setComment('');
              }}
            >
              Post
            </Button>
          </Box>
          {showGif ? (
            <Box
              sx={{
                height: '300px',
                backgroundColor: 'LightGray',
                overflowY: 'scroll',
                pt: 0.6,
                boxShadow: ' 5px 10px #888888',
              }}
            >
              <input
                type="text"
                onChange={event => {
                  if (event.target.value === '') {
                    setResultst(resultstf);
                    setShowGif(false);
                  } else {
                    handleInput(event);
                    setShowGif(true);
                  }
                }}
                placeholder="Enter gif name"
                id="myInput"
              />
              {resultst.map(item => {
                return (
                  <Box value={10}>
                    <img
                      src={item.images.fixed_height.url}
                      style={{ width: '120px', height: '100px' }}
                      onClick={() => {
                        setShowGif(false);
                        setGifti(item);
                        setText(true);
                      }}
                    />
                  </Box>
                );
              })}
            </Box>
          ) : null}
        </div>
      </div>

      <Grid container>
        <Grid item md={12} sx={{ pt: 10 }}>
          <Box sx={{ height: '100%', overflowY: 'scroll' }}>
            {showfacebookGif.map(itm => {
              return (
                <div style={{ justifyContent: 'center', display: 'flex' }}>
                  <Card sx={{ maxWidth: 345 }}>
                    <CardHeader
                      avatar={
                        <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                          R
                        </Avatar>
                      }
                      action={
                        <IconButton aria-label="settings">
                          <MoreVertIcon />
                        </IconButton>
                      }
                      title={itm.comment}
                      subheader={date.toString()}
                    />
                    <CardMedia
                      component="img"
                      height="194"
                      src={itm.images.fixed_height.url}
                      alt="Paella dish"
                    />
                    <CardContent>
                      <Typography variant="body2" color="text.secondary">
                        This impressive paella is a perfect party dish and a fun
                        meal to cook together with your guests. Add 1 cup of
                        frozen peas along with the mussels, if you like.
                      </Typography>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}

export default GifSearchApp;
