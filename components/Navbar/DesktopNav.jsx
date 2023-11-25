import {useState} from "react";
import ContainerLayout from "../../Layouts/ContainerLayout";


import { useRouter } from "next/router";

import logo from "../../assets/png/acid-logo.png"
import Image from "next/image";
import Link from "next/link";
const Navbar = () => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  return (
    <div className="fixed top-0 right-0 left-0 z-high w-full h-[85px]  items-center nav-styl hidden md:flex bg-white">
      <ContainerLayout>
        <div className="w-full flex justify-between items-center mt-4">
          <div className="w-fit cursor-pointer" onClick={() => router.push("/")}>
           <Image src={logo} alt="acied logo" />
          </div>
          <div className="w-fit space-x-[50px] flex ">
            <Link
              href="#about"
              className="text-[#0e0e0e] text-xl cursor-pointer  font-[400] "
            >
              About us
            </Link>
            <Link
              href="/safe-migration"
              className="text-[#0e0e0e] text-xl cursor-pointer  font-[400] "
            >
              Safe migration
            </Link>
            <Link
              href="#"
              className="text-[#0e0e0e] text-xl cursor-pointer  font-[400] "
            >
              Testimonials
            </Link>
          
            <Link
              href="#contact"
              className="text-[#0e0e0e] text-xl cursor-pointer  font-[400] "
            >
              Contact Us
            </Link>
          </div>
          <div className="w-fit flex items-center  space-x-4   ">
            <p
              onClick={() => router.push("#contact")}
              className="w-auto  px-8 py-4 hover:border hover:border-customBlack text-white hover:bg-white bg-primary hover:text-customBlack flex items-center justify-center   cursor-pointer"
            >
              Contact us
            </p>
            {/* <p
              onClick={() => setOpen(!open)}
              className="w-auto  px-8 py-4 hover:bg-[#0047A7] bg-[#0e0e0e] cursor-pointer text-white flex items-center justify-center rounded-[6px]"
            >
              Get Started
            </p> */}
          </div>
        </div>
      </ContainerLayout>
    
    </div>
  );
};

export default Navbar;
