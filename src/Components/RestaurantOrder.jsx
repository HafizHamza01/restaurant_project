// 6

import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
function RestaurantOrder() {
  return (
    <>
      <div className='box'>
        <Form className='container form-container'>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className='form-label'>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label className='form-label-password'>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check className='form-label-check' type="checkbox" label="Accept All Policies" />
          </Form.Group>
          <div className='m-2 buttons'>
            <Button className='mx-2' variant="primary" type="submit">Sign in</Button>
            <Link to="/signup"><Button variant="primary" type="submit">Sign up</Button></Link>
          </div>
        </Form>
      </div>
    </>
  )
}

export default RestaurantOrder;
