export default function SkeletonDetail() {
    return (
        <div
            role="status"
            className="flex animate-pulse space-x-1  md:flex md:items-center md:space-y-0 rtl:space-x-reverse px-4"
        >
            <div className="w-full">
                <div className=" h-6 md:h-8 w-64 my-5 rounded-xl bg-gray-200 dark:bg-gray-700" />
                {/* SEKELETON HEADER */}
                <div className="flex w-full justify-between md:flex-row items-center mt-10">
                    <div className="flex items-center gap-3 w-full">
                        <div className="h-[40px] w-[40px] rounded-full bg-gray-200 md:h-[70px] md:w-[70px] dark:bg-gray-700" />
                        <div className="flex flex-col gap-3 w-full">
                            <div className="h-2.5 md:h-4 rounded-md bg-gray-200 dark:bg-gray-700" />
                            <div className="h-2.5 md:h-4 rounded-md bg-gray-200 dark:bg-gray-700" />
                        </div>
                    </div>
                </div>
                {/* SEKELETON DETAIL */}
                <div className="w-full py-16">
                    <div className="h-[300px] md:h-[400px] w-full rounded-lg bg-gray-200 dark:bg-gray-700" />
                    <div className="h-2.5 md:h-4 rounded-md bg-gray-200 dark:bg-gray-700 mt-10" />
                    <div className="h-2.5 md:h-4 rounded-md bg-gray-200 dark:bg-gray-700 mt-3" />
                    <div className="h-2.5 md:h-4 rounded-md bg-gray-200 dark:bg-gray-700 mt-3" />
                    <div className="h-2.5 md:h-4 rounded-md bg-gray-200 dark:bg-gray-700 mt-3" />
                </div>
            </div>
            <span className="sr-only">Loading...</span>
        </div>
    )
}
