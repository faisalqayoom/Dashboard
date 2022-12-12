import React from "react";
import "./Button.scss";

const Button = ({ text, handleClick, className, icon }) => {
  return (
    <button
      type="submit"
      className={`${className} animated-button`}
      onClick={handleClick}
    >
      {text}
      <span className="ms-2">{icon}</span>
    </button>
  );
};

export default Button;
