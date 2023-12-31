import Layout from "../../../layouts/Layout";
import React, { ChangeEvent, FormEvent, useState, useRef, MouseEvent } from "react";
import { Link, usePage, router } from "@inertiajs/react";
import placeholder  from "../../../../storage/products/placeholder.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faPlusCircle } from "@fortawesome/free-solid-svg-icons";



function products() {
  const auth = usePage().props;
  const products = auth.products;
  return (
    <div>
      <Layout title="Ürünler" description="Bu sayfadan ürünleri görüntüleyebilir, düzenleyebilir, ekleyebilir veya kaldırabilirsiniz.">
        <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg py-8 w-full mx-auto px-8">
          <div className="flex flex-row gap-8">
          <Link
            href="/admin/urun-olustur"
            className="bg-zinc-700 hover:bg-zinc-500 text-white px-4 py-2 rounded-md"
          >
            <FontAwesomeIcon icon={faPlusCircle}></FontAwesomeIcon> Ürün Ekle
          </Link>
          <input
            type="text"
            placeholder="Ürün ara"
            className="border border-gray-300 p-2 rounded-md w-1/4 mx-4"
          />
          <select className="border border-gray-300 p-2 rounded-md w-1/4 mx-4">
            <option value="all">Tüm Ürünler</option>
            <option value="discounts">İndirimdekiler</option>
            <option value="discounts">Deaktif Ürünler</option>
          </select>
          
          <select className="border border-gray-300 p-2 rounded-md w-1/4 mx-4">
          <option value="all">Filtreler</option>
            <option value="cleaning_duration_ascending" >Temizlik Süresi (Artan)</option>
            <option value="cleaning_duration_descending">Temizlik Süresi (Azalan)</option>
            <option value="price_ascending">Fiyat (Artan)</option>
            <option value="price_descending">Fiyat (Azalan)</option>
            <option value="name_ascending">İsim (A-Z)</option>
            <option value="name_descending">İsim (Z-A)</option>
            <option value="created_at_ascending">Oluşturulma Tarihi (Yeni)</option>
            <option value="created_at_descending">Oluşturulma Tarihi (Eski)</option>
          </select>
          </div>


          <div className="bg-white border-b border-gray-200 font-playfair pb-8 pt-8">

            <table className="table-fixed border-black font-poppins border-collapse border-2 text-center w-full px-8">
              <thead>
                <tr>
                  <th className="px-4 py-2 border border-zinc-700">Ürün Görseli</th>
                  <th className="px-4 py-2 border border-zinc-700">Ürün Adı</th>
                  <th className="px-4 py-2 border border-zinc-700">Ürün Fiyatı</th>
                  <th className="px-4 py-2 border border-zinc-700">Ürün Açıklaması</th>
                  <th className="px-4 py-2 border border-zinc-700">Temizlik Süresi</th>
                  <th className="px-4 py-2 border border-zinc-700">İndirim Durumu</th>
                  <th className="px-4 py-2 border border-zinc-700">İndirim Oranı (%)</th>

                  <th className="px-4 py-2 border border-zinc-700">İndirim Başlangıç Tarihi</th>
                  <th className="px-4 py-2 border border-zinc-700">İndirim Son Tarihi</th>
                  <th className="px-4 py-2 border border-zinc-700">İşlemler</th>
                </tr>
              </thead>
              <tbody>
                {
                  products.map((product) => (
                    <tr className="border-separate border-2 border-black " key={product.id}>
                      <td className="inline-flex justify-center items-center">
                        <img src={`/storage/products/${product.image}`} alt={product.name} className="w-auto h-16 m-4 rounded-md"/>
                      </td>
                      <td className="border border-slate-600 w-12">{product.name}</td>
                      <td className="border border-slate-600">{product.price}</td>
                      <td className="border border-slate-600">{product.description}</td>
                      <td className="border border-slate-600">{product.cleaning_duration}</td>
                      <td className="border border-slate-600">{product.is_discount ? 'Var' : 'Yok'}</td>
                      <td className="border border-slate-600">{product.discount_price ? product.discount_price : 'Yok'}</td>
                      <td className="border border-slate-600">{product.discount_start_date ? product.discount_start_date : 'Yok'}</td>
                      <td className="border border-slate-600 ">{product.discount_end_date ? product.discount_end_date : 'Yok'}</td>
                      <td className="inline-flex flex-col gap-1">
                        <Link href={`/admin/urun-duzenle/${product.id}`} className="bg-zinc-700 hover:bg-zinc-500 text-white px-4 py-2 w-full h-full">
                          Düzenle
                        </Link>
                        <Link href={`/admin/urun-kaldir/${product.id}`} className="bg-red-700 hover:bg-red-500 text-white px-4 py-2 w-full h-full">
                          Kaldır
                        </Link>
                      </td>

                    </tr>
                  ))
                }
              </tbody>

            </table>
            <p className="text-center text-gray-600 font-poppins italic mt-4">Toplam {products.length} ürün bulunuyor.
              
            </p>
            <p className="text-center text-gray-500 font-playfair mt-8">
              Ürünlerin sadece görselleri, isimleri, fiyatları ve temizlik süreleri müşterilere gösterilir. Diğer bilgiler sadece yönetici panelinde görüntülenir.
            </p>


          </div>
        </div>
      </Layout>
    </div>
  );
}

export default products;
