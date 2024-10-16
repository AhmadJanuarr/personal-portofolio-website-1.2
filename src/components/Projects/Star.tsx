import Image from "next/image";

export default function StarContainer({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex items-center gap-2 justify-center border rounded-lg px-2 bg-[#f6f8Fa]">
            <Image src="/svg/Star.svg" alt="star" width={15} height={15} />
            <span className="text-[12px] ">{children}</span>
        </div>
    )
}