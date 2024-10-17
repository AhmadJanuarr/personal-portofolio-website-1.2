import { Container } from ".."
import { SoftwareType } from "@/types/software.type"
import Heading from "@/components/Layout/Heading"
import SoftwareShowcase from "@/views/Uses/SoftwareShowcase"
import EditorSetup from "@/views/Uses/EditorSetup"
import BrowserSetup from "@/views/Uses/BrowserSetup"

export async function getServerSideProps() {
    const res = await fetch("http://localhost:3000/api/softwares")
    const response = await res.json()
    return {
        props: {
            software: response.data,
        },
    }
}

export default function Uses({ software }: { software: SoftwareType[] }) {
    return (
        <Container>
            <Heading heading="What do I use?">
                <SoftwareShowcase data={software} />
                <EditorSetup />
                <BrowserSetup />
            </Heading>
        </Container>
    )
}
