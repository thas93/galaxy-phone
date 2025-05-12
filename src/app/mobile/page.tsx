"use client";

import Image from "next/image";

const Mobile = () => {
  return (
    <div className="flex flex-col justify-center items-center w-screen min-h-screen bg-auto bg-fixed backdrop-blur-sm">
      <div className="flex justify-center items-center gap-10">
        <h1 className="text-4xl p-10 font-black text-[#4F7CAC] tracking-[0.3rem]">
          TELEPHONES
        </h1>
      </div>

      <div className="px-50 flex flex-col justify-center items-center gap-6 w-screen h-full">
        <div className="flex gap-6">
          <div className="group relative flex flex-col bg-[#4F7CAC]/5 content-start border-3 border-[#4F7CAC] rounded-lg p-4 overflow-hidden">
            {/* Image de fond avec zoom au hover */}
            <div className="absolute inset-0 bg-[url('/images/screen-broken.jpg')] bg-cover bg-center opacity-20 pointer-events-none z-0 transition-transform duration-300  ease-in-out group-hover:scale-110 group-hover:rotate-6"></div>

            {/* Contenu principal */}
            <div className="relative z-10 flex flex-col gap-6 rounded-lg content-start">
              <div className="flex gap-10 items-center">
                <Image
                  src="/images/ecran2.png"
                  alt="screen"
                  width={70}
                  height={70}
                  className="w-[70px] h-[70px] object-contain"
                />
                <h1 className="text-2xl font-black text-[#1E3A8A] tracking-[0.3rem]">
                  ECRAN
                </h1>
              </div>
              <div className="flex justify-start">
                <p className="text-[#1E3A8A] text-xl">
                  Un écran de téléphone fissuré ou brisé peut nuire à
                  l'utilisation de votre appareil, allant d’une simple gêne
                  visuelle à une perte totale de fonctionnalité tactile. Notre
                  service de remplacement d'écran vous garantit une réparation
                  rapide, professionnelle et conforme aux standards du
                  constructeur...
                </p>
              </div>
            </div>
          </div>

          <div className="group relative flex flex-col bg-[#4F7CAC]/5 content-start border-3 border-[#4F7CAC] rounded-lg p-4 overflow-hidden">
            {/* Application de l'image de fond avec opacité réduite */}
            <div className="absolute inset-0 bg-[url('/images/v-back.webp')] bg-cover bg-center opacity-20 pointer-events-none z-0 transition-transform duration-300  ease-in-out group-hover:scale-110 group-hover:rotate-6"></div>

            {/* Contenu principal */}
            <div className="relative z-10 flex flex-col gap-6 rounded-lg content-start">
              <div className="flex gap-10 items-center">
                <Image
                  src="/images/back.png"
                  alt="screen"
                  width={70}
                  height={70}
                  className="w-[70px] h-[70px] object-contain"
                />
                <h1 className="text-2xl font-black text-[#1E3A8A] tracking-[0.3rem]">
                  VITRE ARRIÈRE
                </h1>
              </div>
              <div className="flex justify-start">
                <p className="text-[#1E3A8A] text-xl">
                  Un écran de téléphone fissuré ou brisé peut nuire à
                  l'utilisation de votre appareil, allant d’une simple gêne
                  visuelle à une perte totale de fonctionnalité tactile. Notre
                  service de remplacement d'écran vous garantit une réparation
                  rapide, professionnelle et conforme aux standards du
                  constructeur...
                </p>
              </div>
            </div>
          </div>

          <div className="group relative flex flex-col bg-[#4F7CAC]/5 content-start border-3 border-[#4F7CAC] rounded-lg p-4 overflow-hidden">
            {/* Application de l'image de fond avec opacité réduite */}
            <div className="absolute inset-0 bg-[url('/images/lens-back.webp')] bg-cover bg-center opacity-20 pointer-events-none z-0 transition-transform duration-300  ease-in-out group-hover:scale-110 group-hover:rotate-6"></div>

            {/* Contenu principal */}
            <div className="relative z-10 flex flex-col gap-6 rounded-lg content-start">
              <div className="flex gap-10 items-center">
                <Image
                  src="/images/lens.png"
                  alt="screen"
                  width={70}
                  height={70}
                  className="w-[70px] h-[70px] object-contain"
                />
                <h1 className="text-2xl font-black text-[#1E3A8A] tracking-[0.3rem]">
                  LENTILLES ARRIÈRE
                </h1>
              </div>
              <div className="flex justify-start">
                <p className="text-[#1E3A8A] text-xl">
                  Un écran de téléphone fissuré ou brisé peut nuire à
                  l'utilisation de votre appareil, allant d’une simple gêne
                  visuelle à une perte totale de fonctionnalité tactile. Notre
                  service de remplacement d'écran vous garantit une réparation
                  rapide, professionnelle et conforme aux standards du
                  constructeur...
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-6">
          <div className="group relative flex flex-col bg-[#4F7CAC]/5 content-start border-3 border-[#4F7CAC] rounded-lg p-4 overflow-hidden">
            {/* Application de l'image de fond avec opacité réduite */}
            <div className="absolute inset-0 bg-[url('/images/battery-repair.webp')] bg-cover bg-center opacity-20 pointer-events-none z-0 transition-transform duration-300  ease-in-out group-hover:scale-110 group-hover:rotate-6"></div>

            {/* Contenu principal */}
            <div className="relative z-10 flex flex-col gap-6 rounded-lg content-start">
              <div className="flex gap-10 items-center">
                <Image
                  src="/images/battery.png"
                  alt="screen"
                  width={70}
                  height={70}
                  className="w-[70px] h-[70px] object-contain"
                />
                <h1 className="text-2xl font-black text-[#1E3A8A] tracking-[0.3rem]">
                  BATTERIE
                </h1>
              </div>
              <div className="flex justify-start">
                <p className="text-[#1E3A8A] text-xl">
                  Un écran de téléphone fissuré ou brisé peut nuire à
                  l'utilisation de votre appareil, allant d’une simple gêne
                  visuelle à une perte totale de fonctionnalité tactile. Notre
                  service de remplacement d'écran vous garantit une réparation
                  rapide, professionnelle et conforme aux standards du
                  constructeur...
                </p>
              </div>
            </div>
          </div>

          <div className="group relative flex flex-col bg-[#4F7CAC]/5 content-start border-3 border-[#4F7CAC] rounded-lg p-4 overflow-hidden">
            {/* Application de l'image de fond avec opacité réduite */}
            <div className="absolute inset-0 bg-[url('/images/charging-port.webp')] bg-cover bg-center opacity-20 pointer-events-none z-0 transition-transform duration-300  ease-in-out group-hover:scale-110 group-hover:rotate-6"></div>

            {/* Contenu principal */}
            <div className="relative z-10 flex flex-col gap-6 rounded-lg content-start">
              <div className="flex gap-10 items-center">
                <Image
                  src="/images/connector.png"
                  alt="screen"
                  width={70}
                  height={70}
                  className="w-[70px] h-[70px] object-contain"
                />
                <h1 className="text-2xl font-black text-[#1E3A8A] tracking-[0.3rem]">
                  CONNECTEUR DE CHARGE
                </h1>
              </div>
              <div className="flex justify-start">
                <p className="text-[#1E3A8A] text-xl">
                  Un écran de téléphone fissuré ou brisé peut nuire à
                  l'utilisation de votre appareil, allant d’une simple gêne
                  visuelle à une perte totale de fonctionnalité tactile. Notre
                  service de remplacement d'écran vous garantit une réparation
                  rapide, professionnelle et conforme aux standards du
                  constructeur...
                </p>
              </div>
            </div>
          </div>

          <div className="group relative flex flex-col bg-[#4F7CAC]/5 content-start border-3 border-[#4F7CAC] rounded-lg p-4 overflow-hidden">
            {/* Application de l'image de fond avec opacité réduite */}
            <div className="absolute inset-0 bg-[url('/images/eau.jpg')] bg-cover bg-center opacity-20 pointer-events-none z-0 transition-transform duration-300  ease-in-out group-hover:scale-110 group-hover:rotate-6"></div>

            {/* Contenu principal */}
            <div className="relative z-10 flex flex-col gap-6 rounded-lg content-start">
              <div className="flex gap-10 items-center">
                <Image
                  src="/images/water.png"
                  alt="screen"
                  width={70}
                  height={70}
                  className="w-[70px] h-[70px] object-contain"
                />
                <h1 className="text-2xl font-black text-[#1E3A8A] tracking-[0.3rem]">
                  DÉSOXYDATION
                </h1>
              </div>
              <div className="flex justify-start">
                <p className="text-[#1E3A8A] text-xl">
                  Un écran de téléphone fissuré ou brisé peut nuire à
                  l'utilisation de votre appareil, allant d’une simple gêne
                  visuelle à une perte totale de fonctionnalité tactile. Notre
                  service de remplacement d'écran vous garantit une réparation
                  rapide, professionnelle et conforme aux standards du
                  constructeur...
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-6">
          <div className="group relative flex flex-col bg-[#4F7CAC]/5 content-start border-3 border-[#4F7CAC] rounded-lg p-4 overflow-hidden">
            {/* Application de l'image de fond avec opacité réduite */}
            <div className="absolute inset-0 bg-[url('/images/face-camera.webp')] bg-cover bg-center opacity-20 pointer-events-none z-0 transition-transform duration-300  ease-in-out group-hover:scale-110 group-hover:rotate-6"></div>

            {/* Contenu principal */}
            <div className="relative z-10 flex flex-col gap-6 rounded-lg content-start">
              <div className="flex gap-10 items-center">
                <Image
                  src="/images/cam.png"
                  alt="screen"
                  width={70}
                  height={70}
                  className="w-[70px] h-[70px] object-contain"
                />
                <h1 className="text-2xl font-black text-[#1E3A8A] tracking-[0.3rem]">
                  CAMÉRA FRONTALE
                </h1>
              </div>
              <div className="flex justify-start">
                <p className="text-[#1E3A8A] text-xl">
                  Un écran de téléphone fissuré ou brisé peut nuire à
                  l'utilisation de votre appareil, allant d’une simple gêne
                  visuelle à une perte totale de fonctionnalité tactile. Notre
                  service de remplacement d'écran vous garantit une réparation
                  rapide, professionnelle et conforme aux standards du
                  constructeur...
                </p>
              </div>
            </div>
          </div>

          <div className="group relative flex flex-col bg-[#4F7CAC]/5 content-start border-3 border-[#4F7CAC] rounded-lg p-4 overflow-hidden">
            {/* Application de l'image de fond avec opacité réduite */}
            <div className="absolute inset-0 bg-[url('/images/back-camera.webp')] bg-cover bg-center opacity-20 pointer-events-none z-0 transition-transform duration-300  ease-in-out group-hover:scale-110 group-hover:rotate-6"></div>

            {/* Contenu principal */}
            <div className="relative z-10 flex flex-col gap-6 rounded-lg content-start">
              <div className="flex gap-10 items-center">
                <Image
                  src="/images/cam.png"
                  alt="screen"
                  width={70}
                  height={70}
                  className="w-[70px] h-[70px] object-contain"
                />
                <h1 className="text-2xl font-black text-[#1E3A8A] tracking-[0.3rem]">
                  CAMÈRA ARRIÈRE
                </h1>
              </div>
              <div className="flex justify-start">
                <p className="text-[#1E3A8A] text-xl">
                  Un écran de téléphone fissuré ou brisé peut nuire à
                  l'utilisation de votre appareil, allant d’une simple gêne
                  visuelle à une perte totale de fonctionnalité tactile. Notre
                  service de remplacement d'écran vous garantit une réparation
                  rapide, professionnelle et conforme aux standards du
                  constructeur...
                </p>
              </div>
            </div>
          </div>

          <div className="group relative flex flex-col bg-[#4F7CAC]/5 content-start border-3 border-[#4F7CAC] rounded-lg p-4 overflow-hidden">
            {/* Application de l'image de fond avec opacité réduite */}
            <div className="absolute inset-0 bg-[url('/images/capteur.jpg')] bg-cover bg-center opacity-20 pointer-events-none z-0 transition-transform duration-300  ease-in-out group-hover:scale-110 group-hover:rotate-6"></div>

            {/* Contenu principal */}
            <div className="relative z-10 flex flex-col gap-6 rounded-lg content-start">
              <div className="flex gap-10 items-center">
                <Image
                  src="/images/capteur.png"
                  alt="screen"
                  width={70}
                  height={70}
                  className="w-[70px] h-[70px] object-contain"
                />
                <h1 className="text-2xl font-black text-[#1E3A8A] tracking-[0.3rem]">
                  CAPTEUR DE PROXIMITÉ
                </h1>
              </div>
              <div className="flex justify-start">
                <p className="text-[#1E3A8A] text-xl">
                  Un écran de téléphone fissuré ou brisé peut nuire à
                  l'utilisation de votre appareil, allant d’une simple gêne
                  visuelle à une perte totale de fonctionnalité tactile. Notre
                  service de remplacement d'écran vous garantit une réparation
                  rapide, professionnelle et conforme aux standards du
                  constructeur...
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mobile;
