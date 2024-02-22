import { Link } from "react-router-dom";
import products from "../fakeAPI/products.json";
import "../assets/css/brief.css";

const BriefProduct = () => {
  return (
    <div className="bd">
      <div className="wrapper">
        <p className="title">Sản phẩm</p>
        <i id="left" className="fa-solid fa-angle-left"></i>
        <ul className="carousel">
          {products.map((product) => (
            <li key={product.id} className="briefp card">
              <div className="img">
                <img
                  className="img-area"
                  src={`src/assets/img/${product.img}`}
                  alt={product.name}
                />
              </div>
              <h2 className="short">{product.name}</h2>
              <span className="decp">{product.description}</span>
              <Link to={`/product/detail/${product.id}`}>See More</Link>
            </li>
          ))}
        </ul>
        <i id="right" className="fa-solid fa-angle-right"></i>
      </div>
    </div>
  );
};

export default BriefProduct;
