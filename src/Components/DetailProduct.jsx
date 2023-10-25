// DetailProduct.js
import React from "react";
import { useParams } from "react-router-dom";
import products from "../fakeAPI/products.json";

const DetailProduct = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id, 10));

  if (!product) {
    return <div>Product not found.</div>;
  }

  return (
    <div className="product-detail">
      <img src={product.img} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
    </div>
  );
};

export default DetailProduct;
