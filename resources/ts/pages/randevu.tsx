import Layout from "../layouts/Layout";
import React, { ChangeEvent, FormEvent, useState } from "react";
import backgroundImage from "./assets/images/auth-image.jpg";
import { Link, usePage, router } from "@inertiajs/react";

function Randevu() {
    const [form, setForm] = useState({
        date: "",
        time: "",
      });
    
      function handleChange(e: ChangeEvent<HTMLInputElement>) {
        const key = e.target.id;
        const value = e.target.value;
        setForm((form) => ({
          ...form,
          [key]: value,
        }));
      }
    
      function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        router.post("/randevu", {
          date: form.date,
          time: form.time,
        });
      }
      const errors = usePage().props.errors;
  return (
    <div>
      <Layout>
        <div className="header">
          <h1 className="font-poppins font-bold font-2xl">Randevu oluştur</h1>
        </div>

        <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg pb-8 w-1/2 mx-auto">
          <div className="bg-white border-b border-gray-200 font-playfair pb-8 pt-8">
          <form className="flex flex-col mt-3 md:mt-8" onSubmit={handleSubmit}>
              <div className="flex flex-col pt-4">
                <label htmlFor="email" className="text-lg font-poppins">
                  Teslim etmek istediğiniz tarih
                </label>
                <input
                  type="date"
                  id="date"
                  value={form.date}
                  onChange={handleChange}
                  className="w-full px-3 py-2 mt-1 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline placeholder:font-playfair"
                />
                {errors.date && <div className="text-sm text-red-500">{errors.date}</div>}
              </div>

              <div className="flex flex-col pt-4">
                <label htmlFor="password" className="text-lg font-poppins">
                  Teslim etmek istediğiniz saat
                </label>
                <input
                  type="time"
                  id="time"
                  placeholder="Şifre"
                  value={form.time}
                  onChange={handleChange}
                  className="w-full px-3 py-2 mt-1 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline placeholder:font-playfair"
                />
                {errors.time && <div className="text-sm text-red-500">{errors.time}</div>}
              </div>

              <div className="flex flex-col pt-4">
                <label htmlFor="password" className="text-lg font-poppins">
                  Teslim edilecek ürün listesi
                </label>
                <input
                  type="textbox"
                  id="time"
                  placeholder="Gömlek, Pantolon, Takım, vb. (Ürünleri virgül ile ayırın)"
                  value={form.time}
                  onChange={handleChange}
                  className="w-full px-3 py-2 mt-1 text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline placeholder:font-playfair"
                />
                {errors.time && <div className="text-sm text-red-500">{errors.time}</div>}
              </div>


              <input
                type="submit"
                value="Randevu Talep Et"
                className="p-2 mt-8 text-lg font-bold text-white bg-black hover:bg-gray-700 font-poppins"
              />
            </form>
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default Randevu;
