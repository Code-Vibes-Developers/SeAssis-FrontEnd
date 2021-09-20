import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
export default class FeedbackSlider extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        {this.props.Feedbacks.length ? (
          <Row>
            <Col md={{ span: 8, offset: 2 }}>
              <h1 style={{ marginLeft: '15%' }}>Our Costumer Feedback</h1>
              <Carousel itemsToShow={this.props.Feedbacks.length}>
                {this.props.Feedbacks.map((element) => {
                  return (
                    <Carousel.Item rounded interval={2000}>
                      <Image
                        className='d-block w-100'
                        src='https://p1.pxfuel.com/preview/867/465/196/grass-abstract-backdrop-background.jpg'
                        alt='Feedbacks'
                      />
                      <Carousel.Caption style={{marginBottom:90,fontSize:45}}>
                        <h3>{element.name}</h3>
                        <p>{element.feedback}</p>
                      </Carousel.Caption>
                    </Carousel.Item>
                  );
                })}
              </Carousel>
            </Col>
          </Row>
        ) : (
          <div>
            <h2 style={{ marginTop: 50 }}>
              There is no Feedback In the System
            </h2>
          </div>
        )}
      </>
    );
  }
}
