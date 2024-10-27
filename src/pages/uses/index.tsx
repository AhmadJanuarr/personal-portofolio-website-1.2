import Heading from "@/components/Layout/Heading"
import SoftwareShowcase from "@/views/Uses/SoftwareShowcase"
import EditorSetup from "@/views/Uses/EditorSetup"
import BrowserSetup from "@/views/Uses/BrowserSetup"
import useSWR from "swr"
import { Container } from ".."
import { fetching } from "@/lib/swr/fetch"
import { MouseEvent, useState } from "react"

function NavMenu({
  onClick,
  value,
  children,
  className,
}: {
  onClick: (e: MouseEvent<HTMLButtonElement>) => void
  value: string
  children: React.ReactNode
  className?: string
}) {
  return (
    <li>
      <button onClick={onClick} value={value} className={`font-neuMedium text-[14px] md:text-[16px] ${className}`}>
        {children}
      </button>
    </li>
  )
}

export default function Uses() {
  const [current, setCurrent] = useState<string>("all")
  const { data, isLoading } = useSWR(`${process.env.NEXT_PUBLIC_API_URL}/api/softwares`, fetching)
  const softwareData = data?.data || []

  const handleBtn = (e: MouseEvent<HTMLButtonElement>) => {
    const value = e.currentTarget.value
    setCurrent(value)
  }
  const NavActive = "font-neuBold text-secondary"
  return (
    <Container>
      <Heading heading="What do I use?">
        <div className="my-8 flex w-full border-b-2">
          <ul className="flex gap-8 py-3 tracking-wider md:py-5">
            <NavMenu onClick={handleBtn} value="all" className={`${current === "all" && NavActive}`}>
              All
            </NavMenu>
            <NavMenu onClick={handleBtn} value="software" className={`${current === "software" && NavActive}`}>
              Software
            </NavMenu>
            <NavMenu onClick={handleBtn} value="coding" className={`${current === "coding" && NavActive}`}>
              Coding
            </NavMenu>
            <NavMenu onClick={handleBtn} value="browser" className={`${current === "browser" && NavActive}`}>
              Browser
            </NavMenu>
          </ul>
        </div>
        <div className="w-full">
          {current === "all" && (
            <>
              <SoftwareShowcase data={softwareData} isLoading={isLoading} />
              <EditorSetup />
              <BrowserSetup />
            </>
          )}
          {current === "software" && <SoftwareShowcase data={softwareData} isLoading={isLoading} />}
          {current === "coding" && <EditorSetup />}
          {current === "browser" && <BrowserSetup />}
        </div>
      </Heading>
    </Container>
  )
}
