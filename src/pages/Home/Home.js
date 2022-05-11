import React from "react";
import Banner from "./Banner";
import Info from "./Info";
import MakeAppointment from "./MakeAppointment";
import Service from "./Service";
import Testimonial from "./Testimonial";

const Home = () => {
  return (
    <div>
      <Banner />
      <Info />
      <Service />
      <MakeAppointment />
      <Testimonial />
    </div>
  );
};

export default Home;
