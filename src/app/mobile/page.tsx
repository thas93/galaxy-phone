"use client";

import Image from "next/image";

const Mobile = () => {
  return (
    <div className="flex flex-col justify-center items-center w-screen h-full backdrop-blur-sm">
      <div className="flex justify-center items-center gap-10">
        <Image
          src="/images/parts/PHONE-REPARATION.png"
          alt="PHONEREPARATION"
          width={100}
          height={100}
          className="-rotate-20 hidden md:block"
        />
        <h1 className="text-4xl font-black text-[#FFD500] tracking-[0.3rem] underline decoration-6 decoration-blue-500">
          {" "}
          - TELEPHONES -{" "}
        </h1>
      </div>
      <div>
        
        <div className="flex flex-col justify-center items-center border-2 border-white rounded-lg p-4">
          <h1 className="text-2xl font-black text-white tracking-[0.3rem]">ECRAN</h1>
          <Image
            src="/images/parts/ecran.png"
            alt="ecran"
            width={300}
            height={300}
            className="  md:block"
          />
        <p className="text-white text-center text-2xl"> Un écran cassé ne devrait jamais compromettre votre expérience. Faites confiance à notre expertise pour une réparation haut de gamme, avec des composants de qualité et un service express</p>
        </div>

        <div className="flex flex-col justify-center items-center border-2 border-white rounded-lg p-4">
          <h1 className="text-2xl font-black text-white tracking-[0.3rem]">APPAREIL PHOTO</h1>
          <Image
            src="/images/parts/ecran.png"
            alt="ecran"
            width={300}
            height={300}
            className="  md:block"
          />
        <p className="text-white text-center text-2xl"> Un écran cassé ne devrait jamais compromettre votre expérience. Faites confiance à notre expertise pour une réparation haut de gamme, avec des composants de qualité et un service express</p>
        </div>

      </div>
    </div>
  );
};

export default Mobile;
