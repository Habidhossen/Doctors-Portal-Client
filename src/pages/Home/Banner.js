import React from "react";
import bg from "../../assets/images/bg.png";
import chair from "../../assets/images/chair.png";
import PrimaryBtn from "../Shared/PrimaryBtn";

const Banner = () => {
  return (
    <section
      className="hero min-h-screen"
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={chair} className="max-w-xl " />
        <div>
          <h1 className="text-5xl font-bold text-accent">
            Your New Smile Starts Here
          </h1>
          <p className="mt-3.5 mb-7 text-base font-normal text-accent">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <PrimaryBtn>Get Started</PrimaryBtn>
        </div>
      </div>
    </section>
  );
};

export default Banner;
