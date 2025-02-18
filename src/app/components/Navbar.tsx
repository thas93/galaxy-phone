"use client"; 

import Link from "next/link";
// import Image from "next/image";
import Nav from "@components/Nav";
import React from "react";
const Navbar = () => {
  return (
     <div className="py-8 xl:py-4  text-white px-8">
      <div className=" mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex justify-center items-center gap-3 ">
        
          <div className="flex flex-col items-center">
            <div className="text-6xl font-fontrg flex flex-col items-center">
              <div className="flex">
                 <p className="text-white">G</p> 
                  <p className="text-white">P</p> 
              </div>
          
                <div className="flex text-2xl  tracking-[0.3rem]">
                  <p className="text-white">Galaxy</p>
                  <p className="text-white">Phone</p>
                </div>               
            </div>
           
     
          </div>
        </Link>

        {/* desktop Nav */}
        <div className="hidden xl:flex items-center gap-8 ">
          <Nav />
       
        </div>

        {/* mobile Nav */}
        <div className="xl:hidden">
         
        </div>
      </div>
    </div>
  )
}

export default Navbar




