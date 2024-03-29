// src/components/Title/Title.js
import React from "react";
import "./Title.css";

function Title({ text }) {
  return (
    <div className="title">
      <h4>{text}</h4>
      <hr />
    </div>
  );
}

export default Title;
