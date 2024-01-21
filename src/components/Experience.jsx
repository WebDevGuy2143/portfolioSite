import React from "react"
import LiIcon from "./LiIcon"

const Details = ({ position, company, companyLink, time, address, work }) => {
  return (
    <li className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]">
      <LiIcon />
      <div>
        <h3 className="capitalize font-bold text-2xl dark:text-light sm:text-xl xs:text-lg">
          {position}&nbsp;
          <a
            href={companyLink}
            target="_blank"
            className="text-primary capitalize dark:text-primaryDark"
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full dark:text-light md:text-sm">{work}</p>
      </div>
    </li>
  )
}

const Experience = () => {
  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Experience
      </h2>
      <div className="w-[75%] mx-auto relative lg:[90%] md:w-full">
        <div className="absolute left-9 w-[4px] h-full bg-dark dark:bg-light origin-top md:w-[2px] md:left-[30px] xs:left-[20px]" />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            position={"Full-stack Web Developer"}
            company={"Howell Creative"}
            companyLink={"http://www.genehowell.com"}
            time={"2009-Present"}
            address={"Panama City, Fl"}
            work={
              "I help provide a clean, yet functional online presense for local businesses in showcasing the best way in what they have to offer towards their target audience."
            }
          />
          <Details
            position={"Full-stack Web Developer"}
            company={"Tahirih Pellegrino"}
            companyLink={"#"}
            time={"2009-2010"}
            address={"Marietta, Ga"}
            work={
              "I built a custom membership website for Tahirih which involved numerous meetings. This site was built to promote her self published book. I am extremely grateful for the opportunity with working on this project as a first project in my web dev career."
            }
          />
          <Details
            position={"Full-stack Web Developer"}
            company={"Muscle Nerdz"}
            companyLink={"#"}
            time={"2016-2017"}
            address={"Panama City, Fl"}
            work={
              "This website was built using the WordPress platform, with a predetermined theme I had modified for them. I would frequently update their site with daily, to weekly content."
            }
          />
          <Details
            position={"Full-stack Web Developer"}
            company={"Stephanie Pettis and RIO"}
            companyLink={"http://www.stephaniepettisandrio.com/"}
            time={"2016-Present"}
            address={"Panama City, Fl"}
            work={
              "I built Stephane's website for her band, in which my father is a part of. This took numerous scheduled meetings to have the stamp of approval from Stephanie. This was a fun project to work on as well."
            }
          />
          <Details
            position={"Web Developer Intern"}
            company={"Kerigan Marketing Associates"}
            companyLink={"https://keriganmarketing.com/"}
            time={"2020-2021"}
            address={"Mexico Beach, Fl"}
            work={
              "As the web intern at Kerigan Marketing Associates for the allotted three months, I dealt with front and back end work. I helped keep websites up to date and made sure everything was functional and up to code with today's standards."
            }
          />
          <Details
            position={"Student Assistant"}
            company={"Gulf Coast State College"}
            companyLink={"https://centerforstudentmedia.com/"}
            time={"2021-2022"}
            address={"Panama City, Fl"}
            work={
              "I worked as a student assistant for the Digital Media and Design program. During my timeframe, I participated in helping the program with areas such as graphic design, web development, radio broadcasting, video production (editing and camera work)."
            }
          />
          <Details
            position={"Student Assistant"}
            company={"Gulf Coast State College"}
            companyLink={"https://centerforstudentmedia.com/"}
            time={"2023-Present"}
            address={"Panama City, Fl"}
            work={
              "I am currently working as a student assistant for the Digital Media and Design program. During my timeframe, I am participating in helping the program with areas such as graphic design, web development, radio broadcasting, video production (editing and camera work)."
            }
          />
        </ul>
      </div>
    </div>
  )
}

export default Experience
