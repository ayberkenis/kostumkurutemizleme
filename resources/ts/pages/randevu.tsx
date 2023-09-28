import Layout from "../layouts/Layout";
import React, { ChangeEvent, FormEvent, useState } from "react";
import backgroundImage from "./assets/images/auth-image.jpg";
import { Link, usePage, router } from "@inertiajs/react";

interface Errors {
    date?: string;
    time?: string;
    items?: string;
  }
  

function Randevu({ errors}: { errors: Errors}) {

    const [form, setForm] = useState({
        date: "",
        time: "",
        items: "",
      });
    
      const [validationErrors, setValidationErrors] = useState<Errors>({});

      function handleChange(e: ChangeEvent<HTMLInputElement>) {
        const key = e.target.id;
        const value = e.target.value;
    
        // Clear the validation error for the current input field
        setValidationErrors((errors) => ({
          ...errors,
          [key]: undefined,
        }));
    
        setForm((form) => ({
          ...form,
          [key]: value,
        }));
      }
    
      function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const now = new Date();
        const selectedDate = new Date(form.date);
        const selectedTime = form.time;
    
        // Calculate the maximum allowed date (14 days from now)
        const maxAllowedDate = new Date();
        maxAllowedDate.setDate(now.getDate() + 14);
    
        // Define the minimum and maximum allowed times
        const minTime = '08:00';
        const maxTime = '19:30';
    
        // Check if the selected date is in the future and not more than 14 days from now
        if (selectedDate <= now || selectedDate > maxAllowedDate) {
          setValidationErrors((errors) => ({
            ...errors,
            date: 'Sadece bugünden itibaren 14 gün içinde randevu alabilirsiniz. Pazar günleri hariç.',
          }));
          return;
        }
    
        // Check if the selected time is between 08:00 and 19:30
        if (selectedTime < minTime || selectedTime > maxTime) {
          setValidationErrors((errors) => ({
            ...errors,
            time: 'Lütfen çalışma saatlerimiz içerisinde bir saat seçiniz. (08:00 - 19:30)',
          }));
          return;
        }
    
        // Prevent selection of Sundays (day 0 in JavaScript's Date object)
        if (selectedDate.getDay() === 0) {
          setValidationErrors((errors) => ({
            ...errors,
            date: 'Pazar günleri randevu alınamaz.',
          }));
          return;
        }
    
        // If all validations pass, you can proceed with your API request or other logic
        // Note: This part will depend on how you handle form submissions with Inertia.js
    

      }
    
      

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
                {errors.date && <div className="text-sm text-red-500 mt-4">{errors.date}</div>}
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
                {errors.time && <div className="text-sm text-red-500 mt-4">{errors.time}</div>}
              </div>

              <div className="flex flex-col pt-4">
                <label htmlFor="items" className="text-lg font-poppins">
                  Teslim edilecek ürün listesi
                </label>
                <input
                  type="textbox"
                  id="items"
                  placeholder="Gömlek, Pantolon, Takım, vb. (Ürünleri virgül ile ayırın)"
                  value={form.items}
                  onChange={handleChange}
                  className="w-full px-3 py-2 mt-1 text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline placeholder:font-playfair"
                />
                {errors.items && <div className="text-sm text-red-500 mt-4">{errors.items}</div>}
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
