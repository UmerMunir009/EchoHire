import React from "react";
import ThemeToggle from "../components/ThemeToggle"


const Navbar = () => {
  return (
    <header>
      <div className="max-w-6xl mx-auto px-3 py-4 flex items-center justify-between">
        <div className="flex justify-start items-center gap-2">
          <img className="w-7 sm:w-10" src="/favicon.png" alt="" />
          <h1 className="text-md sm:text-xl font-bold">EchoHire</h1>
        </div>
        <ThemeToggle />
      </div>
    </header>
  );
};

export default Navbar;
