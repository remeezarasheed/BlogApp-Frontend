import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import validation from "./validation";
import "./Signup.css";
function Signup() {
  //managing form values
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
    <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm" onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          className="registerInput"
          type="text"
          name="username"
          placeholder="Enter your username..."
          required=""
          value={formValues.username}
          onChange={handleChange}
        />
        <p className="error">{formErrors.username}</p>
        <br></br>
        <label>Email</label>
        <input
          className="registerInput"
          type="text"
          name="email"
          placeholder="Enter your email..."
          required=""
          value={formValues.email}
          onChange={handleChange}
        />
        <p className="error">{formErrors.email}</p>
        <br></br>
        <label>Password</label>
        <input
          className="registerInput"
          type="password"
          name="password"
          placeholder="Enter your password..."
          required=""
          value={formValues.password}
          onChange={handleChange}
        />
        <p className="error">{formErrors.password}</p>
        <br></br>
        <button className="registerButton">Register</button>
      </form>
      <button className="registerLoginButton">Login</button>
    </div>
  );
}
export default Signup;
