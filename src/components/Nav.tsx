"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

const links: { name: string; path: string }[] = [
  {
    name: "home",
    path: "/home",
  },
  {
    name: "mobile",
    path: "/mobile",
  },
  {
    name: "tablette",
    path: "/tablette",
  },
  {
    name: "ordinateur",
    path: "/ordinateur",
  },

];

const Nav = () => {
  const pathname = usePathname();

  return (
    <nav className="flex gap-8">
      {links.map((link, index) => {
        return (
          <Link
            href={link.path}
            key={index}
            className={`${
              link.path === pathname &&
              "text-hoverAnime border-b-2 border-hoverAnime"
            } capitalize font-bold text-xl hover:text-hoverAnime transition-all`}
          >
            {link.name}
          </Link>

          
        );
      })}

      {/* <Link href='/login'>
      <button className="bg-platinum px-4 rounded-full text-erie ">Login</button>
      </Link> */}
    </nav>
  );
};

export default Nav;