import React from "react";
import "./style.scss";

const About = () => {
  return (
    <div className="about-container">
      <p>
        <strong>Havel Ha Tonn</strong>, <em>Vent et Vague</em> en breton, est
        une petite application permettant de voir la météo marine de la journée
        de différents spots de Bretagne Sud. En fonction des conditions,
        l'application propose les activités les plus pertinentes entre surf,
        voile, plage ou encore rester chez soi.
      </p>
      <p>
        Les données météo sont fournies par l'
        <a
          href="https://stormglass.io/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <strong>API Storm Glass</strong>
        </a>
        , qui permet d'obtenir les conditions météo à n'importes quelles
        coordonnées du globe. Ces données sont ensuite formatées et les moyennes
        calculées sur l'API de l'application, elle-même réalisée avec{" "}
        <strong>Node.js/Express</strong>, et renvoyées au front.
      </p>
      <p>
        Le front quant à lui est réalisé avec <strong>React</strong> et{" "}
        <strong>Sass</strong>.
      </p>
      <p>
        Retrouvez le code source de l'
        <a
          href="https://github.com/GuillaumePavic/havel-ha-tonn-api"
          target="_blank"
          rel="noopener noreferrer"
        >
          <strong>API</strong>
        </a>{" "}
        et du{" "}
        <a
          href="https://github.com/GuillaumePavic/havel-ha-tonn-react-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <strong>client</strong>
        </a>{" "}
        sur Github. .
      </p>
    </div>
  );
};

export default About;
