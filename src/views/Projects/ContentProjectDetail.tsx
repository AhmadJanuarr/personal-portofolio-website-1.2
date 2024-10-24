import { ProjectsType } from "@/types/projects.type";
import Card from "../../components/Card";

export function ContentProjectDetail({ detailsProjects }: { detailsProjects: ProjectsType }) {
    return (
        <div className="w-full py-10">
            <img
                src={detailsProjects?.fullScreen && detailsProjects?.fullScreen}
                alt=""
                className="w-full rounded-lg"
            />
            <div className="w-full">
                <h1 className="py-28 font-neuBold text-[28px]">
                    Results from the upcoming
                </h1>
                <img
                    src={detailsProjects?.shots}
                    alt=""
                    className="w-full rounded-lg object-cover object-top "
                />
            </div>
            <div className="flex flex-col">
                <h1 className="py-8 font-neuBold text-[18px]">
                    {detailsProjects?.title}
                </h1>
                <p className="py-2 font-neuMedium text-[14px] md:text-[16px]">
                    Project Description
                </p>
                <p className="pb-2 font-neuBook text-[14px] md:text-[16px]">
                    {detailsProjects?.description}
                </p>
                <p className="py-2 font-neuMedium text-[14px] md:text-[16px]">
                    Tech Stack Used
                </p>
                <div className="w-full flex gap-2 py-2">
                    {detailsProjects.technologies?.map((item, index) => (
                        <Card key={index} icon={item.icon} name={item.name} url="#" color="#7E60BF" />
                    ))}
                </div>
            </div>
        </div>
    )
}