import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

export default function BlogPage() {
  const blogPosts = [
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
      id: "onde-consertar-tablet-niteroi",
      title: "Onde Consertar Tablet em Niterói: Assistência Técnica Especializada",
      excerpt: "Tablet com problemas? Conheça a melhor assistência técnica para tablets em Niterói.",
      date: "05 de Abril, 2025",
      category: "Tablets",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-BEIx1nwyWVThXV199n71YMjHef4ITG.png",
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
    {
      id: "onde-consertar-gopro-niteroi",
      title: "Onde Consertar GoPro em Niterói: Reparo Profissional",
      excerpt: "Sua GoPro parou de funcionar? Conheça a assistência técnica especializada em Niterói.",
      date: "08 de Agosto, 2025",
      category: "Câmeras",
      image: "/images/gopro-underwater.png",
    },
    {
      id: "onde-consertar-iphone-niteroi",
      title: "Onde Consertar iPhone em Niterói: Assistência Técnica Especializada",
      excerpt:
        "iPhone com problemas? Descubra onde encontrar o melhor serviço de reparo para seu dispositivo Apple em Niterói.",
      date: "20 de Março, 2025",
      category: "Smartphones",
      image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?q=80&w=2329&auto=format&fit=crop",
    },
    {
      id: "onde-consertar-macbook-niteroi",
      title: "Onde Consertar MacBook em Niterói: Serviço Especializado Apple",
      excerpt: "MacBook com defeito? Conheça a melhor assistência técnica especializada em produtos Apple em Niterói.",
      date: "10 de Fevereiro, 2025",
      category: "Apple",
      image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=2026&auto=format&fit=crop",
    },
    {
      id: "onde-consertar-nintendo-niteroi",
      title: "Onde Consertar Nintendo em Niterói: Reparo para Switch, 3DS e Mais",
      excerpt:
        "Seu console Nintendo apresentou problemas? Descubra onde encontrar o melhor serviço de reparo em Niterói.",
      date: "25 de Maio, 2025",
      category: "Consoles",
      image: "https://images.unsplash.com/photo-1642009189725-3b4d3b3e1a35?q=80&w=2070&auto=format&fit=crop",
    },
    {
      id: "onde-consertar-xbox-niteroi",
      title: "Onde Consertar Xbox em Niterói: Assistência Técnica Especializada",
      excerpt: "Xbox com defeito? Saiba onde encontrar o melhor serviço de reparo para seu console em Niterói.",
      date: "30 de Junho, 2025",
      category: "Consoles",
      image: "https://images.unsplash.com/photo-1621259182978-fbf93132d53d?q=80&w=2072&auto=format&fit=crop",
    },
    {
      id: "onde-consertar-pc-gamer-niteroi",
      title: "Onde Consertar PC Gamer em Niterói: Serviço Especializado",
      excerpt: "PC Gamer com problemas? Conheça a melhor assistência técnica especializada em Niterói.",
      date: "12 de Julho, 2025",
      category: "Computadores",
      image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?q=80&w=2070&auto=format&fit=crop",
    },
    {
      id: "onde-consertar-caixas-jbl-niteroi",
      title: "Onde Consertar Caixas JBL em Niterói: Reparo Profissional",
      excerpt: "Sua caixa de som JBL parou de funcionar? Saiba onde encontrar o melhor serviço de reparo em Niterói.",
      date: "18 de Setembro, 2025",
      category: "Áudio",
      image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?q=80&w=2069&auto=format&fit=crop",
    },
  ]

  return (
    <div className="container mx-auto py-12 px-4 md:px-6">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-jdblue">Blog JDINFO</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Confira nossos artigos com dicas, informações e guias sobre assistência técnica e reparos de equipamentos
          eletrônicos.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post, index) => (
          <Card
            key={post.id}
            className="border-0 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
          >
            <Link href={`/blog/${post.id}`} className="block">
              <div className="relative h-48">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  loading={index < 6 ? "eager" : "lazy"}
                />
                <div className="absolute top-4 left-4 bg-jdred text-white px-3 py-1 rounded-full text-xs font-medium">
                  {post.category}
                </div>
              </div>
              <CardContent className="p-6">
                <div className="text-sm text-gray-500 mb-2">{post.date}</div>
                <h2 className="text-xl font-semibold mb-2 text-jdblue line-clamp-2">{post.title}</h2>
                <p className="text-gray-600 line-clamp-3">{post.excerpt}</p>
                <div className="mt-4 inline-flex items-center text-jdred font-medium">
                  Ler mais
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </CardContent>
            </Link>
          </Card>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Button variant="outline" size="lg" className="hover:text-jdred hover:border-jdred">
          <Link href="/">Voltar para a página inicial</Link>
        </Button>
      </div>
    </div>
  )
}
