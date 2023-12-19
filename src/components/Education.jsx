import React from "react"
import LiIcon from "./LiIcon"

const Details = ({ type, time, place, info }) => {
  return (
    <li className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between">
      <LiIcon />
      <div>
        <h3 className="capitalize font-bold text-2xl">{type}</h3>
        <span className="capitalize font-medium text-dark/75">
          {time} | {place}
        </span>
        <p className="font-medium w-full">{info}</p>
      </div>
    </li>
  )
}

const Education = () => {
  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center">Education</h2>
      <div className="w-[75%] mx-auto relative">
        <div className="absolute left-9 w-[4px] h-full bg-dark origin-top" />
        <ul className="w-full flex flex-col items-start justify-between ml-4">
          <Details
            type={"High School Diploma"}
            time={"2004-2008"}
            place={"Marietta High School"}
            info={
              "Completed all general education high school requirements for the state of Georgia."
            }
          />
          <Details
            type={"Internet Specialist"}
            time={"2009-2015"}
            place={"Chattahoochee Technical College"}
            info={
              "Completed College courses in web programming and general education courses."
            }
          />
          <Details
            type={"Associate Of Science In Digital Media and Design"}
            time={"2018-2020"}
            place={"Gulf Coast State College"}
            info={
              "Completed associate level courses in digital media. These courses comprised of Web Development 1, Graphic Design 1 and 2, Video and Audio Production, software programming, and some Project Management Courses."
            }
          />
          <Details
            type={"Bachelor Of Science In Digital Media and Design"}
            time={"2021-2024"}
            place={"Gulf Coast State College"}
            info={
              "Completed Bachelor level courses. These courses included general education courses, as well as bachelor level web and computer programming, SEO, Web Analytics, as well as bachelor level Project Management courses."
            }
          />
        </ul>
      </div>
    </div>
  )
}

export default Education
