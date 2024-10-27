import Link from "next/link"
import useSWR from "swr"
import SkeletonDetail from "@/components/Skeleton/SkeletonDetail"
import { useRouter } from "next/router"
import { fetching } from "@/lib/swr/fetch"
import { HeaderProjectsDetail } from "@/views/Projects/HeaderPorjectDetail"
import { ContentProjectDetail } from "@/views/Projects/ContentProjectDetail"

export default function GetProjectByName() {
  const params = useRouter()
  const title = params.query.name
  const { data, isLoading } = useSWR(`${process.env.NEXT_PUBLIC_API_URL}/api/projects/${title}`, fetching)
  const detailsProjects = data?.data[0] || null

  return (
    <div className="flex w-full flex-col items-center justify-center">
      <Link href={"/projects"} className="flex w-full justify-end bg-secondary p-2">
        <img src="/svg/Close.svg" alt="Close" width={30} height={30} className="cursor-pointer" />
      </Link>
      <div className="w-full max-w-[800px]">
        {!isLoading ? (
          <div className="w-full tracking-wider">
            <h1 className="px-4 py-5 font-neuBold text-[18px] md:text-3xl">{detailsProjects?.title}</h1>
            <HeaderProjectsDetail />
            <ContentProjectDetail detailsProjects={detailsProjects} />
          </div>
        ) : (
          <SkeletonDetail />
        )}
      </div>
    </div>
  )
}
