import React from "react";
import appointment from "../../assets/images/appointment.png";
import doctor from "../../assets/images/doctor-small.png";
import PrimaryBtn from "../Shared/PrimaryBtn";

const MakeAppointment = () => {
  return (
    <section
      class="mt-36"
      style={{
        backgroundImage: `url(${appointment})`,
      }}
    >
      <div class="flex items-center">
        <div className="flex-1">
          <img src={doctor} class="mt-[-120px]" />
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold text-secondary">Appointment</h3>
          <h1 class="py-6 text-4xl font-semibold text-white">
            Make an appointment Today
          </h1>
          <p class="pb-6 text-base font-normal text-white">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsumis that it has a more-or-less normal
            distribution of letters,as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page
          </p>
          <PrimaryBtn>Get Started</PrimaryBtn>
        </div>
      </div>
    </section>
  );
};

export default MakeAppointment;
