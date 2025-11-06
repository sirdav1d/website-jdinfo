import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1">
        <section className="py-12 md:py-16 bg-jdblue text-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Política de Privacidade</h1>
              <p className="text-gray-200 mb-6">
                Saiba como a JDINFO coleta, utiliza e protege suas informações pessoais.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 md:px-6">
          <div className="container mx-auto max-w-4xl">
            <div className="prose prose-lg max-w-none">
              <p>
                <strong>Última atualização:</strong> {new Date().toLocaleDateString("pt-BR")}
              </p>

              <p>
                A JDINFO está comprometida em proteger sua privacidade. Esta Política de Privacidade explica como
                coletamos, usamos, divulgamos, transferimos e armazenamos suas informações. Por favor, reserve um
                momento para se familiarizar com nossas práticas de privacidade.
              </p>

              <h2>1. Informações que Coletamos</h2>
              <p>Podemos coletar diversos tipos de informações pessoais, incluindo:</p>
              <ul>
                <li>Nome, endereço de e-mail, número de telefone e endereço;</li>
                <li>Informações sobre os produtos que você possui e problemas técnicos relacionados;</li>
                <li>Detalhes de interações com nosso serviço de atendimento ao cliente;</li>
                <li>Informações sobre suas visitas ao nosso site, incluindo dados de tráfego e localização.</li>
              </ul>

              <h2>2. Como Utilizamos Suas Informações</h2>
              <p>As informações pessoais que coletamos nos permitem:</p>
              <ul>
                <li>Fornecer e melhorar nossos serviços de assistência técnica;</li>
                <li>Processar transações e enviar notificações relacionadas;</li>
                <li>Comunicar sobre produtos, serviços, promoções e eventos;</li>
                <li>Personalizar sua experiência com nossos serviços;</li>
                <li>Melhorar nosso site, produtos e serviços;</li>
                <li>Cumprir obrigações legais e regulatórias.</li>
              </ul>

              <h2>3. Cookies e Tecnologias Semelhantes</h2>
              <p>
                Nosso site utiliza cookies e tecnologias semelhantes para melhorar sua experiência de navegação,
                analisar o uso do site e auxiliar em nossos esforços de marketing. Você pode controlar o uso de cookies
                através das configurações do seu navegador, mas isso pode afetar a funcionalidade do site.
              </p>

              <h2>4. Compartilhamento de Informações</h2>
              <p>Podemos compartilhar suas informações pessoais com:</p>
              <ul>
                <li>Prestadores de serviços que atuam em nosso nome;</li>
                <li>Parceiros de negócios para oferecer produtos e serviços;</li>
                <li>Autoridades legais quando exigido por lei;</li>
                <li>Em caso de reorganização, fusão ou venda da empresa.</li>
              </ul>
              <p>Não vendemos ou alugamos suas informações pessoais a terceiros.</p>

              <h2>5. Proteção de Informações</h2>
              <p>
                Implementamos medidas de segurança técnicas, administrativas e físicas para proteger suas informações
                pessoais contra acesso não autorizado, uso indevido ou divulgação. No entanto, nenhum método de
                transmissão pela Internet ou método de armazenamento eletrônico é 100% seguro.
              </p>

              <h2>6. Seus Direitos</h2>
              <p>De acordo com a Lei Geral de Proteção de Dados (LGPD), você tem direito a:</p>
              <ul>
                <li>Acessar suas informações pessoais;</li>
                <li>Corrigir informações imprecisas;</li>
                <li>Excluir suas informações pessoais;</li>
                <li>Restringir ou opor-se ao processamento de suas informações;</li>
                <li>Solicitar a portabilidade de seus dados;</li>
                <li>Retirar seu consentimento a qualquer momento.</li>
              </ul>
              <p>Para exercer esses direitos, entre em contato conosco através dos canais indicados abaixo.</p>

              <h2>7. Retenção de Dados</h2>
              <p>
                Mantemos suas informações pessoais pelo tempo necessário para cumprir os propósitos descritos nesta
                Política de Privacidade, a menos que um período de retenção mais longo seja exigido ou permitido por
                lei.
              </p>

              <h2>8. Crianças</h2>
              <p>
                Nossos serviços não são direcionados a menores de 18 anos. Não coletamos intencionalmente informações
                pessoais de crianças. Se você acredita que coletamos informações de um menor, entre em contato conosco
                para que possamos tomar as medidas apropriadas.
              </p>

              <h2>9. Alterações nesta Política</h2>
              <p>
                Podemos atualizar esta Política de Privacidade periodicamente. A versão mais recente estará sempre
                disponível em nosso site, com a data da última atualização. Recomendamos que você revise esta política
                regularmente.
              </p>

              <h2>10. Contato</h2>
              <p>
                Se você tiver dúvidas ou preocupações sobre esta Política de Privacidade ou sobre o tratamento de seus
                dados pessoais, entre em contato conosco:
              </p>
              <ul>
                <li>E-mail: contato@jdinfo.com.br</li>
                <li>Telefone: (21) 97138-6634 / (21) 99664-3987</li>
                <li>Endereço: Av. Ernani do Amaral Peixoto, 436 - loja 07 e 09 - Centro, Niterói - RJ, 24020-077</li>
              </ul>
            </div>

            <div className="mt-12 text-center">
              <Link href="/">
                <Button className="bg-jdblue hover:bg-jdblue/90">Voltar para a página inicial</Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
