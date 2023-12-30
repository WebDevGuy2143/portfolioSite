import React from "react"
import Link from "next/link"
import Layout from "./Layout"

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-slate-800 font-medium text-lg dark:text-light dark:border-light sm:text-base">
      <Layout className="py-8 flex items-center justify-between text-slate-800 dark:text-light lg:flex-col lg:py-6 md:!py-8">
        <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
        <div className="flex items-center text-slate-700 dark:text-light lg:py-2">
          Site made with{" "}
          <span
            className="text-primary text-2xl px-1 hover:scale-125 ease-in duration-300 hover:cursor-pointer
          "
          >
            ❤️
          </span>
        </div>
        <p className="dark:text-light">
          Designed and Developed by{" "}
          <Link
            className="underline hover:underline-offset-2 hover:ease-out text-slate-800 dark:text-light"
            href="http://www.genehowell.com/"
          >
            Gene Howell
          </Link>
        </p>
      </Layout>
    </footer>
  )
}

export default Footer
