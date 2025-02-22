"use client";
import Image from "next/image";
const Home = () => {
  return (
    <div className="flex flex-col justify-between w-full h-full ">
      <div className="flex flex-col justify-center md:items-start xl:flex-col items-center w-full font-extrabold text-zinc-700 text-5xl/30 md:text-5xl xl:text-7xl p-10  h-full">
        <p className="text-[#FFD500]">Réparer</p>
        <p className="text-white">Protéger</p>
        <p className="text-[#FFD500]">Reconditionnés</p>
      </div>
      {/* Conteneur du carrousel */}
      <div className="relative w-screen h-[10vw] bg-blue-200/20 overflow-hidden ">
        <div className="flex w-[200%] animate-marque">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex gap-10">
              <div className="relative w-[10vw] h-[10vw] mx-4">
                <Image
                  src="/images/samsung.png"
                  alt="Samsung"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="relative w-[10vw] h-[10vw] mx-4">
                <Image
                  src="/images/nokia.png"
                  alt="Nokia"
                  fill
                  className="object-contain"
                />
              </div>

              <div className="relative w-[10vw] h-[10vw] mx-4">
                <Image
                  src="/images/huawei.png"
                  alt="Huawei"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="relative w-[10vw] h-[10vw] mx-4">
                <Image
                  src="/images/redmi.png"
                  alt="Redmi"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="relative w-[10vw] h-[10vw] mx-4">
                <Image
                  src="/images/asus.png"
                  alt="Asus"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="relative w-[10vw] h-[10vw] mx-4">
                <Image
                  src="/images/honor.png"
                  alt="Honor"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="relative w-[10vw] h-[10vw] mx-4">
                <Image
                  src="/images/wiko.png"
                  alt="Wiko"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="relative w-[10vw] h-[10vw] mx-4 mr-10">
                <Image
                  src="/images/sony.png"
                  alt="Sony"
                  fill
                  className="object-contain"
                />
              </div>
              <div></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;


// text-[#00296B]