import React, { useEffect, useState } from "react";
import { usePage, Link } from "@inertiajs/react";

// Define the props interface
interface AvailabilityProps {}

// Define the type for availability data
interface AvailabilityItem {
  timeSlot: string;
  available: boolean;
  availabilityStatus: string;
}

function Availability({}: AvailabilityProps) {

  const [availabilityData, setAvailabilityData] = useState<AvailabilityItem[]>([]);

  useEffect(() => {
    // You can replace this with an actual API call to fetch availability data.
    const dummyData: AvailabilityItem[] = [];

    // Generate availability data for the current day and 3 days prior
    const currentDate = new Date();

    // Define the start and end times
    const startTime = 9 * 60; // 09:00 in minutes
    const endTime = 18.5 * 60; // 18:30 in minutes

    for (let i = 0; i < 1; i++) {
      const date = new Date(currentDate);
      date.setDate(currentDate.getDate() + i);

      let j = startTime;
      while (j < endTime) {
        const startTimeHours = Math.floor(j / 60);
        const startTimeMinutes = j % 60;

        const endTimeHours = Math.floor((j + 30) / 60);
        const endTimeMinutes = (j + 30) % 60;

        const startFormatted = `${String(startTimeHours).padStart(2, "0")}:${String(startTimeMinutes).padStart(2, "0")}`;
        const endFormatted = `${String(endTimeHours).padStart(2, "0")}:${String(endTimeMinutes).padStart(2, "0")}`;

        const timeSlot = `${startFormatted} - ${endFormatted}`;
        const isAvailable = Math.random() < 0.7;
        const availabilityStatus = isAvailable ? "Müsait" : "Müsait değil";

        dummyData.push({ timeSlot, available: isAvailable, availabilityStatus });

        j += 30;
      }
    }

    setAvailabilityData(dummyData);
  }, []);

  return (
    <div className="w-full h-full text-center mt-4">
      <h1 className="text-2xl font-bold italic mb-4 font-playfair tracking-regular">Günlük Müsaitlik Durumu</h1>

      {/* Render the calendar */}
      <div className="grid lg:grid-cols-6 sm:grid-cols-2 lg:auto-rows-fr sm:grid-rows-4 gap-2">
        {availabilityData.map((item, index) => (
          <div
            key={index}
            className={`p-2 border text-center ${
              item.available ? "bg-green-300 hover:bg-green-400 hover:cursor-pointer" : "bg-red-300 hover:bg-red-400 hover:cursor-not-allowed"
            }`}
            
          >
            <div className="font-poppins">{item.timeSlot}</div>
            <div className="font-playfair">{item.availabilityStatus}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Availability;
