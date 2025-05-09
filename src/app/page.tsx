"use client";
import Image from "next/image";
const Home = () => {
  return (
    <div className="flex flex-col justify-between  w-full h-full">
      {/* Hero section */}
      <div className="p-10 h-full flex justify-between">
        {/* <div className="flex flex-col md:flex-col lg:flex-col justify-between items-center   h-full rounded-xl m-4">
          <div className="flex justify-around w-full">
            <div className="relative h-[340px] w-[340px] flex items-center justify-center">
              <div className="relative bg-fuchsia-950 rounded-xl rotate-45 h-60 w-60 border-4 overflow-hidden">
                <Image
                  src="/images/brand/mac.jpg"
                  alt="Samsung"
                  fill
                  className="object-cover rotate-[-45deg] scale-[1.5]"
                />
              </div>
            </div>
            <div className="relative h-[340px] w-[340px] flex items-center justify-center">
              <div className="bg-fuchsia-950 rounded-xl rotate-45 h-60 w-60 border border-indigo-600 flex items-center justify-center">
                <p className="-rotate-45 text-white">image1</p>
              </div>
            </div>
            <div className="relative h-[340px] w-[340px] flex items-center justify-center">
              <div className="bg-fuchsia-950 rounded-xl rotate-45 h-60 w-60 border border-indigo-600 flex items-center justify-center">
                <p className="-rotate-45 text-white">image1</p>
              </div>
            </div>
            <div className="relative h-[340px] w-[340px] flex items-center justify-center">
              <div className="bg-fuchsia-950 rounded-xl rotate-45 h-60 w-60 border border-indigo-600 flex items-center justify-center">
                <p className="-rotate-45 text-white">image1</p>
              </div>
            </div>
          </div>
          <div className="flex justify-around w-full">
            <p className="font-extrabold text-5xl">REPARER</p>
            <p className="font-extrabold text-5xl">PROTEGER</p>
            <p className="font-extrabold text-5xl">RECONDITIONNEES</p>
          </div>
        </div> */}

        <div className="relative w-full h-full flex items-center justify-center">
          {/* Le blob en arrière-plan */}
          <div className="absolute w-[70%] h-[70%] rotate-12 bg-[#4F7CAC] rounded-[60%_40%_30%_70%_/_60%_30%_70%_40%] z-0"></div>

          {/* L'image au-dessus du blob */}
          <div className="relative w-[80%] h-[80%] z-10">
            <Image
              src="/images/i16.png"
              alt="Iphone16"
              fill
              className="object-contain"
            />
          </div>
        </div>

        <div className="w-full h-full flex flex-col justify-between">
          <div className="flex flex-col items-center w-full">
            <p className="text-6xl font-bold font-fontrg text-[#4F7CAC]">GALAXY PHONE</p>
            <div className="flex gap-6">
              <p className="font-extrabold text-2xl">REPARER</p>
              <p className="font-extrabold text-2xl">-</p>
              <p className="font-extrabold text-2xl">PROTEGER</p>
              <p className="font-extrabold text-2xl">-</p>
              <p className="font-extrabold text-2xl">RECONDITIONNEES</p>
            </div>
          </div>

          <div>
            <p className="font-extrabold text-3xl">
              Et si réparer devenait un réflexe ?
            </p>
            <p className="font-semibold italic text-lg">
              Plutôt que de jeter, prolongez la vie de vos téléphones et
              ordinateurs. Chaque réparation, c’est un déchet en moins et un pas
              de plus vers un avenir durable."
            </p>
          </div>

          <div className="flex flex-col gap-6">
            {/* Adresse */}
            <div className="flex items-center gap-3">
              <div className="relative w-[5vw] h-[5vh]">
                <Image
                  src="/images/magasin.png"
                  alt="Magasin"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <p className="font-bold text-xl">14 RUE RASPAIL</p>
                <p className="font-bold text-xl">92270 BOIS-COLOMBES</p>
              </div>
            </div>

            {/* Téléphone */}
            <div className="flex items-center gap-3">
              <div className="relative w-[5vw] h-[5vh]">
                <Image
                  src="/images/fixe.png"
                  alt="Fixe"
                  fill
                  className="object-contain"
                />
              </div>
              <p className="font-bold text-xl">09.54.07.54.42</p>
            </div>

            {/* E-mail */}
            <div className="flex items-center gap-3">
              <div className="relative w-[5vw] h-[5vh]">
                <Image
                  src="/images/email.png"
                  alt="Email"
                  fill
                  className="object-contain"
                />
              </div>
              <p className="font-bold italic text-xl">galaxyphone92270@gmail.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* Conteneur du carrousel */}
      {/* <div className="relative w-screen h-[6vh] flex  overflow-hidden mb-10">
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
      </div> */}
    </div>
  );
};

export default Home;

// text-[#00296B]
