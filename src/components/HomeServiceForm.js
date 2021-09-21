import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
class HomeServiceForm extends Component {

  constructor(props){
    super(props);
  }
  render() {
    return (
      <>
        <Form onSubmit={this.props.HandleCreateHomeService}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name : </Form.Label>
            <Form.Control type="text" placeholder="Enter your name"
              name="personName" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          {/* <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group> */}
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Button onClick={this.props.HandleLocation} variant="primary">Get Your Location !</Button>
            <Form.Control type="text" placeholder="Add description" name="personAddress" />

          </Form.Group>
          <Form.Group className='mb-3' controlId='formBasicEmail'>
            <Form.Label>Phone number</Form.Label>

            <Form.Control type="number" placeholder="Enter phone number" name="personPhone" />

          </Form.Group>
          <Form.Group className='mb-3' controlId='formBasicEmail'>
            <Form.Label>Problem Description :</Form.Label>

            <Form.Control type="text" placeholder="Whats youre problem ?" name="Description" />

          </Form.Group>

          <Button variant='primary' type='submit'>
            Ask for help !
          </Button>
        </Form>
      </>
    );
  }
}
export default HomeServiceForm;
