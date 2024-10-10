import Image from "next/image";

export default function ButtonCustom({
    children,
    src,
    className,
}: {
    src: string;
    className?: string;
    children: React.ReactNode;
}) {
    return (
        <button
            className={`flex items-center gap-2 px-3 py-2 text-white bg-secondary rounded-[10px] md:text-[16px] font-neuBold justify-center border border-[#132C92] tracking-wider ${className} transition-transform duration-300 hover:scale-110`}
        >
            <Image src={src} alt="user" width={24} height={24} />
            <span>{children}</span>
        </button>
    );
}
