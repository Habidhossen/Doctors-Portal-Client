import React from "react";

const PrimaryBtn = ({ children }) => {
  return (
    <button className="font-bold text-sm uppercase text-white py-3.5 px-9 rounded-lg bg-gradient-to-r from-secondary to-primary">
      {children}
    </button>
  );
};

export default PrimaryBtn;
