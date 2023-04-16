import React from "react";

import { FaBell, FaComment } from "react-icons/fa";

function Navbar() {
  return (
    <div className="root mx-4">
      <div className="navbar bg-slate-900 text-white">
        <div className="pt-5 px-6">
          <div className="top flex justify-between items-center">
            <span className="font-semibold text-xl">Sosmad</span>
            <div className="icons flex ml-5 justify-between w-16 ">
              <div className="mr-2 text-lg p-3 bg-slate-800 rounded-full -z-8">
                <FaBell />
              </div>
              <div className="mr-2 text-lg p-3 bg-slate-800 rounded-full -z-8">
                <FaComment />
              </div>
            </div>
          </div>

         
        </div>
      </div>
    </div>
  );
}

export default Navbar;