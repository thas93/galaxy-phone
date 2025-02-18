"use client";
import { useEffect } from "react";
import { useBackground } from "@/context/BackgroundContext";

const tablette = () => {
  const { setBgClass } = useBackground();

  useEffect(() => {
    setBgClass("bg-[url('/images/bg-tab.jpg')] bg-cover bg-center");
  }, [setBgClass]);

  return (
    <div className="flex flex-col justify-between items-center content-around w-full h-full">
      <h1
        className="text-7xl font-black text-[#34529d]/60  tracking-[0.3rem]"
        style={{ WebkitTextStroke: "2px #56575a" }}
      >
        - TABLETTE -
      </h1>
    </div>
  )
}

export default tablette