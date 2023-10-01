import Layout from "../../../layouts/Layout";
import React, { ChangeEvent, FormEvent, useState, useRef, MouseEvent } from "react";
import { Link, usePage, router } from "@inertiajs/react";
import placeholder  from "../../../../storage/products/placeholder.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import SavePopup from "../popup";



function Users() {
  const auth = usePage().props as any;
  console.log(auth);
  const allUsers = auth.users;
  function isAdmin( user: any ){
    const roles = JSON.parse(user.roles)
    if(roles.length > 0 && roles[0].name == "admin"){
      return "Evet"
    }else{
      return "Hayır"
    }
  } 
  return (
    <div>
      <Layout title="Müşteriler" description="Bu sayfa da müşterilerinizi düzenleyebilir, yeni müşteri kaydı yapabilir ya da müşterilerin hesaplarını sonsuza dek kaldırabilirsiniz. Müşterilerinize mesaj göndermek için Mesajlar sayfasını kullanın.">
        <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg py-8 w-full mx-auto px-8">
            <div className="flex flex-col gap-8 justify-center items-center">
                <Link href="/admin/yeni-musteri" className="bg-zinc-700 hover:bg-zinc-500 text-white px-4 py-2 rounded-md">
                    <FontAwesomeIcon icon={faPlusCircle}></FontAwesomeIcon> Müşteri Ekle
                </Link>

            <table className="table-fixed border-black font-poppins border-collapse border-2 text-center w-full px-8">
                <thead>
                    <th>İsim</th>
                    <th>Email</th>
                    <th>Oluşturulma Tarihi</th>
                    <th>Yönetici?</th>
                    <th>İşlemler</th>
                </thead>
                <tbody>
                    {
                        allUsers.map((user: any, index: number) => (
                            <tr key={index}>
                                <td className="border border-zinc-700 p-2">{user.name}</td>
                                <td className="border border-zinc-700 p-2">{user.email}</td>
                                <td className="border border-zinc-700 p-2 px-6">{new Date(user.created_at).toLocaleDateString("tr-TR", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                    hour: "numeric",
                    minute: "numeric",
                    second: "numeric",
                    weekday: "long",
                  })}</td>
                                <td className="border border-zinc-700 p-2">{isAdmin(user)}</td>
                                <td className="border border-zinc-700 p-2">
                                    <Link href={`/admin/musteri-duzenle/${user.id}`} className="bg-zinc-700 hover:bg-zinc-500 text-white px-4 py-2 rounded-md">
                                        Düzenle
                                    </Link>
                                </td>
                            </tr>
                        ))
                    }

                </tbody>

            </table>


            </div>

        </div>
      </Layout>
    </div>
  );
}

export default Users;
