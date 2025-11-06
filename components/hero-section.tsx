import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white py-12 md:py-24">
      <div className="absolute inset-0 bg-gradient-to-r from-jdblue/5 to-jdblue/10 z-0"></div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="space-y-4">
            <div className="inline-block rounded-lg bg-red-100 px-3 py-1 text-sm text-jdred">
              Assistência Técnica Especializada em Niterói - Nova Filial em Icaraí!
            </div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-jdblue">
              Conserto rápido e garantido para seus equipamentos
            </h1>
            <p className="text-gray-500 text-lg md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Especialistas em tecnologia há mais de 18 anos em Niterói. Diagnóstico gratuito e orçamento sem
              compromisso.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:gap-2">
              <Link href="#diagnostico" className="w-full sm:w-auto">
                <Button size="lg" className="bg-jdred hover:bg-jdred/90 w-full text-base py-6 h-auto">
                  Agendar Diagnóstico Gratuito
                </Button>
              </Link>
              <a href="https://wa.me/5521971386634" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-jdblue text-jdblue hover:bg-jdblue/10 w-full text-base py-6 h-auto"
                >
                  Falar com Especialista
                </Button>
              </a>
            </div>
            <div className="flex items-center space-x-4 text-sm">
              <div className="flex items-center">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-4 h-4 text-yellow-400"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ))}
                </div>
                <span className="ml-2 text-gray-600">4.9/5 no Google (+900 avaliações)</span>
              </div>
            </div>
          </div>
          <div className="mx-auto w-full max-w-[500px] lg:max-w-none relative mt-8 lg:mt-0">
            <div className="aspect-[4/3] overflow-hidden rounded-xl bg-gray-100 shadow-lg">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-CJwvJ4HKwETuYUIfTCsOIClIBFd3Ol.png"
                alt="Técnico da JDINFO consertando equipamento eletrônico"
                width={800}
                height={600}
                className="object-cover w-full h-full"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-white p-3 md:p-4 rounded-lg shadow-lg max-w-[180px]">
              <p className="text-xs md:text-sm font-medium">Diagnóstico em até</p>
              <p className="text-xl md:text-2xl font-bold text-jdred">24h</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
