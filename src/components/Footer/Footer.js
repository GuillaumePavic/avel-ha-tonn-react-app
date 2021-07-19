import { Link } from "react-router-dom";
import React from "react";
import "./style.scss";

const Footer = () => {
  return (
    <footer className="footer-main">
      <ul>
        <li>
          <Link to="about">A propos</Link>
        </li>
        <li>
          <Link to="contact">Contact</Link>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
