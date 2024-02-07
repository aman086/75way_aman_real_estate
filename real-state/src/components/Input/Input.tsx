/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

interface Props {
  className: any;
  textClassName: any;
  text: string;
}

export const Input = ({
  className,
  textClassName,
  text = "Select team member",
}: Props): JSX.Element => {
  return (
    <div className={`input ${className}`}>
      <div className="div-wrapper">
        <input
          type="text"
          className={`input ${className}`}
          placeholder={text}
        />
      </div>
    </div>
  );
};

Input.propTypes = {
  text: PropTypes.string,
};
