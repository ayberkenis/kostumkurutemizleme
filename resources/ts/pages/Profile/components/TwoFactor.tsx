import React, { useState, useEffect, useRef, MouseEvent } from "react";
import { usePage, router } from "@inertiajs/react";
import axios from "axios";

function TwoFactor() {

  const auth = usePage().props as any;
  const req = new XMLHttpRequest();
  const errors = usePage().props.errors;
    req.addEventListener("load", function () {
        console.log(JSON.parse(req.responseText));
        }
    );
    req.open("GET", "/user/two-factor-qr-code");
    req.send();

  return (
    <div>
      <div className="md:grid md:grid-cols-3 md:gap-6">
        {/* left side */}
        <div className="md:col-span-1">
          <h3 className="text-lg font-bold text-gray-900 font-playfair"> İki Aşamalı Doğrulama </h3>
          <p className="mt-1 text-sm text-gray-600">
            {" "}
            İki Aşamalı Doğrulamayı ayarlayın.
            {" "}
          </p>
        </div>
        {/* right side */}
        <div className="mt-5 md:mt-0 md:col-span-2">
          <form>
            <div className="px-4 py-5 bg-white shadow sm:p-6 sm:rounded-tl-md sm:rounded-tr-md">

              {/* QR Code */}
                {req['svg']}
            </div>
            {/* actions */}
            <div className="flex items-center justify-end px-4 py-3 text-right border-t shadow bg-gray-50 sm:px-6 sm:rounded-bl-md sm:rounded-br-md">
              <button
                type="submit"
                className="inline-flex items-center px-4 py-2 text-xs font-semibold tracking-widest text-white uppercase bg-gray-800 border border-transparent rounded-md hover:bg-gray-700"
              >
                Kaydet
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default TwoFactor;
