import Card from "@/components/IconBox";
import { ProjectsType } from "@/types/projects.type";

export function ContentProjectDetail({ detailsProjects }: { detailsProjects: ProjectsType }) {
    return (
        <div className="w-full md:py-10 px-4">
            <img
                src={detailsProjects?.fullScreen || ''}
                className="w-full px-2 rounded-xl pt-5"
            />
            <div className="w-full">
                <h1 className={`font-neuBold md:text-[28px] text-[18px] ${detailsProjects?.fullScreen ? 'py-28' : 'py-10'}`}>
                    Results from the upcoming
                </h1>
                <img
                    src={detailsProjects?.shots}
                    alt=""
                    className="w-full rounded-lg object-cover object-top h-[300px] md:h-[500px]"
                />
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
                <div className="w-full flex gap-2 py-2 pb-10 flex-wrap">
                    {detailsProjects?.technologies?.map((item, index) => (
                        <Card key={index} icon={item.icon} name={item.name} url="#" color="#7E60BF" />
                    ))}
                </div>
            </div>
        </div>
    )
}