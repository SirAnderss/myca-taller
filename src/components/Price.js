import React from "react";
import "../assets/sass/Price.scss";

function Price() {
  return (
    <div className="price">
      <div className="option">
        <h3>Tienes dos opciones</h3>
        <p>
          <span>Tu primera opci&oacute;n</span> es no hacer algo y continuar
          sufriendo esperando que “milagrosamente” algún día algo cambie la
          situación y te sientas diferente.
        </p>
        <p>
          <span>O tu segunda opci&oacute;n</span> es hacer un compromiso
          contigo, darte la oportunidad de conocer información diferente que te
          permita despertar a una vida de libertad, plenitud y bienestar,
          invirtiendo tu dinero sabiamente para solucionar esto.
        </p>
      </div>
      <div className="invesment">
        <h3>Inversi&oacute;n</h3>
        <p>
          Un solo pago de <strong>$200.000</strong> o 5 pagos de $50.000, haciendo una
          transferencia por Bancolombia.
        </p>
        <span>
          ** Sólo tengo 7 cupos disponibles y no quiero que te pierdas esta
          oportunidad.
        </span>
      </div>
    </div>
  );
}

export default Price;
