import PropTypes from "prop-types";
import React from "react";
import "./style.css";

interface Props {
  className?: string;
  text?: string;
  textClassName?: string;
  onClick?: () => void; // Added onClick event handler
}

export const ButtonTextOnly: React.FC<Props> = ({ className, text = "Button CTA", textClassName, onClick }) => {
  return (
    <button className={`button-text-only ${className}`} onClick={onClick}>
      <div className={`text ${textClassName}`}>{text}</div>
    </button>
  );
};

ButtonTextOnly.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
};
