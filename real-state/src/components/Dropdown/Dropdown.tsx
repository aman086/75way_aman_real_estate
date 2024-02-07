/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { IconsArrowDown2 } from "../../icons/IconsArrowDown2";
import "./style.css";

interface Props {
  className: any;
  text: string;
  iconsArrowDown2Color: string;
}

export const Dropdown = ({
  className,
  text = "Select team member",
  iconsArrowDown2Color = "black",
}: Props): JSX.Element => {
  return (
    <div className={`dropdown ${className}`}>
      <div className="content">
        <div className="text-wrapper">{text}</div>
      </div>
      <IconsArrowDown2 className="icons-arrow-down" color={iconsArrowDown2Color} />
    </div>
  );
};

Dropdown.propTypes = {
  text: PropTypes.string,
  iconsArrowDown2Color: PropTypes.string,
};
