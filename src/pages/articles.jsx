import AnimatedText from "@/components/AnimatedText"
import Layout from "@/components/Layout"
import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import React from "react"
import ArticleImg1 from "../../public/images/articles/Article1Img.png"
import article3 from "../../public/images/articles/create modal component in react using react portals.png"
import TransitionEffect from "@/components/TransitionEffect"


const Article = ({ img, title, date, link }) => {
  return (
    <li className="relative w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between bg-light text-dark first:mt-0 border border-solid border-dark border-r-4 border-b-4 dark:border-light dark:bg-dark hover:scale-110 hover:transition-all sm:flex-col">
      <Link href={link} target="_blank">
        <h2 className="capitalize text-xl font-semibold hover:underline dark:text-light">
          {title}
        </h2>
      </Link>
      <span className="text-primary font-semibold pl-4 dark:text-primaryDark sm:self-start sm:pl-0 xs:text-sm">
        {date}
      </span>
    </li>
  )
}

const FeaturedArticle = ({ img, title, time, summary, link }) => {
  return (
    <li className="relative col-span-1 w-full h-fit p-4 bg-light border border-solid border-dark rounded-2xl dark:bg-dark dark:border-light">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-fit rounded-[2.5rem] bg-dark rounded-br-3xl" />
      <Link
        href={link}
        target="_blank"
        className="w-full inline-block cursor-pointer overflow-hidden rounded-lg"
      >
        <Image
          src={img}
          alt={title}
          className="w-full h-auto hover:scale-125 hover:transition-all hover:ease-in-out"
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
        />
      </Link>
      <Link href={link} target="_blank">
        <h2 className="capitalize text-2xl font-bold my-2 mt-4 hover:underline xs:text-lg">
          {title}
        </h2>
        <p className="text-sm mb-2">{summary}</p>
        <span className="text-primary font-semibold dark:text-primaryDark">
          {time}
        </span>
      </Link>
    </li>
  )
}

const articles = () => {
  return (
    <>
      <Head>
        <title>Gene&apos;s Portfolio | My Blog Page</title>
        <meta
          name="description"
          content="Gene Howell - Digital media specialist skilled in video, graphics, web development, and radio production. Transforming ideas into captivating digital experiences for maximum impact. Let's create something extraordinary!"
        />
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center overflow-hidden dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="“Great things are done by a series of small things brought together.” – Vincent Van Gogh"
            className="mb-16 !text-6xl !text-center xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl sm:mb-16"
          />
          <ul className="grid grid-cols-2 gap-16 lg:gap-8 md:grid-cols-1 md:gap-y-16">
            <FeaturedArticle
              title="The Ultimate Guide To Modern Responsive Web Design Concepts"
              summary="Hey there! So, let's talk about something exciting today! 
              Let's talk about responsive web design! 
              Responsive web design has become a crucial part of modern web development. In an age where users are accessing the internet through a multitude of devices, responsive design ensures that websites adapt to the screen size and resolution of the device they're viewed on. This results in a seamless browsing experience for users, regardless of the device they're using. In this article, we'll cover the key concepts behind modern responsive web design and best practices for on-page SEO (Search Engine Optimization)."
              time="11 min read"
              link="/TheUltimateGuideToModernResponsiveWebDesignConcepts"
              img={ArticleImg1}
            />
            <FeaturedArticle
              title="Build A Custom Pagination Component In ReachJS From Scratch"
              summary="Learn how to build a custom pagination component in ReactJS from scratch. Follow this step-by-step guide to integrate Pagination component in your ReactJS project."
              time="9 min read"
              link="/"
              img={ArticleImg1}
            />
          </ul>
          <h2 className="font-bold text-4xl w-full text-center my-16 mt-32">
            All Articles
          </h2>
          <ul>
            <Article
              title="The Ultimate Guide To Modern Responsive Web Design Concepts"
              date="February 24th, 2023"
              link="/TheUltimateGuideToModernResponsiveWebDesignConcepts"
              img={ArticleImg1}
            />
            <Article
              title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
              date="December 21, 2023"
              link="/"
              img={article3}
            />
            <Article
              title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
              date="December 21, 2023"
              link="/"
              img={article3}
            />
            <Article
              title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
              date="December 21, 2023"
              link="/"
              img={article3}
            />
            <Article
              title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
              date="December 21, 2023"
              link="/"
              img={article3}
            />
            <Article
              title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
              date="December 21, 2023"
              link="/"
              img={article3}
            />
            <Article
              title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
              date="December 21, 2023"
              link="/"
              img={article3}
            />
          </ul>
        </Layout>
      </main>
    </>
  )
}

export default articles
