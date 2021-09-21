import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class RoadServiceContent extends Component {
  render() {
    return (
      <div>
        <Container>
          <Row xs={1} md={2}>
            <Col>
              <img
                src='https://media.istockphoto.com/vectors/roadside-assistance-vector-id628095858'
                width='600px'
                height='300px'
              />
            </Col>
            <Col>
              Conveying meaning to assistive technologies Using color to add
              meaning only provides a visual indication, which will not be
              conveyed to users of assistive technologies – such as screen
              readers. Ensure that information denoted by the color is either
              obvious from the content itself (e.g. the visible text), or is
              included through alternative means, such as additional text hidden
              with the .visually-hidden class.
            </Col>
          </Row>

          <Row xs={1} md={2}>
            <Col>
              Conveying meaning to assistive technologies Using color to add
              meaning only provides a visual indication, which will not be
              conveyed to users of assistive technologies – such as screen
              readers. Ensure that information denoted by the color is either
              obvious from the content itself (e.g. the visible text), or is
              included through alternative means, such as additional text hidden
              with the .visually-hidden class.
            </Col>
            <Col>
              <img
                src='https://dealerimages.dealereprocess.com/image/upload/w_2136/1544533.jpg'
                width='600px'
                height='300px'
              />
            </Col>
          </Row>
          <Row xs={1} md={2}>
            <Col>
              <img
                src='https://aaaliving.acg.aaa.com/wp-content/uploads/2019/04/aaa-roadside-assistance-benefits-mobile.jpg'
                width='600px'
                height='300px'
              />
            </Col>
            <Col>
              Conveying meaning to assistive technologies Using color to add
              meaning only provides a visual indication, which will not be
              conveyed to users of assistive technologies – such as screen
              readers. Ensure that information denoted by the color is either
              obvious from the content itself (e.g. the visible text), or is
              included through alternative means, such as additional text hidden
              with the .visually-hidden class.
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
