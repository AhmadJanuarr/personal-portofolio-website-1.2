import Image from "next/image"
import StarContainer from "./Star"
import useSWR from "swr"
import SkeletonCard from "../Skeleton/SkeletonCard"
import { ProjectsType } from "@/types/projects.type"
import { fetching } from "@/lib/swr/fetch"
import { useRouter } from "next/router"
import Link from "next/link"

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
                        }: ProjectsType) =>
                        (
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

                                    <p className="text-[12px] md:text-[16px] mb-1">
                                        {description.slice(0, screen.width < 660 ? 50 : 100)}...
                                    </p>

                                    <p className="font-neuThin text-[11px] text-[#444444] md:text-[14px]">
                                        {date}
                                    </p>
                                </div>
                            </Link>
                        ),
                    )}
                </>
            ) :
                (
                    <SkeletonCard lenght={5} />
                )
            }
        </div >
    )
}