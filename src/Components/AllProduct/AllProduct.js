import React, { useEffect, useState } from 'react';
import SingleProduct from '../SingleProduct/SingleProduct';
import './AllProduct.css';

const AllProduct = ({ handleAddToCart }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div>
      <div className="container py-5">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xxl-4 g-4">
          {products.map((product, index) => (
            <SingleProduct
              key={index}
              product={product}
              handleAddToCart={handleAddToCart}
            ></SingleProduct>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllProduct;
