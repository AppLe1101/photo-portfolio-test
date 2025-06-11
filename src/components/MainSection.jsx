import React from "react";
import { style } from "framer-motion";
import "./styles/MainSection.css";

const MainSection = () => {
  return (
    <div className="main-section-container">
      <div className="main-info">
        <div className="info">
          <h1>Приветствие</h1>
          <p>Какой то текст</p>
          <p>Ещё какой то текст</p>
          <p>И ещё какой то текст</p>
        </div>
      </div>
    </div>
  );
};

export default MainSection;
