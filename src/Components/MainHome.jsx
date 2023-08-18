// 2

import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Cities } from './Cities';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
function MainHome() {
  const check = document.getElementById("cart_input");
  const show = () => {
    if (check.value === "") {
      alert("Please Enter your Email");
    }
    else {
      alert("your request succesfully Submitted , check your mail");
      document.getElementById('cart_input').value = "";
    }
  }
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img className="img" src="//cdn.shopify.com/s/files/1/0409/6858/5379/files/slide1.1.jpg?v=1613554264" alt="First slide" />
          <Carousel.Caption>
            <pre className='pretext text-dark text-start'>The Perfect Way<br />
              To Entertain</pre>
            <Link to="/order"><button type='button' className='btn btn-dark mx-1 S-btn'>Order Now</button></Link>
            <Link to="/manu"><button type='button' className='btn btn-dark mx-1 S-btn'>Manu</button></Link>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="img"
            src="https://www.mydynamics.co.za/wp-content/uploads/2020/08/10-Guidelines-for-healthy-eating7-min-e1598264405367-1024x619.png"
            alt="Second slide"
          />
        </Carousel.Item>
      </Carousel>
      <div className='container'>
        <h4 className='text-start text-muted m-2'>Find us in these cities and many more !</h4>
        <div className='row'>
          {Cities.map((Cities) => (
            <Card className='border-0 cart m-2 col-sm-3 col-lg-4' style={{ width: '13rem' }}>
              <Card.Img className='img_url' variant="top" src={Cities.image_url} />
              <Card.Body>
                <Card.Title className='cart_city'>{Cities.city}</Card.Title>
              </Card.Body>
            </Card>
          )
          )}
        </div>
      </div>
      <div className='container row'>
        <div className='cart_pic col-lg-6 mt-3'>
          <Card style={{ width: '30rem' }}>
            <Card.Img variant="top" style={{ height: '300px' }} src="https://d1ralsognjng37.cloudfront.net/64510d28-6197-4ba3-bb25-ec474e858976.jpeg" />
          </Card>
          <Card.Body>
            <Card.Title className='cart_city1'><u>Every Time</u><br />Any Time</Card.Title>
          </Card.Body>
        </div>
        <div className='cart_signup col-lg-6' style={{ height: '330px' }}>
          <p className='fw-bold' id='off'>GET 5% OFF</p>
          <p id='para'>SIGN UP NOW TO GET CHANCE</p>
          <Card style={{ width: '20rem' }}>
            <input type='Email' id='cart_input' style={{ height: '45px' }} placeholder='Enter your Email' />
          </Card>
          <button className='cart_btn bg-dark w-25' onClick={show}>Sign Up</button>
        </div>
      </div>
    </>
  )
}
export default MainHome;