import React from "react";

const AppointmentCard = ({ service }) => {
  const { name, slots } = service;

  return (
    <div class="card bg-base-100 shadow-xl">
      <div class="card-body items-center text-center">
        <h2 class="text-xl font-semibold text-secondary">{name}</h2>
        <p className="text-sm font-normal text-black uppercase">
          {slots.length ? (
            slots[0]
          ) : (
            <span className="text-red-500">Try another date</span>
          )}
        </p>
        <p className="text-xs font-normal text-black uppercase mb-3">
          {slots.length} {slots.length > 1 ? "spaces" : "space"} available
        </p>
        <label
          disabled={slots.length === 0}
          //   onClick={() => setTreatment(service)}
          htmlFor="booking-modal"
          class="btn btn-secondary font-bold uppercase text-white"
        >
          Book Appointment
        </label>
      </div>
    </div>
  );
};

export default AppointmentCard;
