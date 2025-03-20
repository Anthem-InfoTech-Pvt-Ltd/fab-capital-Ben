"use client"

import { motion } from "framer-motion"

export default function LoadingSpinner() {
  return (
    <motion.div
      animate={{ rotate: 360 }}
      transition={{
        duration: 1,
        ease: "linear",
        repeat: Number.POSITIVE_INFINITY,
      }}
      style={{
        width: "50px",
        height: "50px",
        border: "5px solid #f3f3f3",
        borderRadius: "50%",
        borderRight: "5px solid #fff",
        display: "inline-block",
        margin: "50px auto",
      }}
    />
  )
}

