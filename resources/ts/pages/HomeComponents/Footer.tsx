import React from "react";
import { Link, usePage } from "@inertiajs/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressBook, faCalendarAlt } from "@fortawesome/free-regular-svg-icons";
interface Props {
  
}

function Footer({  }) {

  return (
    <div className="w-full h-full mt-12 flex flex-col justify-around items-center footer p-4 bg-zinc-900 text-center text-white ">
        <p className="font-poppins font-semibold"> Kostüm Kuru Temizleme | 2023 Tüm Hakları Saklıdır </p>
    </div>
  );
}

export default Footer;
