import { useEffect, useState } from "react"
import { Container } from ".."
import { SoftwareType } from "@/types/software.type"
import Heading from "@/components/Layout/Heading"
import SoftwareShowcase from "@/views/Uses/SoftwareShowcase"
import EditorSetup from "@/views/Uses/EditorSetup"
import BrowserSetup from "@/views/Uses/BrowserSetup"
import useSWR from "swr"
import { fetching } from "@/lib/swr/fetch"

export default function Uses() {
    const { data, isLoading } = useSWR(
        `${process.env.NEXT_PUBLIC_API_URL}/api/softwares`,
        fetching,
    )
    const softwareData = data?.data || []

    return (
        <Container>
            <Heading heading="What do I use?">
                <SoftwareShowcase data={softwareData} isLoading={isLoading} />
                <EditorSetup />
                <BrowserSetup />
            </Heading>
        </Container>
    )
}
