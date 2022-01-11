import React from "react";
import { MenuIcon } from "@heroicons/react/outline";

const Navbar = () => {
  return (
    <div className="flex justify-around mb-3">
      <div className="mt-1">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Marcopolo_Logo.pdf/page1-1200px-Marcopolo_Logo.pdf.jpg"
          width={200}
        />
      </div>
      <MenuIcon className="w-5 h-5 text-yellow-500 mt-5 md:hidden" />

      <div className="hidden md:flex justify-around pt-6">
        <a href="/" className="px-10 border-r-2 text-lg font-semibold">
          Home
        </a>
        <a href="/" className="px-10 border-r-2 text-lg font-semibold">
          About Us
        </a>
        <a href="/" className="px-10 border-r-2 text-lg font-semibold">
          Services
        </a>
        <a href="/" className="px-10 text-lg font-semibold">
          Contact Us
        </a>
      </div>
    </div>
  );
};

export default Navbar;
