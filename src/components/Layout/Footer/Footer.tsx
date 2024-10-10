import Image from "next/image";
import FooterColumn from "./FooterColumn";
import SosialMediaIcon from "../../Icon";

const NAV_ITEMS = [
    {
        title: "Products",
        links: ["Angular", "React", "Vue", "Laravel"],
    },
    {
        title: "Resources",
        links: ["Docs", "Guides", "API", "Community"],
    },
    {
        title: "Company",
        links: ["About", "Careers", "Contact", "Blog"],
    },
];

export default function Footer() {
    return (
        <footer className="w-full flex py-10 px-5 bg-gray-200">
            {/* Column 1 - Logo & Description */}
            <div className="flex flex-col w-2/5 pr-5">
                <div className="flex items-center mb-4">
                    <Image src="/svg/Logo.svg" alt="logo" width={100} height={100} />
                    <p className="ml-3 text-lg font-bold">Ahmad Januar</p>
                </div>
                <p className="mb-2">
                    Hi, I am a Front End Developer who loves building beautiful,
                    responsive, and functional websites.
                </p>
                <p className="mb-4">Ready to collaborate? Let&apos;s get in touch!</p>
                <SosialMediaIcon />
            </div>

            {/* Column 2-4 - Dynamic Nav Columns */}
            <div className="flex w-3/5 justify-between">
                {NAV_ITEMS.map((item, index) => (
                    <FooterColumn key={index} title={item.title} links={item.links} />
                ))}
            </div>
        </footer>
    );
}
