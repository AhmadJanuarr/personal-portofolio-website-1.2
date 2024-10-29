import Image from "next/image"
import SectionHeader from "@/components/Sections/SectionHeader"
import { LIST_EXPERIENCE } from "@/data/experience"

function EpxrienceCard({
  title,
  company,
  type,
  date,
  logo,
  lenght,
}: {
  title: string
  company: string
  type: string
  date: string
  logo: string
  lenght: string
}) {
  return (
    <div className="flex w-full items-center gap-5 py-8">
      <div className="relative items-center rounded-lg bg-gray-200 p-2">
        <Image src={logo} alt="logo" width={70} height={70} className="w-full rounded-lg object-cover" />
      </div>
      <div className="w-full tracking-wider">
        <p className="paragraph font-neuBold">{title}</p>
        <p className="paragraph pt-1 font-neuBook">
          {company} • {type}
        </p>
        <div className="w-full font-neuBook text-[13px] tracking-wider text-[#444444] md:text-[14px]">
          {date} • {lenght}
        </div>
      </div>
    </div>
  )
}

export default function Experience() {
  return (
    <SectionHeader heading="Experience" title="Resume" showButton={true} href="/doc/resume.pdf">
      {LIST_EXPERIENCE && LIST_EXPERIENCE.map((item) => <EpxrienceCard key={item.id} {...item} />)}
    </SectionHeader>
  )
}
