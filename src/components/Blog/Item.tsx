import { BLOG_ITEMS } from "@/data/blogs";
import Image from "next/image";

export default function BlogItem() {
  return (
    <div className="w-full font-neuBook tracking-wider">
      {BLOG_ITEMS.slice(0, 4).map((item) => (
        <div className="flex items-center gap-3 py-3 lg:py-4" key={item.id}>
          <div className="relative h-[100px] w-[200px] md:h-[100px] md:w-[150px] lg:h-[140px] lg:w-[200px]">
            <Image
              src={item.imageUrl}
              alt={item.title}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <div className="items-center text-[14px] md:text-[16px] ">
            <h1 className="font-neuBold">{item.title}</h1>
            <p className="pb-2">
              {item.description.slice(0, 70).concat("...")}
            </p>
            <div className="flex gap-5 font-neuThin text-[12px] text-[#444444] md:text-[14px]">
              <p>{item.dateCreated}</p>
              <p>{item.views} views</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
