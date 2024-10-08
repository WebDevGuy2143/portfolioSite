import AnimatedText from "@/components/AnimatedText"
import Layout from "@/components/Layout"
import { GithubIcon } from "@/components/icons"
import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import React from "react"
import project1 from "../../../../public/images/project1.png"
import project2 from "../../../../public/images/project2.png"
import project3 from "../../../../public/images/project3.png"
import project4 from "../../../../public/images/project4.png"
import project5 from "../../../../public/images/project5.jpg"
import TransitionEffect from "@/components/TransitionEffect"

const Tags = ({ text }) => {
  // Ensure text is an array
  const tags = Array.isArray(text) ? text : [text]

  // Function to get the dynamic class based on the tag
  const getTagClass = () => {
    const lowerCaseTags = tags.map((tag) => tag.toLowerCase())

    for (const tag of lowerCaseTags) {
      switch (tag) {
        case "html":
          return "bg-blue-600 text-light"
        case "css":
          return "bg-purple-600 text-light"
        case "javascript":
          return "bg-sky-600 text-light"
        case "python":
          return "bg-indigo-600 text-light"
        case "php":
          return "bg-purple-600 text-light"
        case "c++":
          return "bg-pink-600 text-light"
        case "wordpress":
          return "bg-indigo-600 text-light"
        default:
          return "bg-blue-100 text-blue-800"
      }
    }
  }

  return (
    <span
      className={`text-xs text-center font-medium mt-2 px-2 py-3 rounded-full self-center ${getTagClass()}`}
    >
      {text}
    </span>
  )
}

const FeaturedProject = ({ type, title, tags, summary, img, link, github }) => {
  return (
    <article className="relative flex w-full items-center justify-between rounded-3xl rounded-br-2xl border border-solid border-dark bg-light p-12 shadow-2xl dark:border-light dark:bg-dark lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4 ">
      <div className="absolute top-0 -right-3 -z-10 h-[103%] w-[101%] rounded-[2.5rem] rounded-br-3xl bg-dark dark:bg-light  xs:-right-2 xs:h-[102%] xs:w-[100%] xs:rounded-[1.5rem]" />
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
      >
        <Image
          src={img}
          alt={title}
          className="w-full h-auto hover:scale-125 hover:transition-all hover:ease-in-out"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </Link>
      <div className="flex w-1/2 flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-xl font-medium text-primary dark:text-primaryDark xs:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="underline-offset-2 hover:underline"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold lg:text-3xl xs:text-2xl">
            {title}
          </h2>
        </Link>
        <div className="w-[90%] relative flex flex-wrap sm:justify-center space-x-3 space-y-3">
          {tags.map((tagItem, index) => (
            <Tags key={index} text={tagItem} />
          ))}
        </div>

        <p className="my-2 rounded-md font-medium text-dark dark:text-light sm:text-sm">
          {summary}
        </p>
        <div className="mt-2 flex items-center">
          <Link
            href={github}
            target="_blank"
            className="w-10 hover:scale-110 transition-all dark:text-light"
          >
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="hover:scale-110 transition-all ml-4 rounded-lg bg-dark p-2 px-6 text-lg font-semibold text-light dark:bg-light dark:text-dark  sm:px-4 sm:text-base "
          >
            View My Project
          </Link>
        </div>
      </div>
    </article>
  )
}

