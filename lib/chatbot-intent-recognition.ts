import { intents, intentKeywords, faqItems } from "./chatbot-knowledge-base"

// Interface para o resultado do reconhecimento de intenção
export interface IntentRecognitionResult {
  intent: string
  confidence: number
  entities?: {
    service?: string
    location?: string
    device?: string
    problem?: string
    [key: string]: string | undefined
  }
  matchedFaq?: number
}

// Função para normalizar texto (remover acentos, converter para minúsculas)
export function normalizeText(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^\w\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim()
}

// Função para verificar se um texto contém palavras-chave
export function containsKeywords(text: string, keywords: string[]): boolean {
  const normalizedText = normalizeText(text)
  return keywords.some((keyword) => normalizedText.includes(normalizeText(keyword)))
}

// Função para calcular a pontuação de correspondência entre texto e palavras-chave
export function calculateMatchScore(text: string, keywords: string[]): number {
  const normalizedText = normalizeText(text)
  const words = normalizedText.split(" ")

  let matchCount = 0
  const normalizedKeywords = keywords.map((k) => normalizeText(k))

  // Verifica palavras exatas
  for (const word of words) {
    if (normalizedKeywords.includes(word)) {
      matchCount += 1
    }
  }

  // Verifica frases
  for (const keyword of normalizedKeywords) {
    if (keyword.includes(" ") && normalizedText.includes(keyword)) {
      matchCount += 2 // Dá mais peso para correspondências de frases
    }
  }

  // Normaliza a pontuação para um valor entre 0 e 1
  return Math.min(matchCount / Math.max(keywords.length, 3), 1)
}

// Função para extrair entidades do texto
export function extractEntities(text: string): Record<string, string> {
  const normalizedText = normalizeText(text)
  const entities: Record<string, string> = {}

  // Lista de dispositivos que podemos reconhecer
  const devices = [
    "playstation",
    "ps4",
    "ps5",
    "ps3",
    "xbox",
    "xbox one",
    "xbox series",
    "nintendo",
    "switch",
    "iphone",
    "ipad",
    "macbook",
    "imac",
    "apple",
    "notebook",
    "laptop",
    "ultrabook",
    "pc",
    "computador",
    "desktop",
    "pc gamer",
    "gopro",
    "jbl",
    "caixa de som",
    "speaker",
    "smartphone",
    "celular",
    "telefone",
  ]

  // Lista de problemas comuns
  const problems = [
    "tela quebrada",
    "tela trincada",
    "display",
    "touch",
    "bateria",
    "não carrega",
    "descarrega",
    "não liga",
    "desliga sozinho",
    "trava",
    "lento",
    "superaquecimento",
    "esquenta",
    "quente",
    "água",
    "molhou",
    "caiu na água",
    "líquido",
    "botão",
    "tecla",
    "teclado",
    "wifi",
    "bluetooth",
    "internet",
    "conexão",
    "som",
    "áudio",
    "não sai som",
    "microfone",
    "câmera",
    "foto",
    "vídeo",
    "hd",
    "ssd",
    "armazenamento",
    "memória",
    "placa mãe",
    "placa-mãe",
    "motherboard",
    "placa de vídeo",
    "gpu",
    "gráfico",
    "leitor",
    "disco",
    "cd",
    "dvd",
    "blu-ray",
  ]

  // Verifica dispositivos
  for (const device of devices) {
    if (normalizedText.includes(normalizeText(device))) {
      entities.device = device
      break
    }
  }

  // Verifica problemas
  for (const problem of problems) {
    if (normalizedText.includes(normalizeText(problem))) {
      entities.problem = problem
      break
    }
  }

  return entities
}

// Função para verificar se o texto corresponde a uma pergunta frequente
export function matchFAQ(text: string): number | null {
  const normalizedText = normalizeText(text)

  for (let i = 0; i < faqItems.length; i++) {
    const faq = faqItems[i]

    // Verifica se o texto contém palavras-chave da FAQ
    const keywordMatch = calculateMatchScore(normalizedText, faq.keywords)

    // Verifica se o texto é similar à pergunta
    const questionMatch = calculateMatchScore(normalizedText, [faq.question])

    // Combina as pontuações, dando mais peso à correspondência com a pergunta
    const totalScore = keywordMatch * 0.4 + questionMatch * 0.6

    // Se a pontuação for alta o suficiente, retorna o índice da FAQ
    if (totalScore > 0.6) {
      return i
    }
  }

  return null
}

// Função principal para reconhecer a intenção do usuário
export function recognizeIntent(text: string): IntentRecognitionResult {
  const normalizedText = normalizeText(text)
  let highestScore = 0
  let recognizedIntent = intents.FALLBACK

  // Verifica se corresponde a uma FAQ
  const faqMatch = matchFAQ(text)
  if (faqMatch !== null) {
    return {
      intent: intents.GENERAL_QUESTION,
      confidence: 0.9,
      matchedFaq: faqMatch,
    }
  }

  // Verifica cada intenção
  for (const [intent, keywords] of Object.entries(intentKeywords)) {
    const score = calculateMatchScore(normalizedText, keywords)

    if (score > highestScore) {
      highestScore = score
      recognizedIntent = intent
    }
  }

  // Se a confiança for muito baixa, usa fallback
  if (highestScore < 0.3) {
    recognizedIntent = intents.FALLBACK
    highestScore = 0.3
  }

  // Extrai entidades
  const entities = extractEntities(text)

  return {
    intent: recognizedIntent,
    confidence: highestScore,
    entities,
  }
}
