import { Button } from "@/components/ui/button"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Image from "next/image"
import { Check, Clock, Award, Shield, Users, PenToolIcon as Tool } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1">
        <section className="py-12 md:py-16 bg-jdblue text-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Sobre a JDINFO</h1>
              <p className="text-gray-200 mb-6">
                Conheça nossa história, missão e valores que nos tornaram referência em assistência técnica em Niterói.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 md:px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-jdblue">Nossa História</h2>
                <p className="text-gray-600 mb-4">
                  Fundada em 2005, a JDINFO nasceu da paixão por tecnologia e do desejo de oferecer serviços de
                  assistência técnica de qualidade em Niterói. O que começou como uma pequena loja no Centro da cidade,
                  rapidamente se transformou em referência no mercado de reparos eletrônicos.
                </p>
                <p className="text-gray-600 mb-4">
                  Ao longo dos anos, acompanhamos a evolução da tecnologia e expandimos nossos serviços para atender às
                  necessidades crescentes dos nossos clientes. Da manutenção de computadores básicos, passamos a
                  oferecer serviços especializados em consoles de videogame, smartphones, produtos Apple e equipamentos
                  de áudio.
                </p>
                <p className="text-gray-600 mb-4">
                  Em 2023, demos um importante passo com a inauguração da nossa segunda unidade em Icaraí, ampliando
                  nossa capacidade de atendimento e aproximando nossos serviços de ainda mais clientes em Niterói.
                </p>
                <p className="text-gray-600">
                  Hoje, com mais de 18 anos de experiência, a JDINFO se consolida como a principal assistência técnica
                  especializada da região, combinando conhecimento técnico, atendimento personalizado e compromisso com
                  a qualidade.
                </p>
              </div>
              <div className="relative h-[400px] rounded-xl overflow-hidden">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-CJwvJ4HKwETuYUIfTCsOIClIBFd3Ol.png"
                  alt="Loja JDINFO em Niterói"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 md:px-6 bg-gray-50">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-jdblue">Nossa Missão, Visão e Valores</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Princípios que norteiam nosso trabalho e nos ajudam a oferecer sempre o melhor serviço.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4 text-jdblue">Missão</h3>
                <p className="text-gray-600">
                  Oferecer soluções tecnológicas de qualidade, com atendimento personalizado e preços justos, garantindo
                  a satisfação total dos nossos clientes e contribuindo para a extensão da vida útil dos equipamentos
                  eletrônicos.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4 text-jdblue">Visão</h3>
                <p className="text-gray-600">
                  Ser reconhecida como a melhor e mais confiável assistência técnica da região, expandindo nossa atuação
                  e mantendo a excelência em todos os serviços prestados, sempre acompanhando as inovações tecnológicas.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4 text-jdblue">Valores</h3>
                <ul className="text-gray-600 space-y-2">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-jdred mr-2 mt-0.5 flex-shrink-0" />
                    <span>Ética e transparência em todas as relações</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-jdred mr-2 mt-0.5 flex-shrink-0" />
                    <span>Compromisso com a qualidade dos serviços</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-jdred mr-2 mt-0.5 flex-shrink-0" />
                    <span>Respeito e valorização dos clientes</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-jdred mr-2 mt-0.5 flex-shrink-0" />
                    <span>Inovação e aperfeiçoamento constante</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-jdred mr-2 mt-0.5 flex-shrink-0" />
                    <span>Responsabilidade socioambiental</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 md:px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-jdblue">Por que escolher a JDINFO?</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Diferenciais que nos tornam a melhor opção em assistência técnica em Niterói.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center p-6">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
                  <Clock className="h-8 w-8 text-jdred" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-jdblue">+18 Anos de Experiência</h3>
                <p className="text-gray-600">
                  Quase duas décadas de atuação no mercado, acumulando conhecimento técnico e aperfeiçoando nossos
                  processos.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-6">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
                  <Award className="h-8 w-8 text-jdred" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-jdblue">Técnicos Certificados</h3>
                <p className="text-gray-600">
                  Equipe altamente qualificada, com certificações e treinamentos constantes nas principais tecnologias
                  do mercado.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-6">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
                  <Shield className="h-8 w-8 text-jdred" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-jdblue">Garantia Real</h3>
                <p className="text-gray-600">
                  Oferecemos garantia de 90 dias em todos os serviços realizados, demonstrando nossa confiança na
                  qualidade do trabalho.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-6">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-8 w-8 text-jdred" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-jdblue">Atendimento Personalizado</h3>
                <p className="text-gray-600">
                  Tratamos cada cliente de forma única, entendendo suas necessidades e oferecendo as melhores soluções.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-6">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
                  <Tool className="h-8 w-8 text-jdred" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-jdblue">Peças de Qualidade</h3>
                <p className="text-gray-600">
                  Utilizamos apenas peças originais ou homologadas, garantindo a durabilidade e o desempenho dos
                  reparos.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-6">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
                  <Clock className="h-8 w-8 text-jdred" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-jdblue">Rapidez na Entrega</h3>
                <p className="text-gray-600">
                  Processos otimizados que permitem diagnósticos rápidos e prazos de entrega reduzidos, sem comprometer
                  a qualidade.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 md:px-6 bg-jdblue text-white">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">Venha conhecer a JDINFO</h2>
                <p className="mb-6 text-gray-200">
                  Estamos prontos para atender você em nossas duas unidades em Niterói. Entre em contato ou visite-nos
                  para conhecer nossos serviços e receber um diagnóstico gratuito.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="https://wa.me/5521971386634">
                    <Button size="lg" className="bg-jdred hover:bg-jdred/90 w-full sm:w-auto">
                      <span className="mr-2">Falar com Centro</span>
                    </Button>
                  </a>
                  <a href="https://wa.me/5521996643987">
                    <Button size="lg" className="bg-jdred hover:bg-jdred/90 w-full sm:w-auto">
                      <span className="mr-2">Falar com Icaraí</span>
                    </Button>
                  </a>
                </div>
              </div>
              <div className="bg-jdblue/80 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Horário de Funcionamento</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center border-b border-white/10 pb-2">
                    <span>Segunda a Sexta</span>
                    <span className="font-medium">9h às 18h</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/10 pb-2">
                    <span>Sábado</span>
                    <span className="font-medium">9h às 13h</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Domingo e Feriados</span>
                    <span className="font-medium">Fechado</span>
                  </div>
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
