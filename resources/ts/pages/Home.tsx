import React from "react";
import Layout from "../layouts/Layout";

function Home() {
  return (
    <div>
      <Layout>
        <div className="header">
          <h1 className="header-text font-poppins font-bold">Kostüm Kuru Temizleme Panelinize Hoşgeldiniz!</h1>
        </div>

        <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
          <div className="p-4 bg-white border-b border-gray-200 font-playfair">
            Şuanda hiçbir ürününüz bulunmamaktadır.
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default Home;
