import { format } from "date-fns";
import React from "react";

const AvailableAppointment = ({ date }) => {
  return (
    <div>
      <h1 className="text-center text-primary text-xl">
        Available Appointments on <b>{format(date, "PPP")}</b>
      </h1>
    </div>
  );
};

export default AvailableAppointment;
