import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
export default class RoadServiceForm extends Component {
  render() {
    // console.log(this.props);
    return (
      <div>
        <Form onSubmit={this.props.HandleCreateService}>
          <Form.Group className='mb-3' controlId='formBasicEmail'>
            <Form.Label>Name</Form.Label>
            <Form.Control
              type='text'
              name='personName'
              placeholder='Enter your name'
            />
            <Form.Text className='text-muted'></Form.Text>
          </Form.Group>

          <Form.Group className='mb-3' controlId='formBasicPassword'>
            {/* <Form.Label>Adress</Form.Label> */}
            <Button
              variant='primary'
              name='geo'
              onClick={this.props.HandleLocation}
            >
              Get Your Location
            </Button>
            <Form.Control
              type='text'
              name='personAddress'
              placeholder='Add description'
            />
          </Form.Group>
          <Form.Group className='mb-3' controlId='formBasicCheckbox'>
            <Form.Label>Mobile Number</Form.Label>

            <Form.Control type="number" name="personPhone" placeholder="Add Your Phone" />
            <Form.Text className="text-muted"></Form.Text>

          </Form.Group>
          <Form.Group className='mb-3' controlId='formBasicCheckbox'>
            <Form.Label>Problem Description</Form.Label>
            <Form.Control
              name="Description"
              type="text"
              placeholder="Add A Description To The Issue"
            />
            <Form.Text className='text-muted'></Form.Text>
          </Form.Group>
          <Button variant='primary' type='submit'>
            Ask For Help
          </Button>
        </Form>
      </div>
    );
  }
}
