import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <div className="head">
      <div className="topLeft">
        <i className="topIcon fab fa-facebook-square"></i>
        <i className="topIcon fab fa-instagram-square"></i>
        <i className="topIcon fab fa-twitter-square"></i>
        <i className="topIcon fab fa-pinterest-square"></i>
      </div>
      <div className="topCenter">
        <Link className="link" to="/">
          Home
        </Link>
        <Link className="link" to="/article-list">
          Article
        </Link>
        <Link className="link" to="/login">
          Login
        </Link>
        <Link className="link" to="/signup">
          Signup
        </Link>
      </div>
      <div className="topRight">
        <img
          className="topImg"
          src="https://www.whatsappimages.in/wp-content/uploads/2020/12/Cute-Girl-Images-For-Whatsapp-Dp-Free-Download-2.jpg"
          alt="profilepic"
        />
        <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
  );
}
