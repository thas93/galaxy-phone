import Image from "next/image";

const mobileParts = [
  {
    title: "ÉCRAN",
    icon: "/images/icon/screen.webp",
    bgImage: "/images/card-img/mobile/screen.webp",
    description:
      "L’écran est l’élément principal d’interaction avec votre téléphone. En cas de fissure ou de panne tactile, nous assurons un remplacement rapide avec des pièces de qualité.",
  },
  {
    title: "VITRE ARRIÈRE",
    icon: "/images/icon/back.webp",
    bgImage: "/images/card-img/mobile/back.webp",
    description:
      "Une vitre arrière cassée peut compromettre l’esthétique et la solidité de votre appareil. Nous la remplaçons pour lui redonner son aspect neuf.",
  },
  {
    title: "LENTILLES ARRIÈRE",
    icon: "/images/icon/lens.webp",
    bgImage: "/images/card-img/mobile/lens-back.webp",
    description:
      "Si votre téléphone se décharge trop vite ou ne tient plus la charge, un changement de batterie est recommandé. Nous utilisons des batteries neuves avec garantie.",
  },
  {
    title: "BATTERIE",
    icon: "/images/icon/battery.webp",
    bgImage: "/images/card-img/mobile/battery.webp",
    description:
      "Le port de charge défectueux peut empêcher la recharge ou la synchronisation. Nous le remplaçons pour rétablir une connexion optimale.",
  },
  {
    title: "CONNECTEUR DE CHARGE",
    icon: "/images/icon/connector.webp",
    bgImage: "/images/card-img/mobile/port.webp",
    description:
      "Problèmes de mise au point, capteur rayé ou image floue ? Nous réparons ou remplaçons votre caméra pour retrouver des clichés nets.",
  },
  {
    title: "OXYDATION",
    icon: "/images/icon/water.webp",
    bgImage: "/images/card-img/mobile/water.webp",
    description:
      "Un son faible ou absent peut provenir d’un haut-parleur endommagé. Nous intervenons pour restaurer un son clair et puissant.",
  },
  {
    title: "VIBREUR",
    icon: "/images/icon/vibrator.webp",
    bgImage: "/images/card-img/mobile/vibrator.webp",
    description:
      "Un son faible ou absent peut provenir d’un haut-parleur endommagé. Nous intervenons pour restaurer un son clair et puissant.",
  },
  {
    title: "HAUT-PARLEUR",
    icon: "/images/icon/volume.webp",
    bgImage: "/images/card-img/mobile/speaker.webp",
    description:
      "Un son faible ou absent peut provenir d’un haut-parleur endommagé. Nous intervenons pour restaurer un son clair et puissant.",
  },
  {
    title: "MICRO",
    icon: "/images/icon/mic.webp",
    bgImage: "/images/card-img/mobile/microphone.webp",
    description:
      "Un son faible ou absent peut provenir d’un haut-parleur endommagé. Nous intervenons pour restaurer un son clair et puissant.",
  },
  {
    title: "CAMÉRA FRONTALE",
    icon: "/images/icon/cam.webp",
    bgImage: "/images/card-img/mobile/face-camera.webp",
    description:
      "Un son faible ou absent peut provenir d’un haut-parleur endommagé. Nous intervenons pour restaurer un son clair et puissant.",
  },
  {
    title: "CAMÈRA ARRIÈRE",
    icon: "/images/icon/cam.webp",
    bgImage: "/images/card-img/mobile/back-camera.webp",
    description:
      "Un son faible ou absent peut provenir d’un haut-parleur endommagé. Nous intervenons pour restaurer un son clair et puissant.",
  },
  {
    title: "CAPTEUR DE PROXIMITÉ",
    icon: "/images/icon/capteur.webp",
    bgImage: "/images/card-img/mobile/capteur.webp",
    description:
      "Un son faible ou absent peut provenir d’un haut-parleur endommagé. Nous intervenons pour restaurer un son clair et puissant.",
  },
  {
    title: "MICRO SOUDURE",
    icon: "/images/icon/micro.webp",
    bgImage: "/images/card-img/mobile/micro.webp",
    description:
      "Un son faible ou absent peut provenir d’un haut-parleur endommagé. Nous intervenons pour restaurer un son clair et puissant.",
  },
  {
    title: "BOUTONS",
    icon: "/images/icon/btn.webp",
    bgImage: "/images/card-img/mobile/bouton.webp",
    description:
      "Un son faible ou absent peut provenir d’un haut-parleur endommagé. Nous intervenons pour restaurer un son clair et puissant.",
  },
  {
    title: "APPLICATIONS",
    icon: "/images/icon/app.webp",
    bgImage: "/images/card-img/mobile/apps.webp",
    description:
      "Un son faible ou absent peut provenir d’un haut-parleur endommagé. Nous intervenons pour restaurer un son clair et puissant.",
  },
];

