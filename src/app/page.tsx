"use client";
import Image from "next/image";
const Home = () => {
  return (
    <div className="flex flex-col justify-between  w-full h-full">
      {/* Hero section */}
      <div className="p-2">
        <div className="flex flex-col md:flex-col lg:flex-row justify-between items-center bg-[#E5E7EB] rounded-xl  m-4">
          <div className="flex flex-col justify-center items-center w-full font-extrabold text-5xl/30 p-10 md:items-start md:text-left md:text-7xl/30 xl:text-8xl/40 ">
            <p className="text-[#1E3A8A]">Réparer</p>
            {/* <p className="animate-pulse bg-gradient-to-r from-yellow-500 via-green-500 to-red-500 bg-clip-text text-transparent">Réparer</p> */}
            <p className="text-[#2563EB]">Protéger</p>
            <p className="text-[#1E3A8A]">Reconditionnés</p>
          </div>
          {/* Image */}
          <div className="p-4">
            <Image
              src="/images/groupes.png"
              alt="Groupes"
              width={1000}
              height={1000}
              className="object-contain"
            />
          </div>
        </div>
      </div>

      {/* Conteneur du carrousel */}
      <div className="relative w-screen h-[6vh] flex bg-[#D9F2F4]/30 overflow-hidden mb-10">
        <div className="flex w-[200%] animate-marque justify-center items-center">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex gap-10">
              <div className="relative w-[10vw] h-[5vh] mx-4">
                <Image
                  src="/images/brand/samsung.png"
                  alt="Samsung"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="relative w-[10vw] h-[5vh] mx-4">
                <Image
                  src="/images/brand/acer.png"
                  alt="Acer"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="relative w-[10vw] h-[5vh] mx-4">
                <Image
                  src="/images/brand/apple.png"
                  alt="Apple"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="relative w-[10vw] h-[5vh] mx-4">
                <Image
                  src="/images/brand/alcatel.png"
                  alt="Alcatel"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="relative w-[10vw] h-[5vh] mx-4">
                <Image
                  src="/images/brand/asus.png"
                  alt="Asus"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="relative w-[10vw] h-[5vh] mx-4">
                <Image
                  src="/images/brand/dell.png"
                  alt="Dell"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="relative w-[10vw] h-[5vh] mx-4">
                <Image
                  src="/images/brand/hp.png"
                  alt="Hp"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="relative w-[10vw] h-[5vh] mx-4">
                <Image
                  src="/images/brand/huawei.png"
                  alt="Huawei"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="relative w-[10vw] h-[5vh] mx-4">
                <Image
                  src="/images/brand/lenovo.png"
                  alt="Lenovo"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="relative w-[10vw] h-[5vh] mx-4">
                <Image
                  src="/images/brand/msi.png"
                  alt="Msi"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="relative w-[10vw] h-[5vh] mx-4">
                <Image
                  src="/images/brand/nokia.png"
                  alt="Nokia"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="relative w-[10vw] h-[5vh] mx-4">
                <Image
                  src="/images/brand/redmi.png"
                  alt="Redmi"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="relative w-[10vw] h-[5vh] mx-4">
                <Image
                  src="/images/brand/sony.png"
                  alt="Sony"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="relative w-[10vw] h-[5vh] mx-4">
                <Image
                  src="/images/brand/toshiba.png"
                  alt="Toshiba"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="relative w-[10vw] h-[5vh] mx-4">
                <Image
                  src="/images/brand/wiko.png"
                  alt="Wiko"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="relative w-[10vw] h-[5vh] mx-4">
                <Image
                  src="/images/brand/windows.png"
                  alt="Windows"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="relative w-[10vw] h-[5vh] mx-4">
                <Image
                  src="/images/brand/motorola.png"
                  alt="Motorola"
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
