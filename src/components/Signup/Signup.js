import React, {useState} from "react";
import http from '../../services/httpServices';
import "./style.scss";

const Signup = () => {

  //user data
  const [name, setName] = useState('');
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');

  const [userRegistered, setUserRegistered] = useState(false);

  const handleNameChange = (e) => {
    setName(e.target.value);
  }
  const handleMailChange = (e) => {
    setMail(e.target.value);
  }
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await http.userSignup({name, mail, password});
    setUserRegistered(true);
  };

  return (
    <div className="signup-container">
      <p className="signup-description">
        Créez vous un compte pour enregistrer vos points GPS et recevoir une
        notification lorsque les conditions sont bonnes !{" "}
      </p>
      <div className={userRegistered ? "signup-registered" : "signup-registered_hide"} >Vous êtes bien enregistré.e !</div>
      <form className="signup-form" onSubmit={handleSubmit}>
        <input type="text" placeholder="votre nom" onChange={handleNameChange} />
        <input type="email" placeholder="votre email" onChange={handleMailChange} />
        <input type="password" placeholder="votre mot de passe" onChange={handlePasswordChange} />
        <button>S'inscrire</button>
      </form>
    </div>
  );
};

export default Signup;
