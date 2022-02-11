import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import validation from "../signup/validation";

import "./Login.css";
import '../signup/Signup.css';



export default function Login() {

  const [formValues, setFormValues] = useState({
    username: "",
    email: "",
    password: "",
  });

  //manage form errors
  const [formErrors, setFormErrors] = useState({});

  // flag for successful submit
  const [isSubmit, setIsSubmit] = useState(false);
  //manage field change

  const handleChange = (event) => {
    const { name, value } = event.target; // destructering
    setFormValues({ ...formValues, [name]: value });
  };
  //manage form submitill
  const handleSubmit = (event) => {
    event.preventDefault();
    setFormErrors(validation(formValues));
    setIsSubmit(true);
  };
  //successful signup validation
  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      // alert("signup successful");
      // <Login />
    }
  }, [formErrors, isSubmit]);

  if (isSubmit && Object.keys(formErrors).length === 0)
    return <Navigate to="/" />;

  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm" onSubmit={handleSubmit}>
        <label>Email</label>
        <input className="loginInput" type="text" placeholder="Enter your email..." onChange={handleChange} />
        <p className="error">{formErrors.username}</p><br></br>
        <label>Password</label>
        <input className="loginInput" type="password" placeholder="Enter your password..." onChange={handleChange} />
        <p className="error">{formErrors.password}</p><br></br>
        <button className="loginButton">Login</button>
      </form>
        <button className="loginRegisterButton">Register</button>
    </div>
  );
}

