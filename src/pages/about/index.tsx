import { Container } from ".."
import { AbilityType } from "@/types/ability.type"
import Introduce from "@/views/About/about"
import Heading from "@/components/Layout/Heading"
import Skill from "@/views/About/skill"
import Experience from "@/views/About/experience"

export async function getServerSideProps() {
    const apiUrl = process.env.VERCEL_URL
        ? `https://${process.env.VERCEL_URL}/api/ability`
        : "http://localhost:3000/api/ability"

    console.log(apiUrl)
    const res = await fetch(apiUrl)
    const response = await res.json()
    return {
        props: {
            ability: response.data,
        },
    }
}

export default function About({ ability }: { ability: AbilityType[] }) {
    return (
        <Container>
            <Heading heading="About">
                <Introduce />
                <Skill ability={ability} />
                <Experience />
            </Heading>
        </Container>
    )
}
