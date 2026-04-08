interface HeroVideoEmbedProps {
  src: string
  title: string
}

export function HeroVideoEmbed({ src, title }: HeroVideoEmbedProps) {
  return (
    <div className="mx-auto w-full max-w-5xl overflow-hidden rounded-[calc(var(--radius)+0.5rem)] border border-border bg-card shadow-[0_24px_80px_rgba(8,17,34,0.12)]">
      <div className="aspect-video">
        <iframe
          src={src}
          title={title}
          className="size-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    </div>
  )
}
