import React, { ChangeEvent, FormEvent, useState } from "react";
import backgroundImage from "./assets/images/auth-image.jpg";
import { Link, usePage, router } from "@inertiajs/react";

interface Props {
  status?: string;
}

function Login({ status }: Props) {
  const [form, setForm] = useState({
    email: "",
    password: "",
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
    router.post("/login", {
      email: form.email,
      password: form.password,
    });
  }
  const errors = usePage().props.errors;
  return (
    <div>
      <div className="flex flex-wrap w-full">
        {/* Login Section  */}
        <div className="flex flex-col w-full md:w-1/2 bg-gradient-to-br from-neutral-200 via-violet-200 to-neutral-400 h-screen">
          <div className="flex justify-center pt-12 md:justify-start md:pl-12 md:-mb-24">
            <Link href="/" className="p-4 text-xl font-bold text-white bg-black font-poppins tracking-widest">
              Kostüm Kuru Temizleme
            </Link>
          </div>

          <div className="flex flex-col justify-center px-8 pt-8 my-auto md:justify-start md:pt-0 md:px-24 lg:px-32">
            <p className="text-3xl text-center font-playfair font-semibold">Müşteri paneline hoşgeldiniz</p>

            {status && <div className="my-4 text-sm font-medium text-green-600">{status}</div>}

            <form className="flex flex-col mt-3 md:mt-8" onSubmit={handleSubmit}>
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
                {errors.email && <div className="text-sm text-red-500">{errors.email}</div>}
              </div>

              <div className="flex flex-col pt-4">
                <label htmlFor="password" className="text-lg font-poppins">
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
                {errors.password && <div className="text-sm text-red-500">{errors.password}</div>}
              </div>

              <input
                type="submit"
                value="Giriş Yap"
                className="p-2 mt-8 text-lg font-bold text-white bg-black hover:bg-gray-700 font-poppins cursor-pointer"
              />
            </form>
            <div className="pt-12 pb-12 text-center font-playfair">
              <p>
                Hesaabınız yok mu?{" "}
                <Link href="/register" className="font-semibold underline">
                  Kaydolun.
                </Link>
              </p>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-1/2 shadow-2xl invisible lg:visible">
          <img className="hidden object-cover w-full h-screen md:block" src="https://images.unsplash.com/photo-1604254607827-01db84510729?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80" />
        </div>
      </div>
    </div>
  );
}

export default Login;
