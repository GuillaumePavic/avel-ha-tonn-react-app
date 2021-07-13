import { Link } from "react-router-dom";

import React from "react";
import "./style.css";

const Header = () => {
  return (
    <header className="header-main">
      <ul>
        <li>
          <img src="/img/wind.png" alt="" className="header-img" />
          <Link to="/" className="header-main-title">
            AVEL HA TONN
          </Link>
          <img src="/img/waves.png" alt="" className="header-img" />
        </li>
      </ul>
    </header>
  );
};

export default Header;
