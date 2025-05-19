// "use client";

// import Image from "next/image";

// const Tablette = () => {
//   return (
//     <div className="flex flex-col justify-center items-center w-screen min-h-screen bg-auto bg-fixed backdrop-blur-sm">
//        <div className="flex justify-center items-center gap-10">
//         <h1 className="text-4xl p-10 font-black text-[#4F7CAC] tracking-[0.3rem]">
//           TABLETTE
//         </h1>
//       </div>

      
//             <div className="px-50 flex flex-col justify-center items-center gap-6 w-screen h-full">
//               <div className="flex gap-6">
//                 <div className="group relative flex flex-col bg-[#4F7CAC]/5 content-start border-3 border-[#4F7CAC] rounded-lg p-4 overflow-hidden">
//                   {/* Image de fond avec zoom au hover */}
//                   <div className="absolute inset-0 bg-[url('/images/tab.png')] bg-cover bg-center opacity-20 pointer-events-none z-0 transition-transform duration-300  ease-in-out group-hover:scale-110 group-hover:rotate-6"></div>
      
//                   {/* Contenu principal */}
//                   <div className="relative z-10 flex flex-col gap-6 rounded-lg content-start">
//                     <div className="flex gap-10 items-center">
//                       <Image
//                         src="/images/ecran2.png"
//                         alt="screen"
//                         width={70}
//                         height={70}
//                         className="w-[70px] h-[70px] object-contain"
//                       />
//                       <h1 className="text-2xl font-black text-[#1E3A8A] tracking-[0.3rem]">
//                         ECRAN
//                       </h1>
//                     </div>
//                     <div className="flex justify-start">
//                       <p className="text-[#1E3A8A] text-xl">
//                         Un écran de téléphone fissuré ou brisé peut nuire à
//                         l'utilisation de votre appareil, allant d’une simple gêne
//                         visuelle à une perte totale de fonctionnalité tactile. Notre
//                         service de remplacement d'écran vous garantit une réparation
//                         rapide, professionnelle et conforme aux standards du
//                         constructeur...
//                       </p>
//                     </div>
//                   </div>
//                 </div>
      
//                 <div className="group relative flex flex-col bg-[#4F7CAC]/5 content-start border-3 border-[#4F7CAC] rounded-lg p-4 overflow-hidden">
//                   {/* Application de l'image de fond avec opacité réduite */}
//                   <div className="absolute inset-0 bg-[url('/images/ipad-back.jpg')] bg-cover bg-center opacity-20 pointer-events-none z-0 transition-transform duration-300  ease-in-out group-hover:scale-110 group-hover:rotate-6"></div>
      
//                   {/* Contenu principal */}
//                   <div className="relative z-10 flex flex-col gap-6 rounded-lg content-start">
//                     <div className="flex gap-10 items-center">
//                       <Image
//                         src="/images/back.png"
//                         alt="screen"
//                         width={70}
//                         height={70}
//                         className="w-[70px] h-[70px] object-contain"
//                       />
//                       <h1 className="text-2xl font-black text-[#1E3A8A] tracking-[0.3rem]">
//                         VITRE ARRIÈRE
//                       </h1>
//                     </div>
//                     <div className="flex justify-start">
//                       <p className="text-[#1E3A8A] text-xl">
//                         Un écran de téléphone fissuré ou brisé peut nuire à
//                         l'utilisation de votre appareil, allant d’une simple gêne
//                         visuelle à une perte totale de fonctionnalité tactile. Notre
//                         service de remplacement d'écran vous garantit une réparation
//                         rapide, professionnelle et conforme aux standards du
//                         constructeur...
//                       </p>
//                     </div>
//                   </div>
//                 </div>
      
