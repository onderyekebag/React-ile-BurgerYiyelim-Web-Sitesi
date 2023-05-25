import React from "react";
import Banner from "../assets/img/banner.png";
import "../styles/Contact.css";
const Contact = () => {
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${Banner})` }}
      ></div>
      <div className="rightSide">
        <h1>Bizimle iletişime geçin</h1>
        <form>
          <label>Ad Soyad</label>
          <input type="text" placeholder="Adınızı ve soyadınızı giriniz" />
          <label>Email</label>
          <input type="email" placeholder="Email adresinizi giriniz" />
          <label>Mesajınızı giriniz</label>
          <textarea name="" rows="5"></textarea>
        </form>
      </div>
    </div>
  );
};

export default Contact;