const MobileCard = ({ title, icon, bgImage, description }) => (
  <div className="group relative flex flex-col h-full bg-[#4F7CAC]/5 border-3 border-[#4F7CAC] rounded-lg p-4 overflow-hidden transition-shadow duration-300 hover:shadow-xl">
    <div
      className="absolute inset-0 bg-cover bg-center opacity-20 pointer-events-none z-0 transition-transform duration-300 ease-in-out group-hover:scale-110 group-hover:rotate-3"
      style={{ backgroundImage: `url(${bgImage})` }}
    />
    <div className="relative z-10 flex flex-col gap-6">
      <div className="flex gap-6 items-center">
        <Image src={icon} alt={`Icône ${title.toLowerCase()}`} width={70} height={70} className="object-contain" />
        <h2 className="text-2xl font-black text-[#1E3A8A] tracking-wider">{title}</h2>
      </div>
      <p className="text-[#1E3A8A] text-base">{description}</p>
    </div>
  </div>
);

export default function Mobile() {
  return (
    <section className="w-full py-12 px-4 md:px-12 lg:px-24">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr">
        {mobileParts.map((part, index) => (
          <div key={index} className="h-full">
            <MobileCard {...part} />
          </div>
        ))}
      </div>
    </section>
  );
}




















// "use client";

// import Image from "next/image";

// const Mobile = () => {
//   return (
//     <div className="flex flex-col justify-center items-center w-screen min-h-screen px-50 gap-10">

//       <div className="flex flex-cols w-full justify-center items-center border-2 border-[#4F7CAC] rounded-lg">
//         <h1 className="text-4xl p-5 font-black text-[#4F7CAC] tracking-[0.3rem]">
//           TELEPHONES
//         </h1>
//       </div>

//       <div className="px-50 flex flex-col justify-center items-center gap-6 w-screen h-full">
//         <div className="flex gap-6">
//           <div className="group relative flex flex-col bg-[#4F7CAC]/5 content-start border-3 border-[#4F7CAC] rounded-lg p-4 overflow-hidden">
//             {/* Image de fond avec zoom au hover */}
//             <div className="absolute inset-0 bg-[url('/images/card-img/mobile/screen.webp')] bg-cover bg-center opacity-20 pointer-events-none z-0 transition-transform duration-300  ease-in-out group-hover:scale-110 group-hover:rotate-6"></div>

//             {/* Contenu principal */}
//             <div className="relative z-10 flex flex-col gap-6 rounded-lg content-start">
//               <div className="flex gap-10 items-center">
//                 <Image
//                   src="/images/icon/screen.webp"
//                   alt="screen"
//                   width={70}
//                   height={70}
//                   className="w-[70px] h-[70px] object-contain"
//                 />
//                 <h1 className="text-2xl font-black text-[#1E3A8A] tracking-[0.3rem]">
//                   ECRAN
//                 </h1>
//               </div>
//               <div className="flex justify-start">
//                 <p className="text-[#1E3A8A] text-xl">
//                   Un écran de téléphone fissuré ou brisé peut nuire à
//                   l'utilisation de votre appareil, allant d’une simple gêne
//                   visuelle à une perte totale de fonctionnalité tactile. Notre
//                   service de remplacement d'écran vous garantit une réparation
//                   rapide, professionnelle et conforme aux standards du
//                   constructeur...
//                 </p>
//               </div>
//             </div>
//           </div>

