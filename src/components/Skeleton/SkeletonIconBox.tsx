import { SkeletonElement } from "./SkeletonElement "

export default function SkeletonIconBox() {
    return (
        <div
            role="status"
            className="flex animate-pulse space-x-1 md:flex md:items-center md:space-y-0 rtl:space-x-reverse"
        >
            <div className="flex w-full flex-wrap gap-3">
                <SkeletonElement className="h-9 w-24 md:w-28" />
                <SkeletonElement className="h-9 w-28 md:w-32" />
                <SkeletonElement className="h-9 w-32 md:w-28" />
                <SkeletonElement className="h-9 w-32 md:w-28" />
                <SkeletonElement className="h-9 w-32 md:w-28" />
            </div>
            <span className="sr-only">Loading...</span>
        </div>
    )
}
