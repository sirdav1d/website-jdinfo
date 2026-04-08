import { Card, CardContent } from "@/components/ui/card"
import Header from "@/components/header"
import Footer from "@/components/footer"
import HeroSection from "@/components/hero-section"
import SpecializedServices from "@/components/specialized-services"
import CtaSection from "@/components/cta-section"
import LocationsSection from "@/components/locations-section"
import BlogSection from "@/components/blog-section"
import DiagnosticForm from "@/components/diagnostic-form"
import VerifiedReviews from "@/components/verified-reviews"
import FAQSection from "@/components/faq-section"
import SEOSchema from "@/components/seo-schema"
import { homepageFaqItems } from "@/lib/homepage-faq"

export default function Home() {
  return (
    <>
      <SEOSchema type="faq" data={{ faqs: homepageFaqItems }} />

      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        <main className="flex-1">
          <HeroSection />

          <section id="diagnostico" className="bg-secondary/40 px-4 py-16 md:px-6 lg:px-8">
            <div className="container mx-auto max-w-4xl">
              <DiagnosticForm />
            </div>
          </section>

          <SpecializedServices />
          <LocationsSection />

          <section className="bg-secondary/40 px-4 py-16 md:px-6 lg:px-8">
            <div className="container mx-auto max-w-6xl">
              <h2 className="mb-12 text-center text-3xl font-bold text-jdblue">Por que escolher a JDINFO?</h2>
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                <Card className="shadow-[0_20px_40px_rgba(8,17,34,0.06)] transition-shadow duration-300 hover:shadow-[0_24px_48px_rgba(8,17,34,0.1)]">
                  <CardContent className="p-6 text-center">
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-secondary">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8 text-accent"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <h3 className="mb-2 text-xl font-semibold">+18 Anos de Experiência</h3>
                    <p className="text-muted-foreground">Atendendo Niterói com excelência e conhecimento técnico comprovado.</p>
                  </CardContent>
                </Card>

                <Card className="shadow-[0_20px_40px_rgba(8,17,34,0.06)] transition-shadow duration-300 hover:shadow-[0_24px_48px_rgba(8,17,34,0.1)]">
                  <CardContent className="p-6 text-center">
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-secondary">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8 text-accent"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                        />
                      </svg>
                    </div>
                    <h3 className="mb-2 text-xl font-semibold">Garantia em Todos os Serviços</h3>
                    <p className="text-muted-foreground">Oferecemos garantia real em todos os reparos realizados.</p>
                  </CardContent>
                </Card>

                <Card className="shadow-[0_20px_40px_rgba(8,17,34,0.06)] transition-shadow duration-300 hover:shadow-[0_24px_48px_rgba(8,17,34,0.1)]">
                  <CardContent className="p-6 text-center">
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-secondary">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8 text-accent"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                    </div>
                    <h3 className="mb-2 text-xl font-semibold">Rapidez na Entrega</h3>
                    <p className="text-muted-foreground">Diagnóstico rápido e prazos de entrega cumpridos rigorosamente.</p>
                  </CardContent>
                </Card>

                <Card className="shadow-[0_20px_40px_rgba(8,17,34,0.06)] transition-shadow duration-300 hover:shadow-[0_24px_48px_rgba(8,17,34,0.1)]">
                  <CardContent className="p-6 text-center">
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-secondary">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8 text-accent"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      </svg>
                    </div>
                    <h3 className="mb-2 text-xl font-semibold">Técnicos Especializados</h3>
                    <p className="text-muted-foreground">
                      Equipe certificada e constantemente atualizada com as novas tecnologias.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          <BlogSection />
          <VerifiedReviews />
          <FAQSection />
          <CtaSection />
        </main>
        <Footer />
      </div>
    </>
  )
}
