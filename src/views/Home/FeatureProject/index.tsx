import ButtonCustom from "@/components/Button";
import { CardProject } from "@/components/Projects/Card";

export default function FeatureProject() {
    return (
        <div className="w-full lg:mt-14" >
            <div className="flex justify-between items-center">
                <h1 className="text-[18px] lg:text-[32px] font-neuBold">Feature Projects</h1>
                <ButtonCustom src="/svg/Arrow.svg">View all</ButtonCustom>
            </div>
            <div className="w-full py-10">
                <CardProject />
            </div>
        </div>
    )
}