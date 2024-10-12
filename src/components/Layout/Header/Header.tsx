import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import NavList from "./NavList";
import SosialMediaIcon from "../../Icon";

export default function Header() {
  const [open, setOpen] = useState(false);
  const toggleMenu = () => setOpen(!open);

  return (
    <header className="fixed left-0 top-0 z-50 flex w-full items-center px-5 py-4 backdrop-blur-sm">
      <nav className="z-10 mx-auto flex w-full max-w-[800px] flex-col justify-between rounded-lg border border-[#92AEE9] bg-[#EDF3FF] px-5 opacity-80">
        <div className="flex w-full items-center justify-between py-5 font-neuMedium md:py-0">
          <Link href="/" onClick={toggleMenu}>
            <h1 className="cursor-pointer text-secondary">© Code by Ahmad</h1>
          </Link>
          <div className="hidden md:flex">
            <NavList isMobile={false} />
          </div>
          <button onClick={toggleMenu} className="cursor-pointer md:hidden">
            <Image
              src={!open ? "/svg/Menu.svg" : "/svg/Multiply.svg"}
              width={30}
              height={30}
              alt="menu toggle"
            />
          </button>
        </div>
        {/* Mobile View */}
        {open && (
          <div className="h-auto w-full py-16 font-neuBold">
            <NavList isMobile={true} toggleMenu={toggleMenu} />
            <div className="flex items-center justify-center gap-5 pt-24">
              <SosialMediaIcon />
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
