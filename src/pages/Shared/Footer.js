import React from "react";
import footer from "../../assets/images/footer.png";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundImage: `url(${footer})`,
      }}
    >
      <div className="footer p-20 mx-14">
        <div>
          <span className="footer-title">Services</span>
          <a className="link link-hover">Emergency Checkup</a>
          <a className="link link-hover">Monthly Checkup</a>
          <a className="link link-hover">Weekly Checkup</a>
          <a className="link link-hover">Deep Checkup</a>
        </div>
        <div>
          <span className="footer-title">Oral Health</span>
          <a className="link link-hover">Fluoride Treatment</a>
          <a className="link link-hover">Cavity Filling</a>
          <a className="link link-hover">Teath Whitening</a>
        </div>
        <div>
          <span className="footer-title">Our Address</span>
          <a className="link link-hover">New York - 101010 Hudson</a>
        </div>
      </div>
      <div>
        <p className="text-center text-base font-normal text-accent mx-auto mb-8">
          Copyright 2022 All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
