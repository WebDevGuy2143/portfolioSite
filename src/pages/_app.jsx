import NavBar from "@/components/NavBar"
import Head from "next/head"
import Footer from "@/components/Footer"

import { Nunito } from "next/font/google"
import { AnimatePresence } from "framer-motion"
import { useRouter } from "next/router"
import "@/styles/globals.css"

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
})

export default function App({ Component, pageProps }) {
  const router = useRouter()
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        className={`${nunito.variable} font-nunito bg-light dark:bg-dark w-full min-h-screen`}
      >
        <NavBar />
        <AnimatePresence mode="wait">
          <Component key={router.asPath} {...pageProps} />
        </AnimatePresence>
        <Footer />
      </main>
    </>
  )
}
