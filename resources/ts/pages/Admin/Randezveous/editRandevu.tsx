import React from "react";
import Layout from "../../../layouts/Layout";
import axios from "axios";
import SavePopup from "../popup";
import { usePage } from "@inertiajs/react";
import { HeaderBig } from "@/layouts/Layout/components/ContentAreas/Header";


function RandevuPopup({ randevu, onSave, onClose }) {
  const [editedRandevu, setEditedRandevu] = React.useState(randevu);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    // Create a new object with the updated values
    const updatedRandevu = {
      ...editedRandevu,
      [name]: type === "checkbox" ? checked : value,
    };
    setEditedRandevu(updatedRandevu);
  };

  const handleSave = () => {
    onSave(editedRandevu);
  };

  return (
    <SavePopup title="Randevu Düzenle" onSave={handleSave} onClose={onClose}>
      <label className="block text-sm font-medium text-gray-700">
        Müşteri: {randevu.user.name}
      </label>
      <label className="block text-sm font-medium text-gray-700">
        Randevu Tarihi:{" "}
        {new Date(randevu.date).toLocaleDateString("tr-TR", {
          day: "numeric",
          month: "long",
          year: "numeric",
        })}{" "}
        - {new Date(randevu.date).toLocaleDateString("tr-TR", { weekday: "long" })}
      </label>
      <input
        type="date"
        name="date"
        value={editedRandevu.date} // Bind value to the editedRandevu state
        onChange={handleChange}
        className="mt-1 p-2 border rounded w-full"
      />
      <label className="block text-sm font-medium text-gray-700">
        Randevu Saati: {editedRandevu.hour}
      </label>
      <input
        type="text"
        name="hour"
        value={editedRandevu.hour} // Bind value to the editedRandevu state
        onChange={handleChange}
        className="mt-1 p-2 border rounded w-full"
      />
      <label className="flex flex-row text-center gap-4 text-sm justify-start items-center h-8 font-medium text-gray-700">
        Randevu Durumu
        <input
          type="checkbox"
          name="is_permitted"
          checked={editedRandevu.is_permitted} // Bind checked to the editedRandevu state
          onChange={handleChange}
          className="mt-1 p-2 border rounded"
        />
      </label>
    </SavePopup>
  );
}

function Index() {
  const auth = usePage().props;
  const [showPopup, setShowPopup] = React.useState(false);
  const [randevuId, setRandevuId] = React.useState(null);
  const [searchInput, setSearchInput] = React.useState(""); // Added state for search input
  const [onayDurumu, setOnayDurumu] = React.useState("all"); // Added state for onayDurumu
  const [selectedProduct, setSelectedProduct] = React.useState("all"); // Added state for selectedProduct

  const handleEdit = (id) => {
    setShowPopup(true);
    setRandevuId(id);
  };

  const handlePopupClose = () => {
    setShowPopup(false);
    setRandevuId(null);
  };

  const handleSave = (editedRandevu) => {
    // send put request to server with editedRandevu's inputs
    axios
      .put(`/admin/randevuDuzenle/${editedRandevu.id}`, editedRandevu)
      .then((res) => {
        handlePopupClose();
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  const handleShowPopup = (id) => {
    setShowPopup(true);
    setRandevuId(id);
  };

  return (
    <div>
      <Layout title="Randevular" description="Bu sayfadan bulunan randevuları arayabilir, düzenleyebilir, onaylayabilir, kaldırabilirsiniz.">
        <div className="randevu-search my-4 flex flex-row justify-center items-center w-full gap-2">
          <input
            type="text"
            placeholder="Müşteri Adı/ID/Tarih/Saat"
            className="border border-gray-300 p-2 rounded-md w-1/4"
            value={searchInput} // Bind value to searchInput state
            onChange={(e) => setSearchInput(e.target.value)} // Update searchInput state
          />
          <select
            className="border border-gray-300 p-2 rounded-md w-1/4 mx-4"
            value={onayDurumu} // Bind value to onayDurumu state
            onChange={(e) => setOnayDurumu(e.target.value)} // Update onayDurumu state
          >
            <option value="all">Tüm Onay Durumları</option>
            <option value="onaylandi">Onaylandı</option>
            <option value="onaylanmadi">Onaylanmadı</option>
          </select>
          <select
            className="border border-gray-300 p-2 rounded-md w-1/4"
            value={selectedProduct} // Bind value to selectedProduct state
            onChange={(e) => setSelectedProduct(e.target.value)} // Update selectedProduct state
          >
            <option value="all">Tüm Ürünler</option>

            {auth.products.map((product) => (
              <option value={product.id} key={product.id}>
                {product.name}
              </option>
            ))}
          </select>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold my-8 rounded-sm px-4 py-2 w-1/4 mx-auto">
            Ara
          </button>
          <button className="bg-green-500 hover:bg-green-600 text-white font-bold my-8 rounded-sm px-4 py-2 w-1/4 mx-auto">
            Yeni Randevu Oluştur
          </button>
        </div>
        <div className="flex flex-col gap-4 w-2/3 mx-auto">
          <div className="randevu-card w-full flex flex-col gap-4">
            {auth.randevularUser.map((randevu) => (
              <div
                className="bg-white rounded-md shadow-md px-12 py-8 flex flex-col gap-2"
                key={randevu.id}
              >
                <h2 className="font-poppins font-bold text-xl">Randevu #{randevu.id}</h2>
                <p className="text-gray-800 text-sm font-poppins">Müşteri: {randevu.user.name}</p>
                <p className="text-gray-800 text-sm font-poppins">
                  Randevu Tarihi:{" "}
                  {new Date(randevu.date).toLocaleDateString("tr-TR", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}{" "}
                  - {new Date(randevu.date).toLocaleDateString("tr-TR", { weekday: "long" })}
                </p>
                <p className="text-gray-800 text-sm font-poppins">
                  Randevu Saati: {randevu.hour}
                </p>
                <p className="text-gray-800 text-sm font-poppins">
                  Randevu Durumu: {randevu.is_permitted ? "Onaylandı" : "Onaylanmadı"}
                </p>
                <button
                  className="bg-blue-500 hover:bg-blue-600 text-white font-bold my-8 rounded-sm px-4 py-2 w-1/2 mx-auto"
                  onClick={() => handleShowPopup(randevu.id)}
                >
                  Randevuyu Düzenle
                </button>
              </div>
            ))}
            {showPopup && randevuId !== null && (
              <RandevuPopup
                randevu={auth.randevularUser.find((randevu) => randevu.id === randevuId)}
                onSave={handleSave}
                onClose={handlePopupClose}
              />
            )}
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default Index;