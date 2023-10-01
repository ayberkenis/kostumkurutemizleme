import Layout from "../../../layouts/Layout";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { Link, usePage, router } from "@inertiajs/react";



function NewCustomer(){
  const auth = usePage().props as any;
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const errors = usePage().props.errors;

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
    router.post("/register", {
      name: form.name,
      email: form.email,
      password: form.password,
      password_confirmation: form.confirmPassword,
    });
  }


  return (
    <div>
      <Layout>
        <div className="header">
          <h1 className="font-poppins font-bold font-2xl">Yeni Müşteri Kaydet</h1>
        </div>
        <p>
            Burada yeni müşteri kaydedebilirsiniz. Manuel müşteri kaydı, eğer müşteri kaydı izini ayarlar kısmından açıksa, müşteri tarafından da yapılabilir. 
        </p>
        <form className="flex flex-col pt-3 md:pt-8 w-1/2 mx-auto" onSubmit={handleSubmit}>
              {Object.keys(errors).length > 0 && (
                <div>
                  <div className="font-medium text-red-600">Bir sorun oluştu.</div>
                  <ul className="mt-3 text-sm text-red-600 list-disc list-inside">
                    {Object.keys(errors).map((key, index) => (
                      <li key={index}>{errors[key]}</li>
                    ))}
                  </ul>
                </div>
              )}
              <div className="flex flex-col pt-4">
                <label htmlFor="name"  className="text-lg font-poppins">
                  İsim Soyisim
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="İsim Soyisim"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full px-3 py-2 mt-1 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline placeholder:font-playfair"
                />
              </div>

              <div className="flex flex-col pt-4">
                <label htmlFor="email" className="text-lg font-poppins">
                  E-Posta
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="mail@mail.com"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 mt-1 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline placeholder:font-playfair"
                />
              </div>

              <div className="flex flex-col pt-4">
                <label htmlFor="password" className="text-lg">
                  Şifre
                </label>
                <input
                  type="password"
                  id="password"
                  placeholder="Şifre"
                  value={form.password}
                  onChange={handleChange}
                  className="w-full px-3 py-2 mt-1 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline placeholder:font-playfair"
                />
              </div>

              <div className="flex flex-col pt-4">
                <label htmlFor="confirmPassword" className="text-lg">
                  Şifrenizi tekrar girin
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  placeholder="Şifre"
                  value={form.confirmPassword}
                  onChange={handleChange}
                  className="w-full px-3 py-2 mt-1 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline placeholder:font-playfair"
                />
              </div>

              <input
                type="submit"
                value="Müşteri Kaydet"
                className="p-2 mt-8 text-lg font-bold text-white bg-black hover:bg-gray-700 font-poppins"
              />
            </form>
      </Layout>
    </div>
  );
}

export default NewCustomer;