//                 <div className="group relative flex flex-col bg-[#4F7CAC]/5 content-start border-3 border-[#4F7CAC] rounded-lg p-4 overflow-hidden">
//                   {/* Application de l'image de fond avec opacité réduite */}
//                   <div className="absolute inset-0 bg-[url('/images/lens-back.webp')] bg-cover bg-center opacity-20 pointer-events-none z-0 transition-transform duration-300  ease-in-out group-hover:scale-110 group-hover:rotate-6"></div>
      
//                   {/* Contenu principal */}
//                   <div className="relative z-10 flex flex-col gap-6 rounded-lg content-start">
//                     <div className="flex gap-10 items-center">
//                       <Image
//                         src="/images/lens.png"
//                         alt="screen"
//                         width={70}
//                         height={70}
//                         className="w-[70px] h-[70px] object-contain"
//                       />
//                       <h1 className="text-2xl font-black text-[#1E3A8A] tracking-[0.3rem]">
//                         LENTILLES ARRIÈRE
//                       </h1>
//                     </div>
//                     <div className="flex justify-start">
//                       <p className="text-[#1E3A8A] text-xl">
//                         Un écran de téléphone fissuré ou brisé peut nuire à
//                         l'utilisation de votre appareil, allant d’une simple gêne
//                         visuelle à une perte totale de fonctionnalité tactile. Notre
//                         service de remplacement d'écran vous garantit une réparation
//                         rapide, professionnelle et conforme aux standards du
//                         constructeur...
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
      
//               <div className="flex gap-6">
//                 <div className="group relative flex flex-col bg-[#4F7CAC]/5 content-start border-3 border-[#4F7CAC] rounded-lg p-4 overflow-hidden">
//                   {/* Application de l'image de fond avec opacité réduite */}
//                   <div className="absolute inset-0 bg-[url('/images/ipad-battery.jpg')] bg-cover bg-center opacity-20 pointer-events-none z-0 transition-transform duration-300  ease-in-out group-hover:scale-110 group-hover:rotate-6"></div>
      
//                   {/* Contenu principal */}
//                   <div className="relative z-10 flex flex-col gap-6 rounded-lg content-start">
//                     <div className="flex gap-10 items-center">
//                       <Image
//                         src="/images/battery.png"
//                         alt="screen"
//                         width={70}
//                         height={70}
//                         className="w-[70px] h-[70px] object-contain"
//                       />
//                       <h1 className="text-2xl font-black text-[#1E3A8A] tracking-[0.3rem]">
//                         BATTERIE
//                       </h1>
//                     </div>
//                     <div className="flex justify-start">
//                       <p className="text-[#1E3A8A] text-xl">
//                         Un écran de téléphone fissuré ou brisé peut nuire à
//                         l'utilisation de votre appareil, allant d’une simple gêne
//                         visuelle à une perte totale de fonctionnalité tactile. Notre
//                         service de remplacement d'écran vous garantit une réparation
//                         rapide, professionnelle et conforme aux standards du
//                         constructeur...
//                       </p>
//                     </div>
//                   </div>
//                 </div>
      
//                 <div className="group relative flex flex-col bg-[#4F7CAC]/5 content-start border-3 border-[#4F7CAC] rounded-lg p-4 overflow-hidden">
//                   {/* Application de l'image de fond avec opacité réduite */}
//                   <div className="absolute inset-0 bg-[url('/images/ipad-connecteur.png')] bg-cover bg-center opacity-20 pointer-events-none z-0 transition-transform duration-300  ease-in-out group-hover:scale-110 group-hover:rotate-6"></div>
      
//                   {/* Contenu principal */}
//                   <div className="relative z-10 flex flex-col gap-6 rounded-lg content-start">
//                     <div className="flex gap-10 items-center">
//                       <Image
//                         src="/images/connector.png"
//                         alt="screen"
//                         width={70}
//                         height={70}
//                         className="w-[70px] h-[70px] object-contain"
//                       />
//                       <h1 className="text-2xl font-black text-[#1E3A8A] tracking-[0.3rem]">
//                         CONNECTEUR DE CHARGE
//                       </h1>
//                     </div>
//                     <div className="flex justify-start">
//                       <p className="text-[#1E3A8A] text-xl">
//                         Un écran de téléphone fissuré ou brisé peut nuire à
//                         l'utilisation de votre appareil, allant d’une simple gêne
//                         visuelle à une perte totale de fonctionnalité tactile. Notre
//                         service de remplacement d'écran vous garantit une réparation
//                         rapide, professionnelle et conforme aux standards du
//                         constructeur...
//                       </p>
//                     </div>
//                   </div>
//                 </div>
      
