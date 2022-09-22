import React, { useState } from 'react';
import { Button, Card, Modal } from 'react-bootstrap';
import { BsFillCartFill } from 'react-icons/bs';
import { AiFillDelete } from 'react-icons/ai';
import './Cart.css';

const Cart = ({ cart, handleClearCart }) => {
  console.log(cart);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button className="shopping-cart-icon-modal" onClick={handleShow}>
        <BsFillCartFill className="shopping-cart"></BsFillCartFill>
        <sup className="item-number">{cart.length}</sup>
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton className="modal-bg">
          <Modal.Title>Cart Item</Modal.Title>
        </Modal.Header>

        <Modal.Body className="modal-bg">
          <Card
            data-aos="fade-up"
            data-aos-duration="1000"
            className="h-100 border-0 shadow-sm modal-card-bg"
          >
            <Card.Body>
              {cart.map((item, index) => (
                <div key={index} className="cart-item shadow-lg">
                  <img src={item.image} alt="" />
                  <div>
                    <p>{item.title}</p>
                    <p>$ {item.price}</p>
                  </div>
                </div>
              ))}
            </Card.Body>
          </Card>
        </Modal.Body>

        <Modal.Footer className="modal-bg d-flex justify-content-between">
          <AiFillDelete
            onClick={handleClearCart}
            size={32}
            className="clear-cart-icon"
          ></AiFillDelete>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Cart;
