import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';
export default class Footer extends Component {
  render() {
    return (
      <div style={{ textAlign: 'center',marginTop:150 }}>
        <Navbar fixed='bottom' bg="dark" variant="dark">
          <Navbar.Brand>
            <p style={{ fontSize: '25px',height:50,padding:10 }}>Code Vibes Developer&copy; 2021</p>
          </Navbar.Brand>
        </Navbar>
      </div>
    );
  }
}
