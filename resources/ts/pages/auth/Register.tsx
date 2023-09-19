import React, { ChangeEvent, FormEvent, useState } from "react";
import { router } from "@inertiajs/react";
import { Link, usePage } from "@inertiajs/react";
import backgroundImage from "./assets/images/auth-image.jpg";

function Register() {
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
      <div className="flex flex-wrap w-full">
        {/* Register Section  */}
        <div className="flex flex-col w-full md:w-1/2 bg-gradient-to-br from-neutral-200 via-violet-200 to-neutral-400">
          <div className="flex justify-center pt-12 md:justify-start md:pl-12 md:-mb-12">
          <Link href="/" className="p-4 text-xl font-bold text-white bg-black font-poppins tracking-widest">
              Kostüm Kuru Temizleme
            </Link>
          </div>

          <div className="flex flex-col justify-center px-8 pt-8 my-auto md:justify-start md:pt-0 md:px-24 lg:px-32">
            <p className="text-3xl text-center font-playfair tracking-widest font-semibold">Müşterimiz olun</p>

            <form className="flex flex-col pt-3 md:pt-8" onSubmit={handleSubmit}>
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
                value="Kayıt Olun"
                className="p-2 mt-8 text-lg font-bold text-white bg-black hover:bg-gray-700 font-poppins"
              />
            </form>
            <div className="pt-12 pb-12 text-center font-playfair">
              <p>
                Zaten hesabınız var mı?{" "}
                <Link href="/login" className="font-semibold underline">
                  Giriş yapın
                </Link>
              </p>
            </div>
          </div>
        </div>

        {/* Image Section  */}
        <div className="w-1/2 shadow-2xl">
          <img className="hidden object-cover w-full h-screen md:block" src="https://images.unsplash.com/photo-1604254607827-01db84510729?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80" />
        </div>
      </div>
    </div>
  );
}

export default Register;
