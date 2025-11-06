"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"

export default function DiagnosticForm() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aqui você adicionaria a lógica para enviar o formulário
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <Card className="border-0 shadow-lg" id="diagnostico">
        <CardContent className="p-8 text-center">
          <div className="flex justify-center mb-4">
            <CheckCircle className="h-16 w-16 text-green-500" />
          </div>
          <h3 className="text-2xl font-bold text-jdblue mb-2">Solicitação Enviada!</h3>
          <p className="text-gray-600 mb-4">
            Recebemos sua solicitação de diagnóstico. Um de nossos especialistas entrará em contato em breve.
          </p>
          <Button className="bg-jdred hover:bg-jdred/90" onClick={() => setSubmitted(false)}>
            Enviar nova solicitação
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="border-0 shadow-lg" id="diagnostico">
      <CardHeader className="bg-jdblue text-white rounded-t-lg p-4 md:p-6">
        <CardTitle className="text-center text-xl md:text-2xl">Solicite um Diagnóstico Gratuito</CardTitle>
      </CardHeader>
      <CardContent className="p-4 md:p-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Nome completo
              </label>
              <Input id="name" type="text" placeholder="Digite seu nome" required className="h-12 text-base" />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                Telefone/WhatsApp
              </label>
              <Input id="phone" type="tel" placeholder="(21) 99999-9999" required className="h-12 text-base" />
            </div>
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              E-mail
            </label>
            <Input id="email" type="email" placeholder="seu@email.com" required />
          </div>
          <div>
            <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
              Serviço de interesse
            </label>
            <select
              id="service"
              className="w-full px-3 py-3 h-12 text-base border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-jdred focus:border-jdred"
              required
            >
              <option value="">Selecione o serviço</option>
              <option value="playstation">Conserto de PlayStation</option>
              <option value="xbox">Conserto de Xbox</option>
              <option value="nintendo">Conserto de Nintendo</option>
              <option value="apple">Conserto de Linha APPLE</option>
              <option value="notebook">Conserto de Notebook</option>
              <option value="pc-gamer">Conserto de PC Gamer</option>
              <option value="gopro">Conserto de GoPro</option>
              <option value="jbl">Conserto de Caixas JBL</option>
              <option value="smartphone">Conserto de Smartphone</option>
              <option value="outro">Outro</option>
            </select>
          </div>
          <div>
            <label htmlFor="problem" className="block text-sm font-medium text-gray-700 mb-1">
              Descreva o problema
            </label>
            <textarea
              id="problem"
              className="w-full px-3 py-3 text-base border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-jdred focus:border-jdred"
              rows={3}
              placeholder="Conte-nos o que está acontecendo com seu equipamento"
            ></textarea>
          </div>
          <div>
            <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
              Unidade de preferência
            </label>
            <div className="flex space-x-4">
              <label className="flex items-center">
                <input type="radio" name="location" value="centro" className="mr-2" defaultChecked />
                <span>Centro</span>
              </label>
              <label className="flex items-center">
                <input type="radio" name="location" value="icarai" className="mr-2" />
                <span>Icaraí</span>
              </label>
            </div>
          </div>
          <Button type="submit" className="w-full bg-jdred hover:bg-jdred/90 h-12 text-base">
            Solicitar Diagnóstico Gratuito
          </Button>
          <p className="text-xs text-gray-500 text-center">
            Ao enviar, você concorda com nossa política de privacidade.
          </p>
        </form>
      </CardContent>
    </Card>
  )
}
