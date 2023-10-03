import GridItem from "../AdminComponents/GridItem";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUsers, faCalendarWeek, faSquarePlus, faStar, faBriefcase, faMessage } from "@fortawesome/free-solid-svg-icons";
import { faCalendarCheck } from "@fortawesome/free-regular-svg-icons";
import { Link } from "@inertiajs/react";


function StatisticComponent({title, value, icon, iconBgColor, href}) {
    return (
        <Link className="w-full shadow-xs overflow-hidden bg-gray-200 hover:bg-gray-300" href={href}>
        <div className="p-4 flex items-center">
        <div className={"p-3 rounded-full text-white mr-4 w-16 h-16 text-center flex justify-center items-center " + iconBgColor} >
            <FontAwesomeIcon icon={icon} size="lg" />
          </div>
          <div>
            <p className="mb-2 font-poppins text-sm font-medium text-zinc-900">{title}</p>
            <p className="text-lg font-poppins font-semibold text-black">{value}</p>
          </div>
        </div>
      </Link>
    )
}

function Statistics({ auth }) {
  return (
    <GridItem title="İstatistikler">
        <p className="p-8 font-poppins font-medium text-xs text-gray-500"> Bu kısımdan sitenizin anlık istatistiklerini görüntüleyebilirsiniz. İstatistiklere tıklayarak ilgili sayfaya da gidebilirsiniz. </p>
        <div className="flex flex-col items-center justify-start divide-y-2 divide-white w-full">
            <StatisticComponent title="Toplam Müşteri Sayısı" value={auth.totalUsers} icon={faUsers} iconBgColor="bg-orange-500" href="/admin/musteriler"/>
            <StatisticComponent title="Onay Bekleyen Randevular" value={auth.totalRandezveous} icon={faCalendarCheck} iconBgColor="bg-teal-500" href="/admin/randevular"/>
            <StatisticComponent title="Cevap Bekleyen Müşteriler" value={auth.totalRandezveous} icon={faMessage} iconBgColor="bg-yellow-500" href="/admin/mesajlar"/>
        
        </div>
    </GridItem>
  );
}

export default Statistics;
