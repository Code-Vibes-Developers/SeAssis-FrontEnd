import React, { Component } from 'react';
import { Container, Navbar, NavDropdown } from 'react-bootstrap';
export default class Header extends Component {
  render() {
    return (
      <div>
        <Navbar
          fixed='top'
          expand='lg'
          style={{ fontSize: 25, height: 100, padding: 10 }}
          bg='dark'
          variant='dark'
        >
          <Container>
            <Navbar.Brand href='/'>Home</Navbar.Brand>
            <NavDropdown title='Services' id='collasible-nav-dropdown'>
              <NavDropdown.Item href='/HomeServices'>
                Home Services
              </NavDropdown.Item>
              <NavDropdown.Item href='/RoadServices'>
                Road Services
              </NavDropdown.Item>
            </NavDropdown>
            <Navbar.Brand href='/Requests'>Requests</Navbar.Brand>
            <Navbar.Brand href='/Feedback'>Feedback</Navbar.Brand>
            <Navbar.Brand href='/AboutUs'>About Us</Navbar.Brand>
          </Container>
        </Navbar>
      </div>
    );
  }
}
