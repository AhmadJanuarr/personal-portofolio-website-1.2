import blogPosts from "@/data/blogs";
import Image from "next/image";

export default function BlogItem() {
    return (
        <div className="w-full font-neuBook tracking-wider">
            {blogPosts.slice(0, 4).map((item) => (
                <div className="flex gap-3 lg:py-4 py-3 items-center" key={item.id}>
                    <div className="relative w-[200px] h-[100px] md:w-[150px] md:h-[100px] lg:w-[200px] lg:h-[140px]">
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
                        <div className="flex gap-5 text-[12px] md:text-[14px] text-[#444444] font-neuThin">
                            <p>{item.dateCreated}</p>
                            <p>{item.views} views</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
