"use client";
import Link from "next/link";
// import Image from "next/image";
import Nav from "@components/Nav";
import React from "react";
const Navbar = () => {
  return (
    <div className="p-4 border-b-2 text-black">
      <div className="mx-auto flex justify-between items-center  w-full">

        {/* Logo */}
        <Link href="/" className="flex justify-center items-center gap-3 ">
          <div className="flex flex-col items-center">
            <div className="text-6xl font-fontrg flex flex-col items-center">
              <div className="flex">
                <p className="text-black">G</p>
                <p className="text-black">P</p>
              </div>

              <div className="flex text-2xl  tracking-[0.3rem]">
                <p className="text-black">Galaxy</p>
                <p className="text-black">Phone</p>
              </div>
            </div>
          </div>
        </Link>

        {/* desktop Nav */}
        <div className="hidden xl:flex items-center gap-8 ">
          <Nav />
        </div>

        {/* mobile Nav */}
        <div className="xl:hidden"></div>
      </div>
    </div>
  );
};

export default Navbar;
