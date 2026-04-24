// Base de conhecimento do chatbot
// Esta é a fonte de informações que o chatbot usará para responder às perguntas

import { siteConfig } from '@/lib/site-config'

export type ServiceInfo = {
  id: string
  name: string
  description: string
  commonProblems: string[]
  repairProcess: string[]
  priceRange: string
  warranty: string
  deliveryTime: string
}

export type LocationInfo = {
  id: string
  name: string
  address: string
  whatsapp: string
  phone: string
  hours: {
    weekdays: string
    saturday: string
    sunday: string
  }
  mapUrl: string
}

export type FAQItem = {
  question: string
  answer: string
  keywords: string[]
  category: string
}

// Informações sobre serviços
export const services: ServiceInfo[] = [
  {
    id: "playstation",
    name: "Atendimento PlayStation",
    description: "Atendimento em PlayStation 4, PlayStation 5 e controles com garantia e peças originais.",
    commonProblems: [
      "Luz azul da morte (BLOD) no PS4",
      "Superaquecimento e desligamento repentino",
      "Problemas no leitor de disco",
      "Falhas na placa-mãe",
      "Problemas de conexão HDMI",
      "Controles com drift ou botões que não respondem",
    ],
    repairProcess: [
      "Diagnóstico completo do console",
      "Orçamento detalhado sem compromisso",
      "Atendimento com peças de qualidade",
      "Testes de funcionamento",
      "Entrega com garantia",
    ],
    priceRange: "A partir de R$ 150,00, dependendo do problema",
    warranty: "90 dias em todos os serviços",
    deliveryTime: "2 a 5 dias úteis em média",
  },
  {
    id: "xbox",
    name: "Atendimento Xbox",
    description: "Atendimento em Xbox One, Xbox Series S/X e controles com técnicos especializados.",
    commonProblems: [
      "Luz vermelha da morte (RROD) nos modelos mais antigos",
      "Superaquecimento e desligamento repentino",
      "Problemas no leitor de disco",
      "Falhas na placa-mãe",
      "Problemas de conexão HDMI",
      "Controles com drift ou botões que não respondem",
    ],
    repairProcess: [
      "Diagnóstico completo do console",
      "Orçamento detalhado sem compromisso",
      "Atendimento com peças de qualidade",
      "Testes de funcionamento",
      "Entrega com garantia",
    ],
    priceRange: "A partir de R$ 150,00, dependendo do problema",
    warranty: "90 dias em todos os serviços",
    deliveryTime: "2 a 5 dias úteis em média",
  },
  {
    id: "nintendo",
    name: "Atendimento Nintendo",
    description: "Atendimento para Nintendo Switch e outros consoles Nintendo.",
    commonProblems: [
      "Joy-Cons com drift (movimento fantasma dos analógicos)",
      "Problemas na tela LCD (manchas, linhas ou pixels mortos)",
      "Falhas na bateria ou curta duração",
      "Problemas no dock (não carrega ou não conecta à TV)",
      "Botões que não respondem corretamente",
    ],
    repairProcess: [
      "Diagnóstico completo do console",
      "Orçamento detalhado sem compromisso",
      "Atendimento com peças de qualidade",
      "Testes de funcionamento",
      "Entrega com garantia",
    ],
    priceRange: "A partir de R$ 120,00, dependendo do problema",
    warranty: "90 dias em todos os serviços",
    deliveryTime: "2 a 5 dias úteis em média",
  },
  {
    id: "apple",
    name: "Atendimento linha Apple",
    description: "Especialistas em atendimento de iPhone, iPad, Notebook Apple, iMac e outros dispositivos Apple.",
    commonProblems: [
      "Tela quebrada ou trincada",
      "Bateria com duração reduzida",
      "Problemas de carregamento",
      "Falhas na câmera",
      "iPhone não liga ou reinicia constantemente",
      "Problemas com alto-falante ou microfone",
    ],
    repairProcess: [
      "Diagnóstico completo do dispositivo",
      "Orçamento detalhado sem compromisso",
      "Atendimento com peças de qualidade",
      "Testes de funcionamento",
      "Entrega com garantia",
    ],
    priceRange: "A partir de R$ 150,00, dependendo do dispositivo e problema",
    warranty: "90 dias em todos os serviços",
    deliveryTime: "24 a 48 horas para a maioria dos servicos",
  },
  {
    id: "notebook",
    name: "Atendimento Notebook",
    description: "Soluções para problemas de hardware e software em notebooks e ultrabooks de todas as marcas.",
    commonProblems: [
      "Tela quebrada ou com falhas",
      "Bateria que não segura carga",
      "Superaquecimento",
      "Lentidão e travamentos",
      "Problemas no teclado",
      "Falhas no disco rígido ou SSD",
    ],
    repairProcess: [
      "Diagnóstico completo do notebook",
      "Orçamento detalhado sem compromisso",
      "Atendimento com peças de qualidade",
      "Testes de funcionamento",
      "Entrega com garantia",
    ],
    priceRange: "A partir de R$ 150,00, dependendo do problema",
    warranty: "90 dias em todos os serviços",
    deliveryTime: "2 a 5 dias úteis em média",
  },
  {
    id: "pc-gamer",
    name: "Atendimento PC Gamer",
    description: "Revisao especializada para computadores de alto desempenho, upgrades e placas de vídeo.",
    commonProblems: [
      "Superaquecimento de componentes",
      "Falhas na placa de vídeo",
      "Problemas de fonte de alimentação",
      "Travamentos durante jogos",
      "Artefatos gráficos na tela",
      "Ruídos anormais (coolers, fonte, etc.)",
    ],
    repairProcess: [
      "Diagnóstico completo do PC",
      "Orçamento detalhado sem compromisso",
      "Atendimento com peças de qualidade",
      "Testes de estresse e benchmark",
      "Entrega com garantia",
    ],
    priceRange: "A partir de R$ 180,00, dependendo do problema",
    warranty: "90 dias em todos os serviços",
    deliveryTime: "2 a 5 dias úteis em média",
  },
  {
    id: "gopro",
    name: "Atendimento GoPro",
    description: "Atendimento em câmeras de ação GoPro e acessórios com técnicos certificados.",
    commonProblems: [
      "Problemas de bateria (não carrega, baixa duração, superaquecimento)",
      "Falhas na tela LCD (tela quebrada, manchas, não liga)",
      "Problemas com cartão SD (não reconhece, corrompe arquivos)",
      "Danos causados por água",
      "Problemas na lente (arranhões, rachaduras, embaçamento)",
    ],
    repairProcess: [
      "Diagnóstico completo da câmera",
      "Orçamento detalhado sem compromisso",
      "Atendimento com peças de qualidade",
      "Testes de funcionamento",
      "Entrega com garantia",
    ],
    priceRange: "A partir de R$ 120,00, dependendo do problema",
    warranty: "90 dias em todos os serviços",
    deliveryTime: "2 a 5 dias úteis em média",
  },
  {
    id: "jbl",
    name: "Atendimento caixas JBL",
    description: "Servicos especializados em caixas de som JBL e outros equipamentos de áudio.",
    commonProblems: [
      "Problemas de bateria (não carrega, baixa duração, superaquecimento)",
      "Falhas no som (distorção, chiado, volume baixo)",
      "Problemas de conectividade Bluetooth",
      "Botões que não respondem",
      "Danos causados por água",
    ],
    repairProcess: [
      "Diagnóstico completo do equipamento",
      "Orçamento detalhado sem compromisso",
      "Atendimento com peças de qualidade",
      "Testes de funcionamento",
      "Entrega com garantia",
    ],
    priceRange: "A partir de R$ 80,00, dependendo do problema",
    warranty: "90 dias em todos os serviços",
    deliveryTime: "2 a 5 dias úteis em média",
  },
  {
    id: "tablet",
    name: "Atendimento Tablets",
    description: "Atendimento em tablets de todas as marcas, troca de tela, bateria e mais.",
    commonProblems: [
      "Tela quebrada ou trincada",
      "Problemas de bateria (não carrega, baixa duração, superaquecimento)",
      "Falhas no carregador ou porta de carregamento",
      "Problemas de conectividade (Wi-Fi, Bluetooth)",
      "Problemas com o touch screen",
      "Falhas em sensores de rotação",
    ],
    repairProcess: [
      "Diagnóstico completo do tablet",
      "Orçamento detalhado sem compromisso",
      "Atendimento com peças de qualidade",
      "Testes de funcionamento",
      "Entrega com garantia",
    ],
    priceRange: "A partir de R$ 150,00, dependendo do problema",
    warranty: "90 dias em todos os serviços",
    deliveryTime: "2 a 5 dias úteis em média",
  },
]

