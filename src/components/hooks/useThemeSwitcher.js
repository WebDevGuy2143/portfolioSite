import React, { useEffect, useState } from "react"

const useThemeSwitcher = () => {
  const preferDarkQuery = "(prefer-color-scheme: dark)"
  const [mode, setmode] = useState("")

  useEffect(() => {
    const mediaQuery = window.matchMedia(preferDarkQuery)
    const userPref = window.localStorage.getItem("theme")

    const handlechange = () => {
      if (userPref) {
        let check = userPref === "dark" ? "dark" : "light"
        setmode(check)
        if (check === "dark") {
          document.documentElement.classList.add("dark")
        } else {
          document.documentElement.classList.remove("dark")
        }
      } else {
        let check = mediaQuery.matches ? "dark" : "light"
        setmode(check)

        if (check === "dark") {
          document.documentElement.classList.add("dark")
        } else {
          document.documentElement.classList.remove("dark")
        }
      }
    }
    handlechange()

    mediaQuery.addEventListener("change", handlechange)

    return () => mediaQuery.removeEventListener("change", handlechange)
  }, [])

  useEffect(() => {
    if (mode === "dark") {
      window.localStorage.setItem("theme", "dark")
      document.documentElement.classList.add("dark")
    }
    if (mode === "light") {
      window.localStorage.setItem("theme", "light")
      document.documentElement.classList.remove("dark")
    }
  }, [mode])
  return [mode, setmode]
}

export default useThemeSwitcher
