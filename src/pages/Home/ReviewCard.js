import React from "react";

const ReviewCard = ({ review }) => {
  const { name, reviewMsg, location, img } = review;

  return (
    <div class="card bg-base-100 shadow-xl">
      <div class="card-body">
        <p>{reviewMsg}</p>
        <div class="card-actions justify-start">
          <div class="avatar">
            <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={img} />
            </div>
          </div>
          <div>
            <h1>{name}</h1>
            <p>{location}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
