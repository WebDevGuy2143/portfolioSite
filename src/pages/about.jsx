import AnimatedText from "@/components/AnimatedText"
import Layout from "@/components/Layout"
import Head from "next/head"
import Image from "next/image"
import React from "react"
import profilePic from "../../public/images/profile/profile-about.png"
import Experience from "@/components/Experience"
import Skills from "@/components/Skills"
import Education from "@/components/Education"
import TransitionEffect from "@/components/TransitionEffect"

const about = () => {
  return (
    <>
      <Head>
        <title>Gene&apos;s Portfolio | About Page</title>
        <meta
          name="description"
          content="Gene Howell - Digital media specialist skilled in video, graphics, web development, and radio production. Transforming ideas into captivating digital experiences for maximum impact. Let's create something extraordinary!"
        />
      </Head>
      <TransitionEffect />
      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text='"Don’t wait for inspiration. It comes while working." – Henri Matisse'
            className="mb-16 !text-6xl !text-center xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl"
          />
          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:!order-2 md:!col-span-8">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light">
                My Bio
              </h2>
              <p className="font-medium pb-3">
                I knew I always had a passion for technology. Little did I know it would be in the web development field. Ever since 2009, I had started my journey with college at Chattahoochee Technical collage in Marietta, Ga as a freelance web developer. Ever since then I've transferred to Gulf Coast State College in Panama City, Florida where I've gained a lot more experience in how websites are made, the theory behind how browsers retrieve all the ins-and-outs of a website, as well as the fast paced advancements of how websites are created today in the development phase.
              </p>
              <p className="font-medium pb-3">
                Along with my Digital Media associates degree that I will obtain at the end of this year, I've picked up some other useful skills that have made me a well rounded person in the IT industry. Those skills consist of Graphic Design, Programming, Videography, Audio engineering, and much more.
              </p>
              <p className="font-medium pb-3">
                With that all being said, my coding specialties involve, HTML, CSS, JavaScript, PHP (w/WordPress), Python and C++. With those coding specialties, I also have knowledge in frameworks, such as React, Laravel, and Bootstrap. I also have knowledge with environments such as NodeJS, Composer, and Yarn.
              </p>
              <p className="font-medium pb-3">
                As with many in this industry, it is never stagnant. So I am forever learning and implementing the new skillsets that I learn along the way with creating "up to code", websites that meet todays standards.
              </p>
              <p className="font-medium">
                Get in touch via email at: genehowellwebguy@gmail.com or phone: 404-310-4661
              </p>

            </div>
            <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:!order-1 md:!col-span-8">
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-2xl bg-dark dark:bg-light" />
              <Image
                src={profilePic}
                alt="Gene Howell"
                className="w-full h-auto rounded-2xl"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:!order-3">
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-4xl sm:text-3xl xs:text-2xl">
                  50+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  Satisfied Clients
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-4xl sm:text-3xl xs:text-2xl">
                  40+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  Projects Completed
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-4xl sm:text-3xl xs:text-2xl">
                  4+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  Years of Experience
                </h2>
              </div>
            </div>
          </div>
          <Skills />
          <Experience />
          <Education />
        </Layout>
      </main>
    </>
  )
}

export default about
