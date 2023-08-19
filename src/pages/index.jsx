import Head from "next/head"
import Image from "next/image"
import profilePic from "../../public/images/profile/profilePic4.png"
import Link from "next/link"

import AnimatedText from "@/components/AnimatedText"
import { LinkArrow } from "@/components/icons"
import Layout from "@/components/Layout"

export default function Home() {
  const CustomLink = ({ href, title, className = "" }) => {
    const router = router()
    return (
      <CustomLink
        href={href}
        className={`${className} relative group text-slate-900`}
      >
        {title}
        <span
          className={`h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 text-slate-900 ${
            router.asPath === href ? "w-full" : "w-0"
          }`}
        >
          &nbsp;
        </span>
      </CustomLink>
    )
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
      <main className="flex items-center text-slate-900 w-full min-h-screen">
        <Layout className="pt-0">
          <div className="flex items-center justify-between w-full">
            <div className="w-1/2 relative">
              <div className="absolute top-32 left-52 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
              <div className="absolute top-20 left-5 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
              <div className="absolute -bottom-8 left-40 w-72 h-72 bg-orange-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
              <div className="absolute -bottom-5 left-15 w-72 h-72 bg-green-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-5000"></div>
              <Image
                src={profilePic}
                alt="Gene Howell"
                className="w-full h-auto rounded-full relative z-10"
              />
            </div>
            <div className="w-1/2 flex flex-col items-center self-center text-slate-900">
              <AnimatedText
                text="Hello there! I'm Gene, your personal Digital Media
                Specialist"
                className="!text-4xl !text-left animate-fade-in-down text-slate-900"
              />
              <p className="my-4 text-base font-medium text-slate-900">
                From the very beginning, my journey in the realm of technology
                began with web development. However, as I progressed through
                college, my horizons expanded, and I discovered my
                &ldquo;deep-seated&rdquo; passion for programming, graphic
                design, video production, and radio.
              </p>
              <p className="my-4 text-base font-medium text-slate-900">
                Today, I bring together my diverse expertise to create
                captivating digital experiences that seamlessly integrate the
                worlds of web development, programming, graphic design, video
                production, and radio. Welcome to my portfolio site, where you
                can explore the culmination of my multifaceted skills and
                projects.
              </p>
              <div className="flex items-center self-start mt-2">
                <Link
                  href="/Resume.pdf"
                  className="flex items-center bg-slate-900 text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark hover:scale-[1.1] ease-in duration-300"
                  download={true}
                >
                  Resume
                  <LinkArrow className="w-6 ml-1" />
                </Link>
                <Link
                  href="mailto:genehowell9@gmail.com"
                  className="contactAnimate ml-4 text-lg font-medium capitalize text-slate-900 underline hover:underline-offset-2 hover:ease-out"
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
