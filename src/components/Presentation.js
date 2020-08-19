import React from "react";
import "../assets/sass/Presentation.scss";
import admin from "../assets/img/admin.webp";

function Presentation() {
  return (
    <div className="presentation">
      <section>
        <h2>
          Facilitadora del taller: <strong> Myriam Camacho Trujillo</strong>
        </h2>
        <p>
          <span>
            <img src={admin} alt="Facilitadora" />
          </span>
          Desde muy chica me ha gustado todo lo referente a crecimiento
          personal, interactuar y ayudar genuinamente a las personas a sentirse
          mejor consigo mismas sin saber que todo aquello que me gustaba tanto
          podr&iacute;a llegar a ser mi profesi&oacute;n. <br />
          <br /> Fue as&iacute; que conoc&iacute; el coaching y empec&eacute; mis estudios dejando
          atr&aacute;s una vida de trabajo estable y seguro, lanz&aacute;ndome a vivir solo
          experiencias en las que creo y explorar un mundo en donde es posible
          vivir de lo que m&aacute;s me gusta hacer…
          <br />
          <br /> Es por eso que he creado un taller para ayudar a las personas y
          me gustar&iacute;a que realmente hagas parte de este grupo, tendr&aacute;s como{" "}
          bono una facilitaci&oacute;n privada uno a uno conmigo,{" "}
          <strong>d&eacute;jame ser tu coach personal</strong>, despu&eacute;s de finalizado
          el taller vas a poder agendar una sesi&oacute;n privada conmigo totalmente
          <strong> GRATIS</strong>, en esta sesi&oacute;n vamos a hablar de lo que has
          aprendido en el taller, tus planes hacia el futuro y m&aacute;s. <br />
          <br /> Esta exploraci&oacute;n privada va a potenciar tus resultados del
          taller, Una sesi&oacute;n as&iacute; tiene un valor de $100.000 pesos, pero t&uacute; la
          vas a recibir GRATIS con tu inscripci&oacute;n.
        </p>
      </section>
    </div>
  );
}

export default Presentation;
