import React, { Component } from 'react';
import Slider from 'infinite-react-carousel';

export default class CustomSlider extends React.Component {
  render() {
    const settings =  {
      autoplay: true,
      dots: true,
      slidesPerRow: 3,
      arrows: false,
      arrowsBlock: false,
    };
    return (
      <div>
        <Slider { ...settings }>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
          <div>
            <h3>7</h3>
          </div>
          <div>
            <h3>8</h3>
          </div>
          <div>
            <h3>9</h3>
          </div>
        </Slider>
      </div>
    );
  }
}