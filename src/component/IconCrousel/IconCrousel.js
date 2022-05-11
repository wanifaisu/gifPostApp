import React from 'react';
import './style.css';
var images = [
  'https://media.istockphoto.com/photos/teen-girl-doing-homework-on-her-laptop-picture-id1093929298',

  'https://media.istockphoto.com/photos/training-picture-id1165703192',
];

class IconCrousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images,
      fadedleft: true,
      fadedright: false,
      start: 0,
      finish: 5,
    };
  }
  leftClick() {
    let start = this.state.start;
    let finish = this.state.finish;
    if (start > 0 && finish > 0) {
      this.setState({
        start: start - 5,
        finish: finish - 5,
      });
    } else {
      this.setState({
        fadedleft: true,
      });
    }
    this.setState({
      fadedright: false,
    });
  }
  rightClick() {
    let start = this.state.start;
    let finish = this.state.finish;
    if (finish < images.length) {
      this.setState({
        start: start + 5,
        finish: finish + 5,
      });
    } else {
      this.setState({
        fadedright: true,
      });
    }

    this.setState({
      fadedleft: false,
    });
  }
  render() {
    var startindex = this.state.start;
    var finishindex = this.state.finish;
    const fadedleft = this.state.fadedleft
      ? 'arrow-left faded-left'
      : 'arrow-left';
    const fadedright = this.state.fadedright
      ? 'arrow-right faded-right'
      : 'arrow-right';
    return (
      <div className="container">
        <div className="slideshow row col-md-12">
          <div className={fadedleft} onClick={this.leftClick.bind(this)}></div>
          {this.state.images
            .slice(startindex, finishindex)
            .map((image, imageindex) => {
              return (
                <div key={imageindex}>
                  <img className="image" src={image} />
                </div>
              );
            })}
          <div
            className={fadedright}
            onClick={this.rightClick.bind(this)}
          ></div>
        </div>
      </div>
    );
  }
}

export default IconCrousel;
