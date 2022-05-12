import React from "react";
import appointment from "../../assets/images/appointment.png";
import PrimaryBtn from "../Shared/PrimaryBtn";

const Contact = () => {
  return (
    <div
      className="py-16"
      style={{
        backgroundImage: `url(${appointment})`,
      }}
    >
      <div className="text-center">
        <p className="text-xl font-bold text-secondary">Contact Us</p>
        <h1 className="text-4xl font-normal text-white">
          Stay connected with us
        </h1>
      </div>
      <div className="flex justify-center text-center">
        <form action="">
          <input
            type="text"
            placeholder="Email address"
            class="input input-bordered w-8/12 mb-5 mt-10"
          />
          <input
            type="text"
            placeholder="Subject"
            class="input input-bordered w-8/12 mb-5"
          />
          <textarea
            class="textarea w-8/12 mb-5"
            placeholder="Your messages"
          ></textarea>
          <div>
            <PrimaryBtn type="submit">Submit</PrimaryBtn>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
