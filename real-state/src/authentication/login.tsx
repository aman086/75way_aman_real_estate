import React, { useState } from "react";
import axios, { AxiosError } from "axios";
import "./login.style.css"; // Import the CSS file
import { Index } from "../screens/Index";

interface LoginFormProps {
  onLogin: (name: string, password: string) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onLogin }) => {
  const [name, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const response = await axios.post("http://localhost:3000/api/login", {
        name,
        password,
      });
      console.log(response);

      if (response.status === 200) {
        // If successful, set the login success state to true
        setLoginSuccess(true);
        // Call the parent component's onLogin function
        onLogin(name, password);
      } else {
        // If not successful, display an error message
        setError("Login failed");
        console.log("Login failed");
      }
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

      // Set the error state for displaying the error message
      setError("Error occurred during login");
    }
  };

  return (
    <div className="login-container">
      {loginSuccess ? (
        // Render the SuccessfulLogin component after successful login
        <Index />
      ) : (
        <>
          <h2 className="login-header">Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="username"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={name}
                onChange={(e) => setUsername(e.target.value)}
                className="login-input"
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
                className="login-input"
                required
              />
            </div>
            <button type="submit" className="login-button">
              Login
            </button>
          </form>
          {error && <p className="login-error">{error}</p>}
        </>
      )}
    </div>
  );
};

export default LoginForm;
