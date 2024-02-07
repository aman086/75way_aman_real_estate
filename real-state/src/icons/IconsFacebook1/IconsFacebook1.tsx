import React from "react";

interface Props {
  className: any;
}

export const IconsFacebook1 = ({ className }: Props): JSX.Element => {
  return (
    <img
      className={`icons-facebook-1 ${className}`}
      src="https://cdn.iconscout.com/icon/free/png-512/free-social-152-95513.png?f=webp&w=256"
      alt="Facebook Icon"
    />
  );
};
