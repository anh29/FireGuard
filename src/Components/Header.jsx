import React from "react";
import logo from "../assets/img/fireguard-logo.png";

function Header() {
  return (
    <div className="flex justify-between p-10">
      <img src={logo} alt="logo" className="w-[180px]" />
      <ul className="flex gap-8 md:gap-14 ">
        <li className="hover:font-bold cursor-pointer">Trang chủ</li>
        <li className="hover:font-bold cursor-pointer">Tin tức</li>
        <li className="hover:font-bold cursor-pointer">Sản phẩm</li>
        <li className="hover:font-bold cursor-pointer">Vị trí</li>
        <li className="hover:font-bold cursor-pointer">Tình trạng</li>
        <li className="hover:font-bold cursor-pointer">Liên hệ</li>
        <li className="font-bold cursor-pointer">Tài khoản</li>
      </ul>
    </div>
  );
}

export default Header;
