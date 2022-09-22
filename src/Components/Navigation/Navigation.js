import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { BsFillCartFill } from 'react-icons/bs';
import './Navigation.css';

const Navigation = ({ cart }) => {
  return (
    <Navbar className="py-3 navigation-bar">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src="./logo.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto navbar-cart-container">
            <BsFillCartFill className="shopping-cart"></BsFillCartFill>
            <sup className="item-number">{cart.length}</sup>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
