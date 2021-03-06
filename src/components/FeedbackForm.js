import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Row, Col, Container } from 'react-bootstrap';
export default class FeedbackForm extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col md={{ span: 8, offset: 2 }}>
            <Form onSubmit={this.props.handelCreateFeedback}>
              <Form.Group className='mb-3'>
                <Form.Label>Name</Form.Label>
                <Form.Control name='name' placeholder='Enter Your Name' />
              </Form.Group>
              <Form.Group className='mb-3' >
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  name='email'
                  placeholder='Enter Your Email Address'
                />
                <Form.Text className='text-muted'>
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className='mb-3'>
                <Form.Label>Mobile Number</Form.Label>
                <Form.Control
                  name='mobile'
                  placeholder='Enter Your Mobile Number'
                />
              </Form.Group>
              <Form.Group className='mb-3'>
                <Form.Label>Service Type</Form.Label>
                <Form.Control
                  name='serviceType'
                  placeholder='Enter Your Service Type'
                />
              </Form.Group>
              <Form.Group className='mb-3'>
                <Form.Label>Feedback</Form.Label>
                <Form.Control
                  style={{ height: 100 }}
                  name='feedback'
                  placeholder='Enter Your Feedback'
                />
              </Form.Group>
              <Button variant='primary' type='submit'>
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}
