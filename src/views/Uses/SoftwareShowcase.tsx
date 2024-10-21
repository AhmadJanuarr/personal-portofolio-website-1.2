import React from "react"
import Card from "@/components/Card"
import SectionHeader from "@/components/Sections/SectionHeader"
import { SoftwareType } from "@/types/software.type"

export default function SoftwareShowcase({ data, isLoading }: { data: SoftwareType[], isLoading: boolean }) {
    return (
        <div className="w-full">
            <SectionHeader heading="My Software" showButton={false}>
                <div className="flex w-full flex-wrap gap-3">
                    {isLoading ? (<div>loading cok</div>) :
                        (<React.Fragment>
                            {data.map(({ id, name, url, icon, color }) => (
                                <Card
                                    key={id}
                                    url={url || "#"}
                                    icon={icon}
                                    name={name}
                                    color={color}
                                />
                            ))}
                        </React.Fragment>)
                    }
                </div>
            </SectionHeader>
        </div>
    )
}
