import { Route, Routes } from "react-router-dom";
import Header from "../Components/Header";
import Home from "./Home";
import DetailProduct from "../Components/DetailProduct";
import DetailNews from "../Components/DetailNews";
import Contact from "../Components/Contact";
import Status from "../Components/Status";
import Location from "../Components/Location";

function Layout() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/detail/:id" element={<DetailProduct />} />
        <Route path="/news/detail" element={<DetailNews />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/status" element={<Status />} />
        <Route path="/location" element={<Location />} />
      </Routes>
    </>
  );
}

export default Layout;
