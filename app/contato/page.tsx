import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { MapPin, Phone, Mail, Clock, MessageSquare } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1">
        <section className="py-12 md:py-16 bg-jdblue text-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Entre em Contato</h1>
              <p className="text-gray-200 mb-6">
                Estamos prontos para atender você. Entre em contato conosco para tirar dúvidas, solicitar orçamentos ou
                agendar um atendimento.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 md:px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-bold mb-6 text-jdblue">Informações de Contato</h2>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-jdblue">Unidade Centro</h3>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <MapPin className="h-5 w-5 text-jdred mr-3 mt-0.5 flex-shrink-0" />
                        <p className="text-gray-600">
                          Av. Ernani do Amaral Peixoto, 436 - loja 07 e 09 - Centro, Niterói - RJ, 24020-077
                        </p>
                      </div>
                      <div className="flex items-center">
                        <Phone className="h-5 w-5 text-jdred mr-3 flex-shrink-0" />
                        <p className="text-gray-600">
                          <a href="https://wa.me/5521971386634" className="hover:text-jdred">
                            (21) 97138-6634
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-jdblue">Unidade Icaraí</h3>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <MapPin className="h-5 w-5 text-jdred mr-3 mt-0.5 flex-shrink-0" />
                        <p className="text-gray-600">
                          R. Gen. Pereira da Silva, 146 - Loja 107 - Icaraí, Niterói - RJ, 24220-031
                        </p>
                      </div>
                      <div className="flex items-center">
                        <Phone className="h-5 w-5 text-jdred mr-3 flex-shrink-0" />
                        <p className="text-gray-600">
                          <a href="https://wa.me/5521996643987" className="hover:text-jdred">
                            (21) 99664-3987
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Mail className="h-5 w-5 text-jdred mr-3 flex-shrink-0" />
                      <p className="text-gray-600">
                        <a href="mailto:contato@jdinfo.com.br" className="hover:text-jdred">
                          contato@jdinfo.com.br
                        </a>
                      </p>
                    </div>
                    <div className="flex items-start">
                      <Clock className="h-5 w-5 text-jdred mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-gray-600">Segunda a Sexta: 9h às 18h</p>
                        <p className="text-gray-600">Sábado: 9h às 13h</p>
                        <p className="text-gray-600">Domingo e Feriados: Fechado</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-jdblue">Atendimento via WhatsApp</h3>
                    <p className="text-gray-600">
                      Para maior comodidade, você também pode entrar em contato conosco diretamente pelo WhatsApp. Basta
                      clicar em um dos botões abaixo:
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <a href="https://wa.me/5521971386634" className="w-full sm:w-auto">
                        <Button className="w-full bg-jdred hover:bg-jdred/90">
                          <MessageSquare className="mr-2 h-4 w-4" />
                          WhatsApp Centro
                        </Button>
                      </a>
                      <a href="https://wa.me/5521996643987" className="w-full sm:w-auto">
                        <Button className="w-full bg-jdred hover:bg-jdred/90">
                          <MessageSquare className="mr-2 h-4 w-4" />
                          WhatsApp Icaraí
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-6 text-jdblue">Envie uma Mensagem</h2>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Nome completo
                    </label>
                    <Input id="name" type="text" placeholder="Digite seu nome completo" className="w-full" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      E-mail
                    </label>
                    <Input id="email" type="email" placeholder="Digite seu e-mail" className="w-full" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Telefone
                    </label>
                    <Input id="phone" type="tel" placeholder="Digite seu telefone" className="w-full" />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                      Serviço de interesse
                    </label>
                    <select
                      id="service"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-jdred focus:border-jdred"
                    >
                      <option value="">Selecione o serviço</option>
                      <option value="playstation">Conserto de PlayStation (PS4/PS5)</option>
                      <option value="xbox">Conserto de Xbox</option>
                      <option value="nintendo">Conserto de Nintendo</option>
                      <option value="apple">Conserto de Linha APPLE</option>
                      <option value="notebook">Conserto de Notebook</option>
                      <option value="pc-gamer">Conserto de PC Gamer</option>
                      <option value="gopro">Conserto de GoPro</option>
                      <option value="jbl">Conserto de Caixas JBL</option>
                      <option value="smartphone">Conserto de Smartphone</option>
                      <option value="outro">Outro</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Mensagem
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      placeholder="Descreva seu problema ou dúvida"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-jdred focus:border-jdred"
                    ></textarea>
                  </div>
                  <div>
                    <Button type="submit" className="w-full bg-jdblue hover:bg-jdblue/90">
                      Enviar mensagem
                    </Button>
                  </div>
                  <p className="text-xs text-gray-500 text-center">
                    Ao enviar, você concorda com nossa política de privacidade.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 md:px-6 bg-gray-50">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-2xl font-bold mb-8 text-jdblue text-center">Nossas Unidades</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg overflow-hidden shadow-sm">
                <div className="relative h-72">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.5301214527117!2d-43.12185402469001!3d-22.893809779264135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9983c3b5ff4fb1%3A0x584032ddadf726c9!2sJDINFO%20Gamer%20%E2%80%93%20Especialistas%20em%20PC%20Gamer%2C%20Inform%C3%A1tica%20e%20TI%20para%20Empresas%20%7C%20Niter%C3%B3i%20e%20Rio%20de%20Janeiro!5e0!3m2!1spt-BR!2sbr!4v1743910069597!5m2!1spt-BR!2sbr"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0"
                  ></iframe>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-jdblue">Unidade Centro</h3>
                  <p className="text-gray-600 mb-4">
                    Av. Ernani do Amaral Peixoto, 436 - loja 07 e 09 - Centro, Niterói - RJ, 24020-077
                  </p>
                  <a href="https://maps.google.com/?q=JDINFO+Centro+Niteroi" target="_blank" rel="noopener noreferrer">
                    <Button className="w-full bg-jdred hover:bg-jdred/90">Como Chegar</Button>
                  </a>
                </div>
              </div>
              <div className="bg-white rounded-lg overflow-hidden shadow-sm">
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
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-jdblue">Unidade Icaraí</h3>
                  <p className="text-gray-600 mb-4">
                    R. Gen. Pereira da Silva, 146 - Loja 107 - Icaraí, Niterói - RJ, 24220-031
                  </p>
                  <a href="https://maps.google.com/?q=JDINFO+Icarai+Niteroi" target="_blank" rel="noopener noreferrer">
                    <Button className="w-full bg-jdred hover:bg-jdred/90">Como Chegar</Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 md:px-6 bg-jdblue text-white">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">Precisa de assistência técnica?</h2>
              <p className="text-gray-200 mb-8 max-w-2xl mx-auto">
                Entre em contato conosco hoje mesmo para um diagnóstico gratuito e descubra como podemos ajudar a
                recuperar seu equipamento com rapidez e qualidade.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
