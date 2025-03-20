"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function DynamicCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [cursorVariant, setCursorVariant] = useState("default")

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      })
    }

    window.addEventListener("mousemove", mouseMove)

    return () => {
      window.removeEventListener("mousemove", mouseMove)
    }
  }, [])

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
    },
    text: {
      height: 150,
      width: 150,
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      backgroundColor: "rgba(255, 255, 255, 0.1)",
      mixBlendMode: "difference",
    },
  }

  useEffect(() => {
    const textElements = document.querySelectorAll("p, h1, h2, h3, h4, h5, h6, button, a")

    const mouseEnter = () => setCursorVariant("text")
    const mouseLeave = () => setCursorVariant("default")

    textElements.forEach((elem) => {
      elem.addEventListener("mouseenter", mouseEnter)
      elem.addEventListener("mouseleave", mouseLeave)
    })

    return () => {
      textElements.forEach((elem) => {
        elem.removeEventListener("mouseenter", mouseEnter)
        elem.removeEventListener("mouseleave", mouseLeave)
      })
    }
  }, [])

  return (
    <motion.div
      className="cursor"
      variants={variants}
      animate={cursorVariant}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 28,
      }}
      style={{
        position: "fixed",
        left: 0,
        top: 0,
        width: 32,
        height: 32,
        borderRadius: "50%",
        backgroundColor: "white",
        mixBlendMode: "difference",
        pointerEvents: "none",
        zIndex: 9999,
      }}
    />
  )
}

