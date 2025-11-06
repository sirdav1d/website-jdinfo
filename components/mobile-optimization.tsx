"use client"

import { useEffect } from "react"

export default function MobileOptimization() {
  useEffect(() => {
    // Previne zoom em inputs no iOS
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

    // Otimizações para dispositivos móveis
    const optimizeForMobile = () => {
      // Previne o comportamento padrão de zoom duplo toque
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

      // Melhora a performance de scroll
      document.addEventListener("touchstart", () => {}, { passive: true })
      document.addEventListener("touchmove", () => {}, { passive: true })
    }

    // Detecta se é dispositivo móvel
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)

    if (isMobile) {
      addMaximumScaleToMetaViewport()
      optimizeForMobile()
    }

    // Otimização de performance
    if ("requestIdleCallback" in window) {
      requestIdleCallback(() => {
        // Preload de recursos críticos
        const criticalResources = ["/images/logo.png", "/images/logo-full.png"]

        criticalResources.forEach((resource) => {
          const link = document.createElement("link")
          link.rel = "preload"
          link.as = "image"
          link.href = resource
          document.head.appendChild(link)
        })
      })
    }
  }, [])

  return null
}
