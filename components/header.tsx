"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

const navigationItems = [
  { href: "/", label: "HOME" },
  { href: "/sobre", label: "SOBRE NÓS" },
  { href: "/servicos", label: "SERVIÇOS" },
  { href: "/contato", label: "CONTATOS" },
  { href: "/blog", label: "BLOG" },
  { href: "/localizacao", label: "LOCALIZAÇÃO" },
  { href: "/rastreamento", label: "RASTREAMENTO" },
  { href: "/#faq", label: "FAQ" },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "unset"

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isMenuOpen])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b border-border/30 bg-primary text-primary-foreground backdrop-blur-md transition-all duration-300 ${
        isScrolled ? "shadow-[0_16px_48px_rgba(8,17,34,0.18)]" : ""
      }`}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center space-x-2">
          <div className="relative h-10 w-32">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-EXecs3ptSEhdboYkw2imufOj9HWdJ4.png"
              alt="JDINFO Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
        </Link>

        <nav className="hidden items-center space-x-6 md:flex">
          {navigationItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-primary-foreground/80 transition-colors hover:text-accent"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center space-x-4 md:flex">
          <Button variant="outline" size="sm" className="border-primary-foreground/20 bg-primary-foreground text-primary hover:bg-secondary">
            Orçamento grátis
          </Button>
          <div className="flex flex-col text-xs text-primary-foreground/80">
            <a href="https://wa.me/5521971386634" className="flex items-center transition-colors hover:text-accent">
              <span>(21) 97138-6634</span>
            </a>
            <a href="https://wa.me/5521996643987" className="flex items-center transition-colors hover:text-accent">
              <span>(21) 99664-3987</span>
            </a>
          </div>
        </div>

        <button
          className="text-primary-foreground md:hidden"
          onClick={() => setIsMenuOpen((value) => !value)}
          aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {isMenuOpen && (
        <div
          id="mobile-menu"
          role="navigation"
          aria-label="Menu mobile"
          className="fixed inset-0 top-16 z-50 overflow-y-auto border-t border-border bg-card p-4 text-foreground md:hidden"
        >
          <nav className="flex flex-col space-y-4">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-lg font-medium transition-colors hover:text-accent"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}

            <div className="flex flex-col space-y-2 pt-4">
              <Button variant="outline" className="w-full justify-center">
                Orçamento grátis
              </Button>
              <a href="https://wa.me/5521971386634" className="w-full">
                <Button className="w-full justify-center bg-accent text-accent-foreground hover:bg-accent/92">
                  WhatsApp 97138-6634
                </Button>
              </a>
              <a href="https://wa.me/5521996643987" className="w-full">
                <Button className="w-full justify-center bg-accent text-accent-foreground hover:bg-accent/92">
                  WhatsApp 99664-3987
                </Button>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
