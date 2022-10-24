import React from "react";
import "./Button.scss";

function Button({ link, text }) {
  return (
    <a href={link} target="_blank" className="btn">
      {text}
    </a>
  );
}

export default Button;
