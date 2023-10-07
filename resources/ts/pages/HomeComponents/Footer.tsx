import React from "react";
import { Link, usePage } from "@inertiajs/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareInstagram, faSquareYoutube } from "@fortawesome/free-brands-svg-icons";
interface Props {
  
}

function Footer({  }) {

  return (
    <div className="w-full h-full flex flex-col gap-12 justify-around items-center footer px-2 py-12 text-center text-white bg-gradient-to-bl from-zinc-900 via-zinc-800 to-neutral-700">
      <div className="grid grid-cols-1 lg:grid-cols-3 items-between justify-between items-center gap-12 lg:gap-36">
        <div className="footer-columns footer-quick-links font-poppins flex flex-col gap-2 h-full w-full items-center order-2 lg:order-none">
          <h2 className="text-2xl font-playfair mb-8 tracking-widest hover:scale-110">Hızlı Erişim</h2>
          <Link href="/"><a className="hover:text-sky-500">Anasayfa</a></Link>
          <Link href="#services"><a className="hover:text-sky-500">Hizmetlerimiz</a></Link>
          <Link href="#contact"><a className="hover:text-sky-500">İletişim</a></Link>
          <Link href="/login"><a className="hover:text-sky-500">Müşteri Girişi</a></Link>

        </div>
        <div className="footer-columns footer-main text-2xl h-full w-full flex items-center order-1 lg:order-none hover:scale-110">

          <p className="font-playfair">Kostüm Kuru Temizleme</p>
        </div>
        <div className="footer-columns footer-socials flex flex-col h-full w-full items-center order-3 lg:order-none">
        <h2 className="text-2xl font-playfair mb-8 tracking-widest hover:scale-110">Sosyal Medya'da Biz</h2>
          <a href="/" className="text-2xl hover:text-sky-500 text-white"><FontAwesomeIcon icon={faSquareInstagram}  /> <span className="text-lg font-poppins font-semibold">Instagram</span></a>
          <a href="/" className="text-2xl hover:text-sky-500 text-white"><FontAwesomeIcon icon={faSquareYoutube} /> <span className="text-lg font-poppins font-semibold">YouTube</span></a>
        </div>
        </div>
    </div>
  );
}

export default Footer;
