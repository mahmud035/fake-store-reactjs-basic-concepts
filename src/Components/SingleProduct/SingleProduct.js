import React from 'react';
import { Card } from 'react-bootstrap';
import ReactModal from '../ReactModal/ReactModal';
import './SingleProduct.css';

const SingleProduct = ({ product }) => {
  // console.log(product);
  const { image, price, title, description } = product;

  return (
    <div>
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
    </div>
  );
};

export default SingleProduct;
