import { format } from "date-fns";
import React from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import bg from "../../assets/images/bg.png";
import chair from "../../assets/images/chair.png";

const AppointmentBanner = ({ date, setDate }) => {
  const footer = (
    <p>
      You selected <b>{format(date, "PPP")}.</b>
    </p>
  );

  return (
    <div
      className="hero min-h-screen"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div class="hero-content flex-col lg:flex-row-reverse gap-28">
        <img src={chair} class="max-w-lg rounded-lg shadow-2xl" />
        <div className="bg-base-100 shadow-xl p-6 w-fit rounded-xl">
          <DayPicker
            className="text-accent"
            mode="single"
            selected={date}
            onSelect={setDate}
          />
        </div>
      </div>
    </div>
  );
};

export default AppointmentBanner;
