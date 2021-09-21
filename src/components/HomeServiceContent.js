import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class HomeServiceContent extends Component {
  render() {
    return (
      <div>
        <Container>
          <Row xs={1} md={2}>
            <Col>
              <img
                src='https://cdn-colla.nitrocdn.com/aGOFLQWREmkPcEuaJpGePQetRgHRrvYU/assets/static/optimized/rev-1e5b529/wp-content/uploads/2018/08/on-demand-home-services-main.jpg'
                width='600px'
                height='300px'
              />
            </Col>
            <Col>
              We all know how on-demand apps have disrupted majority of
              traditional industries. From the way we travel, eat, shop, and
              even date, all has undergone a tremendous change. So, why not our
              household chores and errands? After all we all need an Irona in
              our lives who can complete our household chores and run our
              errands in a jiffy. Before we understand the nitty gritty of
              on-demand home services apps, let us start from the basic at what
              exact services that it provides.
            </Col>
          </Row>

          <Row xs={1} md={2}>
            <Col>
              As the name suggests it serves as a platform where you can hire
              professionals for all your household chores at your fingertips.
              Like all other on-Demands it is inbuilt with all the essential
              functionality. Got a leakage issue at home, hire a plumber near
              your locality who will fix it in no time. Got issues with your AC,
              call an air conditioning expert who will fix your AC in just a
              matter of few minutes.
            </Col>
            <Col>
              <img
                src='https://img2.chinadaily.com.cn/images/201902/26/5c7495a8a3106c65fffbd6f8.jpeg'
                width='600px'
                height='300px'
              />
            </Col>
          </Row>
          <Row xs={1} md={2}>
            <Col>
              <img
                src='http://jungleworks.com/wp-content/uploads/2018/02/yourstory-plumbers.jpg'
                width='600px'
                height='300px'
              />
            </Col>
            <Col>
              Similarly, these apps help in fixing problems of carpentry, house
              cleanliness, home appliances, and all other household problems.
              Building an on-demand application for home service is still in its
              nascent stage; however, there are already some established names
              in it. TaskRabbit, Thumbtack, and Handyman are well-known services
              in this vertical. All these apps are gradually gaining traction
              and one of them could well be as big as Uber.
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
