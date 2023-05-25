import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import "../styles/Footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <div className="socialMedia">
        <FacebookIcon />
        <TwitterIcon />
        <InstagramIcon />
      </div>
      <p>Tüm hakları saklıdır | Burger Yiyelim</p>
    </div>
  );
};

export default Footer;
