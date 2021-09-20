import React, { Component } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';

import { Col, Container, Row } from 'react-bootstrap';
require('dotenv').config();
class Requests extends Component {
  constructor(props) {
    super(props);
    this.state = {
      services: [],
    };
  }

  componentDidMount = () => {
    axios
      .get(`${process.env.REACT_APP_SERVER}/services`)
      .then((servicesRes) => {
        this.setState({ services: servicesRes.data });
        console.log(this.state.services);
      })
      .catch((error) => alert(error.message));
  };
  render() {
    return (
      <Container style={{ marginTop: 100 }}>
        <h1>Requests in progress</h1>
        {this.state.services.length > 0 ? (
          <Row>
            {this.state.services.map((element) => {
              return (
                <Col md={{ span: 6, offset: 0 }}>
                  <Card itemsToShow={this.state.services.length}>
                    <Card.Img variant='top' src={element.map} />
                    <Card.Body>
                      <Card.Title>
                        Person Name : {element.Pesron_Name}
                      </Card.Title>
                      <Card.Text>
                        Problem Description :{element.Person_Description}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
          </Row>
        ) : (
          <div>
            <h2 style={{ marginTop: 50 }}>
              There is no Feedback In the System
            </h2>
          </div>
        )}
      </Container>
    );
  }
}

export default Requests;
