import Link from "next/link"
import React from "react"

const Logo = () => {
  return (
    <div className="flex items-center justify-center">
      <Link
        href="/"
        className="w-16 h-16 bg-slate-800 text-light flex items-center justify-center rounded-full text-2xl font-bold hover:scale-75 ease-in duration-300 hover:bg-violet-700"
      >
        GH
      </Link>
    </div>
  )
}

export default Logo