//           <div className="group relative flex flex-col bg-[#4F7CAC]/5 content-start border-3 border-[#4F7CAC] rounded-lg p-4 overflow-hidden">
//             {/* Application de l'image de fond avec opacité réduite */}
//             <div className="absolute inset-0 bg-[url('/images/card-img/mobile/back.webp')] bg-cover bg-center opacity-20 pointer-events-none z-0 transition-transform duration-300  ease-in-out group-hover:scale-110 group-hover:rotate-6"></div>

//             {/* Contenu principal */}
//             <div className="relative z-10 flex flex-col gap-6 rounded-lg content-start">
//               <div className="flex gap-10 items-center">
//                 <Image
//                   src="/images/icon/back.webp"
//                   alt="screen"
//                   width={70}
//                   height={70}
//                   className="w-[70px] h-[70px] object-contain"
//                 />
//                 <h1 className="text-2xl font-black text-[#1E3A8A] tracking-[0.3rem]">
//                   VITRE ARRIÈRE
//                 </h1>
//               </div>
//               <div className="flex justify-start">
//                 <p className="text-[#1E3A8A] text-xl">
//                   Un écran de téléphone fissuré ou brisé peut nuire à
//                   l'utilisation de votre appareil, allant d’une simple gêne
//                   visuelle à une perte totale de fonctionnalité tactile. Notre
//                   service de remplacement d'écran vous garantit une réparation
//                   rapide, professionnelle et conforme aux standards du
//                   constructeur...
//                 </p>
//               </div>
//             </div>
//           </div>

//           <div className="group relative flex flex-col bg-[#4F7CAC]/5 content-start border-3 border-[#4F7CAC] rounded-lg p-4 overflow-hidden">
//             {/* Application de l'image de fond avec opacité réduite */}
//             <div className="absolute inset-0 bg-[url('/images/card-img/mobile/lens-back.webp')] bg-cover bg-center opacity-20 pointer-events-none z-0 transition-transform duration-300  ease-in-out group-hover:scale-110 group-hover:rotate-6"></div>

//             {/* Contenu principal */}
//             <div className="relative z-10 flex flex-col gap-6 rounded-lg content-start">
//               <div className="flex gap-10 items-center">
//                 <Image
//                   src="/images/icon/lens.webp"
//                   alt="screen"
//                   width={70}
//                   height={70}
//                   className="w-[70px] h-[70px] object-contain"
//                 />
//                 <h1 className="text-2xl font-black text-[#1E3A8A] tracking-[0.3rem]">
//                   LENTILLES ARRIÈRE
//                 </h1>
//               </div>
//               <div className="flex justify-start">
//                 <p className="text-[#1E3A8A] text-xl">
//                   Un écran de téléphone fissuré ou brisé peut nuire à
//                   l'utilisation de votre appareil, allant d’une simple gêne
//                   visuelle à une perte totale de fonctionnalité tactile. Notre
//                   service de remplacement d'écran vous garantit une réparation
//                   rapide, professionnelle et conforme aux standards du
//                   constructeur...
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="flex gap-6">
//           <div className="group relative flex flex-col bg-[#4F7CAC]/5 content-start border-3 border-[#4F7CAC] rounded-lg p-4 overflow-hidden">
//             {/* Application de l'image de fond avec opacité réduite */}
//             <div className="absolute inset-0 bg-[url('/images/card-img/mobile/battery.webp')] bg-cover bg-center opacity-20 pointer-events-none z-0 transition-transform duration-300  ease-in-out group-hover:scale-110 group-hover:rotate-6"></div>

