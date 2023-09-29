import React from "react";
import { Link, usePage } from "@inertiajs/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressBook, faCalendarAlt } from "@fortawesome/free-regular-svg-icons";
interface Props {
  
}

function ContactForm({  }) {

  return (
    <div className="contact-form w-full h-full flex flex-col justify-center items-center gap-4 py-12 p-12" id="contact">
        <h2 className="text-2xl font-playfair font-bold tracking-wider italic">İletişim Formu</h2>
        <small className="text-sm font-poppins font-semibold text-black text-center p-4"> Aşağıdaki formu doldurarak bizimle iletişime geçebilirsiniz. Lütfen formda kişisel bilgilierinizi paylaşmayın.</small>
        <input type="email" className="form-input rounded-md placeholder:font-playfair w-1/2 sm:w-1/4" placeholder="Email Adresiniz"></input>
        <input type="text" className="form-input rounded-md placeholder:font-playfair w-1/2 sm:w-1/4" placeholder="İsminiz"></input>
        <input type="text" className="form-input rounded-md placeholder:font-playfair w-1/2 sm:w-1/4" placeholder="Soyisminiz"></input>
        <textarea className="form-textarea rounded-md placeholder:font-playfair w-1/2 sm:w-1/4" placeholder="Mesajınız"></textarea>
        <button className="form-button w-1/2 sm:w-1/4 rounded-md bg-slate-200 border-2 border-black border-opacity-50 font-playfair p-2 hover:bg-sky-300">Gönder</button>
        
    </div>
  );
}

export default ContactForm;
