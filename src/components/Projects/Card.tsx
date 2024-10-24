import Image from "next/image"
import StarContainer from "./Star"
import useSWR from "swr"
import { ProjectsType } from "@/types/projects.type"
import { fetching } from "@/lib/swr/fetch"
import { useRouter } from "next/router"
import Link from "next/link"
import Loading from "../Loading"

export default function CardProject() {
    const { data, isLoading } = useSWR(
        `${process.env.NEXT_PUBLIC_API_URL}/api/projects`,
        fetching,
    )
    const projectData = data?.data || []

    return (
        <div className="w-full font-neuBook tracking-wider">
            {!isLoading ? (
                <>
                    {projectData.map(
                        ({
                            id,
                            color,
                            image,
                            title,
                            star,
                            description,
                            date,
                        }: ProjectsType) => (
                            <Link href={`projects/${title}`}
                                key={id}
                                style={{ "--color": color } as React.CSSProperties}
                                className="group flex gap-3 rounded-lg py-3 pl-4 transition-all duration-75 hover:bg-[var(--color)] lg:py-4 cursor-pointer"
                            >
                                <div className="relative">
                                    <Image
                                        src={image}
                                        alt={title}
                                        width={100}
                                        height={100}
                                        sizes="(max-width: 768px) 100px, (max-width: 1390px) 130px, 130px"
                                        className="rounded-lg object-cover transition-all duration-75 group-hover:scale-105"
                                    />
                                </div>

                                <div className="w-full">
                                    <div className="flex items-center gap-2">
                                        <h1 className="font-neuBold text-[14px] md:text-[18px]">
                                            {title}
                                        </h1>
                                        <StarContainer>{star}</StarContainer>
                                    </div>

                                    <p className="text-[14px] md:text-[16px]">
                                        {description.slice(0, 50)}...
                                    </p>

                                    <p className="font-neuThin text-[14px] text-[#444444] md:text-[14px]">
                                        {date}
                                    </p>

                                    {/* {technologies && (
                                <div className="hidden w-full gap-2 lg:flex">
                                    {technologies.map((tech) => (
                                        <div
                                            className="items-center rounded-lg border bg-[#F4F6FF]"
                                            key={tech}
                                        >
                                            <button className="px-3 font-neuBook text-[12px] text-[#444444] md:text-[12px]">
                                                {tech}
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            )} */}
                                </div>
                            </Link>
                        ),
                    )}
                </>
            ) :
                (
                    <Loading />
                )}
        </div>
    )
}