//             {/* Contenu principal */}
//             <div className="relative z-10 flex flex-col gap-6 rounded-lg content-start">
//               <div className="flex gap-10 items-center">
//                 <Image
//                   src="/images/icon/battery.webp"
//                   alt="screen"
//                   width={70}
//                   height={70}
//                   className="w-[70px] h-[70px] object-contain"
//                 />
//                 <h1 className="text-2xl font-black text-[#1E3A8A] tracking-[0.3rem]">
//                   BATTERIE
//                 </h1>
//               </div>
//               <div className="flex justify-start">
//                 <p className="text-[#1E3A8A] text-xl">
//                   Un écran de téléphone fissuré ou brisé peut nuire à
//                   l'utilisation de votre appareil, allant d’une simple gêne
//                   visuelle à une perte totale de fonctionnalité tactile. Notre
//                   service de remplacement d'écran vous garantit une réparation
//                   rapide, professionnelle et conforme aux standards du
//                   constructeur...
//                 </p>
//               </div>
//             </div>
//           </div>

//           <div className="group relative flex flex-col bg-[#4F7CAC]/5 content-start border-3 border-[#4F7CAC] rounded-lg p-4 overflow-hidden">
//             {/* Application de l'image de fond avec opacité réduite */}
//             <div className="absolute inset-0 bg-[url('/images/card-img/mobile/port.webp')] bg-cover bg-center opacity-20 pointer-events-none z-0 transition-transform duration-300  ease-in-out group-hover:scale-110 group-hover:rotate-6"></div>

//             {/* Contenu principal */}
//             <div className="relative z-10 flex flex-col gap-6 rounded-lg content-start">
//               <div className="flex gap-10 items-center">
//                 <Image
//                   src="/images/icon/connector.webp"
//                   alt="screen"
//                   width={70}
//                   height={70}
//                   className="w-[70px] h-[70px] object-contain"
//                 />
//                 <h1 className="text-2xl font-black text-[#1E3A8A] tracking-[0.3rem]">
//                   CONNECTEUR DE CHARGE
//                 </h1>
//               </div>
//               <div className="flex justify-start">
//                 <p className="text-[#1E3A8A] text-xl">
//                   Un écran de téléphone fissuré ou brisé peut nuire à
//                   l'utilisation de votre appareil, allant d’une simple gêne
//                   visuelle à une perte totale de fonctionnalité tactile. Notre
//                   service de remplacement d'écran vous garantit une réparation
//                   rapide, professionnelle et conforme aux standards du
//                   constructeur...
//                 </p>
//               </div>
//             </div>
//           </div>

//           <div className="group relative flex flex-col bg-[#4F7CAC]/5 content-start border-3 border-[#4F7CAC] rounded-lg p-4 overflow-hidden">
//             {/* Application de l'image de fond avec opacité réduite */}
//             <div className="absolute inset-0 bg-[url('/images/card-img/mobile/water.webp')] bg-cover bg-center opacity-20 pointer-events-none z-0 transition-transform duration-300  ease-in-out group-hover:scale-110 group-hover:rotate-6"></div>

//             {/* Contenu principal */}
//             <div className="relative z-10 flex flex-col gap-6 rounded-lg content-start">
//               <div className="flex gap-10 items-center">
//                 <Image
//                   src="/images/icon/water.webp"
//                   alt="screen"
//                   width={70}
//                   height={70}
//                   className="w-[70px] h-[70px] object-contain"
//                 />
//                 <h1 className="text-2xl font-black text-[#1E3A8A] tracking-[0.3rem]">
//                   DÉSOXYDATION
//                 </h1>
//               </div>
//               <div className="flex justify-start">
//                 <p className="text-[#1E3A8A] text-xl">
//                   Un écran de téléphone fissuré ou brisé peut nuire à
//                   l'utilisation de votre appareil, allant d’une simple gêne
//                   visuelle à une perte totale de fonctionnalité tactile. Notre
//                   service de remplacement d'écran vous garantit une réparation
//                   rapide, professionnelle et conforme aux standards du
//                   constructeur...
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="flex gap-6">
//           <div className="group relative flex flex-col bg-[#4F7CAC]/5 content-start border-3 border-[#4F7CAC] rounded-lg p-4 overflow-hidden">
//             {/* Application de l'image de fond avec opacité réduite */}
//             <div className="absolute inset-0 bg-[url('/images/card-img/mobile/vibrator.webp')] bg-cover bg-center opacity-20 pointer-events-none z-0 transition-transform duration-300  ease-in-out group-hover:scale-110 group-hover:rotate-6"></div>

