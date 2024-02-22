import { Link } from "react-router-dom";
import news from "../fakeAPI/news.json";
import "../assets/css/brief.css";

const BriefNews = () => {
  return (
    <div className="bd">
      <div className="wrapper">
        <p className="title">Tin tức</p>
        <i id="left1" className="fa-solid fa-angle-left"></i>
        <ul className="carousel">
          {news.map((news) => (
            <li key={news.id} className="briefp card">
              <div className="img">
                <img
                  className="img-area"
                  src={`src/assets/img/${news.img}`}
                  alt={news.name}
                />
              </div>
              <h2 className="short">{news.name}</h2>
              <span className="decp">{news.description}</span>
              <Link to={`/news/detail`}>See More</Link>
            </li>
          ))}
        </ul>
        <i id="right1" className="fa-solid fa-angle-right"></i>
      </div>
    </div>
  );
};

export default BriefNews;
