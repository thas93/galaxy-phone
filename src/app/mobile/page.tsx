"use client";

import Image from "next/image";
import { useEffect } from "react";
import { useBackground } from "@/context/BackgroundContext";
const mobile = () => {

   const { setBgClass } = useBackground();

  useEffect(() => {
    setBgClass("bg-[url('/images/bg-10.jpg')] bg-cover bg-center");
  }, [setBgClass]);

  return (
    <div className="flex flex-col justify-evenly items-center content-around w-full h-full ">
      <h1
        className="text-7xl font-black text-[#34529d]/60 tracking-[0.3rem]"
        style={{ WebkitTextStroke: "2px #ffffff" }}
      >
        - TELEPHONES -
      </h1>

      <section className="flex flex-row flex-wrap justify-center  gap-8 text-[#56575a]">

        {/* <div className="flex flex-col justify-center items-center bg-gray-50/10 w-[10vw] h-[15vh] text-3xl font-bold p-4 border-4 border-[#56575a] rounded-xl">
          <div className="relative w-full h-[5vw]">
            <Image
              src="/images/apple.png"
              alt="logo"
              fill
              className="object-contain"
            />
          </div>
          <p>Apple</p>
        </div>

        <div className="flex flex-col justify-center items-center bg-gray-50/10 w-[10vw] h-[15vh] text-3xl font-bold p-4 border-4 border-[#56575a] rounded-xl">
          <div className="relative w-full h-[5vw]">
            <Image
              src="/images/samsung.png"
              alt="logo"
              fill
              className="object-contain"
            />
          </div>
          <p>Samsung</p>
        </div>

        <div className="flex flex-col justify-center items-center w-[10vw] h-[15vh] text-3xl font-bold p-4 border-4 border-[#56575a] rounded-xl">
          <div className="relative w-full h-[5vw]">
            <Image
              src="/images/nokia.png"
              alt="logo"
              fill
              className="object-contain"
            />
          </div>
          <p>Nokia</p>
        </div>

        <div className="flex flex-col justify-center items-center w-[10vw] h-[15vh] text-3xl font-bold p-4 border-4 border-[#56575a] rounded-xl">
          <div className="relative w-full h-[5vw]">
            <Image
              src="/images/mi.png"
              alt="logo"
              fill
              className="object-contain"
            />
          </div>
          <p>Xiaomi</p>
        </div>

        <div className="flex flex-col justify-center items-center w-[10vw] h-[15vh] text-3xl font-bold p-4 border-4 border-[#56575a] rounded-xl">
          <div className="relative w-full h-[5vw]">
            <Image
              src="/images/huawei.png"
              alt="logo"
              fill
              className="object-contain"
            />
          </div>
          <p>Huawei</p>
        </div>

        <div className="flex flex-col justify-center items-center w-[10vw] h-[15vh] text-3xl font-bold p-4 border-4 border-[#56575a] rounded-xl">
          <div className="relative w-full h-[5vw]">
            <Image
              src="/images/redmi.png"
              alt="logo"
              fill
              className="object-contain"
            />
          </div>
          <p>Redmi</p>
        </div>

        <div className="flex flex-col justify-center items-center w-[10vw] h-[15vh] text-3xl font-bold p-4 border-4 border-[#56575a] rounded-xl">
          <div className="relative w-full h-[5vw]">
            <Image
              src="/images/asus.png"
              alt="logo"
              fill
              className="object-contain"
            />
          </div>
          <p>Asus</p>
        </div>

        <div className="flex flex-col justify-center items-center w-[10vw] h-[15vh] text-3xl font-bold p-4 border-4 border-[#56575a] rounded-xl">
          <div className="relative w-full h-[5vw]">
            <Image
              src="/images/honor.png"
              alt="logo"
              fill
              className="object-contain"
            />
          </div>
          <p>Honor</p>
        </div>

        <div className="flex flex-col justify-center items-center w-[10vw] h-[15vh] text-3xl font-bold p-4 border-4 border-[#56575a] rounded-xl">
          <div className="relative w-full h-[5vw]">
            <Image
              src="/images/wiko.png"
              alt="logo"
              fill
              className="object-contain"
            />
          </div>
          <p>Wiko</p>
        </div>

        <div className="flex flex-col justify-center items-center w-[10vw] h-[15vh] text-3xl font-bold p-4 border-4 border-[#56575a] rounded-xl">
          <div className="relative w-full h-[5vw]">
            <Image
              src="/images/sony.png"
              alt="logo"
              fill
              className="object-contain"
            />
          </div>
          <p>Sony</p>
        </div> */}
      </section>
    </div>
  );
};

export default mobile;
