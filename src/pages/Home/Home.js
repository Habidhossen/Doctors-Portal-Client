import React from "react";
import Banner from "./Banner";
import Info from "./Info";
import MakeAppointment from "./MakeAppointment";
import Service from "./Service";

const Home = () => {
  return (
    <div>
      <Banner />
      <Info />
      <Service />
      <MakeAppointment />
    </div>
  );
};

export default Home;
