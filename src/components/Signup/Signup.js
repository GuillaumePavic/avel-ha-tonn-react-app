import React from "react";
import "./style.scss";

const Signup = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="signup-container">
      <p className="signup-description">
        Créez vous un compte pour enregistrer vos points GPS et
        recevoir une notification lorsque les conditions sont bonnes !{" "}
      </p>
      <form className="signup-form" onSubmit={handleSubmit}>
        <input type="email" placeholder="votre email" />
        <input type="password" placeholder="votre mot de passe" />
        <input
          type="password"
          placeholder="saisissez à nouveau votre mot de passe"
        />
        <button>S'inscrire</button>
      </form>
    </div>
  );
};

export default Signup;
