# Homepage Precision Lab Refresh Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Redesenhar a página inicial da JDINFO para uma direção visual mais premium, técnica e coerente, preservando a fonte atual e melhorando a hierarquia de conversão.

**Architecture:** A home será reorganizada para contar uma única história: impacto inicial, diagnóstico, serviços, prova de confiança, localização, autoridade e fechamento. Os componentes existentes serão refatorados em vez de substituídos por uma nova arquitetura paralela, com uma ou duas seções novas para concentrar confiança e processo.

**Tech Stack:** Next.js 15, React 19, Tailwind CSS 4, componentes UI internos (`Button`, `Card`, `Input`, `Textarea`), `lucide-react`, `next/image`.

---

## Chunk 1: Estrutura e Direção Visual

### Task 1: Reorganizar a narrativa da home

**Files:**
- Modify: `app/page.tsx`
- Create: `components/home-proof-section.tsx`

- [ ] Substituir a seção inline “Por que escolher a JDINFO?” por um bloco dedicado de prova e processo.
- [ ] Reordenar as seções para reduzir competição entre CTAs e melhorar o ritmo visual.
- [ ] Manter FAQ e footer como fechamento, mas com papel subordinado ao CTA final.

## Chunk 2: Blocos de Maior Impacto

### Task 2: Refazer hero e seção de diagnóstico

**Files:**
- Modify: `components/hero-section.tsx`
- Modify: `components/hero-video-embed.tsx`
- Modify: `components/diagnostic-form.tsx`

- [ ] Redesenhar o hero para uma composição mais assimétrica, com prova e CTA mais claros.
- [ ] Integrar o vídeo como elemento de prova visual dentro da linguagem “Precision Lab”.
- [ ] Transformar o formulário de diagnóstico no principal bloco de captura da página.

### Task 3: Refazer catálogo de serviços e prova social

**Files:**
- Modify: `components/specialized-services.tsx`
- Modify: `components/verified-reviews.tsx`

- [ ] Trocar a grade repetitiva de serviços por uma curadoria com destaque e secundários.
- [ ] Remover a sensação de carrossel genérico das avaliações e reposicioná-las como prova editorial.

## Chunk 3: Confiança, Autoridade e Fechamento

### Task 4: Refazer localização, blog, FAQ e CTA final

**Files:**
- Modify: `components/locations-section.tsx`
- Modify: `components/blog-section.tsx`
- Modify: `components/faq-section.tsx`
- Modify: `components/cta-section.tsx`

- [ ] Dar mais protagonismo à informação útil de atendimento e menos ao embed de mapa.
- [ ] Transformar o blog em seção de autoridade com um destaque principal.
- [ ] Ajustar FAQ ao novo sistema visual sem perder clareza.
- [ ] Remover duplicação de captura no CTA final e transformá-lo em fechamento de decisão.

## Chunk 4: Polimento Global

### Task 5: Ajustar navegação, footer e estilos de suporte

**Files:**
- Modify: `components/header.tsx`
- Modify: `components/footer.tsx`
- Modify: `app/globals.css`

- [ ] Refinar header sticky e CTA principal sem alterar a família tipográfica.
- [ ] Manter o footer mais enxuto e coerente com a nova hierarquia.
- [ ] Adicionar apenas os estilos globais necessários para textura, profundidade e consistência.

## Verification

- Build: `pnpm build`
- Lint: `pnpm lint`

