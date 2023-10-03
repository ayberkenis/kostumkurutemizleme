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
  const  auth  = usePage().props;
  const  settings  = auth.settings;
  console.log(auth);

  return (
    <div>
      <div className={"w-full h-64 lg:h-16 flex flex-col gap-12 lg:gap-0 lg:flex-row sm:flex-col items-center text-center justify-center text-md " + (settings.find((e) => e.key == 'shop_open_close').value == 'open' ? 'bg-green-800 ' : 'bg-red-800 ')}>
        <a href={"tel:+" + settings.find((element) => element.key == 'sms_number').value } className="hover:text-sky-500 text-white font-playfair font-semibold w-1/3">
          <FontAwesomeIcon icon={faPhone}/> { settings.find((element) => element.key == 'sms_number').value }
        </a>
        <p className="text-white font-poppins text-sm w-1/3">
          
        { settings.find((element) => element.key == 'site_name').value } şuan da { settings.find((e ) => e.key == 'shop_open_close').value == 'open' ? 'açık' : 'kapalı'}
        </p>
        <a className="hover:text-sky-500 text-white font-playfair font-semibold  w-1/3">
        <FontAwesomeIcon icon={faCalendarDays}/> { settings.find((element) => element.key == 'working_hours_headers').value }
        </a>
      </div>

    <div className="w-full h-48 lg:h-16 flex flex-col lg:flex-row items-center justify-around lg:justify-between relative lg:py-2 lg:pl-4 lg:pr-4 text-center lg:text-start bg-black lg:dark:bg-black border-white border-t-2 border-opacity-5 header">

        <h1 className="text-2xl lg:text-2xl font-semibold drop-shadow-lg text-white z-10 font-poppins hover:text-sky-500 hover:shadow-lg hover:drop-shadow-sky-500 w-full lg:w-1/3 "> 
        { settings.find((element) => element.key == 'site_name').value }
        

        </h1>
        <div className="flex flex-row justify-between items-center z-10  w-full lg:w-1/3 px-4 lg:px-0 bg-zinc-900 lg:bg-black py-4 lg:py-0">
          <Link href="/" className="text-gray-700 dark:text-gray-200 hover:underline font-poppins text-lg text-center mt-2"> Anasayfa </Link>
          <Link href="#services" className="text-gray-700 dark:text-gray-200 hover:underline font-poppins text-lg text-center mt-2"> Hizmetlerimiz </Link>
          <Link href="#contact" className="text-gray-700 dark:text-gray-200 hover:underline font-poppins text-lg text-center mt-2"> İletişim </Link>

          </div>
        {canLogin && (
          <div className="z-30 lg:mt-2 font-playfair italic w-full lg:w-1/3 flex justify-center lg:justify-end gap-4">
            {auth.user ? (
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
            { settings.find((element) => element.key == 'show_availability_on_home_page').value == 'true' ? (
              <div className="availability flex flex-col h-full max-w-[1100px] mx-auto mb-12 bg-center bg-no-repeat bg-cover w-full">
            <Availability/>
            </div>
            ) : null }
            
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