const Project = ({ title, summary, tags, type, img, link, github }) => {
  return (
    <article className="w-full flex-col flex items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative  dark:bg-dark dark:border-light">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[102%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light" />
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <Image
          src={img}
          alt={title}
          className="w-full h-auto dark:text-light hover:scale-125 hover:transition-all hover:ease-in-out"
        />
      </Link>
      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary outline-color: #000 font-medium text-xl dark:text-primaryDark">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold dark:text-light">
            {title}
          </h2>
        </Link>
        <div className="w-[90%] relative flex flex-wrap sm:justify-center space-x-3 space-y-3">
          {tags.map((tagItem, index) => (
            <Tags key={index} text={tagItem} />
          ))}
        </div>
        <p className="my-2 font-medium text-dark hover:transition-none dark:text-light">
          {summary}
        </p>
        <div className="w-full mt-2 flex items-center justify-between">
          <Link
            href={link}
            target="_blank"
            className=" text-lg font-semibold hover:underline underline-offset-2 hover:scale-110 transition-all dark:text-light"
          >
            View My Project
          </Link>
          <Link
            href={github}
            target="_blank"
            className="w-8 hover:scale-110 transition-all"
          >
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  )
}

const webProjects = () => {
  return (
    <>
      <Head>
        <title>Gene&apos;s Portfolio | My Works Page</title>
        <meta
          name="description"
          content="Gene Howell - Digital media specialist skilled in video, graphics, web development, and radio production. Transforming ideas into captivating digital experiences for maximum impact. Let's create something extraordinary!"
        />
      </Head>
      <TransitionEffect />
      <main className="mb-16 flex w-full flex-col items-center justify-center dark:text-light">
        <Layout
          className="z-0 inline-block h-full w-full bg-light p-32 dark:bg-dark xl:!pl-6 lg:!p-16 
      md:!p-12 xs:!p-2 sm:!p-8 pt-16 overflow-hidden"
        >
          <AnimatedText
            text='“Don’t wait for inspiration. It comes while working." – Henri Matisse'
            className="inline-block text-dark dark:text-light font-bold w-full capitalize mb-16 md:mb-6 md:!text-3xl !text-6xl !leading-tight lg:!text-6xl sm:!mb-8 sm:!text-3xl xs:!mb-5 xs:!text-4xl xl:text-6xl"
          />

          <div className="w-full grid grid-cols-12 center gap-24 xs:gap-0 gap-y-32 xl:gap-x-16 lg:w-full lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12 sm:col-span-12 md:gap-0">
              <FeaturedProject
                title="Stephanie Pettis and RIO project"
                img={project5}
                tags={["wordpress", "HTML", "CSS", "JavaScript", "PHP"]}
                summary="Web dev project boilerplate descriptions highlight key technologies like front-end frameworks (e.g., React), back-end tools (Node.js, Django), version control (Git), package managers (npm, yarn), styling preprocessors (Sass, Less), and deployment platforms (Heroku, AWS). Essentially, it sets the groundwork for project success."
                link="/"
                github="/"
                type="Featured Project"
              />
            </div>
            <div className="col-span-6 md:col-span-12 xs:gap-0">
              <Project
                title="Trillo project"
                img={project2}
                tags={["HTML", "CSS"]}
                summary="Trillo is dummy Hotel Booking Agency. This website was made by me as a part of the Advanced CSS course on Udemy, by Jonas Schmedtmann."
                link="https://webdevguy2143.github.io/TrilloApp/"
                github="https://github.com/WebDevGuy2143/TrilloApp"
                type="Project"
              />
            </div>
            <div className="col-span-6 md:col-span-12 xs:gap-0">
              <Project
                title="Budget Application Project"
                img={project3}
                tags={["HTML", "CSS", "JavaScript"]}
                summary="This was a web application that I coded along with Jonas Schmedtmann. It is a JavaScript budget tracking app that uses plain JavaScript (ES6), HTML, and CSS3."
                link="https://webdevguy2143.github.io/BudgetApplication/"
                github="https://github.com/WebDevGuy2143/BudgetApplication"
                type="Project"
              />
            </div>
            <div className="col-span-12 md:col-span-12 xs:gap-0">
              <FeaturedProject
                title="Chance (PIG Game) project"
                img={project4}
                tags={["HTML", "CSS", "JavaScript"]}
                summary="This is a two player game. Each player gets to roll the dice, choose whether to roll again, or keep their score. The first person to score a hundred points wins the game."
                link="https://webdevguy2143.github.io/ChanceGame/"
                github="https://github.com/WebDevGuy2143/ChanceGame"
                type="Featured Project"
              />
            </div>
            <div className="col-span-6 md:col-span-12 xs:gap-0">
              <Project
                title="Natour's Project"
                img={project1}
                tags={["HTML", "CSS", "JavaScript"]}
                summary="This is a project I did for the Advanced CSS Udemy course by Jonas Schmedtmann. I implemented all of the advance CSS techniques used in today's world."
                link="https://webdevguy2143.github.io/Natours/"
                github="https://github.com/WebDevGuy2143/Natours"
                type="Project"
              />
            </div>
            <div className="col-span-6 md:col-span-12 xs:gap-0">
              <Project
                title="Boilerplate Project"
                img={project1}
                tags={["HTML", "CSS", "JavaScript", "PHP"]}
                summary="Web dev project boilerplate descriptions highlight key technologies like front-end frameworks (e.g., React), back-end tools (Node.js, Django), version control (Git), package managers (npm, yarn), styling preprocessors (Sass, Less), and deployment platforms (Heroku, AWS). Essentially, it sets the groundwork for project success."
                link="/"
                github="/"
                type="Project"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  )
}

export default webProjects
