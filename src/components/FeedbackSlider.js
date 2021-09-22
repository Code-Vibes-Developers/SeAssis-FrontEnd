import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
export default class FeedbackSlider extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        {this.props.Feedbacks.length ? (
          <Row>
            <Col md={{ span: 0, offset: 0 }}>
              <Carousel itemsToShow={this.props.Feedbacks.length}>
                {this.props.Feedbacks.map((element) => {
                  return (
                    <Carousel.Item interval={3000}>
                      <img
                        className='d-block w-100'
                        src='https://images.unsplash.com/photo-1531824475211-72594993ce2a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80'
                        rounded
                        style={{height:600,width:300}}
                      />
                      <Carousel.Caption style={{ color: 'black',fontSize:80,marginBottom:'5%' }}>
                        <h3>{element.name}</h3>
                        <p>{element.feedback}</p>
                      </Carousel.Caption>
                    </Carousel.Item>
                  );
                })}
              </Carousel>
            </Col>
          </Row>
        ) : (
          <div>
            <h2 style={{ marginTop: 50 }}>Book Collection is Empty</h2>
          </div>
        )}
      </>
    );
  }
}
