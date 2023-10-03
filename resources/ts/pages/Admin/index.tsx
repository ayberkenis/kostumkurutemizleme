import React from "react";
import Layout from "../../layouts/Layout";
import { usePage, router } from "@inertiajs/react";
import { faHourglass, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "@inertiajs/react";
import TodaysAppointments from "./IndexComponents/todaysAppointments";
import Statistics from "./IndexComponents/statistics";
import ShopManager from "./IndexComponents/shopManagement";
import QuickActions from "./IndexComponents/QuickActions";

const ListItem = ({ children, icon }: any) => (
  
  <li className="flex h-full items-center gap-2 py-8 rounded-sm listitem">

    <span className="text-black text-center p-4">
      <FontAwesomeIcon icon={icon} />
    </span>
    <div className="flex flex-col gap-2">{children}</div>
  </li>
);


function Home() {
  const auth = usePage().props as any;
  const settings = auth.settings;
  console.log(settings);
  return (
    <div>
      <Layout title="Kostüm Kuru Temizleme Yönetici Paneli" description="Bu sayfadan günlük durumunuzu kontrol edebilir, istatistiklerinize bakabilirsiniz.">
        <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg w-full">
          <div className="p-4 bg-white border-b border-gray-200 font-poppins">
            <div className="grid grid-cols-2 auto-rows-auto">
              <TodaysAppointments auth={auth}></TodaysAppointments>
              <Statistics auth={auth}></Statistics>
              <ShopManager auth={auth}></ShopManager>
              <QuickActions></QuickActions>
            </div>


            


          </div>
        </div>
      </Layout>
    </div>
  );
}

export default Home;
