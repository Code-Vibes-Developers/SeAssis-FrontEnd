import React, { Component } from 'react';
import Team from '../media/images/team.jpg';
import Card from 'react-bootstrap/Card';
import { Row, Col, Container } from 'react-bootstrap';
import '../HomeGrid.css';
export default class AboutUsCard extends Component {
  render() {
    return (
      <Container style={{ marginTop: 40 }}>
        <Row>
          <h1 >Our Team Mates</h1>
          <Col md={{ span: 4, offset: 0 }}>
            <Card style={{ width: 1000 }}>
              <Card.Img style={{ width: 'auto ' }} variant='top' src={Team} />
              <Card.Body>
                <Card.Text></Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}
