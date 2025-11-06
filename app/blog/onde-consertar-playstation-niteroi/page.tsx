import type { Metadata } from "next"
import Header from "@/components/header"
import Footer from "@/components/footer"
import BlogArticleLayout from "@/components/blog-article-layout"
import SEOSchema from "@/components/seo-schema"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, MapPin, Clock, Phone, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Onde Consertar PlayStation em Niterói? Guia Completo 2025",
  description:
    "Descubra os melhores lugares para consertar seu PlayStation em Niterói. Guia completo com dicas, preços e onde encontrar assistência técnica especializada com garantia.",
  keywords: [
    "conserto PlayStation Niterói",
    "assistência técnica PlayStation",
    "reparo PlayStation Niterói",
    "onde consertar PlayStation",
    "PlayStation não liga",
    "PlayStation superaquecimento",
    "conserto controle PlayStation",
    "assistência PlayStation Niterói",
    "reparo PS4 Niterói",
    "reparo PS5 Niterói",
    "JDINFO PlayStation",
  ],
  alternates: {
    canonical: "https://jdinfo.com.br/blog/onde-consertar-playstation-niteroi",
  },
  openGraph: {
    title: "Onde Consertar PlayStation em Niterói? Guia Completo 2025",
    description:
      "Descubra os melhores lugares para consertar seu PlayStation em Niterói. Guia completo com dicas, preços e onde encontrar assistência técnica especializada.",
    url: "https://jdinfo.com.br/blog/onde-consertar-playstation-niteroi",
    type: "article",
    publishedTime: "2025-01-15T10:00:00.000Z",
    modifiedTime: "2025-01-15T10:00:00.000Z",
    authors: ["JDINFO"],
    section: "Consoles",
    tags: ["PlayStation", "Conserto", "Niterói", "Assistência Técnica"],
    images: [
      {
        url: "https://images.unsplash.com/photo-1605901309584-818e25960a8f?q=80&w=1919&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: "Conserto de PlayStation em Niterói",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Onde Consertar PlayStation em Niterói? Guia Completo 2025",
    description:
      "Descubra os melhores lugares para consertar seu PlayStation em Niterói. Guia completo com assistência técnica especializada.",
    images: ["https://images.unsplash.com/photo-1605901309584-818e25960a8f?q=80&w=1919&auto=format&fit=crop"],
  },
}

const articleData = {
  title: "Onde Consertar PlayStation em Niterói? Guia Completo 2025",
  description:
    "Descubra os melhores lugares para consertar seu PlayStation em Niterói. Guia completo com dicas, preços e onde encontrar assistência técnica especializada com garantia.",
  image: "https://images.unsplash.com/photo-1605901309584-818e25960a8f?q=80&w=1919&auto=format&fit=crop",
  datePublished: "2025-01-15T10:00:00.000Z",
  dateModified: "2025-01-15T10:00:00.000Z",
  url: "https://jdinfo.com.br/blog/onde-consertar-playstation-niteroi",
}

const breadcrumbData = {
  breadcrumbs: [
    { name: "Início", url: "https://jdinfo.com.br" },
    { name: "Blog", url: "https://jdinfo.com.br/blog" },
    { name: "Conserto PlayStation Niterói", url: "https://jdinfo.com.br/blog/onde-consertar-playstation-niteroi" },
  ],
}

export default function PlayStationRepairPage() {
  return (
    <>
      <SEOSchema type="article" data={articleData} />
      <SEOSchema type="breadcrumb" data={breadcrumbData} />

      <Header />
      <BlogArticleLayout>
        <div className="mb-6">
          <Link href="/blog" className="inline-flex items-center text-jdred hover:text-jdred/80 transition-colors mb-4">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar para o Blog
          </Link>
        </div>

        <article>
          <header className="mb-8">
            <div className="mb-4">
              <span className="inline-block bg-jdred text-white px-3 py-1 rounded-full text-sm font-medium">
                Consoles
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-jdblue mb-4">
              Onde Consertar PlayStation em Niterói? Guia Completo 2025
            </h1>
            <div className="flex items-center text-gray-600 text-sm mb-6">
              <Clock className="mr-2 h-4 w-4" />
              <span>15 de Janeiro, 2025</span>
              <span className="mx-2">•</span>
              <span>8 min de leitura</span>
            </div>
          </header>

          <div className="mb-8">
            <Image
              src="https://images.unsplash.com/photo-1605901309584-818e25960a8f?q=80&w=1919&auto=format&fit=crop"
              alt="Conserto de PlayStation em Niterói - Assistência Técnica Especializada"
              width={800}
              height={400}
              className="w-full h-64 md:h-96 object-cover rounded-lg"
              priority
            />
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              Seu PlayStation apresentou problemas e você não sabe onde consertar em Niterói? Este guia completo vai te
              ajudar a encontrar a melhor assistência técnica especializada, com dicas importantes sobre preços,
              garantia e qualidade do serviço.
            </p>

            <h2>Por que Escolher uma Assistência Técnica Especializada?</h2>
            <p>
              Quando seu PlayStation para de funcionar, a primeira reação pode ser procurar qualquer lugar que faça
              reparos. No entanto, consoles como PlayStation requerem conhecimento técnico específico e peças originais
              para um reparo adequado.
            </p>

            <h3>Principais Problemas do PlayStation</h3>
            <ul>
              <li>
                <strong>Console não liga:</strong> Problemas na fonte de alimentação ou placa-mãe
              </li>
              <li>
                <strong>Superaquecimento:</strong> Ventilação obstruída ou pasta térmica ressecada
              </li>
              <li>
                <strong>Problemas no leitor de disco:</strong> Jogos não são reconhecidos
              </li>
              <li>
                <strong>Controles com defeito:</strong> Botões que não respondem ou analógicos com drift
              </li>
              <li>
                <strong>Problemas de conectividade:</strong> Wi-Fi ou Bluetooth não funcionam
              </li>
              <li>
                <strong>Tela azul ou travamentos:</strong> Problemas de software ou hardware
              </li>
            </ul>

            <h2>JDINFO: Referência em Conserto de PlayStation em Niterói</h2>
            <p>
              A <strong>JDINFO</strong> é reconhecida como uma das principais assistências técnicas especializadas em
              consoles em Niterói, com mais de 18 anos de experiência no mercado.
            </p>

            <h3>Por que Escolher a JDINFO?</h3>
            <ul>
              <li>
                <strong>Especialização:</strong> Técnicos certificados em consoles PlayStation
              </li>
              <li>
                <strong>Diagnóstico gratuito:</strong> Avaliação sem custo do seu console
              </li>
              <li>
                <strong>Peças originais:</strong> Utilizamos apenas componentes de qualidade
              </li>
              <li>
                <strong>Garantia:</strong> Todos os serviços com garantia de 90 dias
              </li>
              <li>
                <strong>Orçamento transparente:</strong> Preços justos e sem surpresas
              </li>
              <li>
                <strong>Atendimento rápido:</strong> Maioria dos reparos em até 48 horas
              </li>
            </ul>

            <div className="bg-blue-50 p-6 rounded-lg my-8">
              <h3 className="text-jdblue mb-4 flex items-center">
                <MapPin className="mr-2 h-5 w-5" />
                Localização e Contato
              </h3>
              <p className="mb-4">
                <strong>Endereço:</strong> Rua da Conceição, 123 - Centro, Niterói - RJ
              </p>
              <p className="mb-4">
                <strong>Horário de Funcionamento:</strong>
                <br />
                Segunda a Sexta: 8h às 18h
                <br />
                Sábado: 8h às 14h
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button className="bg-jdred hover:bg-jdred/90">
                  <Phone className="mr-2 h-4 w-4" />
                  Ligar Agora
                </Button>
                <Button variant="outline" className="border-green-500 text-green-600 hover:bg-green-50 bg-transparent">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  WhatsApp
                </Button>
              </div>
            </div>

            <h2>Dicas Importantes Antes de Levar seu PlayStation para Conserto</h2>

            <h3>1. Faça um Backup dos seus Dados</h3>
            <p>
              Antes de levar seu console para reparo, sempre faça backup dos seus jogos salvos. Use um HD externo ou o
              armazenamento na nuvem do PlayStation Plus.
            </p>

            <h3>2. Remova Informações Pessoais</h3>
            <p>Desconecte sua conta do PlayStation Network e remova informações de cartão de crédito por segurança.</p>

            <h3>3. Documente o Problema</h3>
            <p>Anote todos os sintomas e quando começaram a aparecer. Isso ajuda o técnico no diagnóstico.</p>

            <h3>4. Verifique a Garantia</h3>
            <p>
              Se seu PlayStation ainda está na garantia, verifique se o reparo em assistência não autorizada pode
              anulá-la.
            </p>

            <h2>Preços Médios de Conserto em Niterói</h2>
            <p>Os preços podem variar dependendo do problema e da assistência técnica escolhida:</p>
            <ul>
              <li>
                <strong>Limpeza e manutenção:</strong> R$ 80 - R$ 120
              </li>
              <li>
                <strong>Troca de pasta térmica:</strong> R$ 100 - R$ 150
              </li>
              <li>
                <strong>Reparo do leitor de disco:</strong> R$ 150 - R$ 250
              </li>
              <li>
                <strong>Problemas na fonte:</strong> R$ 200 - R$ 350
              </li>
              <li>
                <strong>Reparo da placa-mãe:</strong> R$ 300 - R$ 500
              </li>
            </ul>

            <div className="bg-yellow-50 p-6 rounded-lg my-8">
              <h3 className="text-yellow-800 mb-3">⚠️ Atenção</h3>
              <p className="text-yellow-700">
                Desconfie de preços muito baixos. Reparos de qualidade requerem peças originais e mão de obra
                especializada. O barato pode sair caro!
              </p>
            </div>

            <h2>Como Evitar Problemas no seu PlayStation</h2>

            <h3>Manutenção Preventiva</h3>
            <ul>
              <li>Mantenha o console em local ventilado</li>
              <li>Limpe regularmente as entradas de ar</li>
              <li>Não bloqueie as saídas de ventilação</li>
              <li>Evite locais com muita poeira</li>
              <li>Desligue o console corretamente</li>
              <li>Use estabilizador ou nobreak</li>
            </ul>

            <h2>Conclusão</h2>
            <p>
              Encontrar uma assistência técnica confiável para seu PlayStation em Niterói é fundamental para garantir um
              reparo de qualidade. A JDINFO se destaca pela experiência, qualidade do serviço e atendimento
              especializado.
            </p>
            <p>
              Lembre-se sempre de pesquisar, comparar preços e verificar a reputação da assistência técnica antes de
              deixar seu console. Um bom reparo pode fazer seu PlayStation funcionar como novo por muitos anos.
            </p>

            <div className="bg-jdred/10 p-6 rounded-lg mt-8">
              <h3 className="text-jdred mb-4">Precisa Consertar seu PlayStation?</h3>
              <p className="mb-4">
                Entre em contato com a JDINFO e receba um diagnóstico gratuito. Nossa equipe especializada está pronta
                para resolver qualquer problema do seu console.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button className="bg-jdred hover:bg-jdred/90">Solicitar Orçamento</Button>
                <Button variant="outline" className="border-jdred text-jdred hover:bg-jdred/10 bg-transparent">
                  Falar no WhatsApp
                </Button>
              </div>
            </div>
          </div>
        </article>
      </BlogArticleLayout>
      <Footer />
    </>
  )
}
