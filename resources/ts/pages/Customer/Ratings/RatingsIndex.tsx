import React from "react";
import { Link, usePage, router } from "@inertiajs/react";
import Layout from "@/layouts/Layout";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function renderStars(totalStars, rating) {
    const [hoverRating, setHoverRating] = React.useState(0);

    const handleMouseOver = (index) => {
        setHoverRating(index + 1);
    };

    const handleMouseOut = () => {
        setHoverRating(0);
    };

    const stars = [];
    for (let i = 0; i < totalStars; i++) {
        const filled = i < (hoverRating || rating); // Check if the current star should be filled
        stars.push(
            <FontAwesomeIcon
                key={i}
                icon={faStar}
                className={`text-${filled ? 'yellow' : 'gray'}-500 cursor-pointer transition-all duration-200`}
                onMouseOver={() => handleMouseOver(i)}
                onMouseOut={handleMouseOut}
            />
        );
    }
    return stars;
}
function index() {
  const auth = usePage().props;
  const randevular = auth.randezveous;
  console.log(randevular);

  const currentDate = new Date();
//@ts-ignore
  const pastRandevular = auth.randezveous.filter((item) => {
    const randevuDate = new Date(item.date);
    return randevuDate <= currentDate;
  });

  return (
    <div>
      <Layout title="Değerlendirmeler" description="Bu sayfadan geçmiş randevularınızı değerlendirebilirsiniz.">
        {pastRandevular.length > 0 ? (
          pastRandevular.map((item, index) => {
          return (
            <div key={index} className="my-8">

                <div className="card bg-white bg-opacity-100 p-8 w-full flex justify-center items-center flex-col border rounded-sm">
                  <div className="card-body flex flex-col justify-center items-center gap-2">
                    <h5 className="card-title font-poppins font-semibold py-2  my-4">
                      <p className="font-playfair font-bold text-center text-xl tracking-wider">Randevu Tarihi:</p>
                      <p className="tracking-wider mt-4">{new Date(item.date).toLocaleDateString("tr-TR", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })} {new Date(item.date).toLocaleDateString("tr-TR", { weekday: "long" })} {item.hour}</p>
                    </h5>
                    <p className="font-playfair font-bold text-xl my-4">Teslim Ettiğiniz Ürünler:</p>
                    <ul>
                      {JSON.parse(item.products).map((product, index) => (
                        <li key={index} className="font-poppins font-semibold list-disc">
                          {product}
                        </li>
                      ))}
                    </ul>
                    <p className="font-poppins font-light text-sm mt-4 w-1/2">Yıldızlara basarak 5 üzerinden puanlayabilirsiniz. Değerlendirme ya da yorum yazmak zorunlu değildir ancak hizmet kalitemizi arttırmamız için yaptığınız
                    her yorum çok değerli. Teşekkür ederiz.</p>
                    
                    <div className="flex flex-row justify-center items-center gap-4 mt-4">
                    <input type="textbox" className="border border-gray-300 p-2 rounded-md w-1/2 mx-auto" placeholder="Yorum yazın" />
                      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md">
                        Değerlendir
                      </button>
                    </div>
                    <div className="flex flex-row justify-center items-center gap-4 mt-4">
                      {renderStars(5, item.rating)}
  
                      </div>
                  </div>
                </div>

            </div>
         );
        })
      ) : (
        <p className="w-full bg-white rounded-sm font-poppins text-center p-12">Geçmiş randevunuz bulunmadığı için değerlendirme yapamazsınız.</p>
      )}
      </Layout>
    </div>
  );
}

export default index;
