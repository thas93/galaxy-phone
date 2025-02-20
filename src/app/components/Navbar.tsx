"use client";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { name: "Home", path: "/" },
  { name: "Mobile", path: "/mobile" },
  { name: "Tablette", path: "/tablette" },
  { name: "Ordinateur", path: "/ordinateur" },
  { name: "Macbook", path: "/macbook" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="p-4 border-b-2  text-black bg-white shadow-md relative">
      <div className="mx-auto flex justify-between items-center w-full ">
        {/* Logo */}
        <Link href="/" className="text-2xl flex flex-col items-center font-bold font-fontrg">
          <div className="flex">
            <p className="text-5xl">G</p>
            <p className="text-5xl">P</p>
          </div>
          Galaxy Phone
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex gap-8">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              className="capitalize font-bold text-xl hover:text-blue-500 transition-all"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        {!isOpen && (
          <button
            className="xl:hidden p-2 z-50"
            onClick={() => setIsOpen(true)}
            aria-label="Open Menu"
          >
            <Menu size={30} />
          </button>
        )}
      </div>

      {/* Mobile Fullscreen Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, x: "100%" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: "100%" }}
          className="fixed top-0 left-0 w-screen h-screen bg-white flex flex-col items-center justify-center z-40"
        >
          {/* Close Button Inside the Menu */}
          <button
            className="absolute top-5 right-5 p-2"
            onClick={() => setIsOpen(false)}
            aria-label="Close Menu"
          >
            <X size={30} />
          </button>

          {/* Navigation Links (Vertical Alignment) */}
          <nav className="flex flex-col items-center gap-6">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                className="text-3xl font-bold text-black hover:text-blue-500 transition-all"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;
