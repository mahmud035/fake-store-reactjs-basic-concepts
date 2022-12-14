import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import Cart from '../Cart/Cart';
import './Navigation.css';

const Navigation = ({ cart, handleClearCart }) => {
  return (
    <Navbar className="py-3 navigation-bar">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src="./logo.png"
            width="40"
            height="40"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />{' '}
          <strong className="text-white ms-2 fs-4">Fake Store</strong>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto navbar-cart-container">
            {/* <BsFillCartFill className="shopping-cart"></BsFillCartFill>
            <sup className="item-number">{cart.length}</sup> */}
            <Cart cart={cart} handleClearCart={handleClearCart}></Cart>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
