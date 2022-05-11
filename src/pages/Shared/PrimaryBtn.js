import React from "react";

const PrimaryBtn = ({ children }) => {
  return (
    <button className="font-bold text-sm uppercase text-white p-4 rounded-lg bg-gradient-to-r from-secondary to-primary">
      {children}
    </button>
  );
};

export default PrimaryBtn;
