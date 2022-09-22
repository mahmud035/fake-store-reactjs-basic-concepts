import React, { useState } from 'react';
import { Button, Card, Modal } from 'react-bootstrap';

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
    <div>
      <Button variant="primary" onClick={handleShow}>
        See Details
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Card
            data-aos="fade-up"
            data-aos-duration="1000"
            className="h-100 border-0 shadow-sm"
          >
            <Card.Img variant="top" src={image} className="card-image" />
            <Card.Body>
              <Card.Title>{title}</Card.Title>
              <Card.Text>
                {description}
                <p className="mb-0 py-1">Rating: {rate}</p>
                <strong>
                  <p className="pt-1 ">Price: {price}</p>
                </strong>
              </Card.Text>
              <ReactModal product={product}></ReactModal>
            </Card.Body>
          </Card>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ReactModal;
