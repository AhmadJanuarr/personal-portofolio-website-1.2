import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import NavList from "./NavList";
import SosialMediaIcon from "../../Icon";

export default function Header() {
    const [open, setOpen] = useState(false);
    const toggleMenu = () => setOpen(!open);

    return (
        <header className="w-full py-4 backdrop-blur-sm fixed top-0 left-0 flex items-center px-5 z-50">
            <nav className="w-full max-w-[800px] bg-[#EDF3FF] border border-[#92AEE9] rounded-lg px-5 flex justify-between mx-auto z-10 flex-col opacity-80">
                <div className="flex justify-between w-full items-center py-5 md:py-0 font-neuMedium">
                    <Link href="/">
                        <h1 className="text-secondary cursor-pointer">© Code by Ahmad</h1>
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
                    <div className="w-full py-16 h-auto font-neuBold">
                        <NavList isMobile={true} />
                        <div className="gap-5 flex items-center justify-center pt-24">
                            <SosialMediaIcon />
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
}
