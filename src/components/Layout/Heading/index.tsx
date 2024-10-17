export default function Heading({
    heading,
    children,
}: {
    heading: string
    children: React.ReactNode
}) {
    return (
        <div className="w-full py-8">
            <h1 className="pb-2 font-neuBold text-3xl">{heading}</h1>
            <div className="w-full">{children}</div>
        </div>
    )
}
