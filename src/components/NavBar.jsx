import Link from "next/link"
import React, { useState } from "react"
import { useRouter } from "next/router"
import {
  FacebookIcon,
  GithubIcon,
  LinkedInIcon,
  MoonIcon,
  SunIcon,
  TwitterIcon,
} from "./icons"
import Logo from "./Logo"
import useThemeSwitcher from "./hooks/useThemeSwitcher"

const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter()
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 text-dark ${router.asPath === href ? "w-full" : "w-0"
          } dark:bg-light`}
      >
        &nbsp;
      </span>
    </Link>
  )
}

const CustomMobileLink = ({ href, title, className = "", toggle }) => {
  const router = useRouter()

  const handleClick = () => {
    toggle()
    router.push(href)
  }

  return (
    <button
      href={href}
      className={`${className} relative group text-white dark:text-dark my-2`}
      onClick={handleClick}
    >
      {title}
      <span
        className={`h-[1px] inline-block bg-light absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 text-slate-900 ${router.asPath === href ? "w-full" : "w-0"
          } dark:bg-dark`}
      >
        &nbsp;
      </span>
    </button>
  )
}

const NavBar = () => {
  const [mode, setMode] = useThemeSwitcher()
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between z-10 dark:text-white lg:px-16 relative z-1 md:!px-6 sm:px-8 xs:!pl-2">
      <button
        className="flex-col justify-center items-center cursor-pointer hidden lg:flex"
        onClick={handleClick}
      >
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
            }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? "opacity-0" : "opacity-100"
            }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
            }`}
        ></span>
      </button>

      <div className="w-full flex justify-between items-center lg:hidden">
        <nav>
          <CustomLink
            href="/"
            title="Home"
            className="mr-4 text-slate-900 dark:text-white"
          />
          <CustomLink
            href="/About/about"
            title="About"
            className="mx-4 text-slate-900 dark:text-white"
          />
          <CustomLink
            href="/MyWorks/myWorks"
            title="My Work"
            className="mx-4 text-slate-900 dark:text-white"
          />
          <CustomLink
            href="/Blog/articles"
            title="My Articles"
            className="mx-4 text-slate-900 dark:text-white"
          />
          <CustomLink
            href="/Contact/contact"
            title="Contact Me"
            className="ml-4 text-slate-900 dark:text-white"
          />
        </nav>

        <nav className="flex items-center justify-center flex-wrap">
          <Link
            className="hover:animate-bounce w-6 mx-3 hover:drop-shadow-2xl"
            href="https://www.facebook.com/gene.howell.webguy"
            target={"_blank"}
          >
            <FacebookIcon />
          </Link>
          <Link
            className="hover:animate-bounce w-6 mx-3 hover:drop-shadow-3xl"
            href="https://www.linkedin.com/in/genehowellwebdev/"
            target={"_blank"}
          >
            <LinkedInIcon />
          </Link>
          <Link
            className="hover:animate-bounce w-6 mx-3 hover:drop-shadow-3xl"
            href="https://github.com/WebDevGuy2143"
            target={"_blank"}
          >
            <GithubIcon />
          </Link>
          <Link
            className="hover:animate-bounce w-6 ml-3 mr-2 hover:drop-shadow-3xl"
            href="https://twitter.com/GeneHowell3142"
            target={"_blank"}
          >
            <TwitterIcon />
          </Link>

          <button
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
            className={`ml-3 flex items-center justify-center rounded-full p-1 ${mode === "light" ? "bg-dark text-white" : "bg-light text-dark"
              }`}
          >
            {mode === "dark" ? (
              <SunIcon className={"fill-dark"} />
            ) : (
              <MoonIcon className={"fill-dark"} />
            )}
          </button>
        </nav>
      </div>

      {isOpen ? (
        <div className="min-w-[70vw] flex flex-col justify-between z-30 items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32 px-11 transition-all duration-300 ease-in-out">
          <nav className="flex items-center flex-col justify-center transition-all duration-300 ease-out">
            <CustomMobileLink
              href="/"
              title="Home"
              className="text-dark dark:text-dark"
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/About/about"
              title="About"
              className="text-dark dark:text-dark"
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/MyWorks/myWorks"
              title="My Work"
              className="text-dark dark:text-dark"
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/Blog/articles"
              title="My Articles"
              className="text-dark dark:text-dark"
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/Contact/contact"
              title="Contact Me"
              className="text-dark dark:text-dark"
              toggle={handleClick}
            />
          </nav>

          <nav className="flex items-center justify-center flex-wrap m-2">
            <Link
              className="hover:animate-bounce w-6 mx-3 hover:drop-shadow-2xl sm:mx-1"
              href="https://www.facebook.com/gene.howell.webguy"
              target={"_blank"}
            >
              <FacebookIcon />
            </Link>
            <Link
              className="hover:animate-bounce w-6 mx-3 hover:drop-shadow-3xl sm:mx-1"
              href="https://www.linkedin.com/in/genehowellwebdev/"
              target={"_blank"}
            >
              <LinkedInIcon />
            </Link>
            <Link
              className="hover:animate-bounce w-6 mx-3 hover:drop-shadow-3xl bg-light dark:bg-dark rounded-full sm:mx-1"
              href="https://github.com/WebDevGuy2143"
              target={"_blank"}
            >
              <GithubIcon />
            </Link>
            <Link
              className="hover:animate-bounce w-6 ml-3 hover:drop-shadow-3xl sm:mx-1"
              href="https://twitter.com/GeneHowell3142"
              target={"_blank"}
            >
              <TwitterIcon />
            </Link>

            <button
              onClick={() => setMode(mode === "light" ? "dark" : "light")}
              className={`ml-3 flex items-center justify-center rounded-full p-1 ${mode === "light" ? "bg-dark text-white" : "bg-light text-dark"
                }`}
            >
              {mode === "dark" ? (
                <SunIcon className={"fill-dark"} />
              ) : (
                <MoonIcon className={"fill-dark"} />
              )}
            </button>
          </nav>
        </div>
      ) : null}

      <div className="absolute left-[50%] md:left-[40%] lg:left-[40%] translate-x-[50%] lg:mt-4">
        <Logo />
      </div>
    </header>
  )
}

export default NavBar
