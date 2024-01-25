"use client"

import Head from "next/head"
import Image from "next/image"
import profilePic from "../../public/images/profile/profilePic4.png"
import Link from "next/link"

import AnimatedText from "@/components/AnimatedText"
import { LinkArrow } from "@/components/icons"
import Layout from "@/components/Layout"
import TransitionEffect from "@/components/TransitionEffect"

export default function Home() {
  return (
    <>
      <Head>
        <title>Gene&apos;s Portfolio</title>
        <meta
          name="description"
          content="Gene Howell - Digital media specialist skilled in video, graphics, web development, and radio production. Transforming ideas into captivating digital experiences for maximum impact. Let's create something extraordinary!"
        />
      </Head>
      <TransitionEffect />
      <main className="flex items-center text-dark w-full min-h-screen dark:text-light md:pt-4 ">
        <Layout className="pt-0">
          <div className="flex items-center justify-between w-full lg:flex-col">
            <div className="w-1/2 relative">

              <div className="absolute lg:hidden xl:!top-[15px] xl:!left-[0px] xl:!w-[200px] xl:!h-[200px] xl:!blur-2xl 2xl:!top-[150px] 2xl:!left-[20px] 2xl!:w-[220px] 2xl:!h-[220px] 2xl:blur-2xl 3xl:top-[100px] 3xl:left-[100px] 3xl:w-[300px] 3xl:h-[300px] 3xl:blur-3xl bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000 dark:opacity-100 dark:bg-[#44BCFF] dark:z-50"></div>

              <div className="absolute lg:hidden dark:bg-[#b144ff] xl:!top-[120px] xl:!left-[80px] xl:!w-[200px] xl:!h-[200px] xl:!blur2xl  2xl:!top-[140px] 2xl:!left-[200px] 2xl:w-[250px] 2xl:h-[250px] 2xl:blur-2xl 3xl:top-[150px] 3xl:left-[350px] 3xl:w-[300px] 3xl:h-[300px] 3xl:blur-3xl bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob dark:opacity-100 dark:z-50"></div>

              <div className="absolute lg:hidden xl:!top-[300px] xl:!left-[0px] xl:!w-[200px] xl:!h-[200px] 2xl:!left-[50px] 2xl:!w-[250px] 2xl:!h-[250px] 2xl:!blur-2xl 3xl:top-[400px] 3xl:w-[350px] 3xl:h-[350px] 3xl:blur-3xl dark:bg-[#77f159] bg-green-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-5000 dark:opacity-100 dark:z-50"></div>

              <div className="absolute lg:hidden xl:!top-[300px] xl:!-left-[10px] xl:!w-[200px] xl:!h-[200px] 2xl:!left-[200px] 2xl:!w-[250px] 2xl:!h-[250px] 2xl:!blur-2xl 3xl:left-[250px] 3xl:top-[400px] 3xl:w-[350px] 3xl:h-[350px] 3xl:blur-3xl bg-orange-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000  dark:bg-#ee590e dark:opacity-100 dark:z-50"></div>

              <Image
                src={profilePic}
                alt="Gene Howell"
                className="w-full h-auto rounded-full relative z-50 lg:flex-col lg:w-full md:pb-1 md:w-full lg:mb-16"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
              />
            </div>
            <div className="w-1/2 flex flex-col items-center self-center lg:w-full">
              <AnimatedText
                text="Hello there! I'm Gene, your personal Digital Media Specialist"
                className="mb-5 !text-6xl !text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl md:pt-0 sm:!text-3xl"
              />
              <p className="my-4 text-base font-medium md:text-sm sm:text-xs">
                From the very beginning, my journey in the realm of technology
                began with web development. However, as I progressed through
                college, my horizons expanded, and I discovered my
                &quot;deep-seated&quot; passion for programming, graphic design,
                video production, and radio.
              </p>
              <p className="my-4 text-base font-medium mb-16">
                Today, I bring together my diverse expertise to create
                captivating digital experiences that seamlessly integrate the
                worlds of web development, programming, graphic design, video
                production, and radio. Welcome to my online portfolio, where you
                will explore the culmination of my multifaceted skills and
                projects.
              </p>
              <div className="flex items-center self-start mt-2 lg:self-center">
                <Link
                  href="/Resume.pdf"
                  className="flex items-center self-start mt-2 bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light md:p-2 md:px-4 md:text-base"
                  download={true}
                >
                  Resume
                  <LinkArrow className="w-6 ml-1" />
                </Link>
                <Link
                  href="mailto:genehowell9@gmail.com"
                  className="contactAnimate ml-4 text-lg font-medium capitalize text-slate-900 underline hover:underline-offset-4 hover:animate-bounce hover:ease-out dark:text-light mt-1 md:text-base"
                >
                  Contact Me
                </Link>
              </div>
            </div>
          </div>
        </Layout>
      </main>
    </>
  )
}
