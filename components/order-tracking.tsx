"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Search, Clock, AlertCircle } from "lucide-react"

export default function OrderTracking() {
  const [orderNumber, setOrderNumber] = useState("")
  const [orderStatus, setOrderStatus] = useState<null | {
    status: "received" | "diagnosing" | "waiting" | "repairing" | "testing" | "ready" | "delivered" | "not-found"
    message: string
    details?: string
    estimatedCompletion?: string
  }>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Simulação de busca - em produção, isso seria uma chamada de API
    if (orderNumber) {
      // Simulando diferentes status para demonstração
      const lastDigit = Number.parseInt(orderNumber.slice(-1))

      if (isNaN(lastDigit)) {
        setOrderStatus({
          status: "not-found",
          message: "Ordem de serviço não encontrada",
          details: "Verifique o número e tente novamente.",
        })
        return
      }

      const statuses = [
        {
          status: "received",
          message: "Equipamento recebido",
          details: "Seu equipamento foi recebido e está aguardando diagnóstico.",
          estimatedCompletion: "3 a 5 dias úteis",
        },
        {
          status: "diagnosing",
          message: "Em diagnóstico",
          details: "Nossos técnicos estão analisando seu equipamento.",
          estimatedCompletion: "2 a 4 dias úteis",
        },
        {
          status: "waiting",
          message: "Aguardando aprovação",
          details: "Orçamento enviado, aguardando sua aprovação.",
          estimatedCompletion: "Depende da sua aprovação",
        },
        {
          status: "repairing",
          message: "Em reparo",
          details: "Seu equipamento está sendo reparado por nossos técnicos.",
          estimatedCompletion: "2 a 3 dias úteis",
        },
        {
          status: "testing",
          message: "Em teste",
          details: "Reparo concluído, realizando testes finais.",
          estimatedCompletion: "1 dia útil",
        },
        {
          status: "ready",
          message: "Pronto para retirada",
          details: "Seu equipamento está pronto e disponível para retirada.",
          estimatedCompletion: "Disponível agora",
        },
        {
          status: "delivered",
          message: "Entregue",
          details: "Seu equipamento foi entregue com sucesso.",
          estimatedCompletion: "Concluído",
        },
      ] as const

      setOrderStatus(statuses[lastDigit % statuses.length])
    }
  }

  return (
    <Card className="border-0 shadow-lg">
      <CardHeader className="bg-jdblue text-white rounded-t-lg">
        <CardTitle className="text-center">Rastreie sua Ordem de Serviço</CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:space-x-2 space-y-2 sm:space-y-0">
            <Input
              type="text"
              placeholder="Digite o número da OS"
              value={orderNumber}
              onChange={(e) => setOrderNumber(e.target.value)}
              className="flex-grow h-12 text-base"
              required
            />
            <Button type="submit" className="bg-jdred hover:bg-jdred/90 h-12 text-base">
              <Search className="h-4 w-4 mr-2" />
              Buscar
            </Button>
          </div>
        </form>

        {orderStatus && (
          <div className="mt-6">
            {orderStatus.status === "not-found" ? (
              <div className="flex items-center text-red-500 mb-2">
                <AlertCircle className="h-5 w-5 mr-2" />
                <span className="font-medium">{orderStatus.message}</span>
              </div>
            ) : (
              <>
                <div className="flex items-center text-green-600 mb-2">
                  <Clock className="h-5 w-5 mr-2" />
                  <span className="font-medium">{orderStatus.message}</span>
                </div>
                <p className="text-gray-600 mb-4">{orderStatus.details}</p>

                <div className="relative">
                  <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                    <div
                      className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500"
                      style={{
                        width: `${
                          orderStatus.status === "received"
                            ? "14%"
                            : orderStatus.status === "diagnosing"
                              ? "28%"
                              : orderStatus.status === "waiting"
                                ? "42%"
                                : orderStatus.status === "repairing"
                                  ? "56%"
                                  : orderStatus.status === "testing"
                                    ? "70%"
                                    : orderStatus.status === "ready"
                                      ? "85%"
                                      : "100%"
                        }`,
                      }}
                    ></div>
                  </div>
                  <div className="flex justify-between text-xs text-gray-600">
                    <span>Recebido</span>
                    <span className="hidden sm:inline">Em diagnóstico</span>
                    <span className="hidden sm:inline">Aguardando</span>
                    <span>Em reparo</span>
                    <span className="hidden sm:inline">Em teste</span>
                    <span>Concluído</span>
                  </div>
                </div>

                <div className="mt-4 bg-blue-50 p-3 rounded-lg">
                  <p className="text-sm">
                    <span className="font-medium">Previsão de conclusão:</span> {orderStatus.estimatedCompletion}
                  </p>
                </div>
              </>
            )}
          </div>
        )}

        <div className="mt-4 text-center text-sm text-gray-500">
          <p>Precisa de ajuda? Entre em contato pelo WhatsApp:</p>
          <div className="flex justify-center space-x-4 mt-2">
            <a href="https://wa.me/5521971386634" className="text-jdblue hover:underline">
              Centro: (21) 97138-6634
            </a>
            <a href="https://wa.me/5521996643987" className="text-jdblue hover:underline">
              Icaraí: (21) 99664-3987
            </a>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
