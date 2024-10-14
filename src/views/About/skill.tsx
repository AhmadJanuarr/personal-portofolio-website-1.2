import Image from "next/image";
import Link from "next/link";
import { AbilityType } from "@/types/ability.type";

export function Card({
    url,
    icon,
    name,
    color,
}: {
    url: string;
    icon: string;
    name: string;
    color: string;
}) {
    return (
        <Link href={url} target="_blank">
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

export default function Skill({ ability }: { ability: AbilityType[] }) {
    return (
        <div className="py-10">
            <h1 className="py-7 font-neuBold text-2xl">Skill</h1>
            <div className="flex w-full flex-wrap gap-3">
                {ability.map(({ id, name, url, icon, color }) => (
                    <Card key={id} url={url || "#"} icon={icon} name={name} color={color} />
                ))}
            </div>
        </div>
    );
}
