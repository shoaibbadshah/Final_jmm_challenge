import React from "react";
import Form from "./components/booking__page/Form";
import Rooms from "./components/booking__page/Rooms";
import Navbar from "../pages/components/Navbar";

const book = () => {
  return (
    <div>
      <Navbar />
      <div className="flex justify-between">
        <Form />
        <div className="w-full">
          <div className="flex justify-around">
            <h1>Rooms</h1>
            <h1>
              Selected-
              <span className="font-bold">
                Room <span className="text-orange-400">1</span> of 2
              </span>
            </h1>
          </div>
          <div>
            <Rooms />
            <Rooms />
            <Rooms />
          </div>
        </div>
      </div>
    </div>
  );
};

export default book;
