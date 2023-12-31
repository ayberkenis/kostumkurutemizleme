import React from "react";
import { Link, usePage } from "@inertiajs/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareInstagram, faSquareYoutube } from "@fortawesome/free-brands-svg-icons";
interface Props {
  
}

function Hero() {
  const  auth  = usePage().props;
  const  settings  = auth.settings;
  
  return (
    <div className="w-full flex flex-row justify-center lg:justify-center items-center h-full">
      <div className="drop-shadow-lg text-white transition-all ease-in-out duration-100 hover:scale-110 text-center">
        <span className="text-2xl lg:text-4xl font-poppins font-bold text-white">        { settings.find((element) => element.key == 'site_name').value } </span>
        <p className="text-2xl lg:text-md mt-2 font-playfair font-semibold text-sky-400 tracking-widest ">En şık halinize geri dönün.</p>
      </div>

      <div className="absolute right-12 justify-self-end z-10 lg:flex flex-col justify-around items-center gap-4 hidden lg:visible">
        <a href="" className="text-3xl hover:text-sky-500 text-white"><FontAwesomeIcon icon={faSquareInstagram}  /></a>
        <a href="" className="text-3xl hover:text-sky-500 text-white"><FontAwesomeIcon icon={faSquareYoutube} /></a>
      </div>
    </div>
  );
}

export default Hero;
