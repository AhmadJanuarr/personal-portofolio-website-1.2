import ButtonCustom from "@/components/Button";
import Link from "next/link";

export default function SectionHeader({
  title,
  href,
  children,
}: {
  title: string;
  href: string;
  children: React.ReactNode;
}) {
  return (
    <div className="w-full lg:mt-14">
      <div className="flex items-center justify-between">
        <span className="relative inline-block before:absolute before:-inset-1 before:block before:h-5 before:translate-x-5 before:translate-y-3 before:bg-pink-300 md:before:translate-y-4">
          <h1 className="relative font-neuBold text-[18px] lg:text-[22px]">
            {title}
          </h1>
        </span>
        <Link href={href}>
          <ButtonCustom src="/svg/Arrow.svg">View all</ButtonCustom>
        </Link>
      </div>
      <div className="w-full py-10">{children}</div>
    </div>
  );
}
