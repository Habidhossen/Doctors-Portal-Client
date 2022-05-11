import React from "react";
import clock from "../../assets/icons/clock.svg";
import marker from "../../assets/icons/marker.svg";
import phone from "../../assets/icons/phone.svg";
import InfoCard from "./InfoCard";

const Info = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
      <InfoCard
        cardTitle="Opening Hours"
        bgColor="bg-gradient-to-r from-secondary to-primary"
        cardDesc="Lorem Ipsum is simply dummy text of the pri"
        cardIcon={clock}
      />

      <InfoCard
        cardTitle="Visit our location"
        bgColor="bg-accent"
        cardDesc="Brooklyn, NY 10036, United States"
        cardIcon={marker}
      />

      <InfoCard
        cardTitle="Contact us now"
        bgColor="bg-gradient-to-r from-secondary to-primary"
        cardDesc="+000 123 456789"
        cardIcon={phone}
      />
    </div>
  );
};

export default Info;
