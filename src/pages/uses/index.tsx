import Heading from "@/components/Layout/Heading"
import SoftwareShowcase from "@/views/Uses/SoftwareShowcase"
import EditorSetup from "@/views/Uses/EditorSetup"
import BrowserSetup from "@/views/Uses/BrowserSetup"
import useSWR from "swr"
import { Container } from ".."
import { fetching } from "@/lib/swr/fetch"
import { MouseEvent, useEffect, useState } from "react"
import { SoftwareType } from "@/types/software.type"

export default function Uses() {
  const [current, setCurrent] = useState<string>("all")
  const [filteredData, setFilteredData] = useState([])
  const { data, isLoading } = useSWR(`${process.env.NEXT_PUBLIC_API_URL}/api/softwares`, fetching)
  const softwareData = data?.data || []

  console.log(softwareData)
  const handleBtn = (e: MouseEvent<HTMLButtonElement>) => {
    const value = e.currentTarget.value
    setCurrent(value)
  }
  useEffect(() => {
    if (current === "all") {
      setFilteredData(softwareData)
    } else if (current === "software") {
      setFilteredData(softwareData.filter((item: SoftwareType) => item.name === "software"))
    } else if (current === "coding") {
      setFilteredData(softwareData.filter((item: SoftwareType) => item.name === "coding"))
    } else if (current === "browser") {
      setFilteredData(softwareData.filter((item: SoftwareType) => item.name === "browser"))
    }
  }, [current, softwareData])

  return (
    <Container>
      <Heading heading="What do I use?">
        <div className="flex w-full border-b-2">
          <ul className="flex gap-5 py-5">
            <li>
              <button onClick={handleBtn} value="all">
                All
              </button>
            </li>
            <li>
              <button onClick={handleBtn} value="software">
                Software
              </button>
            </li>
            <li>
              <button onClick={handleBtn} value="coding">
                Coding
              </button>
            </li>
            <li>
              <button onClick={handleBtn} value="browser">
                Browser
              </button>
            </li>
          </ul>
        </div>
        <div className="w-full">
          {current === "all" && (
            <>
              <SoftwareShowcase data={filteredData} isLoading={isLoading} />
              <EditorSetup />
              <BrowserSetup />
            </>
          )}
          {current === "software" && <SoftwareShowcase data={filteredData} isLoading={isLoading} />}
          {current === "coding" && <EditorSetup />}
          {current === "browser" && <BrowserSetup />}
        </div>
      </Heading>
    </Container>
  )
}
