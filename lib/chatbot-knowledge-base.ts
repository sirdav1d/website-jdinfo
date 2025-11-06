// Base de conhecimento do chatbot
// Esta é a fonte de informações que o chatbot usará para responder às perguntas

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
    name: "Conserto de PlayStation",
    description: "Reparos em PlayStation 4, PlayStation 5 e controles com garantia e peças originais.",
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
      "Reparo com peças de qualidade",
      "Testes de funcionamento",
      "Entrega com garantia",
    ],
    priceRange: "A partir de R$ 150,00, dependendo do problema",
    warranty: "90 dias em todos os serviços",
    deliveryTime: "2 a 5 dias úteis em média",
  },
  {
    id: "xbox",
    name: "Conserto de Xbox",
    description: "Reparos em Xbox One, Xbox Series S/X e controles com técnicos especializados.",
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
      "Reparo com peças de qualidade",
      "Testes de funcionamento",
      "Entrega com garantia",
    ],
    priceRange: "A partir de R$ 150,00, dependendo do problema",
    warranty: "90 dias em todos os serviços",
    deliveryTime: "2 a 5 dias úteis em média",
  },
  {
    id: "nintendo",
    name: "Conserto de Nintendo",
    description: "Assistência técnica para Nintendo Switch e outros consoles Nintendo.",
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
      "Reparo com peças de qualidade",
      "Testes de funcionamento",
      "Entrega com garantia",
    ],
    priceRange: "A partir de R$ 120,00, dependendo do problema",
    warranty: "90 dias em todos os serviços",
    deliveryTime: "2 a 5 dias úteis em média",
  },
  {
    id: "apple",
    name: "Conserto de Linha APPLE",
    description: "Especialistas em reparo de iPhone, iPad, MacBook, iMac e outros dispositivos Apple.",
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
      "Reparo com peças de qualidade",
      "Testes de funcionamento",
      "Entrega com garantia",
    ],
    priceRange: "A partir de R$ 150,00, dependendo do dispositivo e problema",
    warranty: "90 dias em todos os serviços",
    deliveryTime: "24 a 48 horas para a maioria dos reparos",
  },
  {
    id: "notebook",
    name: "Conserto de Notebook",
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
      "Reparo com peças de qualidade",
      "Testes de funcionamento",
      "Entrega com garantia",
    ],
    priceRange: "A partir de R$ 150,00, dependendo do problema",
    warranty: "90 dias em todos os serviços",
    deliveryTime: "2 a 5 dias úteis em média",
  },
  {
    id: "pc-gamer",
    name: "Conserto de PC Gamer",
    description: "Manutenção especializada para computadores de alto desempenho, upgrades e placas de vídeo.",
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
      "Reparo com peças de qualidade",
      "Testes de estresse e benchmark",
      "Entrega com garantia",
    ],
    priceRange: "A partir de R$ 180,00, dependendo do problema",
    warranty: "90 dias em todos os serviços",
    deliveryTime: "2 a 5 dias úteis em média",
  },
  {
    id: "gopro",
    name: "Conserto de GoPro",
    description: "Reparos em câmeras de ação GoPro e acessórios com técnicos certificados.",
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
      "Reparo com peças de qualidade",
      "Testes de funcionamento",
      "Entrega com garantia",
    ],
    priceRange: "A partir de R$ 120,00, dependendo do problema",
    warranty: "90 dias em todos os serviços",
    deliveryTime: "2 a 5 dias úteis em média",
  },
  {
    id: "jbl",
    name: "Conserto de Caixas JBL",
    description: "Reparos especializados em caixas de som JBL e outros equipamentos de áudio.",
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
      "Reparo com peças de qualidade",
      "Testes de funcionamento",
      "Entrega com garantia",
    ],
    priceRange: "A partir de R$ 80,00, dependendo do problema",
    warranty: "90 dias em todos os serviços",
    deliveryTime: "2 a 5 dias úteis em média",
  },
  {
    id: "tablet",
    name: "Conserto de Tablets",
    description: "Reparos em tablets de todas as marcas, troca de tela, bateria e mais.",
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
      "Reparo com peças de qualidade",
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
    id: "centro",
    name: "Unidade Centro",
    address: "Av. Ernani do Amaral Peixoto, 436 - loja 07 e 09 - Centro, Niterói - RJ, 24020-077",
    whatsapp: "5521971386634",
    phone: "(21) 97138-6634",
    hours: {
      weekdays: "9h às 18h",
      saturday: "9h às 13h",
      sunday: "Fechado",
    },
    mapUrl: "https://maps.google.com/?q=JDINFO+Centro+Niteroi",
  },
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
    mapUrl: "https://maps.google.com/?q=JDINFO+Icarai+Niteroi",
  },
]

