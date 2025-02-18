// import "./globals.css";

// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="fr" className="h-full">
//       <body className="flex flex-col h-full"> 
        
//         <Navbar />
//         <main className="flex-1 w-full p-4 flex items-center bg-green-900 justify-center overflow-hidden">
//           {children}
//         </main>
//         <Footer />
//       </body>
//     </html>
//   );
// }
import { BackgroundProvider } from "@/context/BackgroundContext";
import "./globals.css";
import Navbar from "@components/Navbar";
import Footer from "@/components/Footer";

// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";




export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className="h-full">
      <body className="h-screen flex flex-col">
        <BackgroundProvider>
        <Navbar /> 
        <main className=" w-full h-full flex  items-center justify-center">
          {children}
        </main>
         <Footer /> 
       </BackgroundProvider>
      </body>
    </html>
  );
}



