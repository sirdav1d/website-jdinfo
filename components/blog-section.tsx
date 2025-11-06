import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

export default function BlogSection() {
  // Adicionar um artigo sobre tablets na seção de blog da página inicial, se necessário

  // Se o artigo sobre tablets não estiver entre os featuredPosts, podemos adicionar ou substituir um existente
  const featuredPosts = [
    {
      id: "onde-consertar-playstation-niteroi",
      title: "Onde Consertar PlayStation em Niterói? Guia Completo 2025",
      excerpt:
        "Descubra os melhores lugares para consertar seu PlayStation em Niterói, com foco em qualidade, garantia e preço justo.",
      date: "15 de Janeiro, 2025",
      category: "Consoles",
      image: "https://images.unsplash.com/photo-1605901309584-818e25960a8f?q=80&w=1919&auto=format&fit=crop",
    },
    {
      id: "onde-consertar-gopro-niteroi",
      title: "Onde Consertar GoPro em Niterói: Reparo Profissional",
      excerpt: "Sua GoPro parou de funcionar? Conheça a assistência técnica especializada em Niterói.",
      date: "08 de Agosto, 2025",
      category: "Câmeras",
      image: "/images/gopro-underwater.png",
    },
    {
      id: "onde-consertar-notebook-niteroi",
      title: "Onde Consertar Notebook em Niterói: Solução Rápida e Garantida",
      excerpt:
        "Seu notebook apresentou problemas? Veja onde encontrar o melhor serviço de reparo de notebooks em Niterói.",
      date: "15 de Novembro, 2024",
      category: "Notebooks",
      image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?q=80&w=2070&auto=format&fit=crop",
    },
  ]

  return (
    <section className="py-16 px-4 md:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-jdblue">Artigos do Blog</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Confira nossos artigos com dicas, informações e guias sobre assistência técnica e reparos de equipamentos
            eletrônicos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {featuredPosts.map((post, index) => (
            <Card
              key={post.id}
              className="border-0 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
            >
              <div className="relative h-40 md:h-48">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  loading={index === 0 ? "eager" : "lazy"}
                />
                <div className="absolute top-3 left-3 bg-jdred text-white px-2 py-1 rounded-full text-xs font-medium">
                  {post.category}
                </div>
              </div>
              <CardContent className="p-4 md:p-6">
                <div className="text-xs md:text-sm text-gray-500 mb-2">{post.date}</div>
                <h3 className="text-lg md:text-xl font-semibold mb-2 text-jdblue line-clamp-2">{post.title}</h3>
                <p className="text-gray-600 text-sm md:text-base line-clamp-3">{post.excerpt}</p>
              </CardContent>
              <CardFooter className="px-4 md:px-6 pb-4 md:pb-6 pt-0">
                <Link
                  href={`/blog/${post.id}`}
                  className="group inline-flex items-center text-jdred font-medium text-sm md:text-base"
                >
                  Ler mais
                  <ArrowRight className="ml-2 h-3 w-3 md:h-4 md:w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-6 md:mt-8 text-center">
          <Link href="/blog">
            <Button variant="outline" size="lg" className="hover:text-jdred hover:border-jdred w-full sm:w-auto">
              Ver todos os artigos
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
