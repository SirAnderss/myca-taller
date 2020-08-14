import React from "react";
import "../assets/sass/Panels.scss";
import tools from "../assets/img/tools.webp";
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
              <h4>Lorem, ipsum dolor.</h4>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Incidunt aut corrupti sapiente asperiores iusto expedita
                repellat ab. Quidem, totam numquam?
              </p>
            </li>
            <li>
              <h4>Lorem, ipsum dolor.</h4>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Incidunt aut corrupti sapiente asperiores iusto expedita
                repellat ab. Quidem, totam numquam?
              </p>
            </li>
          </ul>
          <span>
            <img src={tools} alt="Herramientas" />
          </span>
          <ul>
            <li>
              <h4>Lorem, ipsum dolor.</h4>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Incidunt aut corrupti sapiente asperiores iusto expedita
                repellat ab. Quidem, totam numquam?
              </p>
            </li>
            <li>
              <h4>Lorem, ipsum dolor.</h4>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Incidunt aut corrupti sapiente asperiores iusto expedita
                repellat ab. Quidem, totam numquam?
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div className={`panel ${active.serv2}`}>
        <div className="spotlight">
          <ul>
            <li>
              <h4>Lorem, ipsum dolor.</h4>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Incidunt aut corrupti sapiente asperiores iusto expedita
                repellat ab. Quidem, totam numquam?
              </p>
            </li>
            <li>
              <h4>Lorem, ipsum dolor.</h4>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Incidunt aut corrupti sapiente asperiores iusto expedita
                repellat ab. Quidem, totam numquam?
              </p>
            </li>
          </ul>
          <span>
            <img src={coaching} alt="Coaching" />
          </span>
          <ul>
            <li>
              <h4>Lorem, ipsum dolor.</h4>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Incidunt aut corrupti sapiente asperiores iusto expedita
                repellat ab. Quidem, totam numquam?
              </p>
            </li>
            <li>
              <h4>Lorem, ipsum dolor.</h4>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Incidunt aut corrupti sapiente asperiores iusto expedita
                repellat ab. Quidem, totam numquam?
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div className={`panel ${active.serv3}`}>
        <div className="spotlight">
          <ul>
            <li>
              <h4>Lorem, ipsum dolor.</h4>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Incidunt aut corrupti sapiente asperiores iusto expedita
                repellat ab. Quidem, totam numquam?
              </p>
            </li>
            <li>
              <h4>Lorem, ipsum dolor.</h4>
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
              <h4>Lorem, ipsum dolor.</h4>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Incidunt aut corrupti sapiente asperiores iusto expedita
                repellat ab. Quidem, totam numquam?
              </p>
            </li>
            <li>
              <h4>Lorem, ipsum dolor.</h4>
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