// Informações sobre localizações
export const locations: LocationInfo[] = [
  {
    id: "icarai",
    name: "Unidade Icaraí",
    address: "R. Gen. Pereira da Silva, 146 - Loja 107 - Icaraí, Niterói - RJ, 24220-031",
    whatsapp: "5521996643987",
    phone: "(21) 99664-3987",
    hours: {
      weekdays: "9h às 18h",
      saturday: "9h às 13h",
      sunday: "Fechado",
    },
    mapUrl: siteConfig.maps.directionsUrl,
  },
]

// Perguntas frequentes
export const faqItems: FAQItem[] = [
  {
    question: "Como funciona o contato com a JD Info?",
    answer:
      "Você pode falar pelo WhatsApp, telefone ou ir até a unidade de Icaraí. A equipe entende o que você procura e indica o melhor próximo passo.",
    keywords: ["contato", "whatsapp", "telefone", "falar", "jd info", "jdinfo"],
    category: "contato",
  },
  {
    question: "Onde fica a loja em Niterói?",
    answer:
      "A loja fica na R. Gen. Pereira da Silva, 146 - Loja 107 - Icaraí, Niterói - RJ. O local recebe clientes presencialmente e também atende pelos canais digitais.",
    keywords: ["endereço", "localização", "onde fica", "icaraí", "niterói", "loja"],
    category: "localização",
  },
  {
    question: "Preciso agendar horário?",
    answer:
      "O agendamento ajuda a organizar a visita, mas você também pode consultar a equipe antes de ir. A disponibilidade é confirmada no primeiro contato.",
    keywords: ["agendar", "horário", "agendamento", "marcar", "visita"],
    category: "agenda",
  },
  {
    question: "Quais produtos posso levar até a loja?",
    answer:
      "A JD Info recebe notebooks, computadores, consoles, acessórios e itens de tecnologia. A equipe confirma as opções disponíveis para cada caso.",
    keywords: ["produtos", "notebooks", "computadores", "consoles", "acessórios", "tecnologia"],
    category: "produtos",
  },
  {
    question: "Como recebo uma estimativa?",
    answer:
      "Depois do primeiro contato, a equipe orienta quais dados são necessários e informa uma estimativa quando aplicável.",
    keywords: ["estimativa", "valor", "preço", "custo", "quanto custa", "informação"],
    category: "estimativa",
  },
  {
    question: "Quais formas de pagamento vocês aceitam?",
    answer:
      "Aceitamos dinheiro, PIX, transferência bancária, cartão de débito e cartão de crédito. As condições são informadas antes da confirmação.",
    keywords: ["pagamento", "cartão", "crédito", "débito", "dinheiro", "pix", "transferência", "parcelamento"],
    category: "pagamento",
  },
  {
    question: "Vocês vendem itens de informática?",
    answer:
      "Sim. A loja trabalha com itens de informática e tecnologia. Consulte a disponibilidade pelo WhatsApp ou diretamente na unidade.",
    keywords: ["venda", "informática", "tecnologia", "loja", "itens", "produtos"],
    category: "loja",
  },
  {
    question: "Existe garantia?",
    answer:
      "As condições variam conforme o item e são apresentadas com clareza antes de qualquer confirmação.",
    keywords: ["garantia", "condições", "confirmação", "item"],
    category: "garantia",
  },
]

