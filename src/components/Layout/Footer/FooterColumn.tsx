export default function FooterColumn({ title, links }: { title: string; links: string[] }) {
    return (
        <div>
            <h6 className="mb-4 font-neuBold uppercase">{title}</h6>
            <ul>
                {links.map((link, index) => (
                    <li key={index} className="mb-5 font-neuBook tracking-wider">
                        <a href="#" className="text-[#444444] hover:underline cursor-pointer text-[14px]">
                            {link}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}
