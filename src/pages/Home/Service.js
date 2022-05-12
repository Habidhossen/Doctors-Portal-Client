import React from "react";
import cavity from "../../assets/images/cavity.png";
import fluoride from "../../assets/images/fluoride.png";
import treatment from "../../assets/images/treatment.png";
import whitening from "../../assets/images/whitening.png";
import PrimaryBtn from "../Shared/PrimaryBtn";
import ServiceCard from "./ServiceCard";

const Service = () => {
  return (
    <section className="mt-32">
      <h3 className="text-xl font-bold text-secondary uppercase text-center">
        Our Service
      </h3>
      <h1 className="text-4xl font-normal text-accent text-center mt-2">
        Services We Provide
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6 mt-16">
        <ServiceCard
          cardTitle="Fluoride Treatment"
          cardDesc="Lorem Ipsum is simply dummy text of the pri"
          cardIcon={fluoride}
        />

        <ServiceCard
          cardTitle="Cavity Filling"
          cardDesc="Lorem Ipsum is simply dummy text of the pri"
          cardIcon={cavity}
        />

        <ServiceCard
          cardTitle="Teeth Whitening"
          cardDesc="Lorem Ipsum is simply dummy text of the pri"
          cardIcon={whitening}
        />
      </div>

      {/* exceptional dental care part */}
      <div className="hero min-h-screen px-52 mt-32">
        <div className="hero-content flex-col lg:flex-row gap-20">
          <img src={treatment} className="max-w-md rounded-lg" />
          <div>
            <h1 className="text-5xl font-bold">
              Exceptional Dental Care, on Your Terms
            </h1>
            <p className="py-6 text-base font-normal">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsumis that it has a more-or-less normal
              distribution of letters,as opposed to using 'Content here, content
              here', making it look like readable English. Many desktop
              publishing packages and web page
            </p>
            <PrimaryBtn>Get Started</PrimaryBtn>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
