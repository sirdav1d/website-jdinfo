import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

export default function SpecializedServices() {
  const services = [
    {
      title: "Conserto de PlayStation",
      description: "Reparos em PlayStation 4, PlayStation 5 e controles com garantia e peças originais.",
      image: "https://images.unsplash.com/photo-1605901309584-818e25960a8f?q=80&w=1919&auto=format&fit=crop",
      url: "/blog/onde-consertar-playstation-niteroi",
    },
    {
      title: "Conserto de Linha APPLE",
      description: "Especialistas em reparo de iPhone, iPad, MacBook, iMac e outros dispositivos Apple.",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=2020&auto=format&fit=crop",
      url: "/blog/onde-consertar-iphone-niteroi",
    },
    {
      title: "Conserto de Notebook",
      description: "Soluções para problemas de hardware e software em notebooks e ultrabooks de todas as marcas.",
      image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?q=80&w=2070&auto=format&fit=crop",
      url: "/blog/onde-consertar-notebook-niteroi",
    },
    {
      title: "Conserto de PC Gamer",
      description: "Manutenção especializada para computadores de alto desempenho, upgrades e placas de vídeo.",
      image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?q=80&w=2070&auto=format&fit=crop",
      url: "/blog/onde-consertar-pc-gamer-niteroi",
    },
    {
      title: "Conserto de Xbox",
      description: "Reparos em Xbox One, Xbox Series S/X e controles com técnicos especializados.",
      image: "https://images.unsplash.com/photo-1621259182978-fbf93132d53d?q=80&w=1932&auto=format&fit=crop",
      url: "/blog/onde-consertar-xbox-niteroi",
    },
    {
      title: "Conserto de Nintendo",
      description: "Assistência técnica para Nintendo Switch e outros consoles Nintendo.",
      image: "https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?q=80&w=2070&auto=format&fit=crop",
      url: "/blog/onde-consertar-nintendo-niteroi",
    },
    {
      title: "Conserto de GoPro",
      description: "Reparos em câmeras de ação GoPro e acessórios com técnicos certificados.",
      image: "/images/gopro-underwater.png",
      url: "/blog/onde-consertar-gopro-niteroi",
    },
    {
      title: "Conserto de Caixas JBL",
      description: "Reparos especializados em caixas de som JBL e outros equipamentos de áudio.",
      image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?q=80&w=2069&auto=format&fit=crop",
      url: "/blog/onde-consertar-caixas-jbl-niteroi",
    },
    {
      title: "Conserto de Tablets",
      description: "Reparos em tablets de todas as marcas, troca de tela, bateria e mais.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-BEIx1nwyWVThXV199n71YMjHef4ITG.png",
      url: "/blog/onde-consertar-tablet-niteroi",
    },
  ]

  return (
    <section className="py-16 px-4 md:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-jdblue">Serviços Especializados</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Oferecemos assistência técnica especializada para diversos equipamentos eletrônicos, com diagnóstico preciso
            e soluções eficientes.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="border-0 shadow-sm hover:shadow-md transition-all duration-300 h-full">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-70"></div>
                <h3 className="absolute bottom-4 left-4 text-xl font-semibold text-white">{service.title}</h3>
              </div>
              <CardContent className="p-6">
                <p className="text-gray-600">{service.description}</p>
              </CardContent>
              <CardFooter className="px-6 pb-6 pt-0">
                <Link href={service.url} className="group inline-flex items-center text-jdred font-medium">
                  Saiba mais
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/servicos">
            <Button variant="outline" size="lg" className="hover:text-jdred hover:border-jdred bg-transparent">
              Ver todos os serviços
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
