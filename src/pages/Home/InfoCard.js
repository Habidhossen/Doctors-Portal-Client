import React from "react";

const InfoCard = ({ cardIcon, cardTitle, cardDesc, bgColor }) => {
  return (
    <div class={`card lg:card-side shadow-xl text-white px-8 py-13 ${bgColor}`}>
      <figure>
        <img src={cardIcon} alt="" />
      </figure>
      <div class="card-body">
        <h2 class="text-xl font-bold text-white">{cardTitle}</h2>
        <p className="text-base font-normal text-white">{cardDesc}</p>
      </div>
    </div>
  );
};

export default InfoCard;
