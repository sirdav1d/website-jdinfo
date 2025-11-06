import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { ArrowRight, Gamepad2, Laptop, Cpu, Camera, Apple, Volume2, Tablet } from "lucide-react"
import Link from "next/link"

export default function ServicesSection() {
  const services = [
    {
      title: "Conserto de PlayStation",
      description: "Reparos em PlayStation 4, PlayStation 5 e controles com garantia e peças originais.",
      icon: <Gamepad2 className="h-10 w-10 text-jdred" />,
      url: "/blog/onde-consertar-playstation-niteroi",
    },
    {
      title: "Conserto de Linha APPLE",
      description: "Especialistas em reparo de iPhone, iPad, MacBook, iMac e outros dispositivos Apple.",
      icon: <Apple className="h-10 w-10 text-jdred" />,
      url: "/blog/onde-consertar-iphone-niteroi",
    },
    {
      title: "Conserto de Notebook",
      description: "Soluções para problemas de hardware e software em notebooks e ultrabooks de todas as marcas.",
      icon: <Laptop className="h-10 w-10 text-jdred" />,
      url: "/blog/onde-consertar-notebook-niteroi",
    },
    {
      title: "Conserto de PC Gamer",
      description: "Manutenção especializada para computadores de alto desempenho, upgrades e placas de vídeo.",
      icon: <Cpu className="h-10 w-10 text-jdred" />,
      url: "/blog/onde-consertar-pc-gamer-niteroi",
    },
    {
      title: "Conserto de Xbox",
      description: "Reparos em Xbox One, Xbox Series S/X e controles com técnicos especializados.",
      icon: <Gamepad2 className="h-10 w-10 text-jdred" />,
      url: "/blog/onde-consertar-xbox-niteroi",
    },
    {
      title: "Conserto de Nintendo",
      description: "Assistência técnica para Nintendo Switch e outros consoles Nintendo.",
      icon: <Gamepad2 className="h-10 w-10 text-jdred" />,
      url: "/blog/onde-consertar-nintendo-niteroi",
    },
    {
      title: "Conserto de GoPro",
      description: "Reparos em câmeras de ação GoPro e acessórios com técnicos certificados.",
      icon: <Camera className="h-10 w-10 text-jdred" />,
      url: "/blog/onde-consertar-gopro-niteroi",
    },
    {
      title: "Conserto de Caixas JBL",
      description: "Reparos especializados em caixas de som JBL e outros equipamentos de áudio.",
      icon: <Volume2 className="h-10 w-10 text-jdred" />,
      url: "/blog/onde-consertar-caixas-jbl-niteroi",
    },
    {
      title: "Conserto de Tablets",
      description: "Reparos em tablets de todas as marcas, troca de tela, bateria e mais.",
      icon: <Tablet className="h-10 w-10 text-jdred" />,
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {services.map((service, index) => (
            <Card key={index} className="border-0 shadow-sm hover:shadow-md transition-all duration-300 h-full">
              <CardContent className="p-4 md:p-6">
                <div className="mb-3 md:mb-4">{service.icon}</div>
                <h3 className="text-lg md:text-xl font-semibold mb-2 text-jdblue">{service.title}</h3>
                <p className="text-gray-600 text-sm md:text-base">{service.description}</p>
              </CardContent>
              <CardFooter className="px-4 md:px-6 pb-4 md:pb-6 pt-0">
                <Link
                  href={service.url}
                  className="group inline-flex items-center text-jdred font-medium text-sm md:text-base"
                >
                  Saiba mais
                  <ArrowRight className="ml-2 h-3 w-3 md:h-4 md:w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-8 md:mt-12 text-center">
          <Link href="/servicos">
            <Button variant="outline" size="lg" className="hover:text-jdred hover:border-jdred w-full sm:w-auto">
              Ver todos os serviços
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
