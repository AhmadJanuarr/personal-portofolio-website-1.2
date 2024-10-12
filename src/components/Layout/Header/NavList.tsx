import Image from "next/image";
import Link from "next/link";

const NAV_ITEMS = [
  { id: 1, name: "Projects", link: "/projects", color: "#93c5fd" },
  { id: 2, name: "About", link: "/about", color: "#a5b4fc" },
  { id: 3, name: "Contact", link: "/contact", color: "#ddd6fe" },
  { id: 4, name: "Uses", link: "/uses", color: "#e9d5ff" },
];

export default function NavList({ isMobile, toggleMenu }: { isMobile: boolean, toggleMenu?: () => void }) {
  // const headerActive = useRouter()

  return (
    <ul
      className={`flex ${isMobile ? "flex-col items-center gap-5" : "items-center gap-5 md:flex"
        } text-[16px] md:py-2`}
    >
      {NAV_ITEMS.map(({ id, name, link, color }) => (
        <Link
          key={id}
          href={link}
          style={{ "--color": color } as React.CSSProperties}
          className="w-full cursor-pointer rounded-lg px-2 py-3 text-center hover:text-[#375ACB] hover:bg-[var(--color)] transition-all duration-75"
          onClick={toggleMenu}
        >
          <li>{name}</li>
        </Link>
      ))}
      <li className="flex w-full cursor-pointer items-center justify-center px-2 py-3">
        <Image src="/svg/Sun.svg" width={35} height={35} alt="sun" />
      </li>
    </ul>
  );
}
