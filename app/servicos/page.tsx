import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { ArrowRight, Gamepad2, Laptop, Cpu, Camera, Apple, Volume2, Tablet, Wrench } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function ServicesPage() {
  const services = [
    {
      title: "Conserto de PlayStation",
      description: "Reparos em PlayStation 4, PlayStation 5 e controles com garantia e peças originais.",
      icon: <Gamepad2 className="h-10 w-10 text-jdred" />,
      url: "/blog/onde-consertar-playstation-niteroi",
      items: ["PlayStation 4", "PlayStation 5", "Controles PS4/PS5", "Fonte de alimentação", "Leitor de disco"],
      image: "https://images.unsplash.com/photo-1605901309584-818e25960a8f?q=80&w=1919&auto=format&fit=crop",
    },
    {
      title: "Conserto de Linha APPLE",
      description: "Especialistas em reparo de iPhone, iPad, MacBook, iMac e outros dispositivos Apple.",
      icon: <Apple className="h-10 w-10 text-jdred" />,
      url: "/blog/onde-consertar-iphone-niteroi",
      items: ["MacBook", "iMac", "iPad", "iPhone", "Apple Watch"],
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=2020&auto=format&fit=crop",
    },
    {
      title: "Conserto de Notebook",
      description: "Soluções para problemas de hardware e software em notebooks e ultrabooks de todas as marcas.",
      icon: <Laptop className="h-10 w-10 text-jdred" />,
      url: "/blog/onde-consertar-notebook-niteroi",
      items: [
        "Troca de tela",
        "Reparo de placa-mãe",
        "Substituição de teclado",
        "Upgrade de memória/SSD",
        "Limpeza e manutenção",
      ],
      image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?q=80&w=2070&auto=format&fit=crop",
    },
    {
      title: "Conserto de PC Gamer",
      description: "Manutenção especializada para computadores de alto desempenho, upgrades e placas de vídeo.",
      icon: <Cpu className="h-10 w-10 text-jdred" />,
      url: "/blog/onde-consertar-pc-gamer-niteroi",
      items: [
        "Reparo de placa de vídeo",
        "Upgrade de hardware",
        "Montagem de PC",
        "Otimização de desempenho",
        "Water cooling",
      ],
      image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?q=80&w=2070&auto=format&fit=crop",
    },
    {
      title: "Conserto de Xbox",
      description: "Reparos em Xbox One, Xbox Series S/X e controles com técnicos especializados.",
      icon: <Gamepad2 className="h-10 w-10 text-jdred" />,
      url: "/blog/onde-consertar-xbox-niteroi",
      items: ["Xbox One", "Xbox Series S/X", "Controles Xbox", "Fonte de alimentação", "Leitor de disco"],
      image: "https://images.unsplash.com/photo-1621259182978-fbf93132d53d?q=80&w=1932&auto=format&fit=crop",
    },
    {
      title: "Conserto de Nintendo",
      description: "Assistência técnica para Nintendo Switch e outros consoles Nintendo.",
      icon: <Gamepad2 className="h-10 w-10 text-jdred" />,
      url: "/blog/onde-consertar-nintendo-niteroi",
      items: ["Nintendo Switch", "Joy-Cons", "Dock Station", "Tela LCD", "Bateria"],
      image: "https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?q=80&w=2070&auto=format&fit=crop",
    },
    {
      title: "Conserto de GoPro",
      description: "Reparos em câmeras de ação GoPro e acessórios com técnicos certificados.",
      icon: <Camera className="h-10 w-10 text-jdred" />,
      url: "/blog/onde-consertar-gopro-niteroi",
      items: ["Reparo de lente", "Substituição de tela", "Problemas de bateria", "Recuperação de dados", "Acessórios"],
      image: "https://images.unsplash.com/photo-1521405617584-1d9867aecad3?q=80&w=2070&auto=format&fit=crop",
    },
    {
      title: "Conserto de Caixas JBL",
      description: "Reparos especializados em caixas de som JBL e outros equipamentos de áudio.",
      icon: <Volume2 className="h-10 w-10 text-jdred" />,
      url: "/blog/onde-consertar-caixas-jbl-niteroi",
      items: ["JBL Flip", "JBL Charge", "JBL Xtreme", "JBL Boombox", "Problemas de áudio/bateria"],
      image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?q=80&w=2069&auto=format&fit=crop",
    },
    {
      title: "Conserto de Tablets",
      description: "Reparos em tablets de todas as marcas, troca de tela, bateria e mais.",
      icon: <Tablet className="h-10 w-10 text-jdred" />,
      url: "/blog/onde-consertar-tablet-niteroi",
      items: [
        "Troca de tela",
        "Substituição de bateria",
        "Reparo de placa",
        "Recuperação de dados",
        "Problemas de conectividade",
      ],
      image: "https://images.unsplash.com/photo-1585790050230-5ab129de2e95?q=80&w=2070&auto=format&fit=crop",
    },
    {
      title: "Upgrade de Hardware",
      description: "Melhore o desempenho do seu equipamento com upgrades de hardware profissionais.",
      icon: <Wrench className="h-10 w-10 text-jdred" />,
      url: "/blog/onde-consertar-notebook-niteroi",
      items: [
        "Instalação de SSD/NVMe",
        "Upgrade de memória RAM",
        "Troca de processador",
        "Placa de vídeo",
        "Fonte de alimentação",
      ],
      image: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?q=80&w=2070&auto=format&fit=crop",
    },
  ]

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1">
        <section className="py-12 md:py-16 bg-jdblue text-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                Serviços de Assistência Técnica Especializada em Niterói
              </h1>
              <p className="text-gray-200 mb-6">
                Conheça a JDINFO, agora com uma nova filial em Icaraí, oferecendo soluções rápidas e confiáveis para
                conserto de eletrônicos com atendimento especializado e peças originais.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a href="https://wa.me/5521971386634">
                  <Button size="lg" className="bg-jdred hover:bg-jdred/90">
                    Centro: (21) 97138-6634
                  </Button>
                </a>
                <a href="https://wa.me/5521996643987">
                  <Button size="lg" className="bg-jdred hover:bg-jdred/90">
                    Icaraí: (21) 99664-3987
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 md:px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-jdblue">Nossos Serviços Especializados</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Oferecemos assistência técnica especializada para diversos equipamentos eletrônicos, com diagnóstico
                preciso e soluções eficientes.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <Card
                  key={index}
                  className="border-0 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
                >
                  <div className="relative h-48">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-70"></div>
                    <div className="absolute bottom-4 left-4">
                      <h3 className="text-xl font-semibold text-white mb-1">{service.title}</h3>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <ul className="space-y-1 mb-4">
                      {service.items.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <svg
                            className="h-5 w-5 text-jdred mr-2 flex-shrink-0"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-sm text-gray-600">{item}</span>
                        </li>
                      ))}
                    </ul>
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
          </div>
        </section>

        <section className="py-16 px-4 md:px-6 bg-gray-50">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-jdblue">Nosso Processo de Atendimento</h2>
                <p className="text-gray-600 mb-6">
                  Na JDINFO, seguimos um processo estruturado para garantir a melhor experiência e resultado para nossos
                  clientes:
                </p>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-jdred text-white flex items-center justify-center mr-4 flex-shrink-0">
                      1
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1 text-jdblue">Diagnóstico Gratuito</h3>
                      <p className="text-gray-600">
                        Realizamos uma análise completa do seu equipamento para identificar com precisão o problema, sem
                        compromisso e sem custos.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-jdred text-white flex items-center justify-center mr-4 flex-shrink-0">
                      2
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1 text-jdblue">Orçamento Detalhado</h3>
                      <p className="text-gray-600">
                        Apresentamos um orçamento claro e detalhado, explicando o problema, a solução proposta e os
                        custos envolvidos.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-jdred text-white flex items-center justify-center mr-4 flex-shrink-0">
                      3
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1 text-jdblue">Reparo Especializado</h3>
                      <p className="text-gray-600">
                        Após aprovação do orçamento, nossos técnicos especializados realizam o reparo utilizando peças
                        de qualidade.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-jdred text-white flex items-center justify-center mr-4 flex-shrink-0">
                      4
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1 text-jdblue">Testes Rigorosos</h3>
                      <p className="text-gray-600">
                        Realizamos testes completos para garantir que o equipamento esteja funcionando perfeitamente.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-jdred text-white flex items-center justify-center mr-4 flex-shrink-0">
                      5
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1 text-jdblue">Entrega com Garantia</h3>
                      <p className="text-gray-600">
                        Devolvemos seu equipamento funcionando perfeitamente e com garantia de 90 dias em todos os
                        serviços.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative h-[500px] rounded-xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1581092921461-39b9d08a9b21?q=80&w=2070&auto=format&fit=crop"
                  alt="Técnico da JDINFO realizando reparo em equipamento eletrônico"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 md:px-6 bg-jdblue text-white">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">Precisa de assistência técnica?</h2>
                <p className="mb-6 text-gray-200">
                  Entre em contato conosco hoje mesmo para um diagnóstico gratuito e descubra como podemos ajudar a
                  recuperar seu equipamento com rapidez e qualidade.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a href="https://wa.me/5521971386634">
                    <Button size="lg" className="bg-jdred hover:bg-jdred/90">
                      Centro: (21) 97138-6634
                    </Button>
                  </a>
                  <a href="https://wa.me/5521996643987">
                    <Button size="lg" className="bg-jdred hover:bg-jdred/90">
                      Icaraí: (21) 99664-3987
                    </Button>
                  </a>
                </div>
              </div>
              <div className="bg-jdblue/80 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Por que escolher a JDINFO?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg
                      className="h-5 w-5 text-jdred mr-2 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Mais de 18 anos de experiência em Niterói</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="h-5 w-5 text-jdred mr-2 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Técnicos especializados e certificados</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="h-5 w-5 text-jdred mr-2 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Garantia de 90 dias em todos os serviços</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="h-5 w-5 text-jdred mr-2 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Peças originais e de qualidade</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="h-5 w-5 text-jdred mr-2 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Diagnóstico gratuito</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="h-5 w-5 text-jdred mr-2 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Duas unidades para melhor atendê-lo</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
