import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
class HomeServiceForm extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div class='border border-warning' style={{ borderRadius: '15px' }}>
        <Form onSubmit={this.props.HandleCreateHomeService}>
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
          <div
            class='d-grid gap-2'
            style={{
              marginLeft: '15px',
              marginRight: '15px',
              marginBottom: '5px',
            }}
          >
            <Button variant='warning' type='submit'>
              Ask For Help
            </Button>
          </div>
        </Form>
      </div>
    );
  }
}
export default HomeServiceForm;
// this.props.HandleCreateHomeService

{
  /* <Form onSubmit={}>
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
          </Form.Group> */
}
//   <Form.Group className="mb-3" controlId="formBasicPassword">
//     <Button onClick={this.props.HandleLocation} variant="primary">Get Your Location !</Button>
//     <Form.Control type="text" placeholder="Add description" name="personAddress" />

//   </Form.Group>
//   <Form.Group className='mb-3' controlId='formBasicEmail'>
//     <Form.Label>Phone number</Form.Label>

//     <Form.Control type="number" placeholder="Enter phone number" name="personPhone" />

//   </Form.Group>
//   <Form.Group className='mb-3' controlId='formBasicEmail'>
//     <Form.Label>Problem Description :</Form.Label>

//     <Form.Control type="text" placeholder="Whats youre problem ?" name="Description" />

//   </Form.Group>

//   <Button variant='primary' type='submit'>
//     Ask for help !
//   </Button>
// </Form>
