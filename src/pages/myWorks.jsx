import AnimatedText from "@/components/AnimatedText"
import Layout from "@/components/Layout"
import { GithubIcon } from "@/components/icons"
import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import React from "react"
import project1 from "../../public/images/projects/WebDev.jpg"
import project2 from "../../public/images/projects/graphicDesign.jpg"
import project3 from "../../public/images/projects/videoProduction.jpg"
import project4 from "../../public/images/projects/AudioProduction.jpg"

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article className="w-full flex items-center justify-between rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12">
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg"
        priority
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
      >
        <Image src={img} alt={title} className="w-full h-auto" />
      </Link>
      <div className="w-1/2 flex flex-col items-start justify-between pl-6">
        <span className="text-primary font-medium text-xl">{type}</span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold">{title}</h2>
        </Link>
        <p className="my-2 font-medium text-dark">{summary}</p>
        <div className="mt-2 flex items-center">
          <Link href={github} target="_blank" className="w-10">
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold"
          >
            Visit My Project
          </Link>
        </div>
      </div>
    </article>
  )
}

const Project = ({ title, img, link, alt }) => {
  return (
    <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative hover:bg-violet-700/75 transition-all">
      <div className="relative w-full mx-auto">
        <Link href={link}>
          <Image
            className="h-64 w-full object-cover rounded-md"
            src={img}
            alt={alt}
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
          />
          <div className="absolute inset-0 bg-gray-700 opacity-60 rounded-md"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="text-white text-3xl font-bold">{title}</h2>
          </div>
        </Link>
      </div>
    </article>
  )
}

const myWorks = () => {
  return (
    <>
      <Head>
        <title>Gene&apos;s Portfolio | My Works Page</title>
        <meta
          name="description"
          content="Gene Howell - Digital media specialist skilled in video, graphics, web development, and radio production. Transforming ideas into captivating digital experiences for maximum impact. Let's create something extraordinary!"
        />
      </Head>
      <main className="w-full mb-16 flex flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText
            text='"The worst enemy to creativity is self-doubt.” – Sylvia Plath"'
            className="!text-6xl !text-center xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl"
          />

          <div className="grid grid-cols-12 gap-24">
            <div className="col-span-6">
              <Project
                title="Web Development"
                img={project1}
                link="/webProjects"
                alt="Web Development Projects"
              />
            </div>
            <div className="col-span-6">
              <Project
                title="Graphic Design"
                img={project2}
                link="/graphicDesignProjects"
                alt="Graphic Design Projects"
              />
            </div>

            <div className="col-span-6">
              <Project
                title="Video Production"
                img={project3}
                link="/"
                alt="Video Production Projects"
              />
            </div>
            <div className="col-span-6">
              <Project
                title="Audio Production"
                img={project4}
                link="/"
                alt="Audio Production Playlist"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  )
}

export default myWorks
