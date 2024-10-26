import Card from "@/components/IconBox"
import { ProjectsType } from "@/types/projects.type"
import { useState } from "react"

function ImageSelected({
    src,
    index,
    setCurrent,
    isActive,
}: {
    src: string
    index: number
    setCurrent: (index: number) => void
    isActive: boolean
}) {
    return (
        <img
            src={src}
            onClick={() => setCurrent(index)}
            className={`border-2n h-[70px] w-[100px] cursor-pointer rounded-lg ${isActive ? "border-blue-500" : "border-transparent"}`}
        />
    )
}

function ImageShot({ shots, current }: { shots: string[]; current: number }) {
    return (
        <div className="relative -z-10 overflow-hidden">
            <div
                className="flex transition duration-300 ease-out"
                style={{ transform: `translateX(-${current * 100}%)` }}
            >
                {shots.map((shot, index) => (
                    <img
                        key={index}
                        src={shot}
                        alt="image"
                        className="w-full  rounded-lg object-cover object-top "
                    />
                ))}
            </div>
        </div>
    )
}

export function ContentProjectDetail({
    detailsProjects,
}: {
    detailsProjects: ProjectsType
}) {
    const [current, setCurrent] = useState(0)

    return (
        <div className="w-full px-4 md:py-10">
            <img
                src={detailsProjects?.fullScreen || ""}
                className="w-full rounded-xl px-2 pt-5"
            />
            <div className="w-full">
                <h1
                    className={`font-neuBold text-[18px] md:text-[28px] ${
                        detailsProjects?.fullScreen ? "py-28" : "py-10"
                    }`}
                >
                    Results from the upcoming
                </h1>
                <ImageShot
                    current={current}
                    shots={detailsProjects?.shots || []}
                />

                <div className="flex w-full gap-3 py-4">
                    {detailsProjects?.shots?.map((shot, index) => (
                        <ImageSelected
                            key={index}
                            src={shot}
                            index={index}
                            setCurrent={setCurrent}
                            isActive={index === current}
                        />
                    ))}
                </div>
            </div>
            <div className="flex flex-col">
                <h1 className="py-8 font-neuBold text-[18px]">
                    {detailsProjects?.title}
                </h1>
                <p className="py-2 font-neuMedium text-[14px] md:text-[16px]">
                    Project Description
                </p>
                <p className="pb-2 font-neuBook text-[13px] md:text-[16px]">
                    {detailsProjects?.description}
                </p>
                <p className="py-2 font-neuMedium text-[14px] md:text-[16px]">
                    Tech Stack Used
                </p>
                <div className="flex w-full flex-wrap gap-2 py-2 pb-10">
                    {detailsProjects?.technologies?.map((item, index) => (
                        <Card
                            key={index}
                            icon={item.icon}
                            name={item.name}
                            url="#"
                            color="#7E60BF"
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}
