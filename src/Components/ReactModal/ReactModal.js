import React, { useState } from 'react';
import { Button, Card, Modal } from 'react-bootstrap';

const ReactModal = ({ product }) => {
  console.log(product);
  const { image, price, title, description } = product;

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
              <Card.Title>
                {title.length > 20 ? title.slice(0, 20) + '...' : title}
              </Card.Title>
              <Card.Text>
                {description.length > 50
                  ? description.slice(0, 50) + '...'
                  : description}
                <p className="pt-2">Price: {price}</p>
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
