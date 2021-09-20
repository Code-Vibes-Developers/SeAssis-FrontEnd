import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
export default class HomeSlider extends Component {
  render() {
    return (
      <div style={{ marginBottom: 50, marginTop: 25 }}>
        <Carousel ariant='dark'>
          <Carousel.Item>
            <img
              className='d-block w-100'
              src='https://www.picpedia.org/highway-signs/images/help.jpg'
              alt='First slide'
              fluid
            />
            <Carousel.Caption
              style={{ fontSize: 30, marginBottom: 0, marginLeft: -700 }}
            >
              <h1 style={{ color: 'white' }}>Road Service</h1>
              <p style={{ color: 'white' }}>Get help on the Road</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className='d-block w-100'
              src='https://service-lux.fr/wp-content/uploads/2021/06/55-1.jpg'
              alt='Second slide'
            />
            <Carousel.Caption
              style={{ fontSize: 30, marginBottom: 0, marginLeft: -700 }}
            >
              <h1 style={{ color: 'white' }}>Home Service</h1>
              <p style={{ color: 'white' }}>Get help on your House</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}
