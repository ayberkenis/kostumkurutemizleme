import React, { useState } from "react";
import axios from "axios";

function ContactForm() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [mail, setMail] = useState("");
  const [message, setMessage] = useState("");
  const [responseMessage, setResponseMessage] = useState("");

  const sendMail = () => {
    const api = "/api/sendContactMail";
    console.log("sendContactMail", mail, name, surname, message)
    axios
      .post(api, {
        email: mail,
        name: name,
        surname: surname,
        message: message,
      })
      .then((response) => {
        console.log(response);
        setResponseMessage("Mesajınız başarıyla alındı ve size bildirim gönderildi.");
      })
      .catch((error) => {
        console.error(error);
        setResponseMessage("Mail gönderilirken bir hata oluştu.");
      });
  };

  return (
    <div className="contact-form w-full h-full flex flex-col justify-center items-center gap-4 py-12 p-12" id="contact">
      <h2 className="text-2xl font-playfair font-bold tracking-wider italic">İletişim Formu</h2>
      <small className="text-sm font-poppins font-semibold text-black text-center p-4">
        Aşağıdaki formu doldurarak bizimle iletişime geçebilirsiniz. Lütfen formda kişisel bilgilerinizi paylaşmayın.
      </small>
      <input
        type="email"
        className="form-input rounded-md placeholder:font-playfair w-1/2 sm:w-1/4"
        placeholder="Email Adresiniz"
        value={mail}
        id="email"
        name="email"
        onChange={(e) => setMail(e.target.value)}
      />
      <input
        type="text"
        className="form-input rounded-md placeholder:font-playfair w-1/2 sm:w-1/4"
        placeholder="İsminiz"
        value={name}
        id="name"
        name="name"

        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        className="form-input rounded-md placeholder:font-playfair w-1/2 sm:w-1/4"
        placeholder="Soyisminiz"
        value={surname}
        id="surname"
        name="surname"

        onChange={(e) => setSurname(e.target.value)}
      />
      <textarea
        className="form-textarea rounded-md placeholder:font-playfair w-1/2 sm:w-1/4"
        placeholder="Mesajınız"
        value={message}
        id="message"
        name="message"
        onChange={(e) => setMessage(e.target.value)}
      />
      <button
        className="form-button w-1/2 sm:w-1/4 rounded-md bg-slate-200 border-2 border-black border-opacity-50 font-playfair p-2 hover:bg-sky-300"
        onClick={sendMail}
      >
        Gönder
      </button>
      {responseMessage && <p className="text-sm text-gray-600 italic font-poppins">{responseMessage}</p>}
    </div>
  );
}

export default ContactForm;
