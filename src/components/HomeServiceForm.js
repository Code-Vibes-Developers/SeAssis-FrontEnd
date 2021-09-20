import React, { Component } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { Form, Button } from 'react-bootstrap';
class HomeServiceForm extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col md={{ span: 8, offset: 2 }}>
            <Form onSubmit={this.props.HandleCreateHomeService}>
              <Form.Group className='mb-3' controlId='formBasicEmail'>
                <Form.Label style={{ fontSize: 25 }}>Name</Form.Label>
                <Form.Control
                  style={{
                    marginLeft: 200,
                    display: 'inline-block',
                    height: 50,
                    width: 400,
                  }}
                  type='text'
                  placeholder='Enter your name'
                  name='personName'
                />
              </Form.Group>
              <Form.Group className='mb-3' controlId='formBasicPassword'>
                <Button
                  style={{ fontSize: 25, display: 'inline', height: 100 }}
                  variant='primary'
                  onClick={this.props.HandleLocation}
                >
                  Get Your Location !
                </Button>
                <Form.Control
                  style={{
                    marginLeft: 25,
                    display: 'inline-block',
                    height: 100,
                    width: 400,
                  }}
                  type='text'
                  placeholder='Add Location Information'
                  name='personAddress'
                />
              </Form.Group>
              <Form.Group className='mb-3' controlId='formBasicEmail'>
                <Form.Label style={{ fontSize: 25 }}>Phone number</Form.Label>

                <Form.Control
                  style={{
                    marginLeft: 100,
                    display: 'inline-block',
                    height: 50,
                    width: 400,
                  }}
                  type='number'
                  placeholder='Enter phone number'
                  name='personPhone'
                />
              </Form.Group>
              <Form.Group className='mb-3' controlId='formBasicEmail'>
                <Form.Label style={{ fontSize: 25 }}>
                  Problem Description
                </Form.Label>

                <Form.Control
                  type='text'
                  placeholder='Whats youre problem ?'
                  name='Description'
                  style={{
                    marginLeft: 25,
                    display: 'inline-block',
                    height: 100,
                    width: 400,
                  }}
                />
              </Form.Group>
              <Col md={{ span: 4, offset: 4 }}>
                <Button
                  style={{ fontSize: 25, display: 'inline', height: 100 }}
                  variant='primary'
                  type='submit'
                >
                  Ask for help !
                </Button>
              </Col>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default HomeServiceForm;
