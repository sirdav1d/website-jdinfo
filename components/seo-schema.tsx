import Script from "next/script"

interface SEOSchemaProps {
  type?: "organization" | "article" | "faq" | "service"
  data?: any
}

export default function SEOSchema({ type = "organization", data }: SEOSchemaProps) {
  const getSchema = () => {
    const baseUrl = "https://jdinfoblog.jdinformatica.com.br"

    switch (type) {
      case "organization":
        return {
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "JDINFO - Assistência Técnica Especializada",
          description:
            "Assistência técnica especializada em Niterói para smartphones, tablets, notebooks, videogames e eletrônicos em geral.",
          url: baseUrl,
          logo: `${baseUrl}/images/logo-full.png`,
          image: `${baseUrl}/images/store-image.png`,
          telephone: "+55-21-99999-9999",
          email: "contato@jdinformatica.com.br",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Rua da Conceição, 123",
            addressLocality: "Niterói",
            addressRegion: "RJ",
            postalCode: "24020-000",
            addressCountry: "BR",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: -22.8833,
            longitude: -43.1036,
          },
          openingHours: "Mo-Fr 08:00-18:00, Sa 08:00-14:00",
          priceRange: "$$",
          serviceArea: {
            "@type": "GeoCircle",
            geoMidpoint: {
              "@type": "GeoCoordinates",
              latitude: -22.8833,
              longitude: -43.1036,
            },
            geoRadius: "50000",
          },
          sameAs: ["https://www.facebook.com/jdinformatica", "https://www.instagram.com/jdinformatica"],
        }

      case "article":
        return {
          "@context": "https://schema.org",
          "@type": "Article",
          headline: data?.title || "Artigo JDINFO",
          description: data?.description || "Artigo sobre assistência técnica especializada",
          image: data?.image || `${baseUrl}/images/logo-full.png`,
          author: {
            "@type": "Organization",
            name: "JDINFO",
          },
          publisher: {
            "@type": "Organization",
            name: "JDINFO",
            logo: {
              "@type": "ImageObject",
              url: `${baseUrl}/images/logo-full.png`,
            },
          },
          datePublished: data?.publishedDate || "2025-01-01",
          dateModified: data?.modifiedDate || "2025-01-01",
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": data?.url || baseUrl,
          },
        }

      case "faq":
        return {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity:
            data?.faqs?.map((faq: any) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })) || [],
        }

      case "service":
        return {
          "@context": "https://schema.org",
          "@type": "Service",
          name: data?.name || "Assistência Técnica Especializada",
          description: data?.description || "Serviços de reparo e manutenção de eletrônicos",
          provider: {
            "@type": "Organization",
            name: "JDINFO",
          },
          areaServed: {
            "@type": "City",
            name: "Niterói",
          },
          serviceType: data?.serviceType || "Assistência Técnica",
        }

      default:
        return {}
    }
  }

  return (
    <Script
      id={`schema-${type}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(getSchema()),
      }}
    />
  )
}
