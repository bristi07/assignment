import React from "react";

function Stories() {
  return (
    <div className=" bg-slate-900 text-white px-10 py-6">
      <div className="second my-2 flex justify-between items-center">
        <p className="text-xl ">Stories</p>
      </div>
      <div className=" w-full flex justify-around items-center">
        <div className=" relative justify-between ">
          <img
            src="https://www.iucn.org/sites/default/files/styles/what_we_do_large/public/images-themes/biodiversity-shutterstock_1477256246.jpg.webp?itok=4i9JdtFu"
            alt=""
            className=" h-56 w-44 rounded-3xl -z-10"
          />
          <div className="absolute w-full bottom-0 rounded-b-3xl backdrop-blur-md">
            <img
              src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000"
              class=" w-7 h-7 rounded-full mx-auto relative bottom-3"
              alt=""
            />
            <p class="text-center text-sm relative bottom-2">Adison Mango</p>
          </div>
        </div>
        <div className=" relative justify-center   ">
          <img
            src="https://media.cntraveller.com/photos/611bf0b8f6bd8f17556db5e4/1:1/w_2000,h_2000,c_limit/gettyimages-1146431497.jpg"
            alt=""
            className=" h-56 w-44 rounded-3xl -z-10"
          />
          <div className="absolute  w-full bottom-0 rounded-b-3xl backdrop-blur-md">
            <img
              src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000"
              class=" w-7 h-7 rounded-full mx-auto relative bottom-3"
              alt=""
            />
            <p class="text-center text-sm relative bottom-2">Adison Mango</p>
          </div>
        </div>
      </div>
      <div class="flex  bg-slate-800 justify-between rounded-2xl mt-10 p-1 w-full">
        <p class=" bg-blue-500 rounded-2xl py-2 w-full text-center ">Explore</p>
        <p class=" rounded-2xl py-2 w-full text-center ">Explore</p>
      </div>
    </div>
  );
}

export default Stories;