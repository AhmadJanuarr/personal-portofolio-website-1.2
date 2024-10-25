import IconBox from "@/components/IconBox"
import SkeletonIconBox from "@/components/Skeleton/SkeletonIconBox"
import { AbilityType } from "@/types/ability.type"

export default function Skill({
    ability,
    isLoading,
}: {
    ability: AbilityType[]
    isLoading: boolean
}) {
    return (
        <div className="py-10">
            <h1 className="py-7 font-neuBold text-2xl">Skill</h1>
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
        </div>
    )
}
