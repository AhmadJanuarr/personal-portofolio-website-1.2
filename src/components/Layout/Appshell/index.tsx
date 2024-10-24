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
        <main className={`${className} mx-auto h-full px-5 text-[#444444] lg:px-3 ${!isDetailPage ? "max-w-[800px]" : "w-full"}`}>
            {!isDetailPage && <Header />}
            {children}
            {!isDetailPage && <Footer />}
        </main>
    )
}
