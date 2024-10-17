import { SoftwareType } from "@/types/software.type"
import Card from "@/components/Card"
import SectionHeader from "@/components/Sections/SectionHeader"

export default function SoftwareShowcase({ data }: { data: SoftwareType[] }) {
    console.log(data)
    return (
        <div className="w-full">
            <SectionHeader heading="My Software" showButton={false}>
                <div className="flex w-full flex-wrap gap-3">
                    {data.map(({ id, name, url, icon, color }) => (
                        <Card
                            key={id}
                            url={url || "#"}
                            icon={icon}
                            name={name}
                            color={color}
                        />
                    ))}
                </div>
            </SectionHeader>
        </div>
    )
}
