import React from "react";
import { FaHome, FaUser } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="sticky bottom-0 shadow-xl bg-slate-700 py-4 rounded-t-xl h-16 mt-20 text-white   flex justify-around text-lg ">
      
        <FaHome />
    
      <p className="text-center text-4xl absolute top-0 left-1/2 bg-blue-500 w-16 h-16 flex items-center justify-center -m-8 shadow-lg rounded-full">
        +
      </p>
      <FaUser />
    </div>
  );
};
export default Footer;