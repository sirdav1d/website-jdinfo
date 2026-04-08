"use client"

import { useEffect } from "react"

export default function MobileOptimization() {
  useEffect(() => {
    const addMaximumScaleToMetaViewport = () => {
      const el = document.querySelector("meta[name=viewport]")

      if (el !== null) {
        let content = el.getAttribute("content")
        const re = /maximum-scale=[0-9.]+/g

        if (re.test(content!)) {
          content = content!.replace(re, "maximum-scale=1.0")
        } else {
          content = [content, "maximum-scale=1.0"].join(", ")
        }

        el.setAttribute("content", content!)
      }
    }

    const optimizeForMobile = () => {
      let lastTouchEnd = 0

      document.addEventListener(
        "touchend",
        (event) => {
          const now = new Date().getTime()
          if (now - lastTouchEnd <= 300) {
            event.preventDefault()
          }
          lastTouchEnd = now
        },
        false,
      )

      document.addEventListener("touchstart", () => {}, { passive: true })
      document.addEventListener("touchmove", () => {}, { passive: true })
    }

    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)

    if (isMobile) {
      addMaximumScaleToMetaViewport()
      optimizeForMobile()
    }
  }, [])

  return null
}
