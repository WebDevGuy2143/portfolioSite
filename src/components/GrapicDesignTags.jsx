import React from "react"

const GraphicDesignTags = ({ tags }) => {
  const getTagClass = () => {
    const lowerCaseText = tags

    switch (true) {
      case lowerCaseText.includes("Graphic Design"):
        return "bg-pink-100 text-pink-800"
      case lowerCaseText.includes("Adobe Illustrator"):
        return "bg-yellow-100 text-yellow-800"
      case lowerCaseText.includes("Adobe Photoshop"):
        return "bg-blue-100 text-blue-800"
      case lowerCaseText.includes("Adobe InDesign"):
        return "bg-purple-100 text-purple-800"
      default:
        // Default styling for other tags
        return "bg-purple-100 text-purple-800"
    }
  }

  return (
    <span
      className={`text-xs text-center font-medium mt-2 px-2 py-3 rounded-full self-center ${getTagClass()}`}
    >
      {tags}
    </span>
  )
}

export default GraphicDesignTags
