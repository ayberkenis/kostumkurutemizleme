import Layout from "../../../layouts/Layout";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { Link, usePage, router } from "@inertiajs/react";

interface Errors {
  date?: string;
  time?: string;
  items?: string;
}

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

function Randevu({ errors }: { errors: Errors }) {
  const auth = usePage().props as any;
  const [selectedTime, setSelectedTime] = useState(""); // State to store the selected time
  const [form, setForm] = useState({
    date: "",
    hour: "",
    products: [],
  });

  const [validationErrors, setValidationErrors] = useState<Errors>({});

  function handleMultipleCheckboxes(e: ChangeEvent<HTMLInputElement>) {
    const key = e.target.name;
    const value = e.target.value;

    // Check if the selected product is already in the array
    if (e.target.checked) {
      console.log("checked", value);
      setForm((form) => ({
        ...form,
        products: [...form.products, value], // Add the selected product to the array
      }));
    } else {
      console.log("unchecked", value);
      setForm((form) => ({
        ...form,
        products: form.products.filter((item: any) => item !== value), // Remove the deselected product from the array
      }));
    }
  }

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
  const generateTimeOptions = () => {
    const options = [];
    const startTime = new Date();
    startTime.setHours(8, 0, 0); // Set start time to 08:00

    const endTime = new Date();
    endTime.setHours(19, 30, 0); // Set end time to 19:30

    const interval = 30; // 10 minutes interval

    while (startTime <= endTime) {
      const timeString = startTime.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });

      options.push(
        <option key={timeString} value={timeString}>
          {timeString}
        </option>
      );

      startTime.setMinutes(startTime.getMinutes() + interval);
    }

    return options;
  };

  const handleTimeChange = (e) => {
    setSelectedTime(e.target.value);
  };

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const now = new Date();
    const selectedDate = new Date(form.date);
    const selectedTime = form.hour;

    // Calculate the maximum allowed date (14 days from now)
    const maxAllowedDate = new Date();
    maxAllowedDate.setDate(now.getDate() + 14);

    // Define the minimum and maximum allowed times
    const minTime = "08:00";
    const maxTime = "19:30";

    // Check if the selected date is in the future and not more than 14 days from now
    if (selectedDate <= now || selectedDate > maxAllowedDate) {
      setValidationErrors((errors) => ({
        ...errors,
        date: "Sadece bugünden itibaren 14 gün içinde randevu alabilirsiniz. Pazar günleri hariç.",
      }));
      return;
    }

    // Check if the selected time is between 08:00 and 19:30
    if (selectedTime < minTime || selectedTime > maxTime) {
      setValidationErrors((errors) => ({
        ...errors,
        time: "Lütfen çalışma saatlerimiz içerisinde bir saat seçiniz. (08:00 - 19:30)",
      }));
      return;
    }

    // Prevent selection of Sundays (day 0 in JavaScript's Date object)
    if (selectedDate.getDay() === 0) {
      setValidationErrors((errors) => ({
        ...errors,
        date: "Pazar günleri randevu alınamaz.",
      }));
      return;
    }

    router.post("/yeniRandevu", form, {
      onError: (errors) => {
        setValidationErrors(errors);
      },
      onSuccess: () => {
        auth.randezveous.store(form);
        // Redirect to a success page or perform any other actions
      },
    });
  }

  return (
    <div>
      <Layout title="Randevu oluştur" description="Bu sayfadan randevu oluşturabilirsiniz. Randevunuz onaylandığında kayıt olurken belirttiğiniz telefon numarasına Whatsapp mesajı ve email adresinize mail gönderilecektir.">
        <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg pb-8 w-full mx-auto">
          <div className="bg-white border-b border-gray-200 font-playfair pb-8 pt-8 mx-auto w-1/2">
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
                {validationErrors.date && (
                  <div className="text-sm text-red-500 py-4">{validationErrors.date}</div>
                )}
              </div>

              <div className="flex flex-col pt-4">
                <label htmlFor="password" className="text-lg font-poppins">
                  Teslim etmek istediğiniz saat
                </label>
                <select
                  id="hour"
                  value={selectedTime}
                  onChange={handleTimeChange}
                  className="w-full px-3 py-2 mt-1 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline placeholder:font-playfair"
                >
                  <option value="">Bir saat aralığı seçin</option>
                  {generateTimeOptions()}
                </select>
                {validationErrors.time && (
                  <div className="text-sm text-red-500 py-4">{validationErrors.time}</div>
                )}
              </div>

              <div className="flex flex-col pt-4 px-2">
                <label htmlFor="items" className="text-lg font-poppins">
                  Teslim edilecek ürün listesi (Çoklu seçim yapabilirsiniz)
                </label>
                {auth.products.length > 0 ? (
                  auth.products.map((product: Product, index: number) => (
                    <div
                      key={index}
                      className="mt-1 flex flex-row justify-start items-center gap-2"
                    >
                      <input
                        type="checkbox" // Changed to checkbox for multiple selections
                        id={`product_${index}`}
                        name="selectedProducts"
                        value={product.id}
                        checked={form.products.includes(product.id.toString())}
                        onChange={handleMultipleCheckboxes}
                        className="mr-2"
                      />
                      <img
                        src={`/storage/products/${product.image}`}
                        alt={product.name}
                        className="inline-block w-16 h-16 rounded-md"
                      />
                      <label htmlFor={`product_${index}`} className="text-gray-700">
                        {product.name}
                      </label>
                    </div>
                  ))
                ) : (
                  <div className="p-8 bg-zinc-200 border border-zinc-300 mt-8">Ürün Bulunamadı. Eğer yönetici iseniz lütfen panelizine giriş yapıp ürün ekleyin aksi takdirde müşterileriniz randevularına ürün belirtmeden geleceklerdir.</div>
                )}
                {validationErrors.items && (
                  <div className="text-sm text-red-500 py-4">{validationErrors.items}</div>
                )}
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
