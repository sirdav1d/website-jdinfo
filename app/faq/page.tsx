import type { Metadata } from "next"
import Header from "@/components/header"
import Footer from "@/components/footer"
import SEOSchema from "@/components/seo-schema"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { MessageCircle, Phone, Clock, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "FAQ - Perguntas Frequentes | JDINFO Assistência Técnica Niterói",
  description:
    "Encontre respostas para as principais dúvidas sobre nossos serviços de assistência técnica em Niterói. Conserto de PlayStation, Xbox, Nintendo, Apple e muito mais.",
  keywords: [
    "FAQ assistência técnica",
    "perguntas frequentes",
    "dúvidas conserto",
    "JDINFO FAQ",
    "assistência técnica Niterói",
    "conserto eletrônicos dúvidas",
    "garantia reparo",
    "orçamento conserto",
    "tempo reparo",
    "peças originais",
  ],
  alternates: {
    canonical: "https://jdinfo.com.br/faq",
  },
  openGraph: {
    title: "FAQ - Perguntas Frequentes | JDINFO Assistência Técnica Niterói",
    description:
      "Encontre respostas para as principais dúvidas sobre nossos serviços de assistência técnica em Niterói.",
    url: "https://jdinfo.com.br/faq",
    type: "website",
  },
}

const faqData = {
  questions: [
    {
      question: "Quanto tempo demora para consertar meu equipamento?",
      answer:
        "O tempo de reparo varia conforme a complexidade do problema. Reparos simples como limpeza e manutenção ficam prontos em até 24 horas. Problemas mais complexos podem levar de 2 a 5 dias úteis. Sempre informamos o prazo estimado após o diagnóstico.",
    },
    {
      question: "Vocês oferecem garantia nos serviços?",
      answer:
        "Sim! Todos os nossos serviços têm garantia de 90 dias. A garantia cobre o mesmo defeito reparado. Caso o problema retorne neste período, o reparo é gratuito.",
    },
    {
      question: "O diagnóstico é gratuito?",
      answer:
        "Sim, o diagnóstico é completamente gratuito. Nossa equipe técnica avalia seu equipamento e fornece um orçamento detalhado sem nenhum custo. Você só paga se aprovar o serviço.",
    },
    {
      question: "Vocês usam peças originais?",
      answer:
        "Sempre que possível, utilizamos peças originais ou de primeira linha. Em casos onde a peça original não está disponível, usamos componentes compatíveis de alta qualidade, sempre informando ao cliente.",
    },
    {
      question: "Posso acompanhar o andamento do meu reparo?",
      answer:
        "Sim! Temos um sistema de rastreamento online onde você pode acompanhar o status do seu equipamento em tempo real. Também enviamos atualizações por WhatsApp.",
    },
    {
      question: "Quais formas de pagamento vocês aceitam?",
      answer:
        "Aceitamos dinheiro, cartão de débito, cartão de crédito (até 12x), PIX e transferência bancária. Para orçamentos acima de R$ 200, oferecemos parcelamento sem juros.",
    },
    {
      question: "Vocês fazem atendimento domiciliar?",
      answer:
        "Para equipamentos de grande porte como PCs e TVs, oferecemos atendimento domiciliar em Niterói e região. Entre em contato para verificar disponibilidade e valores.",
    },
    {
      question: "E se meu equipamento não tiver conserto?",
      answer:
        "Caso o equipamento não tenha viabilidade de reparo (custo muito alto ou peças indisponíveis), você não paga nada pelo diagnóstico. Oferecemos orientações sobre descarte adequado ou possível venda de peças.",
    },
    {
      question: "Vocês trabalham com equipamentos muito antigos?",
      answer:
        "Sim! Nossa experiência de mais de 18 anos nos permite trabalhar com equipamentos de diversas gerações. Mesmo produtos descontinuados podem ser reparados, dependendo da disponibilidade de peças.",
    },
    {
      question: "Como posso solicitar um orçamento?",
      answer:
        "Você pode solicitar orçamento de 3 formas: trazendo o equipamento em nossa loja, pelo WhatsApp (para diagnóstico inicial) ou solicitando atendimento domiciliar. O diagnóstico presencial é sempre mais preciso.",
    },
  ],
}

const breadcrumbData = {
  breadcrumbs: [
    { name: "Início", url: "https://jdinfo.com.br" },
    { name: "FAQ", url: "https://jdinfo.com.br/faq" },
  ],
}

export default function FAQPage() {
  return (
    <>
      <SEOSchema type="faq" data={faqData} />
      <SEOSchema type="breadcrumb" data={breadcrumbData} />

      <Header />
      <main className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-12 max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-jdblue mb-4">Perguntas Frequentes</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Encontre respostas para as principais dúvidas sobre nossos serviços de assistência técnica especializada
              em Niterói.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
            <Accordion type="single" collapsible className="w-full">
              {faqData.questions.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left text-jdblue hover:text-jdred">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-gray-600 leading-relaxed">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="bg-jdred text-white rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Não encontrou sua resposta?</h2>
            <p className="mb-6 text-lg">
              Nossa equipe está pronta para esclarecer todas as suas dúvidas sobre nossos serviços.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex flex-col items-center">
                <Phone className="h-8 w-8 mb-2" />
                <h3 className="font-semibold mb-1">Telefone</h3>
                <p className="text-sm opacity-90">(21) 99999-9999</p>
              </div>
              <div className="flex flex-col items-center">
                <MessageCircle className="h-8 w-8 mb-2" />
                <h3 className="font-semibold mb-1">WhatsApp</h3>
                <p className="text-sm opacity-90">Atendimento rápido</p>
              </div>
              <div className="flex flex-col items-center">
                <MapPin className="h-8 w-8 mb-2" />
                <h3 className="font-semibold mb-1">Presencial</h3>
                <p className="text-sm opacity-90">Rua da Conceição, 123</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-jdred hover:bg-gray-100">
                <MessageCircle className="mr-2 h-5 w-5" />
                Falar no WhatsApp
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-jdred bg-transparent"
              >
                <Phone className="mr-2 h-5 w-5" />
                Ligar Agora
              </Button>
            </div>

            <div className="mt-6 flex items-center justify-center text-sm opacity-90">
              <Clock className="mr-2 h-4 w-4" />
              <span>Seg-Sex: 8h às 18h | Sáb: 8h às 14h</span>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
