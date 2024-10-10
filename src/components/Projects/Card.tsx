import Image from "next/image";
import { PROJECTS } from "@/data/projects.ts";

export function CardProject() {
    return (
        <div className="w-full font-neuBook tracking-wider">
            {PROJECTS.map((item) => (
                <div className="flex gap-3 lg:py-4 py-3" key={item.id}>
                    <Image src={item.image} alt={item.title} width={100} height={67} className="rounded-lg " />
                    <div className="items-center ">
                        <div className="flex gap-2">
                            <h1 className="text-[16px] md:text-[20px] font-neuBold">{item.title}</h1>
                            <p>{item.star}</p>
                        </div>
                        <p className="text-[16px] ">{item.desc.slice(0, 50).concat("...")}</p>
                        <p className="text-[14px] md:text-[18px] text-[#444444] font-neuThin">{item.date}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}