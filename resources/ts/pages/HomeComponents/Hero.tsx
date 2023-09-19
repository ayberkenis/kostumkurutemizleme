import React from "react";
import { Link, usePage } from "@inertiajs/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareInstagram, faSquareYoutube } from "@fortawesome/free-brands-svg-icons";
interface Props {
  
}

function Hero({  }) {

  return (
    <div className="w-full flex flex-row justify-center items-center h-full">
            <div className="w-1/4 drop-shadow-lg text-white transition-all ease-in-out duration-100 hover:scale-110 text-center">
                <span className="text-4xl font-poppins font-bold text-white">Kostüm Kuru Temizleme </span>
                <p className="text-2xl mt-2 font-playfair font-semibold text-sky-400 tracking-widest ">En şık halinize geri dönün.</p>
            </div>

            <div className="absolute right-12 justify-self-end z-10 flex flex-col justify-around items-center gap-4">
                <a href="" className="text-3xl hover:text-sky-500 text-white"><FontAwesomeIcon icon={faSquareInstagram}  /></a>
                <a href="" className="text-3xl hover:text-sky-500 text-white"><FontAwesomeIcon icon={faSquareYoutube} /></a>

            </div>
        
    </div>
  );
}

export default Hero;
