import React from "react";

const ServiceCard = ({ cardTitle, cardDesc, cardIcon }) => {
  return (
    <div class="card bg-base-100 shadow-xl">
      <figure class="px-10 pt-10">
        <img src={cardIcon} alt="" class="rounded-xl" />
      </figure>
      <div class="card-body items-center text-center">
        <h2 class="text-xl font-semibold text-black">{cardTitle}</h2>
        <p className="text-base font-normal text-black">{cardDesc}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
