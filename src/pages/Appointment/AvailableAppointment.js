import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import AppointmentCard from "./AppointmentCard";

const AvailableAppointment = ({ date }) => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div>
      <h1 className="text-center text-secondary text-xl">
        Available Appointments on <b>{format(date, "PPP")}</b>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-12 mt-16">
        {services.map((service) => (
          <AppointmentCard key={service._id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default AvailableAppointment;
