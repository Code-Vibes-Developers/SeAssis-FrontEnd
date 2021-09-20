import React, { Component } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import '../HomeGrid.css';
export default class HomeGrid extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col md={{ span: 6, offset: 0 }}>
            <div class='card'>
              <div class='box'>
                <div class='content'>
                  <i class='fab fa-python'></i>
                  <Image
                    className='d-block w-100'
                    src='https://previews.123rf.com/images/kolotype/kolotype1405/kolotype140500001/27994032-young-couple-broken-down-at-the-side-of-a-road-standing-in-front-of-their-car-with-the-hood-up-phoni.jpg'
                    alt='RoadService'
                    fluid
                  />
                  <h3>Road Service</h3>
                  <p>
                    If You need a guide or help while your traveling by your car
                    or if you lost in the road and you need some fuel or food
                  </p>
                  <a href='/RoadServices'>Read More</a>
                </div>
              </div>
            </div>
          </Col>
          <Col md={{ span: 6, offset: 0 }}>
            <div class='card'>
              <div class='box'>
                <div class='content'>
                  <i class='fab fa-java'></i>
                  <Image
                    className='d-block w-100'
                    style={{ width: 500 }}
                    src='https://bh-aws-media.s3-accelerate.amazonaws.com/2018/11/Miele_Housekeeping_2.jpg'
                    alt='RoadService'
                    fluid
                    rounded
                  />
                  <h3>Home Services</h3>
                  <p>
                    If you need a help in daily routine home tasks or if you
                    need to solve plumping electrical issues in your home we can
                    help you by requesting us with five easy steps go ahead and
                    requesting your order now.
                  </p>
                  <a href='/HomeServices'>Read More</a>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}
