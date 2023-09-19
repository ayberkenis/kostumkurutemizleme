import React, { useEffect, useState } from "react";
import { Link, usePage } from "@inertiajs/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressBook, faCalendarAlt } from "@fortawesome/free-regular-svg-icons";

// Define the props interface
interface AvailabilityProps {}

// Define the type for availability data
interface AvailabilityItem {
  dateTime: string;
  available: boolean;
}

function Availability({}: AvailabilityProps) {
  const [availabilityData, setAvailabilityData] = useState<AvailabilityItem[]>([]);

  // Simulate fetching availability data from a database (dummy data).
  useEffect(() => {
    // You can replace this with an actual API call to fetch availability data.
    const dummyData: AvailabilityItem[] = [];

    // Generate availability data for the current day and 3 days prior
    const currentDate = new Date();
    for (let i = 0; i < 1; i++) {
      const date = new Date(currentDate);
      date.setDate(currentDate.getDate() - i);
      for (let j = 9; j < 20; j++) {
        for (let k = 0; k < 2; k++) {
          const startTime = `${String(j).padStart(2, "0")}:${k === 0 ? "00" : "30"}`;
          const endTime = `${String(j).padStart(2, "0")}:${k === 0 ? "30" : "00"}`;
          const dateTime = `${date.toISOString().split("T")[0]}T${startTime}:00.000Z`;
          const isAvailable = Math.random() < 0.7; // Simulated availability
          dummyData.push({ dateTime, available: isAvailable });
        }
      }
    }

    setAvailabilityData(dummyData);
  }, []);

  return (
    <div className="w-full h-full text-center mt-4">
      <h1 className="text-2xl font-bold italic mb-4 font-playfair tracking-regular">Günlük Müsaitlik Durumu</h1>

      {/* Render the calendar */}
      <div className="grid grid-cols-8 auto-rows-fr gap-2">
        {availabilityData.map((item, index) => (
          <div
            key={index}
            className={`p-2 border text-center ${
              item.available ? "bg-green-300 hover:bg-green-400" : "bg-red-300 hover:bg-red-400"
            }`}
          >
            <div className="font-poppins">{item.dateTime.split("T")[1].substring(0, 5)} - {item.dateTime.split("T")[1].substring(0, 5)}</div>
            <div className="font-playfair">{item.available ? "Müsait" : "Müsait değil"}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Availability;
