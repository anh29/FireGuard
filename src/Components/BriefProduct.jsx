// BriefProduct.js
import React from "react";
import { Link } from "react-router-dom";
import products from "../fakeAPI/products.json";

const BriefProduct = () => {
  return (
    <div className="single-box">
      {products.map((product) => (
        <div key={product.id} className="briefp">
          <img
            className="img-area"
            src={`src/assets/img/${product.img}`}
            alt={product.name}
          />
          <div className="img-text">
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <Link to={`/detail/${product.id}`}>See More</Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BriefProduct;
