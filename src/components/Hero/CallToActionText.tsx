import ButtonCustom from "../Button";
import SosialMediaIcon from "../Icon";


export function CallToActionText() {
    return (
        <div className="w-full">
            <div className="py-10 w-full gap-5 lg:flex">
                <ButtonCustom src="/svg/User.svg" className="w-full lg:w-auto ">More about me</ButtonCustom>
                <div className="gap-5 flex items-center justify-center py-6 lg:py-0 lg:">
                    <SosialMediaIcon />
                </div>
            </div>
        </div>
    );
}
