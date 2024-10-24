import Image from "next/image"
import SectionHeader from "@/components/Sections/SectionHeader"
import { LIST_EXPERIENCE } from "@/data/experience"

function EpxrienceCard({
    title,
    company,
    type,
    date,
    logo,
    lenght,
}: {
    title: string
    company: string
    type: string
    date: string
    logo: string
    lenght: string
}) {
    return (
        <div className="flex w-full items-center gap-5 py-8">
            <div className="relative  items-center rounded-lg bg-gray-200 p-2">
                <Image
                    src={logo}
                    alt="logo"
                    width={70}
                    height={70}
                    className="w-full rounded-lg object-cover"
                />
            </div>
            <div className="w-full ">
                <h5 className="font-neuBold text-[12px] tracking-wider md:text-[16px]">
                    {title}
                </h5>
                <h1 className="text-[14px]s pt-1 font-neuBook tracking-wider md:text-[14px]">
                    {company} • {type}
                </h1>
                <div className="w-full font-neuBook text-[12px] tracking-wider text-[#444444] md:text-[14px]">
                    {date} • {lenght}
                </div>
            </div>
        </div>
    )
}

export default function Experience() {
    return (
        <SectionHeader
            heading="Experience"
            title="Resume"
            href="/resume"
            showButton={true}
        >
            {LIST_EXPERIENCE &&
                LIST_EXPERIENCE.map((item) => (
                    <EpxrienceCard key={item.id} {...item} />
                ))}
        </SectionHeader>
    )
}
