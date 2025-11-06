import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function CtaSection() {
  return (
    <section className="py-12 md:py-16 px-4 md:px-6 lg:px-8 bg-jdblue text-white">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">Precisa de assistência técnica?</h2>
            <p className="text-gray-300 mb-4 md:mb-6 text-sm md:text-base">
              Entre em contato conosco para um diagnóstico gratuito. Nossa equipe está pronta para ajudar com qualquer
              problema técnico.
            </p>
            <div className="space-y-3 md:space-y-4">
              <div className="flex items-center">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/10 flex items-center justify-center mr-3 md:mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 md:h-5 md:w-5 text-jdred"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs md:text-sm text-gray-300">WhatsApp</p>
                  <div>
                    <p className="font-medium text-sm md:text-base">Centro: (21) 97138-6634</p>
                    <p className="font-medium text-sm md:text-base">Icaraí: (21) 99664-3987</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-jdred"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-300">Email</p>
                  <p className="font-medium">contato@jdinfo.com.br</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-jdred"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-300">Endereço</p>
                  <p className="font-medium">Rua Exemplo, 123 - Icaraí, Niterói - RJ</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm text-gray-800">
            <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-jdblue">Solicite um orçamento</h3>
            <form className="space-y-3 md:space-y-4">
              <div>
                <Input type="text" placeholder="Nome completo" className="h-10 md:h-auto text-sm md:text-base" />
              </div>
              <div>
                <Input type="email" placeholder="E-mail" className="h-10 md:h-auto text-sm md:text-base" />
              </div>
              <div>
                <Input type="tel" placeholder="Telefone" className="h-10 md:h-auto text-sm md:text-base" />
              </div>
              <div>
                <select className="w-full px-3 py-2 h-10 md:h-auto text-sm md:text-base border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-jdred focus:border-jdred">
                  <option value="">Selecione o serviço</option>
                  <option value="playstation">Conserto de PlayStation (PS4/PS5)</option>
                  <option value="controle-ps">Conserto de Controle PS5</option>
                  <option value="xbox">Conserto de Xbox (One/Series)</option>
                  <option value="controle-xbox">Conserto de Controle Xbox</option>
                  <option value="nintendo">Conserto de Nintendo</option>
                  <option value="apple">Conserto de Linha APPLE</option>
                  <option value="macbook">Conserto de MacBook</option>
                  <option value="imac">Conserto de iMac</option>
                  <option value="ipad">Conserto de iPad</option>
                  <option value="notebook">Conserto de Notebook/Ultrabook</option>
                  <option value="pc-gamer">Conserto de PC Gamer</option>
                  <option value="gopro">Conserto de GoPro</option>
                  <option value="jbl">Conserto de Caixas JBL</option>
                  <option value="smartphone">Conserto de Smartphone</option>
                  <option value="upgrade">Upgrade de Hardware</option>
                  <option value="outro">Outro</option>
                </select>
              </div>
              <div>
                <textarea
                  className="w-full px-3 py-2 text-sm md:text-base border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-jdred focus:border-jdred"
                  rows={3}
                  placeholder="Descreva o problema"
                ></textarea>
              </div>
              <Button className="w-full bg-jdred hover:bg-jdred/90 h-10 md:h-auto text-sm md:text-base">
                Enviar solicitação
              </Button>
              <p className="text-xs text-gray-500 text-center">
                Ao enviar, você concorda com nossa política de privacidade.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
