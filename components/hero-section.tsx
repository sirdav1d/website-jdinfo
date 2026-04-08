import Link from "next/link"
import { Button } from "@/components/ui/button"
import { HeroVideoEmbed } from "@/components/hero-video-embed"

const HERO_VIDEO_EMBED_URL =
  "https://drive.google.com/file/d/1VogucP--s4Mazkd2itWN15k6rj3b7uzP/preview"

const heroHighlights = [
  "Orçamento gratuito e sem compromisso",
  "Diagnóstico rápido do problema",
  "Garantia em todos os serviços realizados",
]

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-background py-16 md:py-24 lg:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(229,234,243,0.95),transparent_55%)]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 text-center">
          <div className="space-y-6">
            <div className="inline-flex items-center rounded-full border border-accent/15 bg-accent/8 px-4 py-1.5 text-sm font-medium text-accent">
              Assistência técnica especializada em Niterói e São Gonçalo
            </div>

            <div className="space-y-4">
              <h1 className="mx-auto max-w-5xl text-balance text-4xl font-semibold tracking-[-0.04em] text-foreground sm:text-5xl lg:text-6xl">
                Conserto de Notebook, MacBook e PC Gamer em Niterói - JDINFO Assistência Técnica
              </h1>
              <p className="mx-auto max-w-4xl text-balance text-lg leading-8 text-muted-foreground md:text-xl">
                A JDINFO é referência em assistência técnica de informática em Niterói, com mais de 18 anos de
                experiência em conserto de notebooks, MacBook e PCs Gamer. Atendemos clientes de Icaraí, Centro, São
                Francisco, São Gonçalo e de toda a região com serviços rápidos, garantia e peças de qualidade.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3">
              {heroHighlights.map((highlight) => (
                <div
                  key={highlight}
                  className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground shadow-[0_10px_30px_rgba(8,17,34,0.06)]"
                >
                  {highlight}
                </div>
              ))}
            </div>

            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link href="#diagnostico" className="w-full sm:w-auto">
                <Button size="lg" className="h-auto w-full bg-accent px-6 py-4 text-base text-accent-foreground hover:bg-accent/92">
                  Solicitar orçamento gratuito
                </Button>
              </Link>
              <a href="https://wa.me/5521971386634" className="w-full sm:w-auto">
                <Button size="lg" variant="outline" className="h-auto w-full px-6 py-4 text-base">
                  Falar com especialista
                </Button>
              </a>
            </div>
          </div>

          <HeroVideoEmbed src={HERO_VIDEO_EMBED_URL} title="JDINFO hero video" />
        </div>
      </div>
    </section>
  )
}
