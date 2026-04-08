import Link from "next/link"
import { Clock, MapPin, MessageCircle, Phone } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { homepageFaqItems } from "@/lib/homepage-faq"

export default function FAQSection() {
  return (
    <section id="faq" className="scroll-mt-24 bg-background px-4 py-16 md:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-jdred">FAQ</p>
          <h2 className="mb-4 text-3xl font-bold text-jdblue">Perguntas Frequentes</h2>
          <p className="text-base text-muted-foreground md:text-lg">
            Reunimos as dúvidas mais comuns sobre diagnóstico, prazos, garantia e atendimento para facilitar sua decisão.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.35fr)_minmax(320px,0.65fr)]">
          <div className="rounded-[2rem] border border-border bg-card p-6 shadow-[0_24px_48px_rgba(8,17,34,0.08)] md:p-8">
            <Accordion type="single" collapsible className="w-full">
              {homepageFaqItems.map((faq, index) => (
                <AccordionItem key={faq.question} value={`item-${index}`}>
                  <AccordionTrigger className="text-left text-base text-jdblue hover:text-jdred md:text-lg">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm leading-7 text-muted-foreground md:text-base">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="flex h-full flex-col justify-between rounded-[2rem] bg-jdblue p-8 text-white shadow-[0_24px_56px_rgba(8,17,34,0.18)]">
            <div>
              <h3 className="mb-3 text-2xl font-bold">Ainda com dúvidas?</h3>
              <p className="text-sm leading-7 text-white/80 md:text-base">
                Nossa equipe atende pelo WhatsApp e presencialmente em Icaraí para orientar o melhor próximo passo.
              </p>
            </div>

            <div className="mt-8 space-y-4">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="mb-2 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-white/70">
                  <Phone className="h-4 w-4" />
                  Contato rápido
                </div>
                <div className="space-y-1 text-sm text-white/85">
                  <p>(21) 97138-6634</p>
                  <p>(21) 99664-3987</p>
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="mb-2 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-white/70">
                  <Clock className="h-4 w-4" />
                  Horários
                </div>
                <div className="space-y-1 text-sm text-white/85">
                  <p>Segunda a sexta: 9h às 18h</p>
                  <p>Sábado: 9h às 13h</p>
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="mb-2 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-white/70">
                  <MapPin className="h-4 w-4" />
                  Atendimento presencial
                </div>
                <p className="text-sm text-white/85">R. Gen. Pereira da Silva, 146 - Loja 107 - Icaraí, Niterói - RJ.</p>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3">
              <Button asChild size="lg" className="bg-jdred text-white hover:bg-jdred/90">
                <a href="https://wa.me/5521971386634">
                  <MessageCircle className="h-5 w-5" />
                  Falar pelo WhatsApp
                </a>
              </Button>
              <Button asChild size="lg" variant="secondary" className="bg-white text-jdblue hover:bg-white/90">
                <Link href="/contato">
                  <Phone className="h-5 w-5" />
                  Ver página de contato
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
