import React, { useState } from "react";
import axios, { AxiosError } from "axios";
import "./signup.style.css"; // Import the CSS file
import LoginForm from "./login";

interface SignUpFormProps {
  onSubmit: (name: string, password: string) => void;
}

const SignUpForm: React.FC<SignUpFormProps> = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [islogin, setIsLogin] = useState(false);
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const response = await axios.post("http://localhost:3000/api/signup", {
        name,
        password,
      });
      console.log(response);
      setName("");
      setPassword("");
      setIsLogin(true);
      // If successful, call the parent component's onSubmit function
      onSubmit(name, password);
    } catch (error: any) {
      console.error("Error:", error);

      if (axios.isAxiosError(error)) {
        console.error(
          "Server responded with an error:",
          (error as AxiosError).response?.data
        );
        console.error("Status code:", (error as AxiosError).response?.status);
      } else {
        console.error("Error setting up the request:", error.message);
      }
    }
  };
  const handleLogin = (username: string, password: string) => {
    console.log(
      `Logging in with username ${username} and password ${password}`
    );
  };

  return (
    <>
      {islogin ? (
        <LoginForm onLogin={handleLogin} />
      ) : (
        <div className="signup-container">
          <h2 className="signup-header">Sign Up</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="signup-input"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="signup-input"
                required
              />
            </div>
            <button type="submit" className="signup-button">
              Sign Up
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default SignUpForm;
