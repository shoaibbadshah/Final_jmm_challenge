import React from "react";
import Image from "next/image";
import Link from "next/link";

const FrontImg = () => {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
      <Image src="/jmm.jpg" alt="front image" layout="fill" objectFit="cover" />
      <div className="absolute top-1/3 ml-9 sm:ml-14 md:ml-20 xl:ml-32 2xl:ml-36">
        <h1 className="text-white text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl mb-5 shadow-black">
          In the heart of
        </h1>
        <h1 className="text-white font-semibold text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl shadow-black">
          KALAM MOUNTAINS
        </h1>
        <h1 className="text-white text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl mt-5 shadow-black">
          Find clean and luxury rooms for your trip stay
        </h1>
      </div>
      <div className="absolute top-2 right-1">
        <Link href="/book">
          <a className="bg-yellow-500 px-8 py-6 text-2xl">Book Now</a>
        </Link>
      </div>
    </div>
  );
};

export default FrontImg;
