import React from "react";

const ServiceCard = ({ cardTitle, cardDesc, cardIcon }) => {
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={cardIcon} alt="" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="text-xl font-semibold text-black">{cardTitle}</h2>
        <p className="text-base font-normal text-black">{cardDesc}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
