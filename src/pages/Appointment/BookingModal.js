import { format } from "date-fns";
import React from "react";

const BookingModal = ({ date }) => {
  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="font-bold text-lg">Cavity Protection</h3>
          <form action="">
            <input
              value={format(date, "PPP")}
              disabled
              className="input input-bordered w-full mb-5 mt-10"
            />
            <input
              type="text"
              placeholder="Time"
              className="input input-bordered w-full mb-5"
            />
            <input
              type="text"
              placeholder="Email"
              className="input input-bordered w-full mb-5"
            />
            <input
              type="text"
              placeholder="Full Name"
              className="input input-bordered w-full mb-5"
            />
            <input
              type="text"
              placeholder="Phone Number"
              className="input input-bordered w-full mb-5"
            />
            <input className="btn w-full" type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
