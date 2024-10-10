import Image from "next/image";
import FooterColumn from "./FooterColumn";
import SosialMediaIcon from "../../Icon";
import ButtonCustom from "../../Button";

const NAV_ITEMS = [
    {
        title: "NAVIGATE",
        links: ["Home", "About", "Contact", "Project", "Uses"],
    },
    {
        title: "BUILD",
        links: ["Next.Js", "TailwindCSS", "API", "Community"],
    },
    {
        title: "MISC",
        links: ["Donate", "Github", "Linkedin"],
    },
];

export default function Footer() {
    return (
        <footer className="w-full py-10 text-[14px] flex flex-col md:flex-row">
            {/* Column 1 - Logo & Description */}
            <div className="flex flex-col md:w-2/5 pr-5 pb-10">
                <div className="flex items-center mb-4">
                    <Image src="/img/picture.jpg" alt="logo" width={50} height={50} className="rounded-full" />
                    <p className="ml-3 text-lg font-neuBold text-secondary tracking-wider">Ahmad Januar</p>
                </div>
                <p className="mb-2 text-[14px] font-neuBook tracking-wider">
                    Hi, I am a Front End Developer who loves building beautiful,
                    responsive, and functional websites.
                </p>
                <p className="mb-4 text-[14px] font-neuBook tracking-wider">Ready to collaborate? Let&apos;s <span className="text-secondary font-neuBold">get in touch</span>!</p>
                <SosialMediaIcon />
                <div className="w-1/2 pt-10 md:w-full">
                    <ButtonCustom src="/svg/Touch.svg">Get in touch</ButtonCustom>
                </div>
            </div>

            {/* Column 2-4 - Dynamic Nav Columns */}
            <div className="flex md:w-3/5 justify-between">
                {NAV_ITEMS.map((item, index) => (
                    <FooterColumn key={index} title={item.title} links={item.links} />
                ))}
            </div>
        </footer>
    );
}