//                 <div className="group relative flex flex-col bg-[#4F7CAC]/5 content-start border-3 border-[#4F7CAC] rounded-lg p-4 overflow-hidden">
//                   {/* Application de l'image de fond avec opacité réduite */}
//                   <div className="absolute inset-0 bg-[url('/images/waterpad.png')] bg-cover bg-center opacity-20 pointer-events-none z-0 transition-transform duration-300  ease-in-out group-hover:scale-110 group-hover:rotate-6"></div>
      
//                   {/* Contenu principal */}
//                   <div className="relative z-10 flex flex-col gap-6 rounded-lg content-start">
//                     <div className="flex gap-10 items-center">
//                       <Image
//                         src="/images/water.png"
//                         alt="screen"
//                         width={70}
//                         height={70}
//                         className="w-[70px] h-[70px] object-contain"
//                       />
//                       <h1 className="text-2xl font-black text-[#1E3A8A] tracking-[0.3rem]">
//                         DÉSOXYDATION
//                       </h1>
//                     </div>
//                     <div className="flex justify-start">
//                       <p className="text-[#1E3A8A] text-xl">
//                         Un écran de téléphone fissuré ou brisé peut nuire à
//                         l'utilisation de votre appareil, allant d’une simple gêne
//                         visuelle à une perte totale de fonctionnalité tactile. Notre
//                         service de remplacement d'écran vous garantit une réparation
//                         rapide, professionnelle et conforme aux standards du
//                         constructeur...
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
      
//               <div className="flex gap-6">
//                 <div className="group relative flex flex-col bg-[#4F7CAC]/5 content-start border-3 border-[#4F7CAC] rounded-lg p-4 overflow-hidden">
//                   {/* Application de l'image de fond avec opacité réduite */}
//                   <div className="absolute inset-0 bg-[url('/images/taptic.jpg')] bg-cover bg-center opacity-20 pointer-events-none z-0 transition-transform duration-300  ease-in-out group-hover:scale-110 group-hover:rotate-6"></div>
      
//                   {/* Contenu principal */}
//                   <div className="relative z-10 flex flex-col gap-6 rounded-lg content-start">
//                     <div className="flex gap-10 items-center">
//                       <Image
//                         src="/images/vibration.png"
//                         alt="screen"
//                         width={70}
//                         height={70}
//                         className="w-[70px] h-[70px] object-contain"
//                       />
//                       <h1 className="text-2xl font-black text-[#1E3A8A] tracking-[0.3rem]">
//                         VIBREUR
//                       </h1>
//                     </div>
//                     <div className="flex justify-start">
//                       <p className="text-[#1E3A8A] text-xl">
//                         Un écran de téléphone fissuré ou brisé peut nuire à
//                         l'utilisation de votre appareil, allant d’une simple gêne
//                         visuelle à une perte totale de fonctionnalité tactile. Notre
//                         service de remplacement d'écran vous garantit une réparation
//                         rapide, professionnelle et conforme aux standards du
//                         constructeur...
//                       </p>
//                     </div>
//                   </div>
//                 </div>
      
//                 <div className="group relative flex flex-col bg-[#4F7CAC]/5 content-start border-3 border-[#4F7CAC] rounded-lg p-4 overflow-hidden">
//                   {/* Application de l'image de fond avec opacité réduite */}
//                   <div className="absolute inset-0 bg-[url('/images/speaker-pad.jpg')] bg-cover bg-center opacity-20 pointer-events-none z-0 transition-transform duration-300  ease-in-out group-hover:scale-110 group-hover:rotate-6"></div>
      
