// Header.tsx
import React, { useState } from "react";
import SignUpForm from "./signup";
import LoginForm from "./login";
import "./Header.style.css";

const Header: React.FC = () => {
  const [activeComponent, setActiveComponent] = useState<number | null>(null);

  const handleClick = (componentNumber: number) => {
    setActiveComponent((prevActiveComponent) =>
      prevActiveComponent === componentNumber ? null : componentNumber
    );
  };

  const handleSignUp = (name: string, password: string) => {
    console.log(`Signing up ${name} with password ${password}`);
  };

  const handleLogin = (username: string, password: string) => {
    console.log(
      `Logging in with username ${username} and password ${password}`
    );
  };

  return (
    <div className="header-container">
      <h2 className="header-title">Let's start making our application</h2>
      <div className="button-container">
        <button
          onClick={() => handleClick(1)}
          className={`header-button ${activeComponent === 1 ? "active" : ""}`}
        >
          Register Here
        </button>
        <button
          onClick={() => handleClick(2)}
          className={`header-button ${activeComponent === 2 ? "active" : ""}`}
        >
          Login Here
        </button>
      </div>

      {activeComponent === 1 && <SignUpForm onSubmit={handleSignUp} />}
      {activeComponent === 2 && <LoginForm onLogin={handleLogin} />}
    </div>
  );
};

export default Header;
