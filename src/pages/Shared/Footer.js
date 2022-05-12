import React from "react";
import footer from "../../assets/images/footer.png";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundImage: `url(${footer})`,
      }}
    >
      <div class="footer p-20 mx-14">
        <div>
          <span class="footer-title">Services</span>
          <a class="link link-hover">Emergency Checkup</a>
          <a class="link link-hover">Monthly Checkup</a>
          <a class="link link-hover">Weekly Checkup</a>
          <a class="link link-hover">Deep Checkup</a>
        </div>
        <div>
          <span class="footer-title">Oral Health</span>
          <a class="link link-hover">Fluoride Treatment</a>
          <a class="link link-hover">Cavity Filling</a>
          <a class="link link-hover">Teath Whitening</a>
        </div>
        <div>
          <span class="footer-title">Our Address</span>
          <a class="link link-hover">New York - 101010 Hudson</a>
        </div>
      </div>
      <div>
        <p className="text-center text-base font-normal text-black mx-auto mb-8">
          Copyright 2022 All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
