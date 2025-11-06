import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin } from "lucide-react"

export default function LocationsSection() {
  return (
    <section className="py-16 px-4 md:px-6 lg:px-8 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Nossas Unidades em Niterói</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Agora com duas unidades para melhor atendê-lo. Visite a mais próxima de você!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Card className="border-0 shadow-sm overflow-hidden">
            <div className="relative h-56 md:h-72">
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
              <div className="absolute top-4 left-4 bg-jdred text-white px-3 py-1 rounded-full text-sm font-medium">
                Centro
              </div>
            </div>
            <CardContent className="p-4 md:p-6">
              <div className="flex items-start mb-3 md:mb-4">
                <MapPin className="h-5 w-5 text-jdred mr-2 mt-0.5 flex-shrink-0" />
                <p className="text-gray-600 text-sm md:text-base">
                  Av. Ernani do Amaral Peixoto, 436 - loja 07 e 09 - Centro, Niterói - RJ, 24020-077
                </p>
              </div>
              <div className="flex items-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="text-jdred mr-2 flex-shrink-0"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <p className="text-gray-600">(21) 97138-6634</p>
              </div>
              <div className="mb-4">
                <p className="text-gray-600">
                  <span className="font-medium">Horário:</span> Seg-Sex: 9h às 18h | Sáb: 9h às 13h
                </p>
              </div>
              <div className="flex flex-col sm:flex-row sm:space-x-3 space-y-2 sm:space-y-0">
                <a href="https://wa.me/5521971386634" className="w-full">
                  <Button variant="outline" className="w-full hover:text-jdred hover:border-jdred h-10 md:h-auto">
                    WhatsApp
                  </Button>
                </a>
                <a
                  href="https://maps.google.com/?q=JDINFO+Centro+Niteroi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  <Button className="w-full bg-jdred hover:bg-jdred/90 h-10 md:h-auto">Como Chegar</Button>
                </a>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-sm overflow-hidden">
            <div className="relative h-56 md:h-72">
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
              <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                Nova Unidade
              </div>
            </div>
            <CardContent className="p-6">
              <div className="flex items-start mb-4">
                <MapPin className="h-5 w-5 text-jdred mr-2 mt-0.5 flex-shrink-0" />
                <p className="text-gray-600">
                  R. Gen. Pereira da Silva, 146 - Loja 107 - Icaraí, Niterói - RJ, 24220-031
                </p>
              </div>
              <div className="flex items-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="text-jdred mr-2 flex-shrink-0"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <p className="text-gray-600">(21) 99664-3987</p>
              </div>
              <div className="mb-4">
                <p className="text-gray-600">
                  <span className="font-medium">Horário:</span> Seg-Sex: 9h às 18h | Sáb: 9h às 13h
                </p>
              </div>
              <div className="flex space-x-3">
                <a href="https://wa.me/5521996643987" className="flex-1">
                  <Button variant="outline" className="w-full hover:text-jdred hover:border-jdred">
                    WhatsApp
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
  )
}
