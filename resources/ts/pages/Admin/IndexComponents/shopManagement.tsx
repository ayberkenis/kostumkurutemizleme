import GridItem from "../AdminComponents/GridItem";
import { useEffect, useState } from "react";
import { Link } from "@inertiajs/react";
import AcceptDeclinePopup from "@/popups/acceptDecline";

interface ShopState {
  value: "open" | "closed";
}

function ShopManager({ auth }) {
  const working_hours_start = auth.settings.find(
    (setting) => setting.key === "working_hours_start"
  );
  const working_hours_end = auth.settings.find((setting) => setting.key === "working_hours_end");
  const working_days = auth.settings.find((setting) => setting.key === "working_days");
  const shop_open_close = auth.settings.find(
    (setting) => setting.key === "shop_open_close"
  ) as ShopState; // Add this line

  // current date/day/hour/minute for comparison
  const currentDate = new Date();
  const currentDay = currentDate.getDay();
  const currentHour = currentDate.getHours();
  const currentMinute = currentDate.getMinutes();

  // Parse working hours strings into hours and minutes
  const [startHour, startMinute] = working_hours_start.value.split(":").map(Number);
  const [endHour, endMinute] = working_hours_end.value.split(":").map(Number);

  // Parse the working_days setting into an array of integers
  const workingDaysArray = working_days.value.split(",").map(Number);

  // Check if the current day is in the workingDaysArray
  const isWorkingDay = workingDaysArray.includes(currentDay);

  // Check if the current time is within the working hours
  const isWorkingHours =
    (currentHour > startHour || (currentHour === startHour && currentMinute >= startMinute)) &&
    (currentHour < endHour || (currentHour === endHour && currentMinute <= endMinute));

  const isShopOpenFromDatabase = shop_open_close && shop_open_close.value === "open"; // Check the shop_open_close value from the database
  console.log(isShopOpenFromDatabase);

  const isShopCurrentlyOpen = isShopOpenFromDatabase || (isWorkingDay && isWorkingHours);
  console.log(isShopCurrentlyOpen);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  const handleAccept = () => {
    // Handle the accept action here
    // You can perform any necessary logic
    handleButton();
    handleClosePopup();
  };

  const handleDecline = () => {
    // Handle the decline action here
    // You can perform any necessary logic
    handleClosePopup();
  };

  const handleButton = () => {
    // Handle the button click logic here, e.g., send a request to update shop status in the database
    console.log("old", isShopCurrentlyOpen);
    const newStatus = isShopCurrentlyOpen ? "closed" : "open";
    console.log("new", newStatus);
    axios
      .put("/api/shop/status", { status: newStatus })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <GridItem title="Mağaza Yönetimi">
      {working_hours_start && working_hours_end && working_days ? (
        <div
          className={`w-full h-full mt-2 p-6 text-center flex flex-col items-center ${isShopCurrentlyOpen ? "bg-green-300" : "bg-red-300"
            }`}
        >
          <p className="font-poppins font-semibold">
            {isShopCurrentlyOpen ? "Şube Açık" : "Şube Kapalı"}
          </p>
          <p className="text-sm">
            {isShopOpenFromDatabase
              ? "Şuan çalışma saatleri içerisinde olduğunuz için şube açık. Acil bir durum olduğunda aşağıdaki butona basarak site de şubenin kapalı olduğunu iletebilirsiniz. Bu normal şartlarda otomatik bir işlemdir ve belirlediğiniz çalışma saatlerine göre belirlenir. Belirlenmiş çalışma saatleriniz: " +
              working_days.value +
              " günleri " +
              working_hours_start.value +
              " - " +
              working_hours_end.value +
              " saatleri arası."
              : "Şube şuanda kapalı. Aşağıdaki butona tıklayarak şubeyi açabilirsiniz. Bu normal şartlarda otomatik bir işlemdir ve belirlediğiniz çalışma saatlerine göre belirlenir. Eğer çalışma saatleriniz dışında şubeyi açarsanız, kapatmadığınız takdirde şubenizin kapalı gözükmesi bir sonraki günün şube kapanış saatinde otomatik olarak kapatılır."}
          </p>
          <input
            type="button"
            onClick={handleOpenPopup}
            className="bg-green-600 hover:bg-green-700 text-white font-poppins font-semibold px-4 py-2 rounded-sm mt-4"
            value="Şubeyi Aç"
          />
          {isShopCurrentlyOpen && (
            <input
              type="button"
              onClick={handleOpenPopup}
              className="bg-red-500 hover:bg-red-600 text-white font-poppins font-semibold px-4 py-2 rounded-sm mt-4"
              value="Şubeyi Kapat"
            />
          )}
        </div>
      ) : (
        <Link
          href="/admin/ayarlar#workinghours"
          className="text-center animate-pulse  text-white font-poppins font-medium mt-4 bg-red-500 p-16"
        >
          Mağaza çalışma saatleri ve tarihleri henüz belirlenmemiştir. Buraya tıklayarak
          ayarlayabilirsiniz.
        </Link>
      )}

      {isShopCurrentlyOpen == "closed" ? (
        <>
          <AcceptDeclinePopup
            isOpen={isPopupOpen}
            onClose={handleClosePopup}
            onAccept={handleAccept}
            onDecline={handleDecline}
            acceptButtonText="Kabul Et"
            declineButtonText="İptal Et"
          >
            Şubeyi açmak istediğinize emin misiniz?
          </AcceptDeclinePopup>
        </>
      ) : (
        <>
          <AcceptDeclinePopup
            isOpen={isPopupOpen}
            onClose={handleClosePopup}
            onAccept={handleAccept}
            onDecline={handleDecline}
            acceptButtonText="Kabul Et"
            declineButtonText="İptal Et"
          >
            Şubeyi kapatmak istediğinize emin misiniz?
          </AcceptDeclinePopup>
        </>
      )}
    </GridItem>
  );
}

export default ShopManager;
