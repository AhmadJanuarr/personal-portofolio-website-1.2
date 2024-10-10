export default function FooterColumn({ title, links }: { title: string; links: string[] }) {
    return (
        <div>
            <h6 className="mb-4 font-semibold uppercase">{title}</h6>
            <ul>
                {links.map((link, index) => (
                    <li key={index} className="mb-2">
                        <a href="#" className="text-neutral-600 dark:text-neutral-200 hover:underline">
                            {link}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}
