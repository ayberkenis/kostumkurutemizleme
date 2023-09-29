import React from "react";
import { Link, usePage } from "@inertiajs/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressBook, faCalendarAlt } from "@fortawesome/free-regular-svg-icons";
interface Props {}

function Intro({}) {
  return (
    <div className="w-full flex flex-col lg:flex-row justify-center items-center h-full">
      <div className="intro-title text-2xl w-1/2 flex flex-col justify-center items-center">
        <h2 className="font-playfair font-bold text-2xl tracking-wider ">
          <FontAwesomeIcon icon={faAddressBook} /> Bize Ulaşın
        </h2>
        <p className="font-poppins font-semibold text-black text-center p-4 text-lg">
          Türkali, Nüzhetiye Caddesi, No 16/A
          <br />
          Beşiktaş/İstanbul
          <br />
          +90 212 260 60 63
          <br />
        </p>
        <h2 className="font-playfair font-bold text-2xl tracking-wider mt-4 text-center">
          <FontAwesomeIcon icon={faCalendarAlt} /> Çalışma Saatlerimiz:
        </h2>
        <p className="font-poppins font-semibold text-black text-center p-4 text-lg">
          Pazar hariç her gün / 08:00 - 19:30
        </p>
      </div>
      <div className="w-full lg:w-1/2 h-[25rem] lg:h-[30rem] resize-none border-2 drop-shadow-xl shadow-2xl">
        <div id="google-maps-display" className="h-full w-full max-w-full">
          <iframe
            className="h-full w-full border-0"
            src="https://www.google.com/maps/embed/v1/place?q=Türkali,+KOSTÜM+KURU+TEMİZLEME,+Nüzhetiye+Caddesi,+Beşiktaş/İstanbul,+Türkiye&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&zoom=14"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Intro;
