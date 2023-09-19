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
      <div className="w-full h-8 bg-neutral-900 flex flex-row items-center justify-around text-md">
        <a href="tel:+902122606063" className="hover:text-sky-500 text-white font-playfair font-semibold">
          <FontAwesomeIcon icon={faPhone}/> +90 212 260 60 63
          </a>
          <a className="hover:text-sky-500 text-white font-playfair  font-semibold">
          <FontAwesomeIcon icon={faCalendarDays}/> Pazartesi - Cumartesi / 08:00 - 19:30 
          </a>
      </div>
    <div className="w-full h-16 flex flex-row items-center justify-between relative py-2 pl-4 pr-4 bg-gray-100 dark:bg-black border-white border-t-2 border-opacity-5 sm:items-center sm:pt-0 header">

        <h1 className="text-2xl font-semibold drop-shadow-lg text-white z-10 font-poppins mt-2 hover:scale-105 hover:text-sky-500 hover:shadow-lg hover:drop-shadow-sky-500"> 
        Kostüm Kuru Temizleme

        </h1>

        {canLogin && (
          <div className="hidden sm:block z-30 self-center items-center font-playfair italic ">
            {auth ? (
              <Link href="/home" className="text-sm text-gray-700 dark:text-gray-200  hover:underline">
                Müşteri Paneli
              </Link>
            ) : (
              <Link href="/login" className="text-sm text-gray-700 dark:text-gray-200  hover:underline">
                Müşteri Girişi
              </Link>
            )}
            {canRegister && (
              <Link href="/register" className="ml-4 text-sm text-gray-700 dark:text-gray-200  hover:underline">
                Müşteri Kaydı
              </Link>
            )}
          </div>
        )}







    </div>
            <div className="hero flex flex-col h-96 bg-center bg-no-repeat bg-cover w-full">
            <Hero/>
            </div>
            <div className="availability flex flex-col h-full max-w-[1100px] mx-auto mb-12 bg-center bg-no-repeat bg-cover w-full">
            <Availability/>
            </div>
            <div className="intro flex flex-col h-96 bg-center bg-no-repeat bg-cover w-full">
            <Services/>
            </div>
            <div className="services flex flex-col h-full bg-center bg-no-repeat bg-cover w-full">
            <ContactForm/>
            </div>
            <div className="services flex flex-col h-96 bg-center bg-no-repeat bg-cover w-full">
            <Intro/>
            </div>
              <Footer/>
            </div>
  );
}

export default Welcome;
