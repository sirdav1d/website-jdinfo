import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { MapPin, Phone, Clock, Car } from "lucide-react"

export default function LocationPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1">
        <section className="py-12 md:py-16 bg-jdblue text-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Nosso endereço em Niterói</h1>
              <p className="text-gray-200 mb-6">
                Atendimento presencial em Icaraí, com fácil acesso e suporte pelos nossos canais digitais.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 md:px-6">
          <div className="container mx-auto max-w-5xl">
            <div className="grid grid-cols-1 gap-12">
              <Card className="border-0 shadow-sm overflow-hidden">
                <div className="relative h-72">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7350.814225258417!2d-43.12042455745302!3d-22.898350117043968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9983f69271bcbf%3A0x66148c0240e8fac0!2sJD%20INFO%20%7C%20Gamer%20%26%20Tecnologia%20%7C%20Assist%C3%AAncia%20Apple%20%2C%20Conserto%20notebook%20e%20PC%20gamer%2C%20Niter%C3%B3i%20T%C3%A9cnica!5e0!3m2!1spt-BR!2sbr!4v1743910127396!5m2!1spt-BR!2sbr"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0"
                  ></iframe>
                  <div className="absolute top-4 left-4 bg-jdred text-white px-3 py-1 rounded-full text-sm font-medium">
                    Icaraí
                  </div>
                </div>
                <CardContent className="p-6 md:p-8">
                  <h2 className="text-2xl font-bold mb-4 text-jdblue">Endereço presencial</h2>

                  <div className="space-y-4">
                    <div className="flex items-start">
                      <MapPin className="h-5 w-5 text-jdred mr-3 mt-0.5 flex-shrink-0" />
                      <p className="text-gray-600">
                        R. Gen. Pereira da Silva, 146 - Loja 107 - Icaraí, Niterói - RJ, 24220-031
                      </p>
                    </div>

                    <div className="flex items-start">
                      <Phone className="h-5 w-5 text-jdred mr-3 mt-0.5 flex-shrink-0" />
                      <div className="space-y-1 text-gray-600">
                        <p>
                          <a href="https://wa.me/5521971386634" className="hover:text-jdred">
                            (21) 97138-6634
                          </a>
                        </p>
                        <p>
                          <a href="https://wa.me/5521996643987" className="hover:text-jdred">
                            (21) 99664-3987
                          </a>
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <Clock className="h-5 w-5 text-jdred mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-gray-600">Segunda a Sexta: 9h às 18h</p>
                        <p className="text-gray-600">Sábado: 9h às 13h</p>
                        <p className="text-gray-600">Domingo e Feriados: Fechado</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <Car className="h-5 w-5 text-jdred mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-gray-600 font-medium">Estacionamento:</p>
                        <p className="text-gray-600">Estacionamento disponível no prédio (pago).</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 flex flex-col sm:flex-row gap-3">
                    <a href="https://wa.me/5521971386634" className="flex-1">
                      <Button variant="outline" className="w-full hover:text-jdred hover:border-jdred">
                        WhatsApp 97138-6634
                      </Button>
                    </a>
                    <a href="https://wa.me/5521996643987" className="flex-1">
                      <Button variant="outline" className="w-full hover:text-jdred hover:border-jdred">
                        WhatsApp 99664-3987
                      </Button>
                    </a>
                    <a
                      href="https://maps.google.com/?q=JDINFO+Icarai+Niteroi"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <Button className="w-full bg-jdred hover:bg-jdred/90">Como Chegar</Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 md:px-6 bg-gray-50">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-jdblue">Como chegar</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Nosso endereço em Icaraí fica em um ponto estratégico de Niterói, com fácil acesso por transporte público e particular.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4 text-jdblue">Acesso ao endereço</h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-medium text-jdblue">De ônibus:</p>
                    <p className="text-gray-600">
                      Diversas linhas de ônibus passam pela Rua Gavião Peixoto, a poucos metros do nosso endereço.
                    </p>
                  </div>
                  <div>
                    <p className="font-medium text-jdblue">De carro:</p>
                    <p className="text-gray-600">
                      Pela Ponte Rio-Niterói, siga em direção a Icaraí. Nosso endereço fica na R. Gen. Pereira da Silva,
                      próximo à Rua Gavião Peixoto.
                    </p>
                  </div>
                  <div>
                    <p className="font-medium text-jdblue">Estacionamento:</p>
                    <p className="text-gray-600">O prédio onde estamos localizados possui estacionamento pago.</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4 text-jdblue">Canais de atendimento</h3>
                <div className="space-y-4 text-gray-600">
                  <p>WhatsApp 1: (21) 97138-6634</p>
                  <p>WhatsApp 2: (21) 99664-3987</p>
                  <p>Email: contato@jdinfo.com.br</p>
                  <p>Horário: Segunda a Sexta, das 9h às 18h. Sábado, das 9h às 13h.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 md:px-6 bg-jdblue text-white">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">Agende uma visita</h2>
              <p className="text-gray-200 mb-8 max-w-2xl mx-auto">
                Entre em contato conosco para agendar um horário e evitar filas. Estamos prontos para atendê-lo no nosso endereço em Icaraí.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="https://wa.me/5521971386634">
                  <Button size="lg" className="bg-jdred hover:bg-jdred/90 w-full sm:w-auto">
                    <span className="mr-2">WhatsApp 97138-6634</span>
                  </Button>
                </a>
                <a href="https://wa.me/5521996643987">
                  <Button size="lg" className="bg-jdred hover:bg-jdred/90 w-full sm:w-auto">
                    <span className="mr-2">WhatsApp 99664-3987</span>
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
