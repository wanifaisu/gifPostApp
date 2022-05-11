import React from 'react';
import { Grid, Typography, Box, Button } from '@mui/material';
import './Slider.css';
function Crousel(props) {
  return (
    <Box sx={{ pl: 8, pr: 8, pt: 3, pb: 3 }}>
      <div>
        <div className="wrapper">
          <div className="carousel" tabindex="0">
            <div className="slide">
              <a href="#item-4">Slide 4</a>
              <img
                id="item-1"
                src="https://media.istockphoto.com/photos/happy-young-indian-girl-with-headphones-looking-at-laptop-screen-picture-id1216915208"
                alt=""
              />
              <a href="#item-2">Slide 2</a>
            </div>
            <div className="slide">
              <a href="#item-1">Slide 1</a>
              <img
                id="item-2"
                src="https://media.istockphoto.com/photos/paperless-workplace-idea-esigning-electronic-signature-document-an-picture-id1349390515"
                alt=""
              />
              <a href="#item-3">Slide 3</a>
            </div>
            <div className="slide">
              <a href="#item-2">Slide 2</a>
              <img
                id="item-3"
                src="https://media.istockphoto.com/photos/young-women-using-computer-cyber-security-concept-picture-id1166334015"
                alt=""
              />
              <a href="#item-4">Slide 4</a>
            </div>
            <div className="slide">
              <a href="#item-3">Slide 3</a>
              <img
                id="item-4"
                src="https://media.istockphoto.com/photos/student-using-laptop-having-online-class-with-teacher-picture-id1288092444"
                alt=""
              />
              <a href="#item-1">Slide 1</a>
            </div>
          </div>
          <nav className="carousel__nav">
            <ul>
              <li>
                <a href="#item-1" aria-label="Item 1">
                  <svg viewBox="0 0 10 10" width="1em">
                    <circle cx="5" cy="5" r="5" fill="#fff" />
                  </svg>
                </a>
              </li>
              <li>
                <a href="#item-2" aria-label="Item 2">
                  <svg viewBox="0 0 10 10" width="1em">
                    <circle cx="5" cy="5" r="5" fill="#fff" />
                  </svg>
                </a>
              </li>
              <li>
                <a href="#item-3" aria-label="Item 3">
                  <svg viewBox="0 0 10 10" width="1em">
                    <circle cx="5" cy="5" r="5" fill="#fff" />
                  </svg>
                </a>
              </li>
              <li>
                <a href="#item-4" aria-label="Item 4">
                  <svg viewBox="0 0 10 10" width="1em">
                    <circle cx="5" cy="5" r="5" fill="#fff" />
                  </svg>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </Box>
  );
}

export default Crousel;
