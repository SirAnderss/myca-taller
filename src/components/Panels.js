import React from "react";
import "../assets/sass/Panels.scss";
import sadness from "../assets/img/sadness.webp";
import coaching from "../assets/img/coaching.webp";
import sessions from "../assets/img/sessions.webp";

function Panels(props) {
  let active = {
    serv1: null,
    serv2: null,
    serv3: null,
  };

  if (props.panel === 1) {
    active.serv1 = "active";
  } else if (props.panel === 2) {
    active.serv2 = "active";
  } else {
    active.serv3 = "active";
  }

  return (
    <div className="panels">
      <div className={`panel ${active.serv1}`}>
        <div className="spotlight">
          <ul>
            <li>
              <p>
                Sientes que el miedo, la incertidumbre, los cambios no te permiten avanzar para hacer realidad ese sue&ntilde;o, de vivir bajo tus t&eacute;rminos.
              </p>
            </li>
            <li>
              <p>
                Sientes que todo te sale mal, piensas mucho negativamente, que todos y absolutamente todo est&aacute; en contra tuyo y no sabes c&oacute;mo salir de ese estado?
              </p>
            </li>
          </ul>
          <span>
            <img src={sadness} alt="Herramientas" />
          </span>
          <ul>
            <li>
              <p>
                Sientes que no eres valioso ni fuerte para afrontar las m&uacute;ltiples  situaciones  que estas viviendo y te resistes al cambio, porque no sabes c&oacute;mo hacerlo.
              </p>
            </li>
            <li>
              <p>
                Te sientes preocupado que ha llegado a no conciliar el sueño, sientes ansiedad, sientes que estas deprimido y piensas que no quieres vivir lo que te est&aacute; sucediendo y no encuentras salida.
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div className={`panel ${active.serv2}`}>
        <div className="spotlight">
          <ul>
            <li>
              <p>
                En este taller de 7 semanas vamos a tener una sesi&oacute;n virtual cada semana, cada sesi&oacute;n ser&aacute; en un grupo exclusivo, los integrantes ser&aacute;n personas que al igual que t&uacute; est&aacute;n buscando salir de sus propias crisis.
              </p>
            </li>
            <li>
              <p>
                En cada sesi&oacute;n vas aprender herramientas pr&aacute;cticas y profundas que te van a permitir ver otras posibilidades, para que puedas vivir una vida en tus t&eacute;rminos.
              </p>
            </li>
          </ul>
          <span>
            <img src={coaching} alt="Coaching" />
          </span>
          <ul>
            <li>
              <p>
                Desde el momento que te registres, tendr&aacute;s acceso a un programa de entrenamiento en coaching de transformaci&oacute;n enfocado en c&oacute;mo superar crisis personales y/o globales como la actual y salir fortalecidos (programa virtual con videos y audio descargable, con material escrito).
              </p>
            </li>
            <li>
              <p>
                Se estudiar&iacute;an los videos correspondientes a cada semana y en las sesiones de grupo se compartir&aacute; el impacto del contenido y experiencias en grupo.
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div className={`panel ${active.serv3}`}>
        <div className="spotlight">
          <ul>
            <li>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Incidunt aut corrupti sapiente asperiores iusto expedita
                repellat ab. Quidem, totam numquam?
              </p>
            </li>
            <li>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Incidunt aut corrupti sapiente asperiores iusto expedita
                repellat ab. Quidem, totam numquam?
              </p>
            </li>
          </ul>
          <span>
            <img src={sessions} alt="Sesiones" />
          </span>
          <ul>
            <li>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Incidunt aut corrupti sapiente asperiores iusto expedita
                repellat ab. Quidem, totam numquam?
              </p>
            </li>
            <li>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Incidunt aut corrupti sapiente asperiores iusto expedita
                repellat ab. Quidem, totam numquam?
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Panels;
