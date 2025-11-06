import type { ReactNode } from "react"

interface BlogArticleLayoutProps {
  children: ReactNode
}

export default function BlogArticleLayout({ children }: BlogArticleLayoutProps) {
  return (
    <div className="max-w-4xl mx-auto px-4 py-6 md:py-12">
      <article className="blog-article">{children}</article>
    </div>
  )
}