// Perguntas frequentes
export const faqItems: FAQItem[] = [
  {
    question: "Quanto tempo demora para consertar um PlayStation?",
    answer:
      "O tempo médio para conserto de PlayStation varia de 2 a 5 dias úteis, dependendo da complexidade do problema e da disponibilidade de peças. Em alguns casos mais simples, como limpeza ou troca de pasta térmica, o serviço pode ser realizado no mesmo dia.",
    keywords: ["tempo", "prazo", "demora", "dias", "playstation", "ps4", "ps5", "console"],
    category: "prazos",
  },
  {
    question: "Vocês oferecem garantia nos serviços?",
    answer:
      "Sim, todos os nossos serviços incluem garantia de 90 dias. A garantia cobre problemas relacionados ao reparo realizado, dando a você tranquilidade e segurança.",
    keywords: ["garantia", "segurança", "cobertura", "90 dias"],
    category: "garantia",
  },
  {
    question: "O diagnóstico é realmente gratuito?",
    answer:
      "Sim, o diagnóstico inicial é totalmente gratuito e sem compromisso. Você só paga se aprovar o orçamento e decidir realizar o reparo.",
    keywords: ["diagnóstico", "gratuito", "grátis", "sem custo", "orçamento", "avaliação"],
    category: "preços",
  },
  {
    question: "Vocês usam peças originais?",
    answer:
      "Sim, trabalhamos apenas com peças originais ou homologadas pelos fabricantes, garantindo a qualidade e durabilidade do reparo. Em casos específicos onde a peça original não está disponível, oferecemos alternativas de qualidade equivalente, sempre com a aprovação prévia do cliente.",
    keywords: ["peças", "originais", "genuínas", "qualidade", "homologadas"],
    category: "qualidade",
  },
  {
    question: "Quais formas de pagamento vocês aceitam?",
    answer:
      "Aceitamos diversas formas de pagamento para sua comodidade: cartões de crédito (parcelamento em até 12x), cartões de débito, dinheiro, PIX e transferência bancária.",
    keywords: ["pagamento", "cartão", "crédito", "débito", "dinheiro", "pix", "transferência", "parcelamento"],
    category: "pagamento",
  },
  {
    question: "É possível agendar um horário para levar meu equipamento?",
    answer:
      "Sim, você pode agendar um horário para atendimento através do nosso WhatsApp ou telefone. Isso ajuda a evitar filas e garante um atendimento mais personalizado.",
    keywords: ["agendar", "horário", "agendamento", "marcar", "atendimento"],
    category: "atendimento",
  },
  {
    question: "Vocês fazem atendimento a domicílio?",
    answer:
      "Para alguns serviços específicos, como instalação de equipamentos ou diagnóstico de computadores de mesa, oferecemos atendimento a domicílio em Niterói e região. Entre em contato para verificar a disponibilidade e valores.",
    keywords: ["domicílio", "casa", "residência", "visita", "técnico em casa"],
    category: "atendimento",
  },
  {
    question: "Meu equipamento tem conserto?",
    answer:
      "Na maioria dos casos, sim. Nossos técnicos são especializados em encontrar soluções mesmo para problemas complexos. Recomendamos trazer seu equipamento para um diagnóstico gratuito, onde poderemos avaliar com precisão e apresentar as opções disponíveis.",
    keywords: ["tem conserto", "pode consertar", "tem jeito", "recuperar", "salvar"],
    category: "serviços",
  },
  {
    question: "Vocês recuperam dados de HDs e SSDs com problema?",
    answer:
      "Sim, oferecemos serviço de recuperação de dados para diversos tipos de mídia, incluindo HDs, SSDs, cartões de memória e pendrives. A taxa de sucesso varia conforme o tipo e a gravidade do dano, mas conseguimos recuperar dados em muitos casos considerados perdidos.",
    keywords: ["recuperação", "dados", "arquivos", "hd", "ssd", "pendrive", "memória"],
    category: "serviços",
  },
  {
    question: "Qual a diferença entre as unidades do Centro e de Icaraí?",
    answer:
      "Ambas as unidades oferecem os mesmos serviços e padrão de qualidade. A principal diferença está na localização, permitindo que você escolha a mais conveniente. A unidade do Centro é nossa sede original, enquanto a de Icaraí é nossa nova filial, inaugurada para melhor atender os clientes dessa região.",
    keywords: ["diferença", "unidades", "lojas", "centro", "icaraí", "filial"],
    category: "localização",
  },
  {
    question: "Vocês consertam equipamentos fora da garantia do fabricante?",
    answer:
      "Sim, somos especializados em consertar equipamentos que já estão fora da garantia do fabricante. Inclusive, muitos clientes nos procuram após receberem orçamentos muito altos das assistências autorizadas.",
    keywords: ["fora da garantia", "garantia expirada", "sem garantia", "fabricante"],
    category: "serviços",
  },
  {
    question: "É possível fazer upgrade no meu equipamento durante o conserto?",
    answer:
      "Sim, oferecemos serviços de upgrade junto com o reparo. Por exemplo, ao consertar um notebook, podemos também instalar mais memória RAM ou substituir o HD por um SSD para melhorar o desempenho.",
    keywords: ["upgrade", "melhorar", "atualizar", "performance", "desempenho", "ssd", "ram"],
    category: "serviços",
  },
]

