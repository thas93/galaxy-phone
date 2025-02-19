import Link from "next/link";
import Image from "next/image";
import Nav from "./Nav";
const Navbar = () => {
  return (
     <div className="py-8 xl:py-4 m-0 text-black bg-blue-900">
      <div className=" px-4 mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex justify-center items-center gap-3 ">
          <Image
            src="/images/logo.png"
            alt="logo"
            width={50}
            height={60}
            className=""
          />
          <div className="flex flex-col items-center">
            <h1
              className="text-5xl font-semibold text-blue-900  tracking-[0.3rem]"
              style={{ WebkitTextStroke: "1.5px #ffffff" }}>            
              Galaxy Phone
            </h1>
            
          </div>
        </Link>

        {/* desktop Nav */}
        <div className="hidden xl:flex items-center gap-8 ">
          <Nav />
       
        </div>

        {/* mobile Nav */}
        <div className="xl:hidden">
         
        </div>
      </div>
    </div>
  )
}

export default Navbar