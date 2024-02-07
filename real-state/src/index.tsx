import React from "react";
import ReactDOMClient from "react-dom/client";
import { Index } from "./screens/Index";
import SignUpForm from "./authentication/signup";
import LoginForm from "./authentication/login";
import Header from "./authentication/Header";

const handleSignUp = (name: string, password: string) => {
  console.log(`Signing up ${name} with password ${password}`);
};

const handleLogin = (username: string, password: string) => {
  console.log(`Logging in with username ${username} and password ${password}`);
};

const app: any = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
// root.render(<Header />);
// root.render(<Index />);
root.render(<SignUpForm onSubmit={handleSignUp} />);
// root.render(<LoginForm onLogin={handleLogin} />);