// Informações sobre a empresa
export const companyInfo = {
  name: "JDINFO",
  fullName: "JDINFO - Atendimento Especializado",
  foundedYear: 2005,
  experience: "18 anos",
  email: "contato@jdinfo.com.br",
  website: "https://jdinfoblog.jdinformatica.com.br",
  specialties: [
    "Atendimento PlayStation, Xbox e Nintendo",
    "Atendimento de produtos Apple (iPhone, iPad, Notebook Apple)",
    "Revisao de notebooks e PCs Gamer",
    "Atendimento GoPro e caixas JBL",
    "Atendimento de tablets de todas as marcas",
  ],
  differentials: [
    "Mais de 20 anos de experiência em Niterói",
    "Técnicos certificados e especializados",
    "Garantia de 90 dias em todos os serviços",
    "Diagnóstico gratuito",
    "Peças originais ou homologadas",
    "Endereço em Icaraí com orientacao por múltiplos canais",
  ],
}

// Respostas padrão para diferentes situações
export const defaultResponses = {
  greeting: "Olá! Sou o assistente virtual da JDINFO. Como posso ajudar você hoje?",
  farewell: "Obrigado por entrar em contato com a JDINFO. Estamos à disposição para ajudar com qualquer outra dúvida!",
  notUnderstood:
    "Desculpe, não entendi completamente sua pergunta. Poderia reformular ou escolher uma das opções abaixo?",
  contactSuggestion: "Para um atendimento mais personalizado, você pode falar diretamente com nossa equipe:",
  serviceOptions: "Oferecemos diversos serviços especializados. Em qual você tem interesse?",
  locationOptions: "Nosso endereço em Niterói fica em Icaraí. Se preferir, também podemos seguir pelos nossos canais digitais.",
  diagnosticOffer: "Oferecemos diagnóstico gratuito para todos os equipamentos. Gostaria de agendar um horário?",
  priceInquiry:
    "Os preços variam conforme o modelo e o problema específico. Para um orçamento preciso, recomendamos trazer seu equipamento para um diagnóstico gratuito. Posso te ajudar a agendar um horário?",
  warrantyInfo: "Todos os nossos serviços incluem garantia de 90 dias, dando a você tranquilidade e segurança.",
  fallback:
    "Estou aqui para ajudar com informações sobre nossos serviços de atendimento especializado. Se sua pergunta for sobre outro assunto, talvez seja melhor falar diretamente com nossa equipe.",
}

