"use client"

import Head from "next/head"
import Image from "next/image"
import profilePic from "../../public/images/profile/profilePic4.png"
import Link from "next/link"
import { useState } from "react"

import AnimatedText from "@/components/AnimatedText"
import { LinkArrow } from "@/components/icons"
import Layout from "@/components/Layout"

export default function Home() {
  const [isDarkMode, setDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode)
  }

  const lightModeColors = {
    purple: "bg-purple-300",
    blue: "bg-blue-300",
    orange: "bg-orange-300",
    green: "bg-green-300",
  }

  const darkModeColors = {
    neonPurple: "bg-indigo-500 text-indigo-800",
    neonBlue: "bg-teal-500 text-teal-800",
    neonOrange: "bg-amber-500 text-amber-800",
    neonGreen: "bg-emerald-500 text-emerald-800",
  }

  return (
    <>
      <Head>
        <title>Gene&apos;s Portfolio</title>
        <meta
          name="description"
          content="Gene Howell - Digital media specialist skilled in video, graphics, web development, and radio production. Transforming ideas into captivating digital experiences for maximum impact. Let's create something extraordinary!"
        />
      </Head>
      <main
        className={`flex items-center ${
          isDarkMode ? "dark:text-white dark:bg-gray-900" : "text-slate-900"
        } w-full min-h-screen`}
      >
        <Layout className="pt-0">
          <div className="flex items-center justify-between w-full">
            <div className="w-1/2 relative">
              <div
                className={`absolute top-32 left-52 w-72 h-72 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob ${
                  isDarkMode
                    ? darkModeColors.neonPurple
                    : lightModeColors.purple
                }`}
              ></div>
              <div
                className={`absolute top-20 left-5 w-72 h-72 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000 ${
                  isDarkMode ? darkModeColors.neonBlue : lightModeColors.blue
                }`}
              ></div>
              <div
                className={`absolute -bottom-8 left-40 w-72 h-72 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000 ${
                  isDarkMode
                    ? darkModeColors.neonOrange
                    : lightModeColors.orange
                }`}
              ></div>
              <div
                className={`absolute -bottom-5 left-15 w-72 h-72 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-5000 ${
                  isDarkMode ? darkModeColors.neonGreen : lightModeColors.green
                }`}
              ></div>
              <Image
                src={profilePic}
                alt="Gene Howell"
                className="w-full h-auto rounded-full relative z-10"
              />
            </div>
            <div
              className={`w-1/2 flex flex-col items-center self-center ${
                isDarkMode ? "dark:text-white" : "text-slate-900"
              }`}
            >
              <AnimatedText
                text="Hello there! I'm Gene, your personal Digital Media Specialist"
                className="!text-4xl !text-left animate-fade-in-down"
              />
              <p className="my-4 text-base font-medium">
                From the very beginning, my journey in the realm of technology
                began with web development. However, as I progressed through
                college, my horizons expanded, and I discovered my
                &quot;deep-seated&quot; passion for programming, graphic design,
                video production, and radio.
              </p>
              <p className="my-4 text-base font-medium">
                Today, I bring together my diverse expertise to create
                captivating digital experiences that seamlessly integrate the
                worlds of web development, programming, graphic design, video
                production, and radio. Welcome to my online portfolio, where you
                will explore the culmination of my multifaceted skills and
                projects.
              </p>
              <div className="flex items-center self-start mt-2">
                <Link
                  href="/Resume.pdf"
                  className={`flex items-center ${
                    isDarkMode
                      ? "dark:bg-slate-900 dark:text-light"
                      : "bg-slate-900 text-light"
                  } p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark hover:scale-[1.1] ease-in duration-300`}
                  download={true}
                >
                  Resume
                  <LinkArrow className="w-6 ml-1" />
                </Link>
                <Link
                  href="mailto:genehowell9@gmail.com"
                  className={`contactAnimate ml-4 text-lg font-medium capitalize ${
                    isDarkMode
                      ? "dark:text-white underline"
                      : "text-slate-900 underline"
                  } hover:underline-offset-2 hover:ease-out`}
                >
                  Contact Me
                </Link>
              </div>
              <button
                onClick={toggleDarkMode}
                className="mt-4 text-lg font-medium capitalize underline hover:underline-offset-2 hover:ease-out"
              >
                Toggle Dark Mode
              </button>
            </div>
          </div>
        </Layout>
      </main>
    </>
  )
}
