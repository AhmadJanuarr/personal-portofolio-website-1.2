import { useRouter } from "next/router"
import Footer from "../Footer/Footer"
import Header from "../Header/Header"

export default function Appshell({
    className,
    children,
}: {
    className: string
    children: React.ReactNode
}) {
    const { pathname } = useRouter()
    const isDetailPage =
        pathname.startsWith("/projects/") && pathname.split("/").length === 3

    return (
        <main
            className={`${className} mx-auto h-full text-[#444444] ${!isDetailPage ? "max-w-[800px] px-5 md:px-0" : "w-full"}`}
        >
            {!isDetailPage && <Header />}
            {children}
            {!isDetailPage && <Footer />}
        </main>
    )
}
