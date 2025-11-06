import type React from "react"
import type { Metadata } from "next"
import BackToTop from "@/components/back-to-top"
import SEOSchema from "@/components/seo-schema"

export const metadata: Metadata = {
  title: "Blog JDINFO - Dicas e Informações sobre Assistência Técnica em Niterói",
  description:
    "Confira nosso blog com dicas, tutoriais e informações sobre conserto de eletrônicos, smartphones, consoles e muito mais em Niterói.",
  keywords: [
    "blog assistência técnica",
    "dicas conserto",
    "reparo eletrônicos",
    "Niterói",
    "PlayStation",
    "Xbox",
    "Nintendo",
    "Apple",
    "MacBook",
    "iPhone",
    "notebook",
    "PC Gamer",
    "GoPro",
    "JBL",
    "tablet",
    "tutoriais reparo",
    "guias conserto",
    "assistência técnica blog",
  ],
  alternates: {
    canonical: "https://jdinfo.com.br/blog",
  },
  openGraph: {
    title: "Blog JDINFO - Dicas e Informações sobre Assistência Técnica em Niterói",
    description:
      "Confira nosso blog com dicas, tutoriais e informações sobre conserto de eletrônicos, smartphones, consoles e muito mais em Niterói.",
    url: "https://jdinfo.com.br/blog",
    siteName: "JDINFO",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "https://jdinfo.com.br/images/logo-full.png",
        width: 1200,
        height: 630,
        alt: "Blog JDINFO - Assistência Técnica",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog JDINFO - Dicas e Informações sobre Assistência Técnica em Niterói",
    description:
      "Confira nosso blog com dicas, tutoriais e informações sobre conserto de eletrônicos, smartphones, consoles e muito mais em Niterói.",
    images: ["https://jdinfo.com.br/images/logo-full.png"],
  },
}

const breadcrumbData = {
  breadcrumbs: [
    { name: "Início", url: "https://jdinfo.com.br" },
    { name: "Blog", url: "https://jdinfo.com.br/blog" },
  ],
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="bg-white min-h-screen">
      <SEOSchema type="breadcrumb" data={breadcrumbData} />
      {children}
      <BackToTop />
    </div>
  )
}
