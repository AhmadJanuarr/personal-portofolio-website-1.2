import Link from "next/link"

export default function ButtonCustom({
    children,
    src,
    className = "bg-secondary border-[#132C92] text-white font-neuBold",
    href,
}: {
    src: string
    className?: string
    href: string
    children: React.ReactNode
}) {
    return (
        <Link href={href}>
            <button
                className={`flex justify-center gap-2 rounded-[10px] border px-3 py-2  md:text-[16px] ${className} items-center transition-transform duration-300 hover:scale-105`}
            >
                <div className="relative">
                    <img
                        src={src}
                        alt="user"
                        width={24}
                        height={24}
                        sizes="(max-width: 768px) 24px, (max-width: 1390px) 24px, 30px"

                    />
                </div>
                <span>{children}</span>
            </button>
        </Link>
    )
}
