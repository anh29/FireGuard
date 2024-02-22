import React from "react";
import logo from "../assets/img/fireguard-logo.png";
import "../assets/css/header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="flex justify-between shadow-lg head">
      <img src={logo} alt="logo" className="w-[180px]" />
      <ul className="flex gap-8 md:gap-14 ">
        <li className="hover:font-bold cursor-pointer">
          <Link className="link" to="/">
            Trang chủ
          </Link>
        </li>
        <li className="hover:font-bold cursor-pointer">
          <Link className="link" to="/news">
            Tin tức
          </Link>
        </li>
        <li className="hover:font-bold cursor-pointer">
          <Link className="link" to="/product">
            Sản phẩm
          </Link>
        </li>
        <li className="hover:font-bold cursor-pointer">
          <Link className="link" to="/location">
            Vị trí
          </Link>
        </li>
        <li className="hover:font-bold cursor-pointer">
          <Link className="link" to="/status">
            Tình trạng
          </Link>
        </li>
        <li className="hover:font-bold cursor-pointer">
          <Link className="link" to="/contact">
            Liên hệ
          </Link>
        </li>
        <li className="font-bold cursor-pointer">
          <Link className="link" to="#">
            Tài khoản
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
