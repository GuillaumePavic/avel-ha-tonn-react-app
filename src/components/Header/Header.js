import { Link } from "react-router-dom";
import http from "../../services/httpServices";
import React, { useState } from "react";
import "./style.scss";

const Header = () => {
  const [loginIconIsClicked, setLoginIconIsClicked] = useState(false);
  const [userLogedIn, setUserLogedIn] = useState(false);
  const [name, setName] = useState("");

  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");

  const handleLoginIconClick = () => {
    setLoginIconIsClicked(true);
  };

  const handleMailChange = (e) => {
    setMail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await http.userLogin({ mail, password });
    setName(data.name);
    setUserLogedIn(true);
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
        {userLogedIn ? (
          <Link to="/me"> {name} </Link>
        ) : (
          <div>
            <img
              src="/img/user.png"
              alt="user icon"
              onClick={handleLoginIconClick}
              className={loginIconIsClicked ? "connection-icon_active" : ""}
            />
            <div
              className={
                loginIconIsClicked
                  ? "connection-login"
                  : "connection-login_hide"
              }
            >
              <form onSubmit={handleSubmit}>
                <input
                  type="email"
                  placeholder="email"
                  onChange={handleMailChange}
                />
                <input
                  type="password"
                  placeholder="mot de passe"
                  onChange={handlePasswordChange}
                />
                <button className="connection-login-button">Envoyer</button>
              </form>
              <Link to="/signup" className="connection-signup">
                S'inscrire
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