//             {/* Contenu principal */}
//             <div className="relative z-10 flex flex-col gap-6 rounded-lg content-start">
//               <div className="flex gap-10 items-center">
//                 <Image
//                   src="/images/icon/vibrator.webp"
//                   alt="screen"
//                   width={70}
//                   height={70}
//                   className="w-[70px] h-[70px] object-contain"
//                 />
//                 <h1 className="text-2xl font-black text-[#1E3A8A] tracking-[0.3rem]">
//                   VIBREUR
//                 </h1>
//               </div>
//               <div className="flex justify-start">
//                 <p className="text-[#1E3A8A] text-xl">
//                   Un écran de téléphone fissuré ou brisé peut nuire à
//                   l'utilisation de votre appareil, allant d’une simple gêne
//                   visuelle à une perte totale de fonctionnalité tactile. Notre
//                   service de remplacement d'écran vous garantit une réparation
//                   rapide, professionnelle et conforme aux standards du
//                   constructeur...
//                 </p>
//               </div>
//             </div>
//           </div>

//           <div className="group relative flex flex-col bg-[#4F7CAC]/5 content-start border-3 border-[#4F7CAC] rounded-lg p-4 overflow-hidden">
//             {/* Application de l'image de fond avec opacité réduite */}
//             <div className="absolute inset-0 bg-[url('/images/card-img/mobile/speaker.webp')] bg-cover bg-center opacity-20 pointer-events-none z-0 transition-transform duration-300  ease-in-out group-hover:scale-110 group-hover:rotate-6"></div>

//             {/* Contenu principal */}
//             <div className="relative z-10 flex flex-col gap-6 rounded-lg content-start">
//               <div className="flex gap-10 items-center">
//                 <Image
//                   src="/images/icon/volume.webp"
//                   alt="screen"
//                   width={70}
//                   height={70}
//                   className="w-[70px] h-[70px] object-contain"
//                 />
//                 <h1 className="text-2xl font-black text-[#1E3A8A] tracking-[0.3rem]">
//                   HAUT-PARLEUR
//                 </h1>
//               </div>
//               <div className="flex justify-start">
//                 <p className="text-[#1E3A8A] text-xl">
//                   Un écran de téléphone fissuré ou brisé peut nuire à
//                   l'utilisation de votre appareil, allant d’une simple gêne
//                   visuelle à une perte totale de fonctionnalité tactile. Notre
//                   service de remplacement d'écran vous garantit une réparation
//                   rapide, professionnelle et conforme aux standards du
//                   constructeur...
//                 </p>
//               </div>
//             </div>
//           </div>

//           <div className="group relative flex flex-col bg-[#4F7CAC]/5 content-start border-3 border-[#4F7CAC] rounded-lg p-4 overflow-hidden">
//             {/* Application de l'image de fond avec opacité réduite */}
//             <div className="absolute inset-0 bg-[url('/images/card-img/mobile/microphone.webp')] bg-cover bg-center opacity-20 pointer-events-none z-0 transition-transform duration-300  ease-in-out group-hover:scale-110 group-hover:rotate-6"></div>

//             {/* Contenu principal */}
//             <div className="relative z-10 flex flex-col gap-6 rounded-lg content-start">
//               <div className="flex gap-10 items-center">
//                 <Image
//                   src="/images/icon/mic.webp"
//                   alt="screen"
//                   width={70}
//                   height={70}
//                   className="w-[70px] h-[70px] object-contain"
//                 />
//                 <h1 className="text-2xl font-black text-[#1E3A8A] tracking-[0.3rem]">
//                   MICRO
//                 </h1>
//               </div>
//               <div className="flex justify-start">
//                 <p className="text-[#1E3A8A] text-xl">
//                   Un écran de téléphone fissuré ou brisé peut nuire à
//                   l'utilisation de votre appareil, allant d’une simple gêne
//                   visuelle à une perte totale de fonctionnalité tactile. Notre
//                   service de remplacement d'écran vous garantit une réparation
//                   rapide, professionnelle et conforme aux standards du
//                   constructeur...
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="flex gap-6">
//           <div className="group relative flex flex-col bg-[#4F7CAC]/5 content-start border-3 border-[#4F7CAC] rounded-lg p-4 overflow-hidden">
//             {/* Application de l'image de fond avec opacité réduite */}
//             <div className="absolute inset-0 bg-[url('/images/card-img/mobile/face-camera.webp')] bg-cover bg-center opacity-20 pointer-events-none z-0 transition-transform duration-300  ease-in-out group-hover:scale-110 group-hover:rotate-6"></div>

