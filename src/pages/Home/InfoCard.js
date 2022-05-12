import React from "react";

const InfoCard = ({ cardIcon, cardTitle, cardDesc, bgColor }) => {
  return (
    <div
      className={`card lg:card-side shadow-xl text-white px-8 py-13 ${bgColor}`}
    >
      <figure>
        <img src={cardIcon} alt="" />
      </figure>
      <div className="card-body">
        <h2 className="text-xl font-bold text-white">{cardTitle}</h2>
        <p className="text-base font-normal text-white">{cardDesc}</p>
      </div>
    </div>
  );
};

export default InfoCard;
