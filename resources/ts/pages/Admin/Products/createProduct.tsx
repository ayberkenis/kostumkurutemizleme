import Layout from "../../../layouts/Layout";
import React, { ChangeEvent, FormEvent, useState, useRef, MouseEvent } from "react";
import { Link, usePage, router } from "@inertiajs/react";
import placeholder  from "../../../../storage/products/placeholder.png"

function createProduct({ errors }) {

  const [selectedImage, setSelectedImage] = useState<File | null>(null);





  const auth = usePage().props;
  const [form, setForm] = useState({
    name: "",
    description: "",
    image: "",
    price: "",
    is_active: "true",
    cleaning_duration: "",
    is_discount: "true",
    discount_price: "",
    discount_start_date: "",
    discount_end_date: "",
  });

  const [validationErrors, setValidationErrors] = useState<Errors>({});

  function handleChange(e) {
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

  function handleSubmit(e) {
    e.preventDefault();

    // Validation logic for form fields
    const errors = {};
    if (!form.name) {
      errors.name = "Ürün İsmi alanı zorunludur.";
    }
    if (!form.description) {
      errors.description = "Ürün Açıklaması alanı zorunludur.";
    }
    if (!form.price) {
      errors.price = "Ürün Fiyatı alanı zorunludur.";
    }
    if (!form.cleaning_duration) {
        errors.cleaning_duration = "Ürünün temizlenmesi ne kadar sürüyor? Bu alan zorunludur.";
        }
    if (!form.is_active) {
        errors.is_active = "Ürün aktifleştirilsin mi? Bu alan zorunludur.";
        }
    if (!form.image) {
        errors.image = "Ürün fotoğrafı ekleyiniz.";
        }
    

    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors);
      return;
    }

    // Form is valid, submit it using Inertia
    router.post("/admin/urunOlustur", form, {
      onError: (errors) => {
        setValidationErrors(errors);
      },
      onSuccess: () => {
        auth.products.createProduct(form);
        // Redirect to a success page or perform any other actions
      },
    });

  }
  // Add a function to handle image selection
  function handleImageChange(e) {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedImage(file);
      setForm((form) => ({
        ...form,
        image: file, // Update 'image' with the selected file
      }));
    }
    
  }
  return (
    <div>
      <Layout>
        <div className="header">
          <h1 className="font-poppins font-bold font-2xl">Ürün oluştur</h1>
        </div>

        <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg pb-8 w-1/2 mx-auto">
          <div className="bg-white border-b border-gray-200 font-playfair pb-8 pt-8">
            <form className="flex flex-col mt-3 md:mt-8" onSubmit={handleSubmit} encType="multipart/form-data">
            <label htmlFor="image" className="text-lg font-poppins">
            Ürün Fotoğrafı
          </label>
          <input
            type="file"
            id="image"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full px-3 py-2 mt-1 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline placeholder:font-playfair"
          />
          {selectedImage && (
            <div className="mt-2">
              <img
                src={URL.createObjectURL(selectedImage)}
                alt="Selected Image"
                className="object-cover w-40 h-40 rounded-sm"
              />
            </div>
          )}
          {validationErrors.image && (
            <div className="text-sm text-red-500 py-4">{validationErrors.image}</div>
          )}


              <div className="flex flex-col pt-4">
                <label htmlFor="name" className="text-lg font-poppins">
                  Ürün İsmi
                </label>
                <input
                  type="text"
                  id="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Ürün ismi"
                  className="w-full px-3 py-2 mt-1 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline placeholder:font-playfair"
                />
                {validationErrors.name && (
                  <div className="text-sm text-red-500 py-4">{validationErrors.name}</div>
                )}
              </div>

              <div className="flex flex-col pt-4">
                <label htmlFor="description" className="text-lg font-poppins">
                  Ürün Açıklaması
                </label>
                <input
                  type="text"
                  id="description"
                  placeholder="Ürün açıklaması, özellikleri, vb."
                  value={form.description}
                  onChange={handleChange}
                  className="w-full px-3 py-2 mt-1 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline placeholder:font-playfair"
                />
                {validationErrors.description && (
                  <div className="text-sm text-red-500 py-4">{validationErrors.description}</div>
                )}
              </div>

              <div className="flex flex-col pt-4">
                <label htmlFor="price" className="text-lg font-poppins">
                  Ürün Fiyatı
                </label>
                <input
                  type="number"
                  id="price"
                  placeholder="100"
                  value={form.price}
                  onChange={handleChange}
                  className="w-full px-3 py-2 mt-1 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline placeholder:font-playfair"
                />
                {validationErrors.price && (
                  <div className="text-sm text-red-500 py-4">{validationErrors.price}</div>
                )}
              </div>

              {/* Add other form fields here */}
              <div className="flex flex-col pt-4">
                <label htmlFor="isActive" className="text-lg font-poppins">
                  Ürün Aktifleştirilsin mi?
                </label>
                <select
                  id="isActive"
                  value={form.is_active}
                  onChange={handleChange}
                  className="w-full px-3 py-2 mt-1 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline placeholder:font-playfair"
                >
                  <option value="true">Evet</option>
                  <option value="false">Hayır</option>
                </select>
                {validationErrors.is_active && (
                  <div className="text-sm text-red-500 py-4">{validationErrors.is_active}</div>
                )}
              </div>

              <div className="flex flex-col pt-4">
                <label htmlFor="cleaningDuration" className="text-lg font-poppins">
                  Ürünün temizlenmesi ne kadar sürüyor? (Dakika olarak)
                </label>
                <input
                  type="number"
                  id="cleaning_duration"
                  placeholder="10"
                  value={form.cleaning_duration}
                  onChange={handleChange}
                  className="w-full px-3 py-2 mt-1 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline placeholder:font-playfair"
                />
                {validationErrors.cleaning_duration && (
                  <div className="text-sm text-red-500 py-4">
                    {validationErrors.cleaning_duration}
                  </div>
                )}
              </div>

              <div className="flex flex-col pt-4">
                <label htmlFor="isDiscount" className="text-lg font-poppins">
                  Ürün İndirimde mi?
                </label>
                <select
                  id="is_discount"
                  value={form.is_discount}
                  onChange={handleChange}
                  className="w-full px-3 py-2 mt-1 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline placeholder:font-playfair"
                >
                  <option value="true">Evet</option>
                  <option value="false">Hayır</option>
                </select>
                {validationErrors.is_discount && (
                  <div className="text-sm text-red-500 py-4">{validationErrors.is_discount}</div>
                )}
              </div>

              <div className="flex flex-col pt-4">
                <label htmlFor="discountPrice" className="text-lg font-poppins">
                  İndirim oranı (Yüzde olarak)
                </label>
                <input
                  type="number"
                  id="discount_price"
                  placeholder="25"
                  value={form.discount_price}
                  onChange={handleChange}
                  className="w-full px-3 py-2 mt-1 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline placeholder:font-playfair"
                />
                {validationErrors.discount_price && (
                  <div className="text-sm text-red-500 py-4">{validationErrors.discount_price}</div>
                )}
              </div>

              <div className="flex flex-col pt-4">
                <label htmlFor="discountStartDate" className="text-lg font-poppins">
                  İndirim Başlangıç Tarihi
                </label>
                <input
                  type="date"
                  id="discount_start_date"
                  value={form.discount_start_date}
                  onChange={handleChange}
                  className="w-full px-3 py-2 mt-1 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline placeholder:font-playfair"
                />
                {validationErrors.discount_start_date && (
                  <div className="text-sm text-red-500 py-4">
                    {validationErrors.discount_start_date}
                  </div>
                )}
              </div>

              <div className="flex flex-col pt-4">
                <label htmlFor="discountEndDate" className="text-lg font-poppins">
                  İndirim Bitiş Tarihi
                </label>
                <input
                  type="date"
                  id="discount_end_date"
                  value={form.discount_end_date}
                  onChange={handleChange}
                  className="w-full px-3 py-2 mt-1 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline placeholder:font-playfair"
                />
                {validationErrors.discount_end_date && (
                  <div className="text-sm text-red-500 py-4">
                    {validationErrors.discount_end_date}
                  </div>
                )}
              </div>

              <input
                type="submit"
                value="ÜRÜN OLUŞTUR"
                className="p-2 mt-8 text-lg font-bold text-white bg-black hover:bg-gray-700 font-poppins"
              />
            </form>
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default createProduct;
