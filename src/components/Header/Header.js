import { Link } from "react-router-dom";
import http from "../../services/httpServices";
import React, { useState } from "react";
import "./style.scss";

const Header = () => {
  const [loginIconIsClicked, setLoginIconIsClicked] = useState(false);
  const [userLogedIn, setUserLogedIn] = useState(false);
  const [name, setName] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLoginIconClick = () => {
    setLoginIconIsClicked(true);
  };

  const handleMailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await http.userLogin({ email, password });

    if(data) {
      setName(data.name);
      setUserLogedIn(true);
    }
  };

  const handleLogOut = async () => {
    localStorage.removeItem('token');
    setUserLogedIn(false);
    setLoginIconIsClicked(false);
  }

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
          <div>
            <Link to="/me" className="connection-name"> {name} </Link>
            <button className="connection-logout" onClick={handleLogOut} >Se déconnecter</button>
          </div>
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
