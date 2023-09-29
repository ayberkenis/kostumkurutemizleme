import React, { useState, useRef, MouseEvent } from "react";
import Modal from "./Modal";
import { router } from "@inertiajs/react";
import { usePage } from "@inertiajs/react";

function DeleteUserForm() {
  const [modal, setModal] = useState(false);
  const [passwordForm, setPasswordForm] = useState("");
  const password = useRef<HTMLInputElement>(null);

  const errors = usePage().props.errors;

  function confirmUserDelete() {
    setModal(true);
    setTimeout(() => password.current?.focus(), 250);
  }

  function deleteUser(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    router.post(
      "/profileDelete",
      {
        _method: "delete",
        password: passwordForm,
        preserveScroll: true,
      },
      {
        onError: () => password.current?.focus(),
      }
    );
  }
  return (
    <div>
      <div className="mt-10 md:grid md:grid-cols-3 md:gap-6 sm:mt-0">
        <div className="md:col-span-1">
          <div className="px-4 sm:px-0">
            <h3 className="text-lg font-bold font-playfair text-gray-900"> Hesabı Kaldır </h3>
            <p className="mt-1 text-sm text-gray-600"> Hesabınızı kalıcı olarak kaldırın. </p>
          </div>
        </div>
        <div className="mt-5 md:mt-0 md:col-span-2">
          <div className="px-4 py-5 bg-white shadow sm:p-6 sm:rounded-lg">
            <div className="max-w-xl text-sm text-gray-600">
              Hesabınızı kalıcı olarak silmek istediğinizden emin misiniz? Hesabınız silindikten sonra, tüm kaynaklarınız ve verileriniz kalıcı olarak silinecektir. Hesap bilgileriniz yasal zorunlulukları karşılamak amacıyla 60 iş günü sistemlerimizde saklanmaya devam edecek ardından kaldırılacaktır.
            </div>
            <div className="mt-5">
              <button
                type="button"
                onClick={confirmUserDelete}
                className="inline-flex items-center justify-center px-4 py-2 text-xs font-semibold tracking-widest text-white uppercase bg-red-600 border border-transparent rounded-md hover:bg-red-500"
              >
                Hesabı Kaldır
              </button>
            </div>

            {/* delete account confirmation modal */}
            <Modal show={modal} setShow={setModal} title="Hesabı Kaldır">
              <form>
                <div>
                  Hesabınızı kalıcı olarak kaldırmak istediğinize emin misiniz? Bu işlem geri alınamaz.
                </div>
                <div className="mt-4">
                  <input
                    id="name"
                    type="password"
                    placeholder="Şifre"
                    ref={password}
                    onChange={(e) => setPasswordForm(e.target.value)}
                    className="block w-full h-10 mt-1 border border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  />
                  {errors.password && (
                    <div className="mt-2 text-sm text-red-500">{errors.password}</div>
                  )}
                </div>
                <div className="flex items-center justify-end mt-4">
                  <button
                    type="submit"
                    onClick={deleteUser}
                    className="inline-flex items-center justify-center px-4 py-2 text-xs font-semibold tracking-widest text-white uppercase bg-red-600 border border-transparent rounded-md hover:bg-red-500"
                  >
                    Hesabı Kaldır
                  </button>
                </div>
              </form>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeleteUserForm;
