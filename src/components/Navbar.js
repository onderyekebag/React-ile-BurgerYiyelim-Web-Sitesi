import React from "react";
import Logo from "../assets/img/burgerlogo.png";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="main">
        <img src={Logo} alt="Burger Yiyelim" />
        <div className="mainLink">
          <Link to="/">Anasayfa</Link>
          <Link to="/menu">Menü</Link>
          <Link to="/about">Hakkımızda</Link>
          <Link to="/contact">İletişim</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