// Informações sobre a empresa
export const companyInfo = {
  name: "JDINFO",
  fullName: "JDINFO - Assistência Técnica Especializada",
  foundedYear: 2005,
  experience: "18 anos",
  email: "contato@jdinfo.com.br",
  website: "https://jdinfo.com.br",
  specialties: [
    "Conserto de PlayStation, Xbox e Nintendo",
    "Reparo de produtos Apple (iPhone, iPad, MacBook)",
    "Manutenção de notebooks e PCs Gamer",
    "Conserto de GoPro e caixas JBL",
    "Reparo de tablets de todas as marcas",
  ],
  differentials: [
    "Mais de 18 anos de experiência em Niterói",
    "Técnicos certificados e especializados",
    "Garantia de 90 dias em todos os serviços",
    "Diagnóstico gratuito",
    "Peças originais ou homologadas",
    "Duas unidades para melhor atendimento",
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
  locationOptions: "Temos duas unidades em Niterói para melhor atendê-lo. Qual é mais conveniente para você?",
  diagnosticOffer: "Oferecemos diagnóstico gratuito para todos os equipamentos. Gostaria de agendar um horário?",
  priceInquiry:
    "Os preços variam conforme o modelo e o problema específico. Para um orçamento preciso, recomendamos trazer seu equipamento para um diagnóstico gratuito. Posso te ajudar a agendar um horário?",
  warrantyInfo: "Todos os nossos serviços incluem garantia de 90 dias, dando a você tranquilidade e segurança.",
  fallback:
    "Estou aqui para ajudar com informações sobre nossos serviços de assistência técnica. Se sua pergunta for sobre outro assunto, talvez seja melhor falar diretamente com nossa equipe.",
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
    "conserto",
    "reparo",
    "consertar",
    "reparar",
    "arrumar",
    "fix",
    "problema",
    "assistência",
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
    "Quanto custa o conserto?",
    "Vocês dão garantia?",
  ],
  afterServiceInquiry: [
    "Quanto tempo demora o conserto?",
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
