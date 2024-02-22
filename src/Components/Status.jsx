import React from "react";
import FlipClock from "./FlipClock";
import "../assets/css/status.css";

function Status() {
  const date1 = new Date("2024-10-31T23:59:59").getTime();
  const date2 = new Date("2023-12-31T23:59:59").getTime();
  const date3 = new Date("2023-11-20T23:59:59").getTime();
  return (
    <div className="status">
      <h1 className="stitle">HSD các thiết bị</h1>
      <div className="scontain">
        <img src={"/src/assets/img/bao-chay.jpg"} alt="" />
        <FlipClock targetDate={date1} />
      </div>
      <div className="scontain">
        <img src={"/src/assets/img/binh-chua-chay.jpg"} alt="" />
        <FlipClock targetDate={date2} />
      </div>
      <div className="scontain">
        <img src={"/src/assets/img/bao-chay.jpg"} alt="" />
        <FlipClock targetDate={date3} />
      </div>
    </div>
  );
}

export default Status;
