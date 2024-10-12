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
      className={`flex  justify-center gap-2 rounded-[10px] border border-[#132C92] bg-secondary px-3 py-2 font-neuBold tracking-wider text-white md:text-[16px] ${className} items-center transition-transform duration-300 hover:scale-105`}
    >
      <Image src={src} alt="user" width={24} height={24} />
      <span>{children}</span>
    </button>
  );
}
