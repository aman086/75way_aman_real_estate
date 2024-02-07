import React from "react";
import PropTypes from "prop-types";

const IconsLinkedin = ({ className, url }: Props): JSX.Element => {
  const handleClick = () => {
    if (url) {
      window.open(url, "_blank");
    }
  };

  return (
    <img
      className={`icons-linkedIn ${className}`}
      src="https://cdn.iconscout.com/icon/free/png-512/free-linkedin-logo-3604327-3004185.png?f=webp&w=256"
      alt="LinkedIn Icon"
      onClick={handleClick}
    />
  );
};

IconsLinkedin.propTypes = {
  url: PropTypes.string, // New prop for the LinkedIn profile URL
};

export  {IconsLinkedin};
