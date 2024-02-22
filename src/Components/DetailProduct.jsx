import { useParams } from "react-router-dom";
import products from "../fakeAPI/products.json";
import "../assets/css/detail.css";

const DetailProduct = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id, 10));

  if (!product) {
    return <div>Product not found.</div>;
  }

  return (
    <div className="dp card-wrapper">
      <div className="card">
        <div className="product-imgs">
          <img
            className="img-area"
            src={`/src/assets/img/${product.img}`}
            alt={product.name}
          />
        </div>
        <div className="product-content">
          <h2 className="product-title">{product.name}</h2>
          <div className="product-rating">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star-half-alt"></i>
            <span>4.7(21)</span>
          </div>
          <div className="product-price">
            <p className="new-price">
              New Price: <span>2.200.000đ</span>
            </p>
          </div>
          <div className="product-detail">
            <h2>About this item: </h2>
            <p>{product.description}</p>
          </div>

          <div className="purchase-info">
            <input type="number" value="1" />
            <button type="button" className="btn">
              Add to Cart <i className="fas fa-shopping-cart"></i>
            </button>
            <button type="button" className="btn">
              Compare
            </button>
          </div>

          <div className="social-links">
            <p>Share At: </p>
            <a href="#">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#">
              <i className="fab fa-whatsapp"></i>
            </a>
            <a href="#">
              <i className="fab fa-pinterest"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailProduct;
