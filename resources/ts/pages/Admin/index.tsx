import React from "react";
import Layout from "../../layouts/Layout";
import { usePage, router } from "@inertiajs/react";
import { faHourglass, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "@inertiajs/react";

const ListItem = ({ children, icon }: any) => (
  
  <li className="flex h-full items-center gap-2 py-8 rounded-sm listitem">

    <span className="text-black text-center p-4">
      <FontAwesomeIcon icon={icon} />
    </span>
    <div className="flex flex-col gap-2">{children}</div>
  </li>
);

function todaysRandezvous(randezveous) {
  const today = new Date();
  const randezvousDate = new Date(randezveous.date);
  return (
    randezvousDate.getDate() === today.getDate() &&
    randezvousDate.getMonth() === today.getMonth() &&
    randezvousDate.getFullYear() === today.getFullYear()
  );
}

function Home() {
  const auth = usePage().props as any;
  console.log(auth);
  return (
    <div>
      <Layout>
        <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
          <div className="p-4 bg-white border-b border-gray-200 font-poppins">
            <h2 className="text-2xl font-playfair px-2 py-2">Günlük Durum</h2>
            <ul className="list-outside py-4 flex flex-col">
            <div className="border-fade"></div>
              <ListItem icon={faHourglass}>
                <span className="font-poppins tracking-wider mb-2 font-semibold">
                  Bugüne oluşturulan randevular
                </span>
                <p className="font-poppins italic mb-2">
                  Bugün toplam {
                  auth.randezveous.filter((randezvous) => {
                    return (todaysRandezvous(randezvous));
                  
                  }).length} randevu bulunuyor.
                </p>
                <table className="table border border-black font-poppins">
                  <thead>
                    <tr>
                      <th className="px-4 py-2 border border-zinc-700">Müşteri</th>
                      <th className="px-4 py-2 border border-zinc-700">Tarih</th>
                      <th className="px-4 py-2 border border-zinc-700">Saat</th>
                      <th className="px-4 py-2 border border-zinc-700">Durum</th>
                      <th className="px-4 py-2 border border-zinc-700">Ürünler</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      auth.randezveous
                      .filter((randezvous) => {
                        const today = new Date();
                        const randezvousDate = new Date(randezvous.date);
                        return (todaysRandezvous(randezvous));
                      }).map((randezvous: any) => (
                        <tr className="text-center" key={randezvous.id}>
                          <td className="border border-zinc-700 w-[12rem]">{randezvous.user.name}</td>
                          <td className="border border-zinc-700 w-[8rem]">{new Date(randezvous.date).toLocaleDateString('tr-TR', { day: 'numeric', month: 'long', year: 'numeric' })} {new Date(randezvous.date).toLocaleDateString('tr-TR', { weekday: 'long' })}</td>
                          <td className="border border-zinc-700 w-[4rem]">{randezvous.hour}</td>
                          <td className="border border-zinc-700 w-[8rem]">{randezvous.status ? randezvous.status : 'Ayarlanmadı'}</td>
                          <td className="border border-zinc-700 w-[24rem]">{JSON.parse(randezvous.products)}</td>
                        </tr>
                      ))
                    }
                  </tbody>
                </table>
              </ListItem>
            </ul>
            <div className="border-fade"></div>
            <h2 className="text-2xl font-playfair py-4 mt-12">İstatistikler</h2>
            <ul className="list-outside py-4 flex flex-col gap-4">
            <li>Toplam kayıtlı müşteri sayısı: {auth.totalUsers}</li>
            <li>Toplam randevu sayısı: {auth.totalRandezveous}</li>
            <li>Toplam ürün sayısı: {auth.totalProducts}</li>
            </ul>
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default Home;
