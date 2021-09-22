import React, { Component } from 'react';
import Team from '../media/images/team.jpg';
import Card from 'react-bootstrap/Card';
import { Row, Col } from 'react-bootstrap';
export default class AboutUsCard extends Component {
  render() {
    return (
      <Row>
        <h1 style={{ color: 'black' }}>Our Team Mates</h1>
        <Col style={{ marginBottom: 25 }} md={{ span: 0, offset: 0 }}>
          <Card
            style={{ width: '100%', marginLeft: 'auto', marginRight: 'auto' }}
          >
            <Card.Img variant='top' src={Team} />
            <Card.Body>
              <Card.Text></Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    );
  }
}
