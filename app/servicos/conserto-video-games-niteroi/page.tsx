import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Image from "next/image"
import Link from "next/link"
import { Check, Gamepad2 } from "lucide-react"

export default function VideoGamesPage() {
  const brands = [
    "PlayStation 5",
    "PlayStation 4",
    "PlayStation 3",
    "Xbox Series X/S",
    "Xbox One",
    "Xbox 360",
    "Nintendo Switch",
    "Nintendo Wii",
    "Nintendo 3DS",
  ]

  const services = [
    "Reparo de placa-mãe",
    "Substituição de leitor de disco",
    "Reparo de fonte de alimentação",
    "Limpeza e manutenção preventiva",
    "Troca de HD/SSD",
    "Reparo de controles",
    "Atualização de firmware",
    "Desbloqueio (quando permitido por lei)",
    "Reparo de conectores HDMI",
  ]

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1">
        <section className="py-12 md:py-16 bg-blue-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-800 mb-4">
                  Assistência Técnica Especializada
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                  Conserto de Video Games em Niterói com Garantia e Rapidez
                </h1>
                <p className="text-gray-600 mb-6">
                  Seu console parou de funcionar? A JDINFO oferece serviços especializados de reparo para todas as
                  marcas e modelos de video games, com diagnóstico preciso e soluções eficientes.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                    Agendar Diagnóstico Gratuito
                  </Button>
                  <Button size="lg" variant="outline">
                    Fale com um Técnico
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-[4/3] overflow-hidden rounded-xl bg-gray-100">
                  <Image
                    src="/placeholder.svg?height=600&width=800"
                    alt="Técnico da JDINFO consertando um PlayStation 5"
                    width={800}
                    height={600}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-lg shadow-lg">
                  <div className="flex items-center">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-5 h-5 text-yellow-400"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            clipRule="evenodd"
                          />
                        </svg>
                      ))}
                    </div>
                    <span className="ml-2 font-medium">4.9/5</span>
                  </div>
                  <p className="text-sm text-gray-500">127 avaliações no Google</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 md:px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <Gamepad2 className="h-12 w-12 text-blue-500 mx-auto mb-4" />
              <h2 className="text-3xl font-bold mb-4">Marcas e Modelos Atendidos</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Nossa equipe é especializada no reparo de todos os principais consoles do mercado, desde os mais
                recentes até modelos mais antigos.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {brands.map((brand, index) => (
                <Card key={index} className="border-0 shadow-sm">
                  <CardContent className="p-4 flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    <span>{brand}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-4 md:px-6 bg-gray-50">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">Serviços Oferecidos</h2>
                <p className="text-gray-600 mb-6">
                  Na JDINFO, oferecemos uma ampla gama de serviços para garantir que seu console volte a funcionar
                  perfeitamente. Todos os reparos incluem garantia.
                </p>
                <ul className="space-y-3">
                  {services.map((service, index) => (
                    <li key={index} className="flex items-start">
                      <div className="mt-1 mr-3 flex-shrink-0">
                        <svg className="h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span>{service}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-6">
                <Card className="border-0 shadow-sm">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2">Diagnóstico Preciso</h3>
                    <p className="text-gray-600">
                      Utilizamos equipamentos de última geração para identificar com precisão o problema do seu console,
                      evitando reparos desnecessários e garantindo uma solução eficaz.
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-0 shadow-sm">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2">Peças Originais</h3>
                    <p className="text-gray-600">
                      Trabalhamos apenas com peças originais ou homologadas pelos fabricantes, garantindo a qualidade e
                      durabilidade do reparo.
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-0 shadow-sm">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2">Garantia em Todos os Serviços</h3>
                    <p className="text-gray-600">
                      Todos os nossos serviços incluem garantia de 90 dias, dando a você a tranquilidade de que seu
                      console está em boas mãos.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 md:px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Como Funciona Nosso Processo</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Nosso processo é simples e transparente, garantindo que você esteja sempre informado sobre o status do
                reparo do seu console.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-blue-600">1</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Diagnóstico</h3>
                <p className="text-gray-600">
                  Realizamos uma análise completa para identificar o problema do seu console.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-blue-600">2</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Orçamento</h3>
                <p className="text-gray-600">Apresentamos um orçamento detalhado sem compromisso.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-blue-600">3</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Reparo</h3>
                <p className="text-gray-600">Após aprovação, realizamos o reparo com peças de qualidade.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-blue-600">4</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Entrega</h3>
                <p className="text-gray-600">Devolvemos seu console funcionando perfeitamente e com garantia.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 md:px-6 bg-blue-600 text-white">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">Pronto para consertar seu video game?</h2>
                <p className="mb-6 text-blue-100">
                  Entre em contato conosco hoje mesmo para um diagnóstico gratuito e descubra como podemos ajudar a
                  recuperar seu console com rapidez e qualidade.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button size="lg" variant="secondary">
                    Agendar Diagnóstico Gratuito
                  </Button>
                  <Button size="lg" variant="outline" className="text-white border-white hover:bg-blue-700">
                    (21) 99999-9999
                  </Button>
                </div>
              </div>
              <div className="bg-blue-700 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Perguntas Frequentes</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-1">Quanto tempo demora o conserto?</h4>
                    <p className="text-blue-100 text-sm">
                      O tempo médio é de 2 a 5 dias úteis, dependendo da complexidade do problema e disponibilidade de
                      peças.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">O diagnóstico é realmente gratuito?</h4>
                    <p className="text-blue-100 text-sm">
                      Sim, o diagnóstico inicial é totalmente gratuito e sem compromisso.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Vocês oferecem garantia?</h4>
                    <p className="text-blue-100 text-sm">
                      Todos os nossos serviços incluem garantia de 90 dias para sua tranquilidade.
                    </p>
                  </div>
                  <Link href="/faq" className="text-sm text-blue-100 hover:text-white underline inline-block mt-2">
                    Ver todas as perguntas frequentes
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
