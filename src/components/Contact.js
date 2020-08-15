import React from "react";
import emailjs from 'emailjs-com';
import "../assets/sass/Contact.scss";

function Contact() {

  async function sendEmail(e) {
    e.preventDefault();

    await emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  }

  return (
    <div className="contact">
      <div>
        <h2>Contactame para obtener m&aacute;s informaci&oacute;n</h2>
        <form className="contact-form" onSubmit={sendEmail}>
          <input type="hidden" name="contact_number" />
          <label>Nombe</label>
          <input type="text" name="user_name" />
          <label>E-mail</label>
          <input type="email" name="user_email" />
          <label>Celular</label>
          <input type="phone" name="user_phone" />
          <label>Message</label>
          <textarea name="message" />
          <input type="submit" value="Enviar" />
        </form>
      </div>
    </div>
  );
}

export default Contact;
