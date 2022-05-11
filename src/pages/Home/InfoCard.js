import React from "react";

const InfoCard = ({ cardIcon, cardTitle, cardDesc, bgColor }) => {
  return (
    <div class={`card card-side shadow-xl text-white ${bgColor}`}>
      <figure>
        <img src={cardIcon} alt="" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">{cardTitle}</h2>
        <p>{cardDesc}</p>
      </div>
    </div>
  );
};

export default InfoCard;
