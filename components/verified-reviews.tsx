"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Star, CheckCircle, ChevronLeft, ChevronRight } from "lucide-react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

export default function VerifiedReviews() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const reviews = [
    {
      date: "15/01/2025",
      rating: 5,
      verified: true,
      service: "Conserto de PlayStation 5",
      review:
        "Meu PS5 estava com problemas no leitor de disco. A JDINFO fez um diagnóstico preciso e consertou em apenas 3 dias. Excelente atendimento e preço justo!",
    },
    {
      date: "22/02/2025",
      rating: 5,
      verified: true,
      service: "Reparo de MacBook Pro",
      review:
        "Meu MacBook Pro não ligava mais. Levei em outra assistência e disseram que a placa estava queimada e seria muito caro. Na JDINFO, consertaram por um preço muito mais acessível e em apenas 4 dias. Estou impressionada!",
    },
    {
      date: "07/03/2025",
      rating: 4,
      verified: true,
      service: "Troca de Tela de iPhone",
      review:
        "Troquei a tela do meu iPhone 15. O serviço foi rápido e bem feito. Preço um pouco acima do que esperava, mas a qualidade compensou. Recomendo.",
    },
    {
      date: "19/01/2025",
      rating: 5,
      verified: true,
      service: "Montagem de PC Gamer",
      review:
        "Montaram meu PC Gamer com muito cuidado e atenção aos detalhes. A equipe me ajudou a escolher os melhores componentes dentro do meu orçamento. O resultado ficou incrível e o desempenho está excelente!",
    },
    {
      date: "03/02/2025",
      rating: 5,
      verified: true,
      service: "Upgrade de Notebook",
      review:
        "Fiz upgrade do meu notebook com SSD e mais memória RAM. A diferença de desempenho é impressionante! Atendimento excelente e preço justo. Recomendo a todos.",
    },
  ]

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % reviews.length)
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(interval)
  }, [isAutoPlaying, reviews.length])

  const nextSlide = () => {
    setIsAutoPlaying(false)
    setCurrentSlide((prev) => (prev + 1) % reviews.length)
  }

  const prevSlide = () => {
    setIsAutoPlaying(false)
    setCurrentSlide((prev) => (prev - 1 + reviews.length) % reviews.length)
  }

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false)
    setCurrentSlide(index)
  }

  return (
    <section className="py-16 px-4 md:px-6 lg:px-8 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-jdblue">Avaliações Verificadas</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Veja o que nossos clientes estão dizendo sobre nossos serviços. Todas as avaliações são de clientes reais
            que utilizaram nossos serviços.
          </p>
          <div className="flex justify-center items-center mt-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <span className="ml-2 text-2xl font-bold">4.9/5</span>
            <span className="ml-2 text-gray-500">(127 avaliações)</span>
          </div>
        </div>

        {/* Desktop View - Show 3 cards */}
        <div className="hidden md:grid md:grid-cols-3 gap-6 mb-8">
          {reviews.slice(currentSlide, currentSlide + 3).map((review, index) => {
            const actualIndex = (currentSlide + index) % reviews.length
            const actualReview = reviews[actualIndex]
            return (
              <Card key={actualIndex} className="border-0 shadow-sm hover:shadow-md transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center">
                      <div className="h-14 w-14 rounded-full bg-gradient-to-br from-jdblue to-jdred flex items-center justify-center text-white font-bold text-lg mr-3">
                        {actualReview.service.charAt(0)}
                      </div>
                      <div>
                        <p className="font-semibold">Cliente Verificado</p>
                        <p className="text-sm text-gray-500">{actualReview.date}</p>
                      </div>
                    </div>
                    <div className="flex">
                      {[...Array(actualReview.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                      ))}
                      {[...Array(5 - actualReview.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-gray-300" />
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center mb-3">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-1" />
                    <span className="text-sm text-green-600 font-medium">Compra verificada</span>
                    <span className="mx-2 text-gray-300">•</span>
                    <span className="text-sm text-gray-500">{actualReview.service}</span>
                  </div>

                  <p className="text-gray-600">"{actualReview.review}"</p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Mobile View - Show 1 card */}
        <div className="md:hidden mb-8">
          <Card className="border-0 shadow-sm">
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center">
                  <div className="h-14 w-14 rounded-full bg-gradient-to-br from-jdblue to-jdred flex items-center justify-center text-white font-bold text-lg mr-3">
                    {reviews[currentSlide].service.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold">Cliente Verificado</p>
                    <p className="text-sm text-gray-500">{reviews[currentSlide].date}</p>
                  </div>
                </div>
                <div className="flex">
                  {[...Array(reviews[currentSlide].rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                  ))}
                  {[...Array(5 - reviews[currentSlide].rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-gray-300" />
                  ))}
                </div>
              </div>

              <div className="flex items-center mb-3">
                <CheckCircle className="h-4 w-4 text-green-500 mr-1" />
                <span className="text-sm text-green-600 font-medium">Compra verificada</span>
                <span className="mx-2 text-gray-300">•</span>
                <span className="text-sm text-gray-500">{reviews[currentSlide].service}</span>
              </div>

              <p className="text-gray-600">"{reviews[currentSlide].review}"</p>
            </CardContent>
          </Card>
        </div>

        {/* Navigation Controls */}
        <div className="flex justify-center items-center gap-4 mb-8">
          <Button
            variant="outline"
            size="sm"
            onClick={prevSlide}
            className="h-10 w-10 rounded-full p-0"
            aria-label="Avaliação anterior"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>

          {/* Dots indicator */}
          <div className="flex gap-2">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 w-2 rounded-full transition-all duration-300 ${
                  index === currentSlide ? "bg-jdblue w-6" : "bg-gray-300"
                }`}
                aria-label={`Ir para avaliação ${index + 1}`}
              />
            ))}
          </div>

          <Button
            variant="outline"
            size="sm"
            onClick={nextSlide}
            className="h-10 w-10 rounded-full p-0"
            aria-label="Próxima avaliação"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        {/* Auto-play toggle */}
        <div className="text-center mb-8">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="text-gray-500 hover:text-jdblue"
          >
            {isAutoPlaying ? "Pausar" : "Reproduzir"} apresentação automática
          </Button>
        </div>

        <div className="text-center">
          <a
            href="https://g.page/jdinfo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-jdblue hover:underline"
          >
            Ver todas as avaliações no Google
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 ml-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
