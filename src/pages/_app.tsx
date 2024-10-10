import "@/styles/globals.css";
import type { AppProps } from "next/app";
import localFont from "next/font/local";
import Header from "../components/Layout/Header/Header";
import Footer from "../components/Layout/Footer/Footer";

const neuBold = localFont({
  src: "./fonts/PPNeueMontreal-Bold.woff",
  variable: "--font-neu-bold",
  weight: "700", // For bold weight
});
const neuMedium = localFont({
  src: "./fonts/PPNeueMontreal-Medium.woff",
  variable: "--font-neu-medium",
  weight: "500", // For medium weight
})
const neuBook = localFont({
  src: "./fonts/PPNeueMontreal-Book.woff",
  variable: "--font-neu-book",
  weight: "400", // For regular/book weight
});


const neuThin = localFont({
  src: "./fonts/PPNeueMontreal-Thin.woff",
  variable: "--font-neu-thin",
  weight: "100", // For thin weight
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${neuBook.variable} ${neuBold.variable} ${neuMedium.variable} ${neuThin.variable} max-w-[800px] mx-auto text-[#444444] px-5 lg:px-3 border border-2-[#FFFFFF] h-full`}>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </main>
  )
}
