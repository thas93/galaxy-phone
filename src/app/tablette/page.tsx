import Image from "next/image";

type TabPart = {
  title: string;
  icon: string;
  bgImage: string;
  description: string;
};

const mobileParts: TabPart[] = [
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
    title: "DÉSOXYDATION",
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

const TabCard = ({ title, icon, bgImage, description }: TabPart) => (
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
        {mobileParts.map((part, index) => (
          <div key={index} className="h-full">
            <TabCard {...part} />
          </div>
        ))}
      </div>
    </section>
  );
}
