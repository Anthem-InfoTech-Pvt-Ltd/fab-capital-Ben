"use client"

import { useEffect } from "react"

export default function GlobalStyles() {
  useEffect(() => {
    // Create a style element
    const style = document.createElement("style")

    // Add CSS to hide PoundSterling icons next to "Exit" text
    style.textContent = `
      /* Hide PoundSterling icons that appear before "Exit" text */
      .text-gray-500 svg[data-lucide="pound-sterling"] + span:contains("Exit"),
      span:contains("Exit") ~ svg[data-lucide="pound-sterling"],
      div:has(> span:contains("Exit")) > svg[data-lucide="pound-sterling"] {
        opacity: 0 !important;
        width: 0 !important;
        margin: 0 !important;
        padding: 0 !important;
        position: absolute !important;
        pointer-events: none !important;
      }
      
      /* Alternative approach - make all PoundSterling icons invisible in date sections */
      .flex.items-center.text-sm.text-gray-500 svg[data-lucide="pound-sterling"] {
        opacity: 0 !important;
        width: 0 !important;
        margin: 0 !important;
      }
    `

    // Append the style element to the document head
    document.head.appendChild(style)

    // Clean up on component unmount
    return () => {
      document.head.removeChild(style)
    }
  }, [])

  return null
}

