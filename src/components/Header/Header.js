import { Link } from "react-router-dom";
import http from "../../services/httpServices";
import React, { useState } from "react";
import "./style.scss";

const Header = () => {
  const [loginIconisClicked, setLoginIconisClicked] = useState(false);
  const [userMail, setUserMail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const onLoginIconClick = () => {
    setLoginIconisClicked(true);
  };

  const onMailChange = (e) => {
    setUserMail(e.target.value);
  };

  const onPasswordChange = (e) => {
    setUserPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await http.userLogin({ userMail, userPassword });
  };

  return (
    <header className="header-main">
      <ul>
        <li>
          <img src="/img/wind.png" alt="wind icon" className="header-img" />
          <Link to="/" className="header-main-title">
            AVEL HA TONN
          </Link>
          <img src="/img/waves.png" alt="waves icon" className="header-img" />
        </li>
      </ul>

      <div className="connection-wrapper">
        <img
          src="/img/user.png"
          alt="user icon"
          onClick={onLoginIconClick}
          className={loginIconisClicked ? "connection-icon_active" : ""}
        />
        <div
          className={
            loginIconisClicked ? "connection-login" : "connection-login_hide"
          }
        >
          <form onSubmit={handleSubmit}>
            <input type="email" placeholder="email" onChange={onMailChange} />
            <input
              type="password"
              placeholder="mot de passe"
              onChange={onPasswordChange}
            />
            <button className="connection-login-button">Envoyer</button>
          </form>
          <Link to="/signup" className="connection-signup">S'inscrire</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
