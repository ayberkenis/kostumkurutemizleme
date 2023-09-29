import React from "react";
import { Link, usePage } from "@inertiajs/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressBook, faCalendarAlt } from "@fortawesome/free-regular-svg-icons";
interface Props {
  
}

function Services({  }) {

  return (
    <div className="w-full h-full grid grid-cols-1 lg:grid-cols-3 py-12 gap-24 text-center" id="services">
        <div className="service flex flex-col justify-center items-center h-full py-12">
            <div className="service-title text-2xl w-1/2 flex flex-col justify-center items-center">
                <h2 className="font-playfair font-bold text-2xl tracking-wider italic">Kuru Temizleme</h2>
            </div>
            <div className="service-description text-2xl w-1/2 flex flex-col justify-center items-center">
                <p className="font-poppins font-medium text-black text-center p-4 text-sm">
                    Kostüm, takım elbise, ceket, pantolon, gömlek gibi tüm giysileriniz profesyonel ekibimiz tarafından, en son teknoloji ile donatılmış tesislerimizde, en iyi temizleme ürünleri ile yıkanır ve kuru temizleme işlemi uygulanır.
                </p>
                </div>
        </div>
        <div className="service flex flex-col justify-center items-center h-full py-12">
            <div className="service-title text-2xl w-1/2 flex flex-col justify-center items-center">
                <h2 className="font-playfair font-bold text-2xl tracking-wider italic">Dezenfeksiyon</h2>
                <p className="font-poppins font-medium text-black text-center p-4 text-sm">
                Profesyonel ekibimiz tarafından, en son teknoloji ile donatılmış tesislerimizde, en etkili dezenfektan ürünleri kullanılarak dezenfeksiyon işlemi uygulanır.
                </p>
            </div>
        </div>
        <div className="service flex flex-col justify-center items-center h-full py-12">
            <div className="service-title text-2xl w-1/2 flex flex-col justify-center items-center">
                <h2 className="font-playfair font-bold text-2xl tracking-wider italic">Adrese Servis</h2>
                <p className="font-poppins font-medium text-black text-center p-4 text-sm">
                Maltepe, Kadıköy ilçelerine servisimiz bulunmaktadır.
                </p>
            </div>
        </div>
        
    </div>
  );
}

export default Services;
