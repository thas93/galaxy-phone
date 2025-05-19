// "use client";
// import Image from "next/image";
// const Home = () => {
//   return (
//     <div className="flex flex-col justify-between  w-full h-full">
//       {/* Hero section */}
//       <div className="p-10 h-full flex justify-between">
//         <div className="relative w-full h-full flex items-center justify-center">
//           {/* Le blob en arrière-plan */}
//           <div className="absolute w-[70%] h-[70%] rotate-12 bg-[#4F7CAC] rounded-[60%_40%_30%_70%_/_60%_30%_70%_40%] z-0"></div>

//           {/* L'image au-dessus du blob */}
//           <div className="relative w-[80%] h-[80%] z-10">
//             <Image
//               src="/images/i16.png"
//               alt="Iphone16"
//               fill
//               className="object-contain"
//             />
//           </div>
//         </div>

//         <div className="w-full h-full flex flex-col justify-between">
//           <div className="flex flex-col gap-4 items-center w-full">
//             <p className="text-6xl font-bold font-fontrg text-[#4F7CAC]">
//               GALAXY PHONE
//             </p>
//             <div className="flex gap-6">
//               <p className="font-extrabold text-2xl">REPARER</p>
//               <p className="font-extrabold text-2xl">-</p>
//               <p className="font-extrabold text-2xl">PROTEGER</p>
//               <p className="font-extrabold text-2xl">-</p>
//               <p className="font-extrabold text-2xl">RECONDITIONNEES</p>
//             </div>
//             <div className="flex">
//               <div className="relative w-[10vw] h-[10vh]">
//                 <Image
//                   src="/images/L1.png"
//                   alt="Magasin"
//                   fill
//                   className="object-contain"
//                 />
//               </div>
//               <div className="relative w-[10vw] h-[10vh]">
//                 <Image
//                   src="/images/L2.png"
//                   alt="Magasin"
//                   fill
//                   className="object-contain"
//                 />
//               </div>
//               <div className="relative w-[10vw] h-[10vh]">
//                 <Image
//                   src="/images/L3.png"
//                   alt="Magasin"
//                   fill
//                   className="object-contain"
//                 />
//               </div>
//               <div className="relative w-[10vw] h-[10vh]">
//                 <Image
//                   src="/images/L4.png"
//                   alt="Magasin"
//                   fill
//                   className="object-contain"
//                 />
//               </div>
//             </div>
//           </div>

//           <div>
//             <p className="font-extrabold text-3xl">
//               Et si réparer devenait un réflexe ?
//             </p>
//             <p className="font-semibold italic text-lg">
//               Plutôt que de jeter, prolongez la vie de vos téléphones et
//               ordinateurs. Chaque réparation, c’est un déchet en moins et un pas
//               de plus vers un avenir durable.
//             </p>
//           </div>

//           <div className="flex justify-center items-center">
//             <div className="flex flex-col gap-6">
//               {/* Adresse */}
//               <div className="flex items-center gap-3">
//                 <div className="relative w-[5vw] h-[5vh]">
//                   <Image
//                     src="/images/magasin.png"
//                     alt="Magasin"
//                     fill
//                     className="object-contain"
//                   />
//                 </div>
//                 <div>
//                   <p className="font-bold text-xl">14 RUE RASPAIL</p>
//                   <p className="font-bold text-xl">92270 BOIS-COLOMBES</p>
//                 </div>
//               </div>

//               {/* Téléphone */}
//               <div className="flex items-center gap-3">
//                 <div className="relative w-[5vw] h-[5vh]">
//                   <Image
//                     src="/images/fixe.png"
//                     alt="Fixe"
//                     fill
//                     className="object-contain"
//                   />
//                 </div>
//                 <p className="font-bold text-xl">09.54.07.54.42</p>
//               </div>

//               {/* E-mail */}
//               <div className="flex items-center gap-3">
//                 <div className="relative w-[5vw] h-[5vh]">
//                   <Image
//                     src="/images/email.png"
//                     alt="Email"
//                     fill
//                     className="object-contain"
//                   />
//                 </div>
//                 <p className="font-bold italic text-xl">
//                   galaxyphone92270@gmail.com
//                 </p>
//               </div>

