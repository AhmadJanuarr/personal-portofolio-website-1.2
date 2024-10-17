export function HeroText() {
    return (
        <div className="w-full">
            <div className="relative font-neuMedium text-[32px] leading-tight md:text-[72px]">
                <p>Front End Developer</p>
                <p>Web Designer </p>
                <p>Content Creator</p>
                <span className="absolute right-20 top-60 z-10 h-14 w-14 rotate-12 rounded-xl bg-gray-50 shadow-xl transition-transform duration-75 hover:scale-110 md:right-4 md:top-60 md:h-16 md:w-16">
                    <img
                        src="/svg/vsc.svg"
                        alt="vsc icon"
                        className="h-full w-full rotate-12"
                    />
                </span>
                <span className="absolute right-0 top-0 z-10 h-14 w-14 -rotate-12 rounded-xl bg-gray-50 shadow-xl transition-transform duration-75 hover:scale-110 md:h-16 md:w-16">
                    <img
                        src="/svg/Figma.svg"
                        alt="Figma icon"
                        className="h-full w-full rotate-12"
                    />
                </span>
                <span className="absolute right-4 top-36 z-10 h-14 w-14 -rotate-12 rounded-xl bg-gray-50 shadow-xl transition-transform duration-75 hover:scale-110 md:right-28 md:top-28 md:h-16 md:w-16">
                    <img
                        src="/svg/Atlassian.svg"
                        alt="Atlassian icon"
                        className="h-full w-full"
                    />
                </span>
            </div>
        </div>
    )
}