//                   {/* Contenu principal */}
//                   <div className="relative z-10 flex flex-col gap-6 rounded-lg content-start">
//                     <div className="flex gap-10 items-center">
//                       <Image
//                         src="/images/volume.png"
//                         alt="screen"
//                         width={70}
//                         height={70}
//                         className="w-[70px] h-[70px] object-contain"
//                       />
//                       <h1 className="text-2xl font-black text-[#1E3A8A] tracking-[0.3rem]">
//                         HAUT-PARLEUR
//                       </h1>
//                     </div>
//                     <div className="flex justify-start">
//                       <p className="text-[#1E3A8A] text-xl">
//                         Un écran de téléphone fissuré ou brisé peut nuire à
//                         l'utilisation de votre appareil, allant d’une simple gêne
//                         visuelle à une perte totale de fonctionnalité tactile. Notre
//                         service de remplacement d'écran vous garantit une réparation
//                         rapide, professionnelle et conforme aux standards du
//                         constructeur...
//                       </p>
//                     </div>
//                   </div>
//                 </div>
      
//                 <div className="group relative flex flex-col bg-[#4F7CAC]/5 content-start border-3 border-[#4F7CAC] rounded-lg p-4 overflow-hidden">
//                   {/* Application de l'image de fond avec opacité réduite */}
//                   <div className="absolute inset-0 bg-[url('/images/micro.webp')] bg-cover bg-center opacity-20 pointer-events-none z-0 transition-transform duration-300  ease-in-out group-hover:scale-110 group-hover:rotate-6"></div>
      
//                   {/* Contenu principal */}
//                   <div className="relative z-10 flex flex-col gap-6 rounded-lg content-start">
//                     <div className="flex gap-10 items-center">
//                       <Image
//                         src="/images/mic.png"
//                         alt="screen"
//                         width={70}
//                         height={70}
//                         className="w-[70px] h-[70px] object-contain"
//                       />
//                       <h1 className="text-2xl font-black text-[#1E3A8A] tracking-[0.3rem]">
//                         MICRO
//                       </h1>
//                     </div>
//                     <div className="flex justify-start">
//                       <p className="text-[#1E3A8A] text-xl">
//                         Un écran de téléphone fissuré ou brisé peut nuire à
//                         l'utilisation de votre appareil, allant d’une simple gêne
//                         visuelle à une perte totale de fonctionnalité tactile. Notre
//                         service de remplacement d'écran vous garantit une réparation
//                         rapide, professionnelle et conforme aux standards du
//                         constructeur...
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="flex gap-6">
//                 <div className="group relative flex flex-col bg-[#4F7CAC]/5 content-start border-3 border-[#4F7CAC] rounded-lg p-4 overflow-hidden">
//                   {/* Application de l'image de fond avec opacité réduite */}
//                   <div className="absolute inset-0 bg-[url('/images/ipad-cam.jpg')] bg-cover bg-center opacity-20 pointer-events-none z-0 transition-transform duration-300  ease-in-out group-hover:scale-110 group-hover:rotate-6"></div>
      
//                   {/* Contenu principal */}
//                   <div className="relative z-10 flex flex-col gap-6 rounded-lg content-start">
//                     <div className="flex gap-10 items-center">
//                       <Image
//                         src="/images/cam.png"
//                         alt="screen"
//                         width={70}
//                         height={70}
//                         className="w-[70px] h-[70px] object-contain"
//                       />
//                       <h1 className="text-2xl font-black text-[#1E3A8A] tracking-[0.3rem]">
//                         CAMÉRA FRONTALE
//                       </h1>
//                     </div>
//                     <div className="flex justify-start">
//                       <p className="text-[#1E3A8A] text-xl">
//                         Un écran de téléphone fissuré ou brisé peut nuire à
//                         l'utilisation de votre appareil, allant d’une simple gêne
//                         visuelle à une perte totale de fonctionnalité tactile. Notre
//                         service de remplacement d'écran vous garantit une réparation
//                         rapide, professionnelle et conforme aux standards du
//                         constructeur...
//                       </p>
//                     </div>
//                   </div>
//                 </div>
      
