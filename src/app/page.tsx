

// export default function Home() {
//   return (
//     <div>
//       <p className="text-5xl text-red-900 font-bold">GALAXY-PHONE</p>
//     </div>
     
//   );
// }

"use client";
import Image from "next/image";
const Home = () => {
 
  return (
    <div className="flex flex-col justify-between  w-full">
      <div className="flex flex-col justify-between w-full font-extrabold text-zinc-700 tracking-[0.6rem] text-8xl p-10">
        <p>Réparer</p>
        <p
          className="text-transparent"
          style={{ WebkitTextStroke: "2.5px #000000" }}
        >
          Protéger
        </p>
        <p>Reconditionnés</p>
      </div>
      {/* Conteneur du carrousel */}
      <div className="relative w-screen bg-blue-200/20 overflow-hidden mt-10">
        <div className="flex w-[200%] animate-marquee">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex">
              <div className="relative w-[10vw] h-[5vw] mx-4">
                <Image
                  src="/images/apple.png"
                  alt="Apple"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="relative w-[10vw] h-[5vw] mx-4">
                <Image
                  src="/images/samsung.png"
                  alt="Samsung"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="relative w-[10vw] h-[5vw] mx-4">
                <Image
                  src="/images/nokia.png"
                  alt="Nokia"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="relative w-[10vw] h-[5vw] mx-4">
                <Image
                  src="/images/mi.png"
                  alt="Mi"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="relative w-[10vw] h-[5vw] mx-4">
                <Image
                  src="/images/huawei.png"
                  alt="Huawei"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="relative w-[10vw] h-[5vw] mx-4">
                <Image
                  src="/images/redmi.png"
                  alt="Redmi"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="relative w-[10vw] h-[5vw] mx-4">
                <Image
                  src="/images/asus.png"
                  alt="Asus"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="relative w-[10vw] h-[5vw] mx-4">
                <Image
                  src="/images/honor.png"
                  alt="Honor"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="relative w-[10vw] h-[5vw] mx-4">
                <Image
                  src="/images/wiko.png"
                  alt="Wiko"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="relative w-[10vw] h-[5vw] mx-4">
                <Image
                  src="/images/sony.png"
                  alt="Sony"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
