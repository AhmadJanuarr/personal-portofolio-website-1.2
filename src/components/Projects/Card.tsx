import Image from "next/image";
import { LIST_PROJECTS } from "@/data/projects.ts";
import StartContainer from "./Star";

export function CardProject() {
  return (
    <div className="w-full font-neuBook tracking-wider">
      {LIST_PROJECTS.map((item) => (
        <div
          key={item.id}
          style={{ "--color": item.color } as React.CSSProperties}
          className={`flex gap-3 rounded-lg py-3  pl-4 lg:py-4 hover:bg-[var(--color)] group transition-all duration-75 `}
        >
          <div className="relative w-[120px] h-[90px] md:h-[120px]">
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover rounded-lg group-hover:scale-105 transition-all duration-75 will-change-transform "
            />
          </div>
          <div className="items-center">
            <div className="flex gap-2">
              <h1 className="font-neuBold text-[14px] md:text-[18px]">
                {item.title}
              </h1>
              <StartContainer>{item.star}</StartContainer>
            </div>
            <p className="text-[14px] md:text-[16px]">
              {item.desc.slice(0, 50).concat("...")}
            </p>
            <p className="font-neuThin text-[14px] text-[#444444] md:text-[16px]">
              {item.date}
            </p>
          </div>
        </div>
      ))
      }
    </div >
  );
}
