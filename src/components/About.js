import React from "react";
import BannerImage from "../assets/img/banneryeni.jpg";
import "../styles/About.css";
const About = () => {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${BannerImage})` }}
      ></div>
      <div className="aboutBottom">
        <h1>Hakkımızda</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis,
          qui voluptates incidunt illo accusamus cupiditate fugiat ab facilis
          quis laudantium deserunt perferendis veniam consequuntur, assumenda
          itaque animi rerum repudiandae magnam!Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Perspiciatis, qui voluptates incidunt
          illo accusamus cupiditate fugiat ab facilis quis laudantium deserunt
          perferendis veniam consequuntur, assumenda itaque animi rerum
          repudiandae magnam!Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Perspiciatis, qui voluptates incidunt illo accusamus cupiditate
          fugiat ab facilis quis laudantium deserunt perferendis veniam
          consequuntur, assumenda itaque animi rerum repudiandae magnam!Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, qui
          voluptates incidunt illo accusamus cupiditate fugiat ab facilis quis
          laudantium deserunt perferendis veniam consequuntur, assumenda itaque
          animi rerum repudiandae magnam!Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Perspiciatis, qui voluptates incidunt illo accusamus
          cupiditate fugiat ab facilis quis laudantium deserunt perferendis
          veniam consequuntur, assumenda itaque animi rerum repudiandae magnam!
        </p>
      </div>
    </div>
  );
};

export default About;
