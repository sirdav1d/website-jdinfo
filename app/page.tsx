import type { Metadata } from "next"
import Header from "@/components/header"
import Footer from "@/components/footer"
import HeroSection from "@/components/hero-section"
import DiagnosticForm from "@/components/diagnostic-form"
import DiagnosticHighlights from "@/components/diagnostic-highlights"
import SpecializedServices from "@/components/specialized-services"
import VerifiedReviews from "@/components/verified-reviews"
import LocationsSection from "@/components/locations-section"
import BlogSection from "@/components/blog-section"
import FAQSection from "@/components/faq-section"
import SEOSchema from "@/components/seo-schema"
import { homepageFaqItems } from "@/lib/homepage-faq"
import { buildPageMetadata } from "@/lib/metadata"

export const metadata: Metadata = buildPageMetadata({
  title: "Assistência Técnica em Niterói",
  description:
    "Atendimento técnico especializado em Niterói para notebook, MacBook, PC Gamer, consoles, Apple, GoPro, JBL e outros eletrônicos com diagnóstico claro e suporte presencial em Icaraí.",
  path: "/",
  keywords: [
    "assistência técnica em niterói",
    "diagnóstico técnico",
    "conserto notebook niterói",
    "conserto macbook niterói",
    "conserto pc gamer niterói",
  ],
})

export default function Home() {
  return (
    <>
      <SEOSchema type="faq" data={{ faqs: homepageFaqItems }} />

      <div className="min-h-screen flex flex-col bg-background">
        <Header />

        <main className="flex-1">
          <HeroSection />

          <section
            id="diagnostico"
            className="relative overflow-hidden bg-[linear-gradient(180deg,rgba(229,234,243,0.45),rgba(250,250,250,1))] px-4 py-18 md:px-6 lg:px-8 lg:py-24"
          >
            <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-border to-transparent" />
            <div className="container mx-auto max-w-5xl">
              <DiagnosticForm />
              <DiagnosticHighlights />
            </div>
          </section>

          <SpecializedServices />
          <VerifiedReviews />
          <LocationsSection />
          <BlogSection />
          <FAQSection />
        </main>

        <Footer />
      </div>
    </>
  )
}
