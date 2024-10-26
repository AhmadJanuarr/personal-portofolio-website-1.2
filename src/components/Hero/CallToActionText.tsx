import ButtonCustom from "../Button"
import SosialMediaIcon from "../Icon"

export function CallToActionText() {
    return (
        <div className="w-full">
            <div className="w-full gap-5 py-10 lg:flex">
                <ButtonCustom
                    href="/about"
                    src="/svg/User.svg"
                    className="w-full bg-secondary font-neuMedium text-white lg:w-auto"
                >
                    More about me
                </ButtonCustom>
                <div className="lg: flex items-center justify-center gap-5 py-6 lg:py-0">
                    <SosialMediaIcon />
                </div>
            </div>
        </div>
    )
}
