import React from "react";
import "../assets/sass/Info.scss";

function Info() {
  return (
    <div className="info">
      <section>
        <i className="icon-clock"></i>
        <h3>Es hora de volver la mirada hacia adelante</h3>
      </section>
      <section>
        <i className="icon-globe-alt"></i>
        <h3>Ahora que el mundo est&aacute; lleno de cambios</h3>
      </section>
      <section>
        <i className="icon-energy"></i>
        <h3>Podremos actuar a&uacute;n con miedo e incertidumbre</h3>
      </section>
    </div>
  );
}

export default Info;
