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
        <h1 className="font-semibold">
          Lorem Ipsum is simply dummy text of the prinng and typeseng industry.
        </h1>
      </div>
    </div>
  );
};

export default Rooms;
