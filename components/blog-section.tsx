import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const featuredPosts = [
  {
    id: "onde-consertar-playstation-niteroi",
    title: "Onde Consertar PlayStation em Niterói? Guia Completo 2025",
    excerpt:
      "Um conteúdo que ajuda o visitante a comparar atendimento, garantia, prazo e segurança antes de deixar o console em qualquer lugar.",
    date: "15 de janeiro, 2025",
    category: "Consoles",
    image: "https://images.unsplash.com/photo-1605901309584-818e25960a8f?q=80&w=1919&auto=format&fit=crop",
  },
  {
    id: "onde-consertar-gopro-niteroi",
    title: "Onde Consertar GoPro em Niterói: Reparo Profissional",
    excerpt: "Descubra o que avaliar em uma assistência técnica antes de entregar a sua câmera para reparo.",
    date: "08 de agosto, 2025",
    category: "Câmeras",
    image: "/images/gopro-underwater.png",
  },
  {
    id: "onde-consertar-notebook-niteroi",
    title: "Onde Consertar Notebook em Niterói: Solução Rápida e Garantida",
    excerpt: "Entenda como comparar prazo, custo e confiança antes de escolher onde reparar o notebook.",
    date: "15 de novembro, 2024",
    category: "Notebooks",
    image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?q=80&w=2070&auto=format&fit=crop",
  },
]

const [featuredPost, ...secondaryPosts] = featuredPosts

export default function BlogSection() {
  return (
    <section className="px-4 py-18 md:px-6 lg:px-8 lg:py-24">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-12 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <h2 className="text-balance text-3xl font-semibold tracking-[-0.04em] text-jdblue md:text-4xl">
              Conteúdo que ajuda a decidir melhor antes de escolher onde reparar o equipamento.
            </h2>
          </div>

          <Button
            asChild
            variant="outline"
            size="lg"
            className="rounded-full border-jdblue/40 bg-card px-7 shadow-[0_16px_40px_rgba(8,17,34,0.06)] hover:border-jdblue/40 hover:text-jdblue"
          >
            <Link href="/blog">Ver todos os artigos</Link>
          </Button>
        </div>

        <div className="grid gap-6 lg:grid-cols-[minmax(0,1.06fr)_minmax(0,0.94fr)]">
          <Link
            href={`/blog/${featuredPost.id}`}
            className="group overflow-hidden rounded-[2rem] border border-border/40 bg-card/96 shadow-[0_28px_80px_rgba(8,17,34,0.1)]"
          >
            <div className="relative h-[280px] overflow-hidden md:h-[360px]">
              <Image
                src={featuredPost.image}
                alt={featuredPost.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                sizes="(max-width: 1024px) 100vw, 54vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/72 via-black/16 to-transparent" />
              <div className="absolute left-5 top-5 rounded-full border border-white/40 bg-white/10 px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white backdrop-blur">
                {featuredPost.category}
              </div>
            </div>

            <div className="p-7 md:p-8">
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-jdblue/45">{featuredPost.date}</div>
              <h3 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-jdblue md:text-3xl">{featuredPost.title}</h3>
              <p className="mt-4 text-sm leading-7 text-muted-foreground md:text-base">{featuredPost.excerpt}</p>
              <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-jdblue transition-colors group-hover:text-accent">
                Ler artigo em destaque
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </div>
          </Link>

          <div className="grid gap-6">
            {secondaryPosts.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.id}`}
                className="group overflow-hidden rounded-[1.7rem] border border-border/40 bg-card/96 shadow-[0_20px_55px_rgba(8,17,34,0.08)] transition-transform duration-300 hover:-translate-y-1 hover:border-jdblue/40 hover:shadow-[0_28px_70px_rgba(8,17,34,0.12)]"
              >
                <div className="grid h-full gap-0 md:grid-cols-[220px_minmax(0,1fr)]">
                  <div className="relative h-56 overflow-hidden md:h-full md:min-h-[190px] md:border-r md:border-border/40">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                      sizes="(max-width: 768px) 100vw, 24vw"
                    />
                  </div>

                  <div className="flex flex-col justify-center p-5 md:p-6">
                    <div className="text-xs font-semibold uppercase tracking-[0.18em] text-jdblue/45">
                      {post.category} - {post.date}
                    </div>
                    <h3 className="mt-3 text-xl font-semibold tracking-[-0.03em] text-jdblue">{post.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-muted-foreground">{post.excerpt}</p>
                    <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-jdblue transition-colors group-hover:text-accent">
                      Ler mais
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}


