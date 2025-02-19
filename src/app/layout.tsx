import "./globals.css";
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className="h-full w-full overflow-hidden">
      <body className="h-full w-full flex flex-col overflow-hidden">
        <Navbar />
        <main className="flex-1 flex items-center justify-center w-full">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}







