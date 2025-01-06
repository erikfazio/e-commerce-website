import Image from "next/image";
import logoImage from "../../public/images/stylenest.svg";
import { RiMenuFill, RiShoppingBag3Line } from "react-icons/ri";
import NavbarNav from "./navbar-nav";

export default function Navbar() {
  return (
    <header className="flex flex-col justify-center items-center self-stretch pt-4">
      <div className="container flex justify-between h-[68px] gap-[103px]">
        <Image src={logoImage} alt="Logo" width={105} height={32} />
        <NavbarNav />
        <div className="flex items-center gap-4">
          <button>
            <RiShoppingBag3Line className="text-neutral-600 w-6 h-6" />
          </button>
          <button className="desktop:hidden">
            <RiMenuFill className="text-neutral-600 w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
  );
}
