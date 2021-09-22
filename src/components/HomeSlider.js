import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import HomeSlider1 from '../media/images/HomeSlider1.jpg';
import HomeSlider2 from '../media/images/HomeSlider2.jpg';
export default class HomeSlider extends Component {
  render() {
    return (
      <>
        <Row>
          <Col md={{ span: 0, offset: 0 }}>
            <Carousel
              expand='lg'
              style={{
                width: '140%',
                marginLeft: '-20%',
                marginBottom: '5%',
                padding: 0,
              }}
              ariant='dark'
            >
              <Carousel.Item>
                <img
                  style={{ height: 850 }}
                  className='d-block w-100'
                  src={HomeSlider1}
                  alt='First slide'
                  fluid
                />
                <Carousel.Caption
                  style={{
                    fontSize: 40,
                    marginBottom: '5%',
                    marginLeft: '-60%',
                  }}
                >
                  <h1 style={{ color: 'white' }}>Road Service</h1>
                  <p style={{ color: 'white' }}>Get help on the Road</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  style={{
                    height: 850,
                  }}
                  className='d-block w-100'
                  src={HomeSlider2}
                  alt='Second slide'
                />
                <Carousel.Caption
                  style={{
                    fontSize: 40,
                    marginBottom: '5%',
                    marginLeft: '-60%',
                  }}
                >
                  <h1 style={{ color: 'white' }}>Home Service</h1>
                  <p style={{ color: 'white' }}>Get help on your House</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </>
    );
  }
}
