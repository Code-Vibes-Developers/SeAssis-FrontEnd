import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export default class RoadServiceForm extends Component {
  render() {
    // console.log(this.props);
    return (
      <div class='border border-warning' style={{ borderRadius: '15px' }}>
        <Form onSubmit={this.props.HandleCreateService}>
          <Row className='mb-3'>
            <Col>
              <Form.Group
                className='mb-3'
                controlId='formBasicEmail'
                style={{ marginLeft: '15px' }}
              >
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type='text'
                  name='personName'
                  placeholder='Enter your name'
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group
                className='mb-3'
                controlId='formBasicPassword'
                onClick={this.props.HandleLocationHandleLocation}
              >
                <Form.Label>City</Form.Label>
                <Form.Control
                  as='select'
                  name='personAddress'
                  onChange={this.props.HandleLocation}
                >
                  <option>Choose your city</option>
                  <option value='Amman'>Amman</option>
                  <option value='Irbid'>Irbid</option>
                  <option value='Alsalt'>Alsalt</option>
                  <option value='Jerash'>Jerash</option>
                  <option value='Zarqa'>Zarqa</option>
                  <option value='Tafila'>Tafila</option>
                  <option value='Ajloun'>Ajloun</option>
                  <option value='Aqaba'>Aqaba</option>
                  <option value='Karak'>Karak</option>
                  <option value='Madaba'>Madaba</option>
                  <option value='Maan'>Maan</option>
                  <option value='Mafraq'>Mafraq</option>
                </Form.Control>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group
                controlId='formGridZip'
                style={{ marginRight: '15px' }}
              >
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  type='number'
                  name='personPhone'
                  placeholder='Add Your Phone'
                />
              </Form.Group>
            </Col>
          </Row>
          <Col>
            <Form.Group className='mb-3' controlId='formBasicCheckbox'>
              <Form.Label>Problem Description</Form.Label>
              <Form.Control
                style={{ height: 200 }}
                name='Description'
                type='text'
                placeholder='Add A Description To The Issue'
              />
              <Form.Text className='text-muted'></Form.Text>
            </Form.Group>
          </Col>
          <div class='d-grid gap-2'>
            <Button
              variant='warning'
              type='submit'
              style={{
                marginLeft: '15px',
                marginRight: '15px',
                marginBottom: '5px',
              }}
            >
              Ask For Help
            </Button>
          </div>
        </Form>
      </div>
    );
  }
}
