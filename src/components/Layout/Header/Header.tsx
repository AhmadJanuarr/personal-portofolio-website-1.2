import Link from "next/link"
import NavList from "./NavList"
import SosialMediaIcon from "../../Icon"
import { useState } from "react"

export default function Header() {
  const [open, setOpen] = useState(false)
  const toggleMenu = () => setOpen(!open)

  return (
    <header className="fixed left-0 top-0 z-10 flex w-full items-center px-5 py-4 backdrop-blur-sm">
      <nav className="mx-auto flex w-full max-w-[800px] flex-col justify-between rounded-lg border border-[#92AEE9] bg-[#EDF3FF] px-5 tracking-wider opacity-80">
        <div className="flex w-full items-center justify-between py-5 font-neuMedium md:py-0">
          <Link href="/" onClick={open ? toggleMenu : undefined}>
            <h1 className="cursor-pointer text-secondary">© Code by Ahmad</h1>
          </Link>
          <div className="hidden md:flex">
            <NavList isMobile={false} />
          </div>
          <button onClick={toggleMenu} className="cursor-pointer md:hidden">
            <img
              src={!open ? "/svg/Menu.svg" : "/svg/Multiply.svg"}
              width={30}
              height={30}
              alt="menu toggle"
              className="h-auto w-auto"
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
  )
}