//             {/* Contenu principal */}
//             <div className="relative z-10 flex flex-col gap-6 rounded-lg content-start">
//               <div className="flex gap-10 items-center">
//                 <Image
//                   src="/images/icon/cam.webp"
//                   alt="screen"
//                   width={70}
//                   height={70}
//                   className="w-[70px] h-[70px] object-contain"
//                 />
//                 <h1 className="text-2xl font-black text-[#1E3A8A] tracking-[0.3rem]">
//                   CAMÉRA FRONTALE
//                 </h1>
//               </div>
//               <div className="flex justify-start">
//                 <p className="text-[#1E3A8A] text-xl">
//                   Un écran de téléphone fissuré ou brisé peut nuire à
//                   l'utilisation de votre appareil, allant d’une simple gêne
//                   visuelle à une perte totale de fonctionnalité tactile. Notre
//                   service de remplacement d'écran vous garantit une réparation
//                   rapide, professionnelle et conforme aux standards du
//                   constructeur...
//                 </p>
//               </div>
//             </div>
//           </div>

//           <div className="group relative flex flex-col bg-[#4F7CAC]/5 content-start border-3 border-[#4F7CAC] rounded-lg p-4 overflow-hidden">
//             {/* Application de l'image de fond avec opacité réduite */}
//             <div className="absolute inset-0 bg-[url('/images/card-img/mobile/back-camera.webp')] bg-cover bg-center opacity-20 pointer-events-none z-0 transition-transform duration-300  ease-in-out group-hover:scale-110 group-hover:rotate-6"></div>

//             {/* Contenu principal */}
//             <div className="relative z-10 flex flex-col gap-6 rounded-lg content-start">
//               <div className="flex gap-10 items-center">
//                 <Image
//                   src="/images/icon/cam.webp"
//                   alt="screen"
//                   width={70}
//                   height={70}
//                   className="w-[70px] h-[70px] object-contain"
//                 />
//                 <h1 className="text-2xl font-black text-[#1E3A8A] tracking-[0.3rem]">
//                   CAMÈRA ARRIÈRE
//                 </h1>
//               </div>
//               <div className="flex justify-start">
//                 <p className="text-[#1E3A8A] text-xl">
//                   Un écran de téléphone fissuré ou brisé peut nuire à
//                   l'utilisation de votre appareil, allant d’une simple gêne
//                   visuelle à une perte totale de fonctionnalité tactile. Notre
//                   service de remplacement d'écran vous garantit une réparation
//                   rapide, professionnelle et conforme aux standards du
//                   constructeur...
//                 </p>
//               </div>
//             </div>
//           </div>

//           <div className="group relative flex flex-col bg-[#4F7CAC]/5 content-start border-3 border-[#4F7CAC] rounded-lg p-4 overflow-hidden">
//             {/* Application de l'image de fond avec opacité réduite */}
//             <div className="absolute inset-0 bg-[url('/images/card-img/mobile/capteur.webp')] bg-cover bg-center opacity-20 pointer-events-none z-0 transition-transform duration-300  ease-in-out group-hover:scale-110 group-hover:rotate-6"></div>

