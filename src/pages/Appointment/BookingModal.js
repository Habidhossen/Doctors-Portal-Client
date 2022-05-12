import { format } from "date-fns";
import React from "react";

const BookingModal = ({ date }) => {
  return (
    <div>
      <input type="checkbox" id="booking-modal" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <label
            htmlFor="booking-modal"
            class="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 class="font-bold text-lg">Cavity Protection</h3>
          <form action="">
            <input
              value={format(date, "PPP")}
              disabled
              class="input input-bordered w-full mb-5 mt-10"
            />
            <input
              type="text"
              placeholder="Time"
              class="input input-bordered w-full mb-5"
            />
            <input
              type="text"
              placeholder="Email"
              class="input input-bordered w-full mb-5"
            />
            <input
              type="text"
              placeholder="Full Name"
              class="input input-bordered w-full mb-5"
            />
            <input
              type="text"
              placeholder="Phone Number"
              class="input input-bordered w-full mb-5"
            />
            <input className="btn w-full" type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