//                 <div className="group relative flex flex-col bg-[#4F7CAC]/5 content-start border-3 border-[#4F7CAC] rounded-lg p-4 overflow-hidden">
//                   {/* Application de l'image de fond avec opacité réduite */}
//                   <div className="absolute inset-0 bg-[url('/images/ipad-cam-back.jpg')] bg-cover bg-center opacity-20 pointer-events-none z-0 transition-transform duration-300  ease-in-out group-hover:scale-110 group-hover:rotate-6"></div>
      
//                   {/* Contenu principal */}
//                   <div className="relative z-10 flex flex-col gap-6 rounded-lg content-start">
//                     <div className="flex gap-10 items-center">
//                       <Image
//                         src="/images/cam.png"
//                         alt="screen"
//                         width={70}
//                         height={70}
//                         className="w-[70px] h-[70px] object-contain"
//                       />
//                       <h1 className="text-2xl font-black text-[#1E3A8A] tracking-[0.3rem]">
//                         CAMÈRA ARRIÈRE
//                       </h1>
//                     </div>
//                     <div className="flex justify-start">
//                       <p className="text-[#1E3A8A] text-xl">
//                         Un écran de téléphone fissuré ou brisé peut nuire à
//                         l'utilisation de votre appareil, allant d’une simple gêne
//                         visuelle à une perte totale de fonctionnalité tactile. Notre
//                         service de remplacement d'écran vous garantit une réparation
//                         rapide, professionnelle et conforme aux standards du
//                         constructeur...
//                       </p>
//                     </div>
//                   </div>
//                 </div>
      
//                 <div className="group relative flex flex-col bg-[#4F7CAC]/5 content-start border-3 border-[#4F7CAC] rounded-lg p-4 overflow-hidden">
//                   {/* Application de l'image de fond avec opacité réduite */}
//                   <div className="absolute inset-0 bg-[url('/images/capteur.jpg')] bg-cover bg-center opacity-20 pointer-events-none z-0 transition-transform duration-300  ease-in-out group-hover:scale-110 group-hover:rotate-6"></div>
      
//                   {/* Contenu principal */}
//                   <div className="relative z-10 flex flex-col gap-6 rounded-lg content-start">
//                     <div className="flex gap-10 items-center">
//                       <Image
//                         src="/images/capteur.png"
//                         alt="screen"
//                         width={70}
//                         height={70}
//                         className="w-[70px] h-[70px] object-contain"
//                       />
//                       <h1 className="text-2xl font-black text-[#1E3A8A] tracking-[0.3rem]">
//                         CAPTEUR DE PROXIMITÉ
//                       </h1>
//                     </div>
//                     <div className="flex justify-start">
//                       <p className="text-[#1E3A8A] text-xl">
//                         Un écran de téléphone fissuré ou brisé peut nuire à
//                         l'utilisation de votre appareil, allant d’une simple gêne
//                         visuelle à une perte totale de fonctionnalité tactile. Notre
//                         service de remplacement d'écran vous garantit une réparation
//                         rapide, professionnelle et conforme aux standards du
//                         constructeur...
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//     </div>
//   );
// };

// export default Tablette;



import Image from "next/image";

const tabParts = [
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

const TabCard = ({ title, icon, bgImage, description }) => (
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

export default function Tab() {
  return (
    <section className="w-full py-12 px-4 md:px-12 lg:px-24">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr">
        {tabParts.map((part, index) => (
          <div key={index} className="h-full">
            <TabCard {...part} />
          </div>
        ))}
      </div>
    </section>
  );
}