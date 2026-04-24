import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

export default function BlogPage() {
  const blogPosts = [
    {
      id: "playstation-niteroi",
      title: "Atendimento para PlayStation em Niterói? Guia Completo 2025",
      excerpt:
        "Descubra os melhores lugares para atender seu PlayStation em Niterói, com foco em qualidade, garantia e preço justo.",
      date: "15 de Janeiro, 2025",
      category: "Consoles",
      imageAlt: "Console PlayStation com controle",
      image: "https://images.unsplash.com/photo-1605901309584-818e25960a8f?q=80&w=1919&auto=format&fit=crop",
    },
    {
      id: "tablet-niteroi",
      title: "Atendimento para Tablet em Niterói: Atendimento Especializado",
      excerpt: "Tablet com problemas? Conheça a melhor atendimento especializado para tablets em Niterói.",
      date: "05 de Abril, 2025",
      category: "Tablets",
      imageAlt: "Tablet moderno sobre mesa",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-BEIx1nwyWVThXV199n71YMjHef4ITG.png",
    },
    {
      id: "notebook-niteroi",
      title: "Atendimento para Notebook em Niterói: Solução Rápida e Garantida",
      excerpt:
        "Seu notebook apresentou problemas? Veja onde encontrar o melhor serviço de atendimento de notebooks em Niterói.",
      date: "15 de Novembro, 2024",
      category: "Notebooks",
      imageAlt: "Notebook aberto sobre bancada",
      image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?q=80&w=2070&auto=format&fit=crop",
    },
    {
      id: "gopro-niteroi",
      title: "Atendimento para GoPro em Niterói: Atendimento Profissional",
      excerpt: "Sua GoPro parou de funcionar? Conheça a atendimento especializado em Niterói.",
      date: "08 de Agosto, 2025",
      category: "Câmeras",
      imageAlt: "Câmera GoPro em ambiente aquático",
      image: "/images/gopro-underwater.png",
    },
    {
      id: "iphone-niteroi",
      title: "Atendimento para iPhone em Niterói: Atendimento Especializado",
      excerpt:
        "iPhone com problemas? Descubra onde encontrar o melhor serviço de atendimento para seu dispositivo Apple em Niterói.",
      date: "20 de Março, 2025",
      category: "Smartphones",
      imageAlt: "iPhone sobre superfície clara",
      image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?q=80&w=2329&auto=format&fit=crop",
    },
    {
      id: "notebooks-apple-niteroi",
      title: "Atendimento para Notebook Apple em Niterói: Serviço Especializado Apple",
      excerpt: "Notebook Apple com defeito? Conheça a melhor atendimento especializado em produtos Apple em Niterói.",
      date: "10 de Fevereiro, 2025",
      category: "Apple",
      imageAlt: "Notebook Apple sobre mesa",
      image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=2026&auto=format&fit=crop",
    },
    {
      id: "nintendo-niteroi",
      title: "Atendimento para Nintendo em Niterói: Atendimento para Switch, 3DS e Mais",
      excerpt:
        "Seu console Nintendo apresentou problemas? Descubra onde encontrar o melhor serviço de atendimento em Niterói.",
      date: "25 de Maio, 2025",
      category: "Consoles",
      imageAlt: "Nintendo Switch com controles coloridos",
      image: "https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?q=80&w=2070&auto=format&fit=crop",
    },
    {
      id: "xbox-niteroi",
      title: "Atendimento para Xbox em Niterói: Atendimento Especializado",
      excerpt: "Xbox com defeito? Saiba onde encontrar o melhor serviço de atendimento para seu console em Niterói.",
      date: "30 de Junho, 2025",
      category: "Consoles",
      imageAlt: "Controle Xbox sobre superfície escura",
      image: "https://images.unsplash.com/photo-1621259182978-fbf93132d53d?q=80&w=2072&auto=format&fit=crop",
    },
    {
      id: "pc-gamer-niteroi",
      title: "Atendimento para PC Gamer em Niterói: Serviço Especializado",
      excerpt: "PC Gamer com problemas? Conheça a melhor atendimento especializado em Niterói.",
      date: "12 de Julho, 2025",
      category: "Computadores",
      imageAlt: "Setup de PC Gamer iluminado",
      image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?q=80&w=2070&auto=format&fit=crop",
    },
    {
      id: "caixas-jbl-niteroi",
      title: "Atendimento para Caixas JBL em Niterói: Atendimento Profissional",
      excerpt: "Sua caixa de som JBL parou de funcionar? Saiba onde encontrar o melhor serviço de atendimento em Niterói.",
      date: "18 de Setembro, 2025",
      category: "Áudio",
      imageAlt: "Caixa de som portátil sobre mesa",
      image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?q=80&w=2069&auto=format&fit=crop",
    },
  ]

  return (
    <div className="container mx-auto py-12 px-4 md:px-6">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-jdblue">Blog JDINFO</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Confira nossos artigos com dicas, informações e guias sobre atendimento especializado e servicos de equipamentos
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
                  alt={post.imageAlt}
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
        <Button variant="outline" size="lg" className="hover:text-jdred hover:border-jdred/40">
          <Link href="/">Voltar para a página inicial</Link>
        </Button>
      </div>
    </div>
  )
}

