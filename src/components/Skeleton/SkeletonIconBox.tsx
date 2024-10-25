export default function SkeletonIconBox() {
    return (
        <div
            role="status"
            className="flex animate-pulse space-x-1 md:flex md:items-center md:space-y-0 rtl:space-x-reverse"
        >
            <div className="w-full flex flex-wrap gap-3">
                <div className="h-9 w-24 rounded-md bg-gray-200 md:w-28 dark:bg-gray-700" />
                <div className="h-9 w-28 rounded-md bg-gray-200 md:w-32 dark:bg-gray-700" />
                <div className="h-9 w-32 rounded-md bg-gray-200 md:w-28 dark:bg-gray-700" />
                <div className="h-9 w-32 rounded-md bg-gray-200 md:w-28 dark:bg-gray-700" />
                <div className="h-9 w-32 rounded-md bg-gray-200 md:w-28 dark:bg-gray-700" />
            </div>
            <span className="sr-only">Loading...</span>
        </div>
    )
}
