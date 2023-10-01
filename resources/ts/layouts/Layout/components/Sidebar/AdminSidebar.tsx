import { Link } from "@inertiajs/react";
import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { usePage } from "@inertiajs/react";
import {faUser, faGear,faListOl, faCommentSms, faCalendarCheck, faPlusCircle, faHouse, faMessage} from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import SidebarItem from "./SidebarItem";
function AdminSidebar({ }) {

  return (
 
      <div className="flex flex-col gap-2 border-opacity-10 border-white">
        <span className="text-zinc-300 px-4 font-poppins font-semibold text-lg">Yönetici Paneli</span>
        <span className="text-zinc-800 px-4 font-poppins font-light text-sm p-2">Aşağıdaki butonlar sadece yöneticilere gözükür.</span>
        <SidebarItem href="/admin" title="Yönetici Anasayfası" icon={faHouse}/>
        <SidebarItem href="/admin/urunler" title="Ürünler" icon={faListOl}/>
        <SidebarItem href="/admin/randevular" title="Randevular" icon={faCalendarCheck}/>
        <SidebarItem href="/admin/bildirimler" title="Bildirimler" icon={faCommentSms}/>
        <SidebarItem href="/admin/musteriler" title="Müşteriler" icon={faUser}/>
        <SidebarItem href="/admin/mesajlar" title="Mesajlar" icon={faMessage}/>
        <SidebarItem href="/admin/ayarlar" title="Site Ayarları" icon={faGear}/>
      </div>

);
}
export default AdminSidebar;
