import React from "react";
import quote from "../../assets/icons/quote.svg";
import people1 from "../../assets/images/people1.png";
import people2 from "../../assets/images/people2.png";
import people3 from "../../assets/images/people3.png";
import ReviewCard from "./ReviewCard";

const Testimonial = () => {
  const reviews = [
    {
      _id: 1,
      name: "Winson Herry",
      reviewMsg:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      location: "california",
      img: people1,
    },
    {
      _id: 2,
      name: "David Paul",
      reviewMsg:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      location: "california",
      img: people2,
    },
    {
      _id: 3,
      name: "Winson Herry",
      reviewMsg:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      location: "california",
      img: people3,
    },
  ];
  return (
    <div className="px-14">
      <div className="flex justify-between items-center my-20">
        <div>
          <p className="text-xl font-bold text-secondary">Testimonial</p>
          <h1 className="text-4xl font-normal text-accent">
            What Our Patients Says
          </h1>
        </div>
        <div>
          <img className="w-48" src={quote} alt="" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-20">
        {reviews.map((review) => (
          <ReviewCard key={review._id} review={review} />
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
