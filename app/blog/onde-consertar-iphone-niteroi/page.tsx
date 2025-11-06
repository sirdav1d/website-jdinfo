import { Button } from "@/components/ui/button"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import BlogArticleLayout from "@/components/blog-article-layout"

export default function IPhoneRepairBlogPost() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1">
        <BlogArticleLayout>
          <div className="article-meta">10 de Dezembro, 2024 • Apple</div>
          <h1>Onde Consertar iPhone em Niterói: Assistência Técnica Especializada</h1>
          <p className="article-excerpt">
            Problemas com seu iPhone? Conheça a melhor assistência técnica especializada em reparo de iPhones em
            Niterói.
          </p>

          <div className="image-container h-[400px]">
            <Image
              src="https://images.unsplash.com/photo-1592750475338-74b7b21085ab?q=80&w=2070&auto=format&fit=crop"
              alt="Técnico consertando iPhone na JDINFO em Niterói"
              fill
              className="object-cover"
              priority
            />
          </div>

          <h2>Problemas comuns com iPhone que exigem assistência técnica</h2>
          <p>
            O iPhone é um dos smartphones mais populares do mundo, conhecido por sua qualidade e durabilidade. No
            entanto, mesmo os melhores dispositivos podem apresentar problemas ao longo do tempo. Alguns dos problemas
            mais comuns incluem:
          </p>
          <ul>
            <li>Tela quebrada ou trincada</li>
            <li>Bateria com duração reduzida</li>
            <li>Problemas de carregamento</li>
            <li>Falhas na câmera</li>
            <li>iPhone não liga ou reinicia constantemente</li>
            <li>Problemas com alto-falante ou microfone</li>
            <li>Botões que não respondem</li>
            <li>Danos causados por água</li>
          </ul>

          <p>
            Quando seu iPhone apresenta algum desses problemas, é importante buscar uma assistência técnica
            especializada para garantir um reparo adequado e preservar a vida útil do seu dispositivo.
          </p>

          <h2>Por que escolher uma assistência técnica especializada em Apple?</h2>
          <p>
            Dispositivos Apple, como o iPhone, possuem características específicas que exigem conhecimento técnico
            especializado. Ao escolher onde consertar seu iPhone em Niterói, considere:
          </p>

          <ul>
            <li>Técnicos com certificação e treinamento específico para produtos Apple</li>
            <li>Uso de peças originais ou de qualidade equivalente</li>
            <li>Garantia nos serviços realizados</li>
            <li>Experiência comprovada com reparos de iPhone</li>
            <li>Equipamentos adequados para diagnóstico e reparo</li>
          </ul>

          <h2>JDINFO: A melhor opção para consertar iPhone em Niterói</h2>
          <p>
            A JDINFO se destaca como a principal assistência técnica especializada em produtos Apple em Niterói, com
            mais de 18 anos de experiência no mercado. Nossa equipe é especializada em reparos de iPhone, oferecendo
            diagnóstico preciso e soluções eficientes para qualquer problema.
          </p>

          <h3>Diferenciais da JDINFO no conserto de iPhone:</h3>
          <ul>
            <li>Técnicos certificados e especializados em produtos Apple</li>
            <li>Diagnóstico gratuito e detalhado</li>
            <li>Uso de peças de alta qualidade</li>
            <li>Garantia de 90 dias em todos os serviços</li>
            <li>Prazo de entrega rápido (média de 24 a 48 horas para a maioria dos reparos)</li>
            <li>Duas unidades em Niterói para sua comodidade (Centro e Icaraí)</li>
          </ul>

          <h2>Serviços de reparo de iPhone oferecidos pela JDINFO</h2>
          <p>Na JDINFO, oferecemos uma ampla gama de serviços para iPhone, incluindo:</p>

          <ul>
            <li>Troca de tela (original ou premium)</li>
            <li>Substituição de bateria</li>
            <li>Reparo de placa</li>
            <li>Conserto de conector de carga</li>
            <li>Reparo de câmeras (frontal e traseira)</li>
            <li>Substituição de botões</li>
            <li>Reparo de alto-falantes e microfones</li>
            <li>Recuperação de dados</li>
            <li>Atualização de software</li>
            <li>Desbloqueio de iCloud (quando legalmente possível)</li>
          </ul>

          <h2>Como funciona o processo de reparo na JDINFO</h2>
          <p>Nosso processo é simples e transparente:</p>

          <ol>
            <li>
              <strong>Diagnóstico:</strong> Realizamos uma análise completa para identificar o problema do seu iPhone.
            </li>
            <li>
              <strong>Orçamento:</strong> Apresentamos um orçamento detalhado sem compromisso.
            </li>
            <li>
              <strong>Reparo:</strong> Após aprovação, realizamos o reparo com peças de qualidade.
            </li>
            <li>
              <strong>Testes:</strong> Realizamos testes completos para garantir o perfeito funcionamento.
            </li>
            <li>
              <strong>Entrega:</strong> Devolvemos seu iPhone funcionando perfeitamente e com garantia.
            </li>
          </ol>

          <h2>Depoimentos de clientes satisfeitos</h2>
          <blockquote>
            "Meu iPhone 15 caiu e a tela quebrou completamente. Levei na JDINFO e fiquei impressionada com a rapidez e
            qualidade do serviço. Em menos de 2 horas, meu celular estava pronto e como novo!" - Mariana Costa
          </blockquote>

          <blockquote>
            "A bateria do meu iPhone 14 estava durando apenas 2 horas. Na JDINFO, trocaram a bateria por uma de alta
            qualidade e agora dura o dia todo. Excelente atendimento e preço justo!" - Ricardo Mendes
          </blockquote>

          <h2>Preços competitivos e formas de pagamento</h2>
          <p>
            Na JDINFO, oferecemos preços justos e competitivos para todos os serviços de reparo de iPhone. Aceitamos
            diversas formas de pagamento para sua comodidade:
          </p>
          <ul>
            <li>Cartões de crédito (parcelamento em até 12x)</li>
            <li>Cartões de débito</li>
            <li>Dinheiro</li>
            <li>PIX</li>
            <li>Transferência bancária</li>
          </ul>

          <h2>Conclusão: Por que escolher a JDINFO para consertar seu iPhone em Niterói</h2>
          <p>
            Quando se trata de consertar iPhone em Niterói, a JDINFO oferece a melhor combinação de experiência,
            qualidade e preço justo. Com técnicos especializados, peças de qualidade e garantia em todos os serviços,
            você pode confiar que seu iPhone estará em boas mãos.
          </p>

          <p>
            Não arrisque seu investimento com reparos amadores ou assistências não especializadas. Escolha a JDINFO,
            referência em conserto de produtos Apple em Niterói há mais de 18 anos.
          </p>

          <div className="cta-section">
            <h3 className="text-2xl font-bold mb-4">Precisa consertar seu iPhone?</h3>
            <p className="mb-6">
              Entre em contato conosco hoje mesmo para um diagnóstico gratuito e descubra como podemos ajudar a
              recuperar seu iPhone com rapidez e qualidade.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://wa.me/5521971386634">
                <Button size="lg" className="bg-jdred hover:bg-jdred/90 w-full sm:w-auto">
                  <span className="mr-2">Falar com Centro</span>
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </a>
              <a href="https://wa.me/5521996643987">
                <Button size="lg" className="bg-jdred hover:bg-jdred/90 w-full sm:w-auto">
                  <span className="mr-2">Falar com Icaraí</span>
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </a>
            </div>
          </div>

          <div className="related-articles">
            <h3>Artigos relacionados</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link href="/blog/onde-consertar-macbook-niteroi" className="group">
                <div className="border rounded-lg overflow-hidden transition-all duration-300 group-hover:shadow-md">
                  <div className="p-4">
                    <h4 className="font-medium text-jdblue group-hover:text-jdred transition-colors">
                      Onde Consertar MacBook em Niterói: Assistência Apple
                    </h4>
                    <p className="text-sm text-gray-600 mt-2">
                      MacBook com problemas? Descubra a melhor assistência técnica especializada em produtos Apple em
                      Niterói.
                    </p>
                  </div>
                </div>
              </Link>
              <Link href="/blog/onde-consertar-celular-niteroi" className="group">
                <div className="border rounded-lg overflow-hidden transition-all duration-300 group-hover:shadow-md">
                  <div className="p-4">
                    <h4 className="font-medium text-jdblue group-hover:text-jdred transition-colors">
                      Onde Consertar Celular em Niterói: Assistência Técnica Confiável
                    </h4>
                    <p className="text-sm text-gray-600 mt-2">
                      Celular quebrado ou com defeito? Conheça a melhor assistência técnica para smartphones em Niterói.
                    </p>
                  </div>
                </div>
              </Link>
              <Link href="/blog/onde-consertar-ipad-niteroi" className="group">
                <div className="border rounded-lg overflow-hidden transition-all duration-300 group-hover:shadow-md">
                  <div className="p-4">
                    <h4 className="font-medium text-jdblue group-hover:text-jdred transition-colors">
                      Onde Consertar iPad em Niterói: Serviço Especializado
                    </h4>
                    <p className="text-sm text-gray-600 mt-2">
                      Problemas com seu iPad? Veja onde encontrar o melhor serviço de reparo em Niterói.
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </BlogArticleLayout>
      </main>
      <Footer />
    </div>
  )
}
