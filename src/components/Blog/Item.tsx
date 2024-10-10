import blogPosts from "@/data/blogs";
import Image from "next/image";

export default function BlogItem() {
    return (
        <div className="w-full font-neuBook tracking-wider">
            {blogPosts.slice(0, 4).map((item) => (
                <div className="flex gap-3 lg:py-4 py-3" key={item.id}>
                    <Image src={item.imageUrl} width={150} height={100} className="rounded-lg " alt={""} />
                    <div className="items-center ">
                        <h1 className="text-[16px] md:text-[20px] font-neuBold">{item.title}</h1>
                        <p className="text-[16px] ">{item.description.slice(0, 70).concat("...")}</p>
                        <div className="flex gap-5 text-[12px] md:text-[16px] text-[#444444] font-neuThin">
                            <p className="">{item.dateCreated}</p>
                            <p>{item.views} views</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}