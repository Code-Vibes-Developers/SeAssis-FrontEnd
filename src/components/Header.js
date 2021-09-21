import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
export default class Header extends Component {
  render() {
    return (
      <div>
        <Navbar bg='light' variant='light'>
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
