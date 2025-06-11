import React from "react";
import "./styles/AboutBlock.css";

const AboutBlock = () => {
  return (
    <div className="about-block-container">
      <div className="about-block">
        <p>Моё имя</p>
        <p>Мой возраст</p>
        <p>Моё хобби</p>
        <p>Мой опыт работы</p>
      </div>
      <div className="photo">
        <img src="" alt="my-photo" />
      </div>
    </div>
  );
};

export default AboutBlock;
