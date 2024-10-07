export default function ButtonCustom({ children }: {
    children: React.ReactNode
}) {
    return (
        <button className="px-3 py-3 text-white bg-[#375ACB] rounded-[10px] text-[20px] font-neuBold">
            {children}
        </button>
    )
}