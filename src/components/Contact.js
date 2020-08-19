import React, { useState } from "react";
import IntegerInput from "./IntegerInput";
import Notification from "./Notification";
import emailjs from "emailjs-com";
import "../assets/sass/Contact.scss";
import "../assets/css/loader.css";

function Contact() {
  const [status, setStatus] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loader, setLoader] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const getCountTimeout = (val) => {
    setTimeout(() => {
      setStatus("");
      setTitle("");
      setContent("");
    }, val);
  };

  async function sendEmail(e) {
    e.preventDefault();

    if (name === "" || email === "" || phone === "" || message === "") {
      alert('Para poder contactarte es importante que diligencies todos los campos');
      return;
    }
    setLoader("active");

    let data = {
      name: name,
      email: email,
      phone: phone,
      message: message,
    };

    await emailjs
      .send(
        "myriam_taller",
        "template_PMOFDW9a",
        data,
        "user_RC6aiLugTNwdexKGGXJUC"
      )
      .then(
        (result) => {
          setStatus(result.status);
          setTitle("Exito");
          setContent(
            "Gracias por contactarme, muy pronto respondere tu mensaje. Te felicitó, porque creó en las personas que invierten tiempo y dinero en la persona mas importante de su vida,"
          );
          setName("");
          setEmail("");
          setPhone("");
          setMessage("");
          getCountTimeout(7000);
        },
        (error) => {
          setStatus(error.status);
          setTitle("Error");
          setContent("Upps, algo salio mal, por favor intenta nuevamente");
          getCountTimeout(4000);
        }
      );
    setLoader("");
  }

  return (
    <div className="contact">
      <Notification color={status} title={title} content={content} />
      <section className={loader}>
        <div className="loader">
          <h3>Enviando mail...</h3>
          <div className="lds-roller">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </section>
      <section>
        <h2>Contactame para obtener m&aacute;s informaci&oacute;n</h2>
        <form className="contact-form" onSubmit={sendEmail}>
          <label>Nombe</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            name="name"
            placeholder="Ingresa t&uacute; nombre completo"
          />
          <label>E-mail</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            name="email"
            placeholder="Ingresa una direcci&oacute;n de correo valida"
          />
          <label>Celular</label>
          <IntegerInput
            value={phone}
            min={0}
            max={573259999999}
            onChange={(phone) => setPhone(phone)}
          />
          <label>Message</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            name="message"
            rows="3"
            placeholder="Cuentame tus intereses o inquietudes"
          />
          <span>** Aplican terminos y condiciones</span>
          <input type="submit" value="Enviar" />
        </form>
      </section>
    </div>
  );
}

export default Contact;
