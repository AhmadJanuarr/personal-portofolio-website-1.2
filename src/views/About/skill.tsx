import IconBox from "@/components/IconBox"
import SkeletonIconBox from "@/components/Skeleton/SkeletonIconBox"
import { AbilityType } from "@/types/ability.type"
import SectionHeader from "../../components/Sections/SectionHeader"

export default function Skill({
    ability,
    isLoading,
}: {
    ability: AbilityType[]
    isLoading: boolean
}) {
    return (
        <div className="py-10">
            <SectionHeader heading="My Skills" showButton={false}>
                <div className="flex w-full flex-wrap gap-3">
                    {!isLoading ? (
                        <>
                            {ability.map(({ id, name, url, icon, color }) => (
                                <IconBox
                                    key={id}
                                    url={url || "#"}
                                    icon={icon}
                                    name={name}
                                    color={color}
                                />
                            ))}
                        </>
                    ) : (
                        <SkeletonIconBox />
                    )}
                </div>
            </SectionHeader>
        </div>
    )
}
