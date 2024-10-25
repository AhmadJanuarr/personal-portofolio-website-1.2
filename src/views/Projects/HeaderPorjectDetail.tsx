import ButtonCustom from "@/components/Button";

export function HeaderProjectsDetail() {
    return (
        <div className="flex w-full justify-between sticky top-0 left-0 bg-white border-b-2 py-5">
            <div className="flex items-center gap-3 pl-4">
                <img
                    src="/img/picture.jpg"
                    alt="my image"
                    className="rounded-full w-[40px] h-[40px] md:w-[60px] md:h-[60px] "
                />
                <div className="flex flex-col">
                    <p className="font-neuMedium text-[12px] md:text-[16px]">
                        Ahmad Januar A
                    </p>
                    <p className="font-neuBook text-[11px] text-secondary md:text-[15px]">
                        Available for work
                    </p>
                </div>
            </div>
            <div className="flex items-center md:justify-start gap-2 md:gap-5 py-5  md:py-0 pr-4">
                <ButtonCustom
                    href="#"
                    src="/svg/Touch.svg"
                    className="bg-secondary font-neuMedium text-white text-[11px]"
                >
                    Demo
                </ButtonCustom>
                <ButtonCustom
                    href="#"
                    src="/svg/Github.svg"
                    className="border-[#D9D9D9] bg-[#FAFAFA] font-neuMedium text-[11px]"
                >
                    Github
                </ButtonCustom>
            </div>
        </div>
    )
}