// Intenções que o chatbot pode reconhecer
export const intents = {
  GREETING: "greeting",
  FAREWELL: "farewell",
  SERVICE_INQUIRY: "service_inquiry",
  PRICE_INQUIRY: "price_inquiry",
  WARRANTY_INQUIRY: "warranty_inquiry",
  LOCATION_INQUIRY: "location_inquiry",
  HOURS_INQUIRY: "hours_inquiry",
  CONTACT_REQUEST: "contact_request",
  DIAGNOSTIC_REQUEST: "diagnostic_request",
  REPAIR_TIME_INQUIRY: "repair_time_inquiry",
  PARTS_INQUIRY: "parts_inquiry",
  COMPANY_INFO: "company_info",
  PAYMENT_INQUIRY: "payment_inquiry",
  TRACKING_INQUIRY: "tracking_inquiry",
  GENERAL_QUESTION: "general_question",
  FALLBACK: "fallback",
}

// Palavras-chave para reconhecimento de intenções
export const intentKeywords = {
  [intents.GREETING]: ["olá", "oi", "bom dia", "boa tarde", "boa noite", "hey", "e aí", "tudo bem"],
  [intents.FAREWELL]: ["tchau", "até logo", "adeus", "até mais", "obrigado", "valeu"],
  [intents.SERVICE_INQUIRY]: [
    "serviço",
    "serviços",
    "atendimento",
    "atendimento",
    "atender",
    "avaliar",
    "arrumar",
    "fix",
    "problema",
    "atendimento",
  ],
  [intents.PRICE_INQUIRY]: ["preço", "valor", "custo", "quanto custa", "orçamento", "pagamento", "parcela", "parcelar"],
  [intents.WARRANTY_INQUIRY]: ["garantia", "garante", "seguro", "cobertura", "cobre", "assegurar"],
  [intents.LOCATION_INQUIRY]: [
    "onde",
    "local",
    "endereço",
    "localização",
    "unidade",
    "filial",
    "loja",
    "centro",
    "icaraí",
  ],
  [intents.HOURS_INQUIRY]: ["horário", "hora", "funcionamento", "aberto", "fechado", "abre", "fecha", "expediente"],
  [intents.CONTACT_REQUEST]: [
    "contato",
    "falar",
    "atendente",
    "humano",
    "pessoa",
    "telefone",
    "whatsapp",
    "ligar",
    "chat",
  ],
  [intents.DIAGNOSTIC_REQUEST]: ["diagnóstico", "avaliar", "avaliação", "verificar", "checar", "analisar", "análise"],
  [intents.REPAIR_TIME_INQUIRY]: ["tempo", "prazo", "demora", "dias", "rápido", "urgente", "quando", "quanto tempo"],
  [intents.PARTS_INQUIRY]: ["peça", "peças", "original", "genuína", "componente", "material", "qualidade"],
  [intents.COMPANY_INFO]: ["empresa", "sobre", "história", "quem são", "experiência", "tempo de mercado", "fundação"],
  [intents.PAYMENT_INQUIRY]: [
    "pagamento",
    "pagar",
    "cartão",
    "crédito",
    "débito",
    "dinheiro",
    "pix",
    "transferência",
    "parcelar",
    "parcela",
  ],
  [intents.TRACKING_INQUIRY]: ["acompanhar", "status", "andamento", "ordem", "os", "serviço", "rastrear", "tracking"],
}

// Sugestões rápidas para diferentes contextos
export const quickSuggestions = {
  initial: [
    "Quais serviços vocês oferecem?",
    "Onde ficam as lojas?",
    "Quanto custa o atendimento?",
    "Vocês dão garantia?",
  ],
  afterServiceInquiry: [
    "Quanto tempo demora o atendimento?",
    "Vocês usam peças originais?",
    "Qual o preço do serviço?",
    "Quero falar com um atendente",
  ],
  afterPriceInquiry: [
    "Vocês aceitam cartão?",
    "Tem garantia?",
    "Quero agendar um diagnóstico",
    "Preciso de mais informações",
  ],
  afterLocationInquiry: [
    "Qual o horário de funcionamento?",
    "Como chegar aí?",
    "Preciso agendar horário?",
    "Quero falar pelo WhatsApp",
  ],
  afterDiagnosticMention: [
    "O diagnóstico é gratuito?",
    "Preciso agendar?",
    "Quanto tempo demora?",
    "Quero falar com um técnico",
  ],
}
