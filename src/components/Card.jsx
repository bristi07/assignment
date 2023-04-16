import React from "react";

import { FaHeart, FaComment, FaShare } from "react-icons/fa";

const Card = () => {
  return (
    <div className=" bg-slate-800  rounded-2xl py-4 mx-4">
      <div className=" flex justify-between p-3 my-2">
        <div className="flex ">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxfuqY-JSsnGfXwZGAbrwsagGFZwgGcemEeW8-OA7THw&s"
            className="w-10  h-10 rounded-full border-blue-600 border-2"
          />
          <div className="ml-2 text-gray-50">
            <h1>Bristi Priya</h1>
            <p className="text-xs text-slate-400">10 min ago</p>
          </div>
        </div>
        <span className="font-bold bg-slate-300 rounded-full w-10 h-10 flex items-center justify-center">
          ...
        </span>
      </div>
      <div>
        <img
          src="https://images.unsplash.com/photo-1636955735635-b4c0fd54f360?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          alt=""
          className="w-full h-60 px-4"
        />
      </div>
      <div className=" text-white">
        <div className=" flex justify-start p-3 my-2">
          <FaHeart className="px-1 w-6" />
          <FaShare className="px-1 w-6" />
          <FaComment className="px-1 w-6" />
        </div>
        <div className="flex justify-start">
          <span className="px-3">229 Likes</span>
          <span className="px-3">.</span>
          <span className="px-3">229 comments</span>
        </div>
        <div className="flex justify-start pl-3">
          <p>
            Amat PaujiLorem ipsum dolor sit amet, consectetur adipisicing elit.
            Non, iusto.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;