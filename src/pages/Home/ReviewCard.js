import React from "react";

const ReviewCard = ({ review }) => {
  const { name, reviewMsg, location, img } = review;

  return (
    <div class="card bg-base-100 shadow-xl">
      <div class="card-body">
        <p className="ext-base font-normal text-black">{reviewMsg}</p>
        <div class="card-actions justify-start items-center gap-5 mt-4">
          <div class="avatar">
            <div class="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={img} />
            </div>
          </div>
          <div>
            <h1 className="text-xl font-semibold text-accent">{name}</h1>
            <p className="text-base font-normal text-accent">{location}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