//               <div className="flex items-center gap-3">
//                 <div className="relative w-[16vw] h-[8vh]">
//                   <Image
//                     src="/images/colis.png"
//                     alt="Email"
//                     fill
//                     className="object-contain"
//                   />
//                 </div>
//               </div>
//             </div>

//             <div className="relative w-[30vw] h-[30vh]">
//               <Image
//                 src="/images/img.png"
//                 alt="Email"
//                 fill
//                 className="object-contain"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;

"use client";
import Image from "next/image";
import { motion } from "framer-motion";

// Sous-composant pour les lignes d'information
const InfoLine = ({
  icon,
  lines,
  italic = false,
}: {
  icon: string;
  lines: string[];
  italic?: boolean;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4 }}
    className="flex items-center gap-3"
  >
    <div className="relative w-8 h-8 md:w-[5vw] md:h-[5vh]">
      <Image src={icon} alt="Icon" fill className="object-contain" />
    </div>
    <div>
      {lines.map((line, i) => (
        <p
          key={i}
          className={`font-bold text-sm md:text-xl ${italic ? "italic" : ""}`}
        >
          {line}
        </p>
      ))}
    </div>
  </motion.div>
);

// Composant principal
export default function Page() {
  return (
    <main className="flex flex-col w-full min-h-screen p-4 md:p-10">
      {/* Hero section */}
      <div className="flex flex-col lg:flex-row justify-between gap-8 w-full h-full">
        {/* Image + blob */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative w-full lg:w-1/2 h-[300px] md:h-[400px] lg:h-auto flex items-center justify-center"
        >
          <div className="absolute w-[70%] h-[70%] rotate-12 bg-[#4F7CAC] rounded-[60%_40%_30%_70%_/_60%_30%_70%_40%] z-0 shadow-xl" />
          <div className="relative w-[80%] h-[80%] z-10">
            <Image
              src="/images/home/i16.webp"
              alt="Iphone16"
              fill
              className="object-contain"
            />
          </div>
        </motion.div>

        {/* Texte + infos */}
        <div className="w-full lg:w-1/2 flex flex-col justify-between gap-8">
          {/* Titre + slogan */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-4 items-center text-center lg:text-left"
          >
            <p className="text-4xl md:text-6xl font-bold font-fontrg text-[#4F7CAC] drop-shadow-md">
              GALAXY PHONE
            </p>
            <div className="flex flex-wrap justify-center gap-3 text-lg md:text-2xl font-extrabold text-[#222]">
              <p>REPARER</p>
              <p>-</p>
              <p>PROTEGER</p>
              <p>-</p>
              <p>RECONDITIONNEES</p>
            </div>
            <div className="flex justify-between w-full flex-wrap gap-3">
              {["i1", "i2", "i3", "i4"].map((img, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative w-[60px] h-[60px] md:w-[80px] md:h-[80px]"
                >
                  <Image
                    src={`/images/icon/${img}.webp`}
                    alt={`Logo ${i + 1}`}
                    fill
                    className="object-contain"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Texte engagement */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <p className="font-extrabold text-xl md:text-3xl mb-2 text-[#333]">
              Et si réparer devenait un réflexe ?
            </p>
            <p className="font-semibold italic text-sm md:text-lg text-[#444]">
              Plutôt que de jeter, prolongez la vie de vos téléphones et
              ordinateurs. Chaque réparation, c’est un déchet en moins et un pas
              de plus vers un avenir durable.
            </p>
          </motion.div>

          {/* Coordonnées + image */}
          <div className="flex flex-col lg:flex-row justify-center items-center gap-6">
            <div className="flex flex-col gap-4 w-full max-w-md">
              <InfoLine
                icon="/images/magasin.png"
                lines={["14 RUE RASPAIL", "92270 BOIS-COLOMBES"]}
              />
              <InfoLine icon="/images/fixe.png" lines={["09.54.07.54.42"]} />
              <InfoLine
                icon="/images/email.png"
                lines={["galaxyphone92270@gmail.com"]}
                italic
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="relative w-[120px] h-[50px] md:w-[16vw] md:h-[8vh]"
              >
                <Image
                  src="/images/home/colis-prive.webp"
                  alt="Colis"
                  fill
                  className="object-contain"
                />
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative w-full max-w-[300px] h-[200px] md:w-[30vw] md:h-[30vh]"
            >
              <Image
                src="/images/img.png"
                alt="Illustration"
                fill
                className="object-contain"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  );
}
