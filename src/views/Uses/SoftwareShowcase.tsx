import React from "react"
import SectionHeader from "@/components/Sections/SectionHeader"
import IconBox from "@/components/IconBox"
import SkeletonIconBox from "@/components/Skeleton/SkeletonIconBox"
import { SoftwareType } from "@/types/software.type"

export default function SoftwareShowcase({ data, isLoading }: { data: SoftwareType[]; isLoading: boolean }) {
    return (
        <div className="w-full">
            <SectionHeader heading="My Software" showButton={false}>
                <div className="flex w-full flex-wrap gap-3">
                    {!isLoading ? (
                        <React.Fragment>
                            {data.map(({ id, name, url, icon, color }) => (
                                <IconBox key={id} url={url || "#"} icon={icon} name={name} color={color} />
                            ))}
                        </React.Fragment>
                    ) : (
                        <SkeletonIconBox />
                    )}
                </div>
            </SectionHeader>
        </div>
    )
}
