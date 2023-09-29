import React from "react";
import Layout from "../../../layouts/Layout";
import { Link } from "@inertiajs/react";
import { usePage } from "@inertiajs/react";

function SingleRandevu() {
  const randezveous = usePage().props.randezveous as any;
  const currentDate = new Date();

  return (
    <div>
      <Layout>
        <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
          <div className="px-4 py-2 bg-white border-b border-gray-200 font-playfair">
            <p className="font-poppins font-bold">
            {new Date(randezveous.date).toLocaleDateString('tr-TR', { day: 'numeric', month: 'long', year: 'numeric' })} - {new Date(randezveous.date).toLocaleDateString('tr-TR', { weekday: 'long' })} - {randezveous.hour} tarihindeki randevunuzun detayları aşağıda gösterilmektedir.
            </p>
            <table className="table-auto border-collapse w-full">
                <thead>
                    <tr className="rounded-lg text-sm font-medium text-gray-700 text-left" style={{fontFamily: "Montserrat"}}>
                        <th className="px-4 py-2 bg-gray-200 " style={{backgroundColor: "#f8f8f8"}}>Ürünler</th>
                        <th className="px-4 py-2 " style={{backgroundColor: "#f8f8f8"}}>Adet</th>
                        <th className="px-4 py-2 " style={{backgroundColor: "#f8f8f8"}}>Fiyat</th>
                    </tr>
                </thead>
                <tbody className="text-sm font-normal text-gray-700">
                    {JSON.parse(randezveous.products).map((product: any, index: any) => (
                    <tr className="hover:bg-gray-100 border-b border-gray-200 py-10" key={index}>
                        <td className="px-4 py-4">{product.trim()}</td>
                        <td className="px-4 py-4">1</td>
                        <td className="px-4 py-4">10 TL</td>
                    </tr>
                    ))}
                </tbody>
            </table>

          </div>
        </div>
      </Layout>
    </div>
  );
}

export default SingleRandevu;
