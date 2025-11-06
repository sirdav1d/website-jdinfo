import type React from "react"
import "./globals.css"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import FloatingChat from "@/components/floating-chat"
import MobileOptimization from "@/components/mobile-optimization"
import SEOSchema from "@/components/seo-schema"
import Script from "next/script"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
  variable: "--font-inter",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://jdinfoblog.jdinformatica.com.br"),
  title: {
    default: "JDINFO - Assistência Técnica Especializada em Niterói",
    template: "%s | JDINFO - Assistência Técnica Niterói",
  },
  description:
    "Assistência técnica especializada em conserto de PlayStation, Xbox, Nintendo, Apple, Notebooks, PC Gamer, GoPro, JBL e Smartphones em Niterói. Mais de 18 anos de experiência.",
  keywords: [
    "assistência técnica",
    "conserto",
    "reparo",
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
    "smartphone",
    "assistência técnica Niterói",
    "conserto PlayStation Niterói",
    "conserto Xbox Niterói",
    "conserto Nintendo Niterói",
    "conserto MacBook Niterói",
    "conserto iPhone Niterói",
    "conserto notebook Niterói",
    "conserto PC Gamer Niterói",
    "conserto GoPro Niterói",
    "conserto JBL Niterói",
    "conserto tablet Niterói",
  ],
  authors: [{ name: "JDINFO", url: "https://jdinfoblog.jdinformatica.com.br" }],
  creator: "JDINFO",
  publisher: "JDINFO",
  verification: {
    google: "wpEc8PTNxWKIrlh-0Wy4hQxmpITPcvTyH4S0j_kdITk",
  },
  alternates: {
    canonical: "https://jdinfoblog.jdinformatica.com.br",
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://jdinfoblog.jdinformatica.com.br",
    siteName: "JDINFO",
    title: "JDINFO - Assistência Técnica Especializada em Niterói",
    description:
      "Assistência técnica especializada em conserto de PlayStation, Xbox, Nintendo, Apple, Notebooks, PC Gamer, GoPro, JBL e Smartphones em Niterói.",
    images: [
      {
        url: "https://jdinfoblog.jdinformatica.com.br/images/logo-full.png",
        width: 1200,
        height: 630,
        alt: "JDINFO - Assistência Técnica Especializada",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "JDINFO - Assistência Técnica Especializada em Niterói",
    description:
      "Assistência técnica especializada em conserto de PlayStation, Xbox, Nintendo, Apple, Notebooks, PC Gamer, GoPro, JBL e Smartphones em Niterói.",
    images: ["https://jdinfoblog.jdinformatica.com.br/images/logo-full.png"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "Assistência Técnica",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <head>
        {/* Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-KN4QFMP2');
            `,
          }}
        />
        {/* End Google Tag Manager */}

        {/* Preload critical resources */}
        <link rel="preload" href="/images/logo-full.png" as="image" />
        <link rel="preload" href="/images/store-image.png" as="image" />

        {/* DNS Prefetch */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//images.unsplash.com" />
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />
      </head>
      <body className={inter.className}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KN4QFMP2"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}

        {/* Organization Schema */}
        <SEOSchema type="organization" />

        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <MobileOptimization />
          {children}
          <FloatingChat />
        </ThemeProvider>
      </body>
    </html>
  )
}
