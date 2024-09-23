import React from "react";

import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();
  return (
    <div className="product-detail">
      <h1>Product Details</h1>
      <p>Product ID: {id}</p>
      {/* Product details will go here */}
    </div>
  );
};

export default ProductDetail;