//             {/* Contenu principal */}
//             <div className="relative z-10 flex flex-col gap-6 rounded-lg content-start">
//               <div className="flex gap-10 items-center">
//                 <Image
//                   src="/images/icon/capteur.webp"
//                   alt="screen"
//                   width={70}
//                   height={70}
//                   className="w-[70px] h-[70px] object-contain"
//                 />
//                 <h1 className="text-2xl font-black text-[#1E3A8A] tracking-[0.3rem]">
//                   CAPTEUR DE PROXIMITÉ
//                 </h1>
//               </div>
//               <div className="flex justify-start">
//                 <p className="text-[#1E3A8A] text-xl">
//                   Un écran de téléphone fissuré ou brisé peut nuire à
//                   l'utilisation de votre appareil, allant d’une simple gêne
//                   visuelle à une perte totale de fonctionnalité tactile. Notre
//                   service de remplacement d'écran vous garantit une réparation
//                   rapide, professionnelle et conforme aux standards du
//                   constructeur...
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="flex gap-6">
//           <div className="group relative flex flex-col bg-[#4F7CAC]/5 content-start border-3 border-[#4F7CAC] rounded-lg p-4 overflow-hidden">
//             {/* Application de l'image de fond avec opacité réduite */}
//             <div className="absolute inset-0 bg-[url('/images/card-img/mobile/micro.webp')] bg-cover bg-center opacity-20 pointer-events-none z-0 transition-transform duration-300  ease-in-out group-hover:scale-110 group-hover:rotate-6"></div>

//             {/* Contenu principal */}
//             <div className="relative z-10 flex flex-col gap-6 rounded-lg content-start">
//               <div className="flex gap-10 items-center">
//                 <Image
//                   src="/images/icon/micro.webp"
//                   alt="screen"
//                   width={70}
//                   height={70}
//                   className="w-[70px] h-[70px] object-contain"
//                 />
//                 <h1 className="text-2xl font-black text-[#1E3A8A] tracking-[0.3rem]">
//                   MICRO SOUDURE
//                 </h1>
//               </div>
//               <div className="flex justify-start">
//                 <p className="text-[#1E3A8A] text-xl">
//                   Un écran de téléphone fissuré ou brisé peut nuire à
//                   l'utilisation de votre appareil, allant d’une simple gêne
//                   visuelle à une perte totale de fonctionnalité tactile. Notre
//                   service de remplacement d'écran vous garantit une réparation
//                   rapide, professionnelle et conforme aux standards du
//                   constructeur...
//                 </p>
//               </div>
//             </div>
//           </div>

//           <div className="group relative flex flex-col bg-[#4F7CAC]/5 content-start border-3 border-[#4F7CAC] rounded-lg p-4 overflow-hidden">
//             {/* Application de l'image de fond avec opacité réduite */}
//             <div className="absolute inset-0 bg-[url('/images/card-img/mobile/bouton.webp')] bg-cover bg-center opacity-20 pointer-events-none z-0 transition-transform duration-300  ease-in-out group-hover:scale-110 group-hover:rotate-6"></div>

//             {/* Contenu principal */}
//             <div className="relative z-10 flex flex-col gap-6 rounded-lg content-start">
//               <div className="flex gap-10 items-center">
//                 <Image
//                   src="/images/icon/btn.webp"
//                   alt="screen"
//                   width={70}
//                   height={70}
//                   className="w-[70px] h-[70px] object-contain"
//                 />
//                 <h1 className="text-2xl font-black text-[#1E3A8A] tracking-[0.3rem]">
//                   BOUTON
//                 </h1>
//               </div>
//               <div className="flex justify-start">
//                 <p className="text-[#1E3A8A] text-xl">
//                   Un écran de téléphone fissuré ou brisé peut nuire à
//                   l'utilisation de votre appareil, allant d’une simple gêne
//                   visuelle à une perte totale de fonctionnalité tactile. Notre
//                   service de remplacement d'écran vous garantit une réparation
//                   rapide, professionnelle et conforme aux standards du
//                   constructeur...
//                 </p>
//               </div>
//             </div>
//           </div>

//           <div className="group relative flex flex-col bg-[#4F7CAC]/5 content-start border-3 border-[#4F7CAC] rounded-lg p-4 overflow-hidden">
//             {/* Application de l'image de fond avec opacité réduite */}
//             <div className="absolute inset-0 bg-[url('/images/card-img/mobile/apps.webp')] bg-cover bg-center opacity-20 pointer-events-none z-0 transition-transform duration-300  ease-in-out group-hover:scale-110 group-hover:rotate-6"></div>

