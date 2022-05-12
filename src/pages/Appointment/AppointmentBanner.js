import { format } from "date-fns";
import React from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import bg from "../../assets/images/bg.png";
import chair from "../../assets/images/chair.png";

const AppointmentBanner = ({ date, setDate }) => {
  //   const [date, setDate] = useState(new Date());

  //   console.log(date);

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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        <div className="bg-base-100 shadow-xl p-6 w-full">
          <DayPicker
            className="text-accent"
            mode="single"
            selected={date}
            onSelect={setDate}
            footer={footer}
          />
        </div>
        <div>
          <img className="max-w-lg" src={chair} alt="" />
        </div>
      </div>
    </div>
  );
};

export default AppointmentBanner;
