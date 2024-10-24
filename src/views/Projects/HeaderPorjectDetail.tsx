import ButtonCustom from "@/components/Button";

export function HeaderProjectsDetail() {
    return (
        <div className="flex w-full justify-between">
            <div className="flex items-center gap-3">
                <img
                    src="/img/picture.jpg"
                    alt=""
                    width={70}
                    height={70}
                    className="rounded-full"
                />
                <div className="flex flex-col">
                    <p className="font-neuMedium text-[14px] md:text-[16px]">
                        Ahmad Januar A
                    </p>
                    <p className="font-neuBook text-[13px] text-secondary md:text-[15px]">
                        Available for work
                    </p>
                </div>
            </div>
            <div className="flex items-center gap-5">
                <ButtonCustom
                    href="#"
                    src="/svg/Touch.svg"
                    className="bg-secondary font-neuMedium text-white"
                >
                    Demo
                </ButtonCustom>
                <ButtonCustom
                    href="#"
                    src="/svg/Github.svg"
                    className="border-[#D9D9D9] bg-[#FAFAFA] font-neuMedium"
                >
                    Github
                </ButtonCustom>
            </div>
        </div>
    )
}