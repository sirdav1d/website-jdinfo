import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Carlos Silva",
      role: "Cliente desde 2019",
      content:
        "Consertaram meu MacBook Pro que tinha sido dado como perdido por outra assistência. Trabalho impecável e entrega antes do prazo prometido.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1374&auto=format&fit=crop",
    },
    {
      name: "Ana Oliveira",
      role: "Cliente desde 2021",
      content:
        "Meu PS5 parou de funcionar e fiquei desesperada. A JDINFO diagnosticou rapidamente e resolveu em 48h. Preço justo e atendimento excelente.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1376&auto=format&fit=crop",
    },
    {
      name: "Marcos Pereira",
      role: "Cliente desde 2020",
      content:
        "Levei meu notebook para reparo de tela e aproveitei para fazer upgrade de SSD. Ficou melhor que novo e o preço foi muito bom.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1374&auto=format&fit=crop",
    },
  ]

  return (
    <section className="py-16 px-4 md:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">O que nossos clientes dizem</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A satisfação dos nossos clientes é nossa maior conquista. Confira alguns depoimentos de quem confiou na
            JDINFO.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-sm hover:shadow-md transition-all duration-300">
              <CardContent className="p-4 md:p-6">
                <div className="flex mb-3 md:mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-4 h-4 md:w-5 md:h-5 text-yellow-400"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 mb-4 text-sm md:text-base">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="relative h-12 w-12 md:h-14 md:w-14 rounded-full overflow-hidden mr-3">
                    <Image
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-sm md:text-base">{testimonial.name}</p>
                    <p className="text-xs md:text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8 text-center">
          <a
            href="https://g.page/jdinfo"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline text-sm"
          >
            Ver todas as avaliações no Google
          </a>
        </div>
      </div>
    </section>
  )
}
