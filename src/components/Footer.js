import React from "react"
import Layout from "./Layout"
import Link from "next/link"

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-dark font-medium text-lg ">
      <Layout className="py-8 flex items-center justify-between">
        <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
        <div className="flex items-center">
          Site made with{" "}
          <span
            className="text-primary text-2xl px-1 hover:scale-125 ease-in duration-300 hover:cursor-pointer
          "
          >
            ❤️
          </span>
        </div>
        <p>
          Designed and Developed by{" "}
          <Link
            className="underline hover:underline-offset-2 hover:ease-out"
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
