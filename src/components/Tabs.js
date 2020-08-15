import React, { useState } from "react";
import "../assets/sass/Tabs.scss";
import Panels from "./Panels";

function Tabs() {
  const [view, setView] = useState(1);
  function handleViewClick(val) {
    setView(val);
  }
  let active = {
    serv1: null,
    serv2: 2,
    serv3: null,
  };

  if (view === 1) {
    active.serv1 = "active";
  } else if (view === 2) {
    active.serv2 = "active";
  } else {
    active.serv3 = "active";
  }
  return (
    <div>
      <div className="tabs">
        <div className="content">
          <div>
            <h3>El taller “C&oacute;mo superar crisis en la vida”</h3>
            <p>
              Te da la f&oacute;rmula de 7 pasos para superar y aprovechar los
              momentos adversos como crisis personales o globales.
            </p>
          </div>
          <ul className="titles">
            <li className={`title ${active.serv1}`} onClick={() => handleViewClick(1)}>
              es para ti s&iacute;...
            </li>
            <li className={`title ${active.serv2}`} onClick={() => handleViewClick(2)}>
              que incluye
            </li>
            <li className={`title ${active.serv3}`} onClick={() => handleViewClick(3)}>
              beneficios
            </li>
          </ul>
        </div>
      </div>
      <Panels panel={view} />
    </div>
  );
}

export default Tabs;
