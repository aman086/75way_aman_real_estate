import React from "react";
import { Logo } from "../../icons/Logo";
import "./style.css";

interface Props {
  className: any;
}

export const HeaderDesktop = ({ className }: Props): JSX.Element => {
  return (
    <div className={`header-desktop ${className}`}>
      <div className="nav-items">
        <button className="menu-button">Home</button>
        <button className="menu-button">About</button>
        <button className="menu-button">Property</button>
        <button className="menu-button">Blog</button>
        <button className="menu-button">Contact</button>
      </div>
      <Logo className="logo-instance" />
    </div>
  );
};
