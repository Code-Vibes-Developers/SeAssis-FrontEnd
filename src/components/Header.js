import React, { Component } from 'react';
import { Col, Container, Navbar, NavDropdown } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import Logo from '../media/images/Logo.png';
export default class Header extends Component {
  render() {
    return (
      <Container style={{ marginBottom: 75 }}>
        <Col md={{ span: 0, offset: 0 }}>
          <Navbar
            fixed='top'
            expand='lg'
            style={{
              backgroundColor: '#343F56',
              fontSize: 25,
              height: 105,
              padding: 10,
            }}
            variant='dark'
          >
            <Col md={{ span: 3, offset: 0 }} xs={{ span: 8, offset: 0 }}>
              <Image
                style={{
                  width: 200,
                  height: 200,
                }}
                src={Logo}
                rounded
              />
            </Col>
            <Navbar.Brand style={{ marginRight: 75 }} href='/'>
              Home
            </Navbar.Brand>
            <NavDropdown style={{ marginRight: 75 }} title='Services'>
              <NavDropdown.Item href='/HomeServices'>
                Home Services
              </NavDropdown.Item>
              <NavDropdown.Item href='/RoadServices'>
                Road Services
              </NavDropdown.Item>
            </NavDropdown>
            <Navbar.Brand style={{ marginRight: 75 }} href='/Requests'>
              Requests
            </Navbar.Brand>
            <Navbar.Brand style={{ marginRight: 75 }} href='/Feedback'>
              Feedback
            </Navbar.Brand>
            <Navbar.Brand style={{ marginRight: 75 }} href='/AboutUs'>
              About Us
            </Navbar.Brand>
          </Navbar>
        </Col>
      </Container>
    );
  }
}
