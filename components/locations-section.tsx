import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Phone } from "lucide-react"

export default function LocationsSection() {
  return (
    <section className="bg-gray-50 px-4 py-16 md:px-6 lg:px-8">
      <div className="container mx-auto max-w-5xl">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold">Nosso endereço em Niterói</h2>
          <p className="mx-auto max-w-2xl text-gray-600">
            Atendimento presencial em Icaraí, com fácil acesso e suporte pelos nossos canais digitais.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6">
          <Card className="overflow-hidden border-0 shadow-sm">
            <div className="relative h-56 md:h-80">
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
              <div className="absolute left-4 top-4 rounded-full bg-jdred px-3 py-1 text-sm font-medium text-white">
                Icaraí
              </div>
            </div>

            <CardContent className="p-6 md:p-8">
              <div className="grid gap-6 md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="mr-2 mt-0.5 h-5 w-5 flex-shrink-0 text-jdred" />
                    <p className="text-sm text-gray-600 md:text-base">
                      R. Gen. Pereira da Silva, 146 - Loja 107 - Icaraí, Niterói - RJ, 24220-031
                    </p>
                  </div>

                  <div className="flex items-start">
                    <Phone className="mr-2 mt-0.5 h-5 w-5 flex-shrink-0 text-jdred" />
                    <div className="space-y-1 text-sm text-gray-600 md:text-base">
                      <a href="https://wa.me/5521971386634" className="block hover:text-jdred">
                        WhatsApp: (21) 97138-6634
                      </a>
                      <a href="https://wa.me/5521996643987" className="block hover:text-jdred">
                        WhatsApp: (21) 99664-3987
                      </a>
                    </div>
                  </div>

                  <div className="text-sm text-gray-600 md:text-base">
                    <span className="font-medium">Horário:</span> Seg-Sex: 9h às 18h | Sáb: 9h às 13h
                  </div>
                </div>

                <div className="flex flex-col gap-3 md:min-w-72">
                  <a href="https://wa.me/5521971386634" className="w-full">
                    <Button variant="outline" className="w-full hover:border-jdred hover:text-jdred">
                      WhatsApp 97138-6634
                    </Button>
                  </a>
                  <a href="https://wa.me/5521996643987" className="w-full">
                    <Button variant="outline" className="w-full hover:border-jdred hover:text-jdred">
                      WhatsApp 99664-3987
                    </Button>
                  </a>
                  <a
                    href="https://maps.google.com/?q=JDINFO+Icarai+Niteroi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full"
                  >
                    <Button className="w-full bg-jdred hover:bg-jdred/90">Como Chegar</Button>
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
