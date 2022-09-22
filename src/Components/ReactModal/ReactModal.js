import React, { useState } from 'react';
import { Button, Card, Modal } from 'react-bootstrap';
import './ReactModal.css';

const ReactModal = ({ product }) => {
  // console.log(product);
  const {
    image,
    price,
    title,
    description,
    rating: { rate },
  } = product;

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button className="see-details-btn " onClick={handleShow}>
        See Details
      </Button>

      <Modal show={show} onHide={handleClose} className="p-3 ">
        <Modal.Header closeButton className="modal-bg">
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>

        <Modal.Body className="modal-bg">
          <Card
            data-aos="fade-up"
            data-aos-duration="1000"
            className="h-100 border-0 shadow-sm modal-card-bg"
          >
            <Card.Img variant="top" src={image} className="card-image" />
            <Card.Body>
              <Card.Title>{title}</Card.Title>
              <Card.Text>
                {description}
                <p className="mb-0 py-2">Rating: {rate}</p>
                <strong className="pb-2">Price: {price}</strong>
              </Card.Text>
            </Card.Body>
          </Card>
        </Modal.Body>

        <Modal.Footer className="modal-bg">
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ReactModal;
