import "./globals.css";
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className="h-full">
      <body className="h-screen flex flex-col">      
        <Navbar /> 
        <main className=" w-full h-full flex  items-center justify-center">
          {children}
        </main>
         <Footer />        
      </body>
    </html>
  );
}



