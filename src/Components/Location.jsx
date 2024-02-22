import React from "react";
import "../assets/css/location.css";

function Location() {
  return (
    <div className="location">
      <h2 className="ltitle">Vị trí hiện tại của tàu của bạn</h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1852.6017711533914!2d108.25198974316126!3d15.97493408309991!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1699595388987!5m2!1sen!2s"
        style={{ border: 0, width: "130vh", height: "90vh" }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}

export default Location;
