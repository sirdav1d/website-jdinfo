import type React from "react"
import type { Metadata } from "next"
import SEOSchema from "@/components/seo-schema"
import { buildPageMetadata } from "@/lib/metadata"
import { siteConfig } from "@/lib/site-config"

export const metadata: Metadata = buildPageMetadata({
  title: "Blog JDINFO",
  description:
    "Confira nosso blog com dicas, tutoriais e informações sobre atendimento de eletrônicos, smartphones, consoles e muito mais em Niterói.",
  path: "/blog",
  keywords: [
    "blog atendimento especializado",
    "dicas atendimento",
    "atendimento eletrônicos",
    "tutoriais atendimento",
    "guias atendimento",
    "atendimento especializado blog",
  ],
})

const breadcrumbData = {
  breadcrumbs: [
    { name: "Início", url: siteConfig.url },
    { name: "Blog", url: `${siteConfig.url}/blog` },
  ],
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="bg-white">
      <SEOSchema type="breadcrumb" data={breadcrumbData} />
      {children}
    </div>
  )
}
