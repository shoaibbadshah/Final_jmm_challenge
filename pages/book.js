import React from "react";
import Form from "./components/booking__page/Form";
import Rooms from "./components/booking__page/Rooms";
import Navbar from "../pages/components/Navbar";

const book = () => {
  return (
    <div>
      <Navbar />
      <div className="flex justify-around">
        <Form />
        <Rooms />
      </div>
    </div>
  );
};

export default book;
