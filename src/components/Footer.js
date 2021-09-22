import React, { Component } from 'react';
import { Navbar, Col, Row } from 'react-bootstrap';
export default class Footer extends Component {
  render() {
    return (
      <Row fluid style={{ marginTop: 50 }}>
        <Col md={{ span: 0, offset: 0 }}>
          <Navbar
            expand='lg'
            style={{
              backgroundColor: '#343F56',
              margin: '-1%',
              height: 120,
            }}
            expand='lg'
            variant='dark'
          >
            <Navbar.Brand
              style={{
                marginRight: '47%',
              }}
            >
              <p style={{ fontSize: '25px', height: 50, padding: 10 }}>
                Code Vibes Developer&copy; 2021
              </p>
            </Navbar.Brand>
            <Navbar.Brand href='/Feedback'>Feedback</Navbar.Brand>
            <Navbar.Brand href='/AboutUs'>About Us</Navbar.Brand>
            <Navbar.Brand>
              <p
                style={{
                  marginLeft: 40,
                  fontSize: '20px',
                  height: 15,
                  padding: 10,
                }}
              >
                Email: SeAssis@outlook.com
              </p>
              <p
                style={{
                  marginLeft: 40,
                  fontSize: '20px',
                  height: 15,
                  padding: 10,
                }}
              >
                Contact Us: +962 78 7002130
              </p>
            </Navbar.Brand>
          </Navbar>
        </Col>
      </Row>
    );
  }
}
