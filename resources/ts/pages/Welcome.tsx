import React from "react";
import { Link, usePage } from "@inertiajs/react";
import Hero from "./HomeComponents/Hero";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import Intro from "./HomeComponents/Intro";
import Services from "./HomeComponents/Services";
import ContactForm from "./HomeComponents/ContactForm";
import Footer from "./HomeComponents/Footer";
import Availability from "./HomeComponents/Availability";

interface Props {
  canLogin: boolean;
  canRegister: boolean;
  laravelVersion: string;
  phpVersion: string;
}

function Welcome({ canLogin, canRegister }: Props) {
  const { auth } = usePage().props;

  return (
    <div>
      <div className="w-full h-16 flex flex-col lg:flex-row sm:flex-col bg-neutral-900 items-center justify-around text-md">
        <a href="tel:+902122606063" className="hover:text-sky-500 text-white font-playfair font-semibold">
          <FontAwesomeIcon icon={faPhone}/> +90 212 260 60 63
        </a>
        <a className="hover:text-sky-500 text-white font-playfair font-semibold ">
          <FontAwesomeIcon icon={faCalendarDays}/> Pazartesi - Cumartesi / 08:00 - 19:30 
        </a>
      </div>

    <div className="w-full h-48 lg:h-16 flex flex-col lg:flex-row items-center justify-around lg:justify-between relative lg:py-2 lg:pl-4 lg:pr-4 text-center lg:text-start bg-black lg:dark:bg-black border-white border-t-2 border-opacity-5 header">

        <h1 className="text-2xl lg:text-2xl font-semibold drop-shadow-lg text-white z-10 font-poppins hover:scale-105 hover:text-sky-500 hover:shadow-lg hover:drop-shadow-sky-500 w-full lg:w-1/3 "> 
        Kostüm Kuru Temizleme

        </h1>
        <div className="flex flex-row justify-between items-center z-10  w-full lg:w-1/3 px-4 lg:px-0 bg-zinc-900 lg:bg-black py-4 lg:py-0">
          <Link href="/" className="text-gray-700 dark:text-gray-200 hover:underline font-poppins text-lg text-center mt-2"> Anasayfa </Link>
          <Link href="#services" className="text-gray-700 dark:text-gray-200 hover:underline font-poppins text-lg text-center mt-2"> Hizmetlerimiz </Link>
          <Link href="#contact" className="text-gray-700 dark:text-gray-200 hover:underline font-poppins text-lg text-center mt-2"> İletişim </Link>

          </div>
        {canLogin && (
          <div className="z-30 lg:mt-2 font-playfair italic w-full lg:w-1/3 flex justify-center lg:justify-end gap-4">
            {auth ? (
              <Link href="/customer" className="text-sm text-gray-700 dark:text-gray-200  hover:underline">
                Müşteri Paneli
              </Link>
            ) : (
              <Link href="/login" className="text-sm text-gray-700 dark:text-gray-200  hover:underline">
                Müşteri Girişi
              </Link>
            )}
            {canRegister && (
              <Link href="/register" className="text-sm text-gray-700 dark:text-gray-200  hover:underline">
                Müşteri Kaydı
              </Link>
            )}
          </div>
        )}
    </div>
            <div className="hero flex flex-col bg-center bg-no-repeat bg-cover w-full h-[16rem] lg:h-[16rem] sm:h-[16rem]">
            <Hero/>
            </div>
            <div className="availability flex flex-col h-full max-w-[1100px] mx-auto mb-12 bg-center bg-no-repeat bg-cover w-full">
            <Availability/>
            </div>
            <div className="services flex flex-col h-full bg-center bg-no-repeat bg-cover w-full">
            <Services/>
            </div>
            <div className="contact-form flex flex-col h-full bg-center bg-no-repeat bg-cover w-full">
            <ContactForm/>
            </div>
            <div className="intro flex flex-col h-full bg-center bg-no-repeat bg-cover w-full py-12">
            <Intro/>
            </div>
              <Footer/>
            </div>
  );
}

export default Welcome;