//             {/* Contenu principal */}
//             <div className="relative z-10 flex flex-col gap-6 rounded-lg content-start">
//               <div className="flex gap-10 items-center">
//                 <Image
//                   src="/images/icon/app.webp"
//                   alt="screen"
//                   width={70}
//                   height={70}
//                   className="w-[70px] h-[70px] object-contain"
//                 />
//                 <h1 className="text-2xl font-black text-[#1E3A8A] tracking-[0.3rem]">
//                   APPLICATIONS
//                 </h1>
//               </div>
//               <div className="flex justify-start">
//                 <p className="text-[#1E3A8A] text-xl">
//                   Un écran de téléphone fissuré ou brisé peut nuire à
//                   l'utilisation de votre appareil, allant d’une simple gêne
//                   visuelle à une perte totale de fonctionnalité tactile. Notre
//                   service de remplacement d'écran vous garantit une réparation
//                   rapide, professionnelle et conforme aux standards du
//                   constructeur...
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Mobile;

// import Image from "next/image";

// const cards = [
//   {
//     title: "ÉCRAN",
//     image: "/images/screen-broken.jpg",
//     icon: "/images/ecran2.png",
//     description: "L'écran cassé ? Nous le remplaçons rapidement avec des pièces d'origine et une finition impeccable.",
//   },
//   {
//     title: "BATTERIE",
//     image: "/images/battery-repair.webp",
//     icon: "/images/battery.png",
//     description: "Batterie qui se vide trop vite ? Retrouvez une autonomie optimale grâce à notre service rapide.",
//   },
//   {
//     title: "APPAREIL PHOTO",
//     image: "/images/camera-repair.webp",
//     icon: "/images/camera.png",
//     description: "Photos floues ou caméra inactive ? On répare ou remplace votre module photo en un rien de temps.",
//   },
//   {
//     title: "HAUT-PARLEUR",
//     image: "/images/speaker.webp",
//     icon: "/images/speaker.png",
//     description: "Un son faible ou grésillant ? On vous remet le volume au maximum avec un haut-parleur neuf.",
//   },
//   {
//     title: "CONNECTIQUE",
//     image: "/images/charging-port.wbp",
//     icon: "/images/usb.png",
//     description: "Problèmes de charge ou port endommagé ? On le répare ou remplace pour une connexion parfaite.",
//   },
// ];

// const RepairCard = ({ image, icon, title, description }) => (
//   <div className="group relative flex flex-col bg-[#4F7CAC]/5 border-[3px] border-[#4F7CAC] rounded-lg p-6 w-full sm:w-[47%] lg:w-[30%] overflow-hidden">
//     <div
//       className="absolute inset-0 bg-cover bg-center opacity-20 pointer-events-none z-0 transition-transform duration-300 ease-in-out group-hover:scale-110 group-hover:rotate-6"
//       style={{ backgroundImage: `url(${image})` }}
//     />
//     <div className="relative z-10 flex flex-col gap-6">
//       <div className="flex gap-4 items-center">
//         <Image src={icon} alt={`${title} icon`} width={60} height={60} className="object-contain" />
//         <h2 className="text-2xl font-extrabold text-[#1E3A8A] tracking-widest">{title}</h2>
//       </div>
//       <p className="text-[#1E3A8A] text-lg">{description}</p>
//     </div>
//   </div>
// );

// const Mobile = () => {
//   return (
//     <div className="flex flex-col items-center justify-center w-full px-4 sm:px-10 lg:px-20 py-20 gap-20 bg-white">
//       <h1 className="text-[#1E3A8A] text-4xl md:text-5xl font-bold tracking-wide text-center">
//         QUELLE RÉPARATION POUR VOTRE MOBILE ?
//       </h1>
//       <div className="flex flex-wrap justify-center gap-6 w-full max-w-7xl">
//         {cards.map((card, index) => (
//           <RepairCard key={index} {...card} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Mobile;
