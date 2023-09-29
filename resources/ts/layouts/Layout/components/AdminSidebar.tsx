import { Link } from "@inertiajs/react";
import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { usePage } from "@inertiajs/react";
import {faUserPlus, faGear,faListOl, faCommentSms, faCalendarCheck, faPlusCircle, faHouse, faList} from "@fortawesome/free-solid-svg-icons";

function AdminSidebar({ }) {

  return (
 
      <div className="flex flex-col gap-2 border-opacity-10 border-white">
        <span className="text-zinc-300 px-4 font-poppins font-semibold text-lg">Yönetici Paneli</span>
        <span className="text-zinc-800 px-4 font-poppins font-light text-sm p-2">Aşağıdaki butonlar sadece yöneticilere gözükür.</span>
        <li className="px-3 py-2 rounded-sm hover:bg-zinc-900 bottom-panel">
          <Link href="/admin" className="block text-gray-200 hover:text-white">
            <div className="flex items-center justify-start gap-4 hover:gap-6 flex-grow ease-in-out transition-all duration-200 w-full">
              <FontAwesomeIcon icon={faHouse}></FontAwesomeIcon> 
              <span className="text-sm font-medium">Yönetici Anasayfası</span>
            </div>
          </Link>
        </li>
        <li className="px-3 py-2 rounded-sm hover:bg-zinc-900 bottom-panel">
          <Link href="/admin/urunler" className="block text-gray-200 hover:text-white">
            <div className="flex items-center justify-start gap-4 hover:gap-6 flex-grow ease-in-out transition-all duration-200 w-full">
              <FontAwesomeIcon icon={faListOl}></FontAwesomeIcon> 
              <span className="text-sm font-medium">Ürünler</span>
            </div>
          </Link>
        </li>
        <li className="px-3 py-2 rounded-sm hover:bg-zinc-900 bottom-panel">
          <Link href="/admin/yeni-musteri" className="block text-gray-200 hover:text-white">
            <div className="flex items-center justify-start gap-4 hover:gap-6 flex-grow ease-in-out transition-all duration-200 w-full">
              <FontAwesomeIcon icon={faUserPlus}></FontAwesomeIcon> 
              <span className="text-sm font-medium">Yeni Müşteri Kaydı</span>
            </div>
          </Link>
        </li>
        <li className="px-3 py-2 rounded-sm hover:bg-zinc-900 bottom-panel">
          <Link href="/admin/bildirim-gonder" className="block text-gray-200 hover:text-white">
            <div className="flex items-center justify-start gap-4 hover:gap-6 flex-grow ease-in-out transition-all duration-200 w-full">
              <FontAwesomeIcon icon={faCommentSms}></FontAwesomeIcon> 
              <span className="text-sm font-medium">Bildirim Gönder</span>
            </div>
          </Link>
        </li>

        <li className="px-3 py-2 rounded-sm hover:bg-zinc-900 bottom-panel">
          <Link href="/admin/randevulari-duzenle" className="block text-gray-200 hover:text-white">
            <div className="flex items-center justify-start gap-4 hover:gap-6 flex-grow ease-in-out transition-all duration-200 w-full">
              <FontAwesomeIcon icon={faCalendarCheck}></FontAwesomeIcon> 
              <span className="text-sm font-medium">Randevuları Düzenle</span>
            </div>
          </Link>
        </li>
        <li className="px-3 py-2 rounded-sm hover:bg-zinc-900 bottom-panel">
          <Link href="/admin/ayarlar" className="block text-gray-200 hover:text-white">
            <div className="flex items-center justify-start gap-4 hover:gap-6 flex-grow ease-in-out transition-all duration-200 w-full">
              <FontAwesomeIcon icon={faGear}></FontAwesomeIcon> 
              <span className="text-sm font-medium">Site Ayarları</span>
            </div>
          </Link>
        </li>



        </div>

);
}
export default AdminSidebar;
