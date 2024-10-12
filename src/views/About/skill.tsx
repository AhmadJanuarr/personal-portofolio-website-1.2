import Image from "next/image";
import Link from "next/link";
import { LIST_MY_SKILL } from "@/data/listMySkill";

export function Card({
    link,
    icon,
    name,
    color,
}: {
    link: string;
    icon: string;
    name: string;
    color: string;
}) {
    return (
        <Link href={link} target="_blank">
            <button
                style={{ "--color": color } as React.CSSProperties}
                className="flex items-center rounded-lg border border-[#D9D9D9] px-3 grayscale filter hover:grayscale-0 transition-all duration-75 hover:border-[var(--color)] hover:text-[var(--color)] hover:shadow"
            >
                <Image src={icon} width={20} height={20} alt={name} />
                <span className="py-2 pl-3 text-[14px] md:text-[16px]">{name}</span>
            </button>
        </Link>
    );
}

export default function Skill() {
    return (
        <div className="py-10">
            <h1 className="py-7 font-neuBold text-2xl">Skill</h1>
            <div className="flex w-full flex-wrap gap-3">
                {LIST_MY_SKILL.map(({ id, name, link, icon, color }) => (
                    <Card key={id} link={link} icon={icon} name={name} color={color} />
                ))}
            </div>
        </div>
    );
}
