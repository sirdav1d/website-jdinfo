import Header from "@/components/header"
import Footer from "@/components/footer"
import OrderTracking from "@/components/order-tracking"

export default function TrackingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1">
        <section className="py-12 md:py-16 bg-jdblue text-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Rastreamento de Ordem de Serviço</h1>
              <p className="text-gray-200 mb-6">Acompanhe o status do reparo do seu equipamento em tempo real.</p>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 md:px-6">
          <div className="container mx-auto max-w-3xl">
            <OrderTracking />

            <div className="mt-12 bg-gray-50 p-8 rounded-xl">
              <h2 className="text-2xl font-bold mb-4 text-jdblue">Como funciona o processo de reparo?</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-jdred text-white flex items-center justify-center mr-4 flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1 text-jdblue">Recebimento</h3>
                    <p className="text-gray-600">
                      Seu equipamento é recebido em uma de nossas unidades e registrado no sistema.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-jdred text-white flex items-center justify-center mr-4 flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1 text-jdblue">Diagnóstico</h3>
                    <p className="text-gray-600">
                      Nossos técnicos realizam uma análise completa para identificar o problema.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-jdred text-white flex items-center justify-center mr-4 flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1 text-jdblue">Orçamento</h3>
                    <p className="text-gray-600">Enviamos um orçamento detalhado e aguardamos sua aprovação.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-jdred text-white flex items-center justify-center mr-4 flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1 text-jdblue">Reparo</h3>
                    <p className="text-gray-600">Após aprovação, realizamos o reparo com peças de qualidade.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-jdred text-white flex items-center justify-center mr-4 flex-shrink-0">
                    5
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1 text-jdblue">Teste</h3>
                    <p className="text-gray-600">
                      Realizamos testes rigorosos para garantir que o reparo foi bem-sucedido.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-jdred text-white flex items-center justify-center mr-4 flex-shrink-0">
                    6
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1 text-jdblue">Entrega</h3>
                    <p className="text-gray-600">Seu equipamento está pronto para retirada, com garantia de 90 dias.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
