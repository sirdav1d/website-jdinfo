"use client"

import { useEffect } from "react"

export function useMobileOptimization() {
  useEffect(() => {
    // Função para ajustar o viewport em dispositivos móveis
    const adjustViewport = () => {
      const viewportMeta = document.querySelector('meta[name="viewport"]')
      if (viewportMeta) {
        if (window.innerWidth < 640) {
          // Otimização para dispositivos móveis
          viewportMeta.setAttribute(
            "content",
            "width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes",
          )
        } else {
          // Configuração padrão para desktop
          viewportMeta.setAttribute("content", "width=device-width, initial-scale=1")
        }
      }
    }

    // Otimização de scroll suave para todos os dispositivos
    document.documentElement.style.scrollBehavior = "smooth"

    // Otimização de toque para dispositivos móveis
    if ("ontouchstart" in window) {
      document.documentElement.classList.add("touch-device")

      // Aumentar área de toque para elementos interativos em dispositivos móveis
      const style = document.createElement("style")
      style.innerHTML = `
        .touch-device button,
        .touch-device a,
        .touch-device input[type="button"],
        .touch-device input[type="submit"] {
          min-height: 44px;
          min-width: 44px;
        }
        
        .touch-device input,
        .touch-device select,
        .touch-device textarea {
          font-size: 16px; /* Previne zoom automático em iOS */
        }
      `
      document.head.appendChild(style)
    }

    // Aplicar ajustes iniciais
    adjustViewport()

    // Atualizar em caso de redimensionamento
    window.addEventListener("resize", adjustViewport)

    // Otimização para evitar atrasos de 300ms em cliques em dispositivos móveis
    document.documentElement.style.touchAction = "manipulation"

    return () => {
      window.removeEventListener("resize", adjustViewport)
    }
  }, [])
}
