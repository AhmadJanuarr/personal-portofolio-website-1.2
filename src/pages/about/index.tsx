import { Container } from ".."
import { fetching } from "@/lib/swr/fetch"
import Introduce from "@/views/About/about"
import Heading from "@/components/Layout/Heading"
import Skill from "@/views/About/skill"
import Experience from "@/views/About/experience"
import useSWR from "swr"

export default function About() {
    const { data, isLoading } = useSWR(`${process.env.NEXT_PUBLIC_API_URL}/api/ability`, fetching)
    const abilityData = data?.data || []

    return (
        <Container>
            <Heading heading="About">
                <Introduce />
                <Skill ability={abilityData} isLoading={isLoading} />
                <Experience />
            </Heading>
        </Container>
    )
}
