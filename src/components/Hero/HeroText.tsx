import Image from "next/image";

export function HeroText() {
    return (
        <div className="w-full">
            <div className="text-[32px] md:text-[72px] font-neuMedium leading-tight relative">
                <p>Front End Developer</p>
                <p>Web Designer </p>
                <p>Content Creator</p>
                <span className="absolute z-10 w-12 h-12 md:w-16 md:h-16 shadow-xl bg-gray-50 rounded-xl top-32 md:top-60 right-4 rotate-12 transition-transform duration-300 hover:scale-110">
                    <Image
                        src="/svg/vsc.svg"
                        width={40}
                        height={40}
                        alt=""
                        className="w-full h-full rotate-12"
                    />
                </span>
                <span className="absolute z-10 w-12 h-12 md:w-16 md:h-16 shadow-xl bg-gray-50 rounded-xl right-2 top-0 -rotate-12 transition-transform duration-300 hover:scale-110">
                    <Image
                        src="/svg/Figma.svg"
                        width={40}
                        height={40}
                        alt=""
                        className="w-full h-full rotate-12"
                    />
                </span>
                <span className="absolute z-10 w-12 h-12 md:w-16 md:h-16 shadow-xl bg-gray-50 rounded-xl right-14 top-12 md:right-28 md:top-28 -rotate-12 transition-transform duration-300 hover:scale-110">
                    <Image
                        src="/svg/Atlassian.svg"
                        width={40}
                        height={40}
                        alt=""
                        className="w-full h-full"
                    />
                </span>
            </div>
        </div>
    );
}
