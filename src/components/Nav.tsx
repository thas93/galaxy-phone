"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

// ✅ Typage correct des props
interface NavProps {
  isMobile?: boolean;
  closeMenu?: () => void;
}

const links = [
  { name: "home", path: "/home" },
  { name: "mobile", path: "/mobile" },
  // { name: "tablette", path: "/tablette" },
  // { name: "ordinateur", path: "/ordinateur" },
];

const Nav: React.FC<NavProps> = ({ isMobile = false, closeMenu }) => {
  const pathname = usePathname();

  return (
    <nav className={`flex ${isMobile ? "flex-col items-center gap-6" : "gap-8"}`}>
      {links.map((link, index) => (
        <Link
          key={index}
          href={link.path}
          onClick={closeMenu} // ✅ Ferme le menu en mobile
          className={`${
            link.path === pathname ? "text-hoverAnime border-b-2 border-hoverAnime" : ""
          } capitalize font-bold text-xl text-[#4F7CAC] hover:text-hoverAnime transition-all`}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
};

export default Nav;


