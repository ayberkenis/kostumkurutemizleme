import GridItem from "../AdminComponents/GridItem"
import { useEffect, useState } from "react";
import { Link } from "@inertiajs/react";

function handleButton() {

}

function isShopOpen(workingHours, workingDates) {
    const currentHour = new Date().getHours();
    const currentDay = new Date().getDay(); // Use getDay() to get the current day of the week (0 = Sunday, 1 = Monday, ...)
  

        const workingHoursToday = workingHours[currentDay]; // Assuming workingHours is an array with opening hours for each day
      
        if (!workingHoursToday) {
          return false; // Shop is closed on the current day
        }
      
        const [openHour, closeHour] = workingHoursToday.split('-').map(Number);
      
        if (currentHour >= openHour && currentHour < closeHour) {
          return true; // Shop is open at the current time
        }
      
        return false; // Shop is closed at the current time

    
  }

  
  function ShopManager({ auth }) {
    const working_hours = auth.settings.find((item) => item.name === "working_hours");
    const working_dates = auth.settings.find((item) => item.name === "working_dates");
    const isShopCurrentlyOpen = working_hours && working_dates && isShopOpen(working_hours, working_dates);
  
    const handleButton = () => {
      // Handle the button click logic here, e.g., send a request to update shop status in the database
      console.log("Button clicked");
    };
  
    return (
      <GridItem title="Mağaza Yönetimi">
        {working_hours && working_dates ? (
          <div className={`w-full h-full mt-2 p-6 text-center flex flex-col items-center ${isShopCurrentlyOpen ? 'bg-green-300' : 'bg-red-300'}`}>
            <p className="font-poppins font-semibold">
              {isShopCurrentlyOpen ? "Kostüm Kuru Temizleme Şube Açık" : "Şube Kapalı"}
            </p>
            <span>
              {isShopCurrentlyOpen
                ? "Şuan çalışma saatleri içerisinde olduğunuz için şube açık. Acil bir durum olduğunda aşağıdaki butona basarak site de şubenin kapalı olduğunu iletebilirsiniz. Bu normal şartlarda otomatik bir işlemdir ve belirlediğiniz çalışma saatlerine göre belirlenir."
                : "Mağaza şu anda kapalıdır. Lütfen açık saatlerde tekrar deneyiniz."}
            </span>
            {isShopCurrentlyOpen && (
              <input
                type="button"
                onClick={handleButton}
                className="bg-red-500 hover:bg-red-600 text-white font-poppins font-semibold px-4 py-2 rounded-sm mt-4"
                value="Şubeyi Kapat"
              />
            )}
          </div>
        ) : (
          <Link href="/admin/ayarlar#workinghours" className="text-center animate-pulse  text-white font-poppins font-medium mt-4 bg-red-500 p-16">
            Mağaza çalışma saatleri ve tarihleri henüz belirlenmemiştir. Buraya tıklayarak ayarlayabilirsiniz.
          </Link>
        )}
      </GridItem>
    );
  }
  
  export default ShopManager;