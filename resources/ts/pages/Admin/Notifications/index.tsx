import Layout from "../../../layouts/Layout";
import React, { ChangeEvent, FormEvent, useState, useRef, MouseEvent } from "react";
import { Link, usePage, router } from "@inertiajs/react";
import placeholder  from "../../../../storage/products/placeholder.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faPlusCircle } from "@fortawesome/free-solid-svg-icons";



function index() {
  const auth = usePage().props;
  const products = auth.products;
  const currentDate = new Date();
  const minutes = currentDate.getMinutes().toString().padStart(2, '0');
    const currentHour = currentDate.getHours() + ":" + minutes;
  return (
    <div>
      <Layout title="Bildirimler" description="Bu sayfadan bildirimleri düzenleyebilirsiniz. Manuel olarak bildirim göndermeniz şuan da mümkün değildir. Tüm bildirimler otomatik olarak sistem tarafından gönderilir.">
        <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg py-8 w-full mx-auto px-8">
            <div className="flex flex-col gap-8 justify-center items-center">
                <p className="font-poppins font-semibol">Mesaj yazarken aşağıdaki değişkenleri kullanarak mesajlarınıza gerekli değerleri ekleyebilirsiniz. Hali hazırda bulunan bildirimleri inceleyerek ya da aşağıdaki tabloya bakarak anlayabilirsiniz.</p>
                <table className="table-auto border-black font-poppins border-collapse border-2 text-center w-full px-8">
                    <thead>
                        <th>Değişken</th>
                        <th>Değer</th>
                        <th>Açıklama</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border border-zinc-700 p-2">{'{'}user_name{'}'}</td>
                            <td className="border border-zinc-700 p-2">{auth.user.name}</td>
                            <td className="border border-zinc-700 p-2">Müşterinin adı</td>
                        </tr>
                        
                        <tr>
                            <td className="border border-zinc-700 p-2">{'{'}date{'}'}</td>
                            <td className="border border-zinc-700 p-2">{currentDate.toLocaleDateString("tr-TR", {
                                day: "numeric",
                                month: "long",
                                year: "numeric",
                            })}</td>
                            <td className="border border-zinc-700 p-2">Randevu'nun tarihi</td>

                        </tr>
                        <tr>
                            <td className="border border-zinc-700 p-2">{'{'}hour{'}'}</td>
                            <td className="border border-zinc-700 p-2">{currentHour}</td>
                            <td className="border border-zinc-700 p-2">Randevu'nun saati</td>
                        </tr>

                        <tr>
                            <td className="border border-zinc-700 p-2">{'{'}link{'}'}</td>
                            <td className="border border-zinc-700 p-2">https://kostumkurutemizleme.com.tr/randevu/ornek</td>
                            <td className="border border-zinc-700 p-2">Bu kısım uygulama tarafından otomatik olarak doldurulur, gerekli URL paylaşılır.</td>
                        </tr>

                        <tr>
                            <td className="border border-zinc-700 p-2">{'{'}teslim_alan{'}'}</td>
                            <td className="border border-zinc-700 p-2">İbrahim Gönül</td>
                            <td className="border border-zinc-700 p-2">Şube de teslim alan kişinin adı</td>
                        </tr>

                        <tr>
                            <td className="border border-zinc-700 p-2">{'{'}teslim_alan_musteri{'}'}</td>
                            <td className="border border-zinc-700 p-2">{auth.user.name}</td>
                            <td className="border border-zinc-700 p-2">Ürünleri şubeye teslim eden kişinin adı</td>
                        </tr>
                    </tbody>
                </table>

            <table className="table-fixed border-black font-poppins border-collapse border-2 text-center w-full px-8">
                <thead>
                    <th>İsim</th>
                    <th>Mesaj</th>
                    <th>Aktif?</th>
                    <th>Kanallar</th>
                    <th>İşlemler</th>
                </thead>
                <tbody>
                    {
                        auth.notifications.map((notification, index) => (
                            <tr key={index}>
                                <td className="border border-zinc-700 p-2">{notification.name}</td>
                                <td className="border border-zinc-700 p-8 font-poppins">{notification.message}</td>
                                <td className="border border-zinc-700 p-2">{notification.is_active ? "Evet" : "Hayır"}</td>
                                <td className="border border-zinc-700 p-2">{notification.medium}</td>
                                <td className="border border-zinc-700 p-2">
                                    <Link href={`/admin/bildirimler/${notification.id}`} className="bg-zinc-700 hover:bg-zinc-500 text-white px-4 py-2 rounded-md">
                                        Düzenle
                                    </Link>
                                </td>
                            </tr>
                        ))
                    }

                </tbody>

            </table>


            </div>

        </div>
      </Layout>
    </div>
  );
}

export default index;
