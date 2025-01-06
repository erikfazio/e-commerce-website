import Image from "next/image";
import logoImage from "../../public/images/stylenest.svg";
import { RiMenuFill, RiShoppingBag3Line } from "react-icons/ri";

export default function Navbar() {
  return (
    <header className="flex flex-col justify-center items-center self-stretch pt-4">
      <div className="container flex justify-between h-[68px]">
        <Image src={logoImage} alt="Logo" width={100} height={100} />
        <div className="flex items-center gap-4">
          <button>
            <RiShoppingBag3Line className="text-neutral-600 w-6 h-6" />
          </button>
          <button>
            <RiMenuFill className="text-neutral-600 w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
  );
}
