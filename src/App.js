// 1

import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import React from "react";
import MainHome from "./Components/MainHome";
import ResturantDetail from "./Components/ResturantDetail";
import Restaurant_Manu from "./Components/Restaurant_Manu";
import ResturantList from "./Components/ResturantList";
import RestaurantOrder from "./Components/RestaurantOrder";
import AddToCart from "./Components/AddToCart";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaCartPlus } from "react-icons/fa";
import { useState } from "react";
function App1() {
  const [cart, setCart] = useState([]);
  const onAdd = (item) => {
    const exist = cart.find((x) => {
      return x.id === item.id;
    });
    if (exist) {
      setCart(
        cart.map((x) =>
          x.id === item.id ? { ...exist, quantity: exist.quantity + 1 } : x
        )
      );
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };
  const onRemove = (item) => {
    const updatecart = cart.map((x) =>
      x.id === item.id ? { ...x, quantity: x.quantity - 1 } : x
    );
    const filtercart = updatecart.filter((x) => x.quantity > 0);
    setCart(filtercart);
  };
  return (
    <>
      <marquee className="bg-black">
        <p className="marqueee">FOR ANY QUARY CONTACT US +923052795633</p>
      </marquee>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">Foodies</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#action1">
                <Link to="/" className="Nav">
                  Home
                </Link>
              </Nav.Link>
              <Nav.Link href="#action1">
                <Link to="/detail" className="Nav">
                  Detail
                </Link>
              </Nav.Link>
              <Nav.Link href="#action2">
                <Link to="/items" className="Nav">
                  Rating-items
                </Link>
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
              <div className="container">
                <cart className="d-flex fa-cart">
                  <Link to="/card">
                    <FaCartPlus />
                  </Link>
                  <p>{cart.length}</p>
                </cart>
              </div>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainHome />}></Route>
          <Route path="/items" element={<ResturantList />}></Route>
          <Route path="/detail" element={<ResturantDetail />}></Route>
          <Route path="/order" element={<RestaurantOrder />}></Route>
          <Route
            path="/manu"
            element={<Restaurant_Manu data={onAdd} />}
          ></Route>
          <Route
            path="/card"
            element={
              <AddToCart item={cart} increase={onAdd} decrease={onRemove} />
            }
          ></Route>
          {/* <Route path="/signup" element={<SignForm />}></Route> */}
        </Routes>
      </div>
    </>
  );
}
export default App1;
