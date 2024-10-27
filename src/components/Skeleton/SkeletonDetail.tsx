import { SkeletonElement } from "./SkeletonElement "

export default function SkeletonDetail() {
  return (
    <div
      role="status"
      className="flex animate-pulse space-x-1  px-4 md:flex md:items-center md:space-y-0 rtl:space-x-reverse"
    >
      <div className="w-full">
        <div className=" my-5 h-6 w-64 rounded-xl bg-gray-200 md:h-8 dark:bg-gray-700" />
        <div className="mt-10 flex w-full items-center justify-between md:flex-row">
          <div className="flex w-full items-center gap-3">
            <SkeletonElement className="h-[40px] w-[40px] rounded-full md:h-[70px] md:w-[70px]" />
            <div className="flex w-full flex-col gap-3">
              <SkeletonElement className="h-2.5 md:h-4" />
              <SkeletonElement className="h-2.5 md:h-4" />
            </div>
          </div>
        </div>
        <div className="w-full py-16">
          <SkeletonElement className="h-[300px] w-full rounded-lg md:h-[400px]" />
          <SkeletonElement className="mt-10 h-2.5 md:h-4" />
          <SkeletonElement className="mt-3 h-2.5 md:h-4" />
          <SkeletonElement className="mt-3 h-2.5 md:h-4" />
          <SkeletonElement className="mt-3 h-2.5 md:h-4" />
        </div>
      </div>
      <span className="sr-only">Loading...</span>
    </div>
  )
}
