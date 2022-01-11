import Image from "next/image";
import React from "react";

const Rooms = () => {
  return (
    <div>
      <div className="ml-28 p-10">
        <Image
          src={"/room.jpg"}
          width={750}
          height={350}
          objectFit="cover"
          className="rounded-lg"
        />
        <h1 className="font-bold text-2xl">Simple Room</h1>
        <h1 className="font-semibold mt-2">
          Lorem Ipsum is simply dummy text of the prinng and typeseng industry.
        </h1>

        {/* facilities */}
        <div className="flex mt-5">
          <p className="border border-orange-200 bg-orange-100 text-orange-400 rounded-md px-4 mr-4 py-2">
            Attached Toilet
          </p>
          <p className="border border-orange-200 bg-orange-100 text-orange-400 rounded-md px-4 mr-3 py-2">
            Free Wifi
          </p>
          <p className="font-semibold text-orange-400 py-2 underline">More</p>
        </div>

        {/* price of the room */}
        <div className="flex justify-between mr-28 mt-7">
          <h1 className="font-semibold text-3xl ">
            <span className="text-orange-400 ">Rs. 2,000 </span>/ Night
          </h1>
          <div className="">
            <input
              type={"button"}
              value={"See Details"}
              className="border-2 rounded-lg font-semibold text-xl px-7 py-3 mr-4 text-orange-400 border-orange-300"
            />
            <input
              type={"button"}
              value={"Book Now"}
              className="border-2 border-orange-400 rounded-lg font-semibold text-xl px-7 py-3 bg-orange-400 text-white"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rooms;
