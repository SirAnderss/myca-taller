import React, { useState } from "react";
import admin from "../assets/img/admin.webp";
import "../assets/sass/Footer.scss";

function Footer() {
  const [copy] = useState(new Date());
  return (
    <div className="footer">
      <img src={admin} alt="Facilitadora" />
      <p>
        <strong>No tienes nada que perder, pero si todo por ganar</strong>. <br/>
          As&iacute; de sencillo empieza ahora mismo y empieza a disfrutar los
          beneficios que tanto anhelas.
      </p>
      <span>Nos vemos dentro</span> <br />
      <p>
        Envuentrame en:
        <a href="http://" target="_blank" rel="noopener noreferrer">
          <i className="icon-social-facebook"></i>
        </a>
      </p>
      <p>
        <strong>&copy;</strong> {copy.getFullYear()}
      </p>
    </div>
  );
}

export default Footer;
