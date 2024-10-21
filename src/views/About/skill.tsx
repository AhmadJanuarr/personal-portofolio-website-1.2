import { AbilityType } from "@/types/ability.type"
import Card from "@/components/Card"

export default function Skill({ ability, isLoading }: { ability: AbilityType[], isLoading: boolean }) {
    return (
        <div className="py-10">
            <h1 className="py-7 font-neuBold text-2xl">Skill</h1>
            <div className="flex w-full flex-wrap gap-3">
                {ability.map(({ id, name, url, icon, color }) => (
                    <Card
                        key={id}
                        url={url || "#"}
                        icon={icon}
                        name={name}
                        color={color}
                    />
                ))}
            </div>
        </div>
    )
}
