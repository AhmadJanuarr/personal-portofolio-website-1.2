import Image from "next/image";

const NAV_ITEMS = [
    { id: 1, name: "Projects", link: "/projects", color: "#93c5fd" },
    { id: 2, name: "About", link: "/about", color: "#a5b4fc" },
    { id: 3, name: "Contact", link: "/contact", color: "#ddd6fe" },
    { id: 4, name: "Uses", link: "/uses", color: "#e9d5ff" },
];

export default function NavList({ isMobile }: { isMobile: boolean }) {
    return (
        <ul
            className={`flex ${isMobile
                ? "flex-col gap-5 items-center"
                : "gap-5 items-center md:flex"
                } text-[16px] md:py-2`}
        >
            {NAV_ITEMS.map(({ id, name, link, color }) => (
                <li
                    key={id}
                    className="py-3 px-2 cursor-pointer w-full text-center rounded-lg hover:text-[#375ACB]"
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = color)}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "")}
                >
                    <a href={link}>{name}</a>
                </li>
            ))}
            <li>
                <Image src="/svg/Sun.svg" width={30} height={30} alt="sun" />
            </li>
        </ul>
    );
}
