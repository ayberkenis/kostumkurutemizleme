import React from "react";
import Layout from "../../layouts/Layout";
import { Link } from "@inertiajs/react";
import { usePage } from "@inertiajs/react";

function Home() {
  const auth = usePage().props as any;

  // Get the current date
  const currentDate = new Date();

  return (
    <div>
      <Layout title="Kostüm Kuru Temizleme" description="Kostüm Kuru Temizleme Panelinize Hoşgeldiniz!">
        <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
          <div className="px-4 py-2 bg-white border-b border-gray-200 font-playfair">
            {auth.randezveous && auth.randezveous.length > 0 ? (
              <div className="flex flex-col gap-4">
                <h2 className="text-2xl font-playfair py-4">Randevularınız</h2>
                <p className="font-poppins italic font-medium">
                  Randevularınıza zamanında gelmeniz önemle rica olunur. Randevu
                  oluştururken eklediğiniz ürünler dışında ürün teslimi yapmanız
                  teslim süresini uzatabilir.
                </p>
                <Link href="/customer/gecmis-randevular" className="block mt-4 text-black hover:animate-pulse">
                <p className="font-poppins text-sm font-medium">
                  Burada sadece gelecekteki randevularınız gösterilmektedir.
                  Geçmiş randevularınız için yan panelden geçmiş randevular
                  butonuna ya da bu yazıya tıklayabilirsiniz. 
                </p>
                </Link>
                <ul className="list-outside py-4 flex flex-col gap-4">
                  {auth.randezveous
                    .filter((randevou: any) => {
                      // Convert the date and time strings to Date objects for comparison
                      const date: any = new Date(randevou.date + " " + randevou.hour);
                      // Filter out items with dates earlier than the current date
                      return date >= currentDate;
                    })
                    .sort((a: { date: string; hour: string }, b: { date: string; hour: string }) => {
                      // Convert the date and time strings to Date objects for comparison
                      const dateA: any = new Date(a.date + " " + a.hour);
                      const dateB: any = new Date(b.date + " " + b.hour);

                      // Compare the Date objects
                      return dateA - dateB;
                    })
                    .map((randevou: any) => (
                      <li
                        className="px-4 py-4 rounded-sm hover:bg-zinc-300 bg-zinc-200 p-4 w-1/2 shadow-sm shadow-gray-400 hover:scale-105 hover:shadow-md hover:shadow-gray-600 ease-in-out transition-all duration-200"
                        key={randevou.id}
                      >
                        <Link href={`/customer/randevu/${randevou.id}`} className="block text-black">
                          <div className="flex items-center justify-start gap-4 hover:gap-6 flex-grow ease-in-out transition-all duration-200">
                            <span className="text-lg font-poppins font-semibold flex flex-col justify-center items-start">
                              <span className="text-sm font-medium my-4">
                                Tarih: {new Date(randevou.date).toLocaleDateString('tr-TR', { day: 'numeric', month: 'long', year: 'numeric' })} - {new Date(randevou.date).toLocaleDateString('tr-TR', { weekday: 'long' })} - {randevou.hour}
                              </span>
                              <span className="text-sm font-medium my-4">
                                Durum: {randevou.is_permitted ? "Onaylandı" : "Onaylanmadı"}
                              </span>
                              <span className="text-sm font-medium">Ürünler:</span>
                              <ul className="list-disc px-12 py-4 font-semibold">
                                {JSON.parse(randevou.products).map((product: any, index: any) => (
                                  <li key={index}>{product.trim()}</li>
                                ))}
                              </ul>
                            </span>
                          </div>
                        </Link>
                      </li>
                    ))}
                </ul>
              </div>
            ) : (
              <div className="flex flex-col gap-4">
                <h2 className="text-2xl font-playfair py-4">Randevularınız</h2>
                <div className="flex items-center justify-center gap-4 hover:gap-6 flex-grow ease-in-out transition-all duration-200 hover:bg-zinc-400 hover:text-white bg-zinc-300 rounded-sm p-2 w-72 text-center">
                  <span className="text-lg font-medium">Şuanda hiçbir randevunuz bulunmamaktadır.</span>
                </div>
              </div>
            )}

            <Link href="/customer/yeni-randevu" className="block mt-4 text-black hover:animate-pulse">
              <div className="flex items-center justify-center gap-4 hover:gap-6 flex-grow ease-in-out transition-all duration-200 hover:bg-zinc-400 hover:text-white bg-zinc-300 rounded-sm p-2 w-72 text-center">
                <span className="text-lg font-medium">Yeni Randevu Oluştur</span>
              </div>
            </Link>
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default Home;
