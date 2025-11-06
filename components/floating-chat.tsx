"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { MessageCircle, X, Send, MessageSquare } from "lucide-react"

// Tipos para as mensagens do chat
type MessageType = "user" | "bot" | "contact"

interface Message {
  id: string
  type: MessageType
  text: string
  timestamp: Date
}

// Opções rápidas para o chatbot
const quickOptions = [
  "Quais serviços vocês oferecem?",
  "Onde ficam as lojas?",
  "Quanto custa o conserto?",
  "Falar com atendente",
]

export default function FloatingChat() {
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState("")
  const [chatHistory, setChatHistory] = useState<Message[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const chatContainerRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  // Inicializa o chat quando aberto pela primeira vez
  useEffect(() => {
    if (isOpen && chatHistory.length === 0) {
      addBotMessage("Olá! Sou o assistente virtual da JDINFO. Como posso ajudar você hoje?")
    }
  }, [isOpen])

  // Rola para a última mensagem quando o histórico é atualizado
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight
    }
  }, [chatHistory])

  // Foca no input quando o chat é aberto
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isOpen])

  const toggleChat = () => {
    setIsOpen(!isOpen)
  }

  // Gera um ID único para cada mensagem
  const generateId = () => {
    return Date.now().toString(36) + Math.random().toString(36).substr(2)
  }

  // Adiciona uma mensagem do usuário ao histórico
  const addUserMessage = (text: string) => {
    const newMessage: Message = {
      id: generateId(),
      type: "user",
      text,
      timestamp: new Date(),
    }

    setChatHistory((prev) => [...prev, newMessage])
  }

  // Adiciona uma mensagem do bot ao histórico
  const addBotMessage = (text: string) => {
    const newMessage: Message = {
      id: generateId(),
      type: "bot",
      text,
      timestamp: new Date(),
    }

    setChatHistory((prev) => [...prev, newMessage])
  }

  // Adiciona opções de contato
  const addContactOptions = () => {
    const newMessage: Message = {
      id: generateId(),
      type: "contact",
      text: "Para um atendimento mais personalizado, você pode falar diretamente com nossa equipe:",
      timestamp: new Date(),
    }

    setChatHistory((prev) => [...prev, newMessage])
  }

  // Envia a mensagem para o webhook e processa a resposta
  const sendToWebhook = async (userMessage: string) => {
    setIsLoading(true)

    try {
      const response = await fetch("https://webhook.iagoflow.com/webhook/jdblog", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: userMessage,
          timestamp: new Date().toISOString(),
          source: "website-chat",
          // Você pode adicionar mais informações conforme necessário
        }),
      })

      if (!response.ok) {
        throw new Error(`Erro na resposta: ${response.status}`)
      }

      // Processar a resposta como texto em vez de JSON
      const responseText = await response.text()

      // Adiciona a resposta do webhook ao chat
      if (responseText && responseText.trim()) {
        addBotMessage(responseText)
      } else {
        // Resposta de fallback caso o webhook não retorne uma resposta válida
        addBotMessage(
          "Desculpe, não consegui processar sua solicitação. Por favor, tente novamente ou entre em contato diretamente com nossa equipe.",
        )
        addContactOptions()
      }
    } catch (error) {
      console.error("Erro ao enviar mensagem para o webhook:", error)
      addBotMessage(
        "Desculpe, estamos enfrentando problemas técnicos. Por favor, tente novamente mais tarde ou entre em contato diretamente com nossa equipe.",
      )
      addContactOptions()
    } finally {
      setIsLoading(false)
    }
  }

  // Manipula o envio de mensagem
  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()

    if (!message.trim()) return

    // Adiciona a mensagem do usuário ao histórico
    addUserMessage(message)

    // Envia a mensagem para o webhook
    sendToWebhook(message)

    // Limpa o campo de mensagem
    setMessage("")
  }

  // Manipula o clique em uma opção rápida
  const handleQuickOptionClick = (option: string) => {
    // Adiciona a opção como mensagem do usuário
    addUserMessage(option)

    // Se a opção for "Falar com atendente", mostra as opções de contato
    if (option === "Falar com atendente") {
      addContactOptions()
    } else {
      // Envia a mensagem para o webhook
      sendToWebhook(option)
    }
  }

  // Formata a hora para exibição
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
  }

  return (
    <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50">
      {isOpen ? (
        <Card className="w-[calc(100vw-32px)] md:w-96 shadow-xl border-0 max-w-[400px]">
          <CardHeader className="bg-jdblue text-white p-3 md:p-4 flex flex-row justify-between items-center rounded-t-lg">
            <div className="flex items-center">
              <MessageCircle className="h-5 w-5 mr-2" />
              <h3 className="font-medium">Chat JDINFO</h3>
            </div>
            <Button variant="ghost" size="icon" onClick={toggleChat} className="text-white hover:bg-jdblue/80">
              <X className="h-5 w-5" />
            </Button>
          </CardHeader>
          <CardContent className="p-3 md:p-4 h-[60vh] md:h-96 overflow-y-auto bg-gray-50" ref={chatContainerRef}>
            <div className="space-y-4">
              {chatHistory.map((msg) => {
                if (msg.type === "user") {
                  return (
                    <div key={msg.id} className="flex justify-end">
                      <div className="max-w-[80%] rounded-lg p-3 bg-jdblue text-white rounded-tr-none">
                        <p>{msg.text}</p>
                        <div className="text-xs text-white/70 text-right mt-1">{formatTime(msg.timestamp)}</div>
                      </div>
                    </div>
                  )
                } else if (msg.type === "bot") {
                  return (
                    <div key={msg.id} className="flex justify-start">
                      <div className="max-w-[80%] rounded-lg p-3 bg-white text-gray-800 shadow-sm rounded-tl-none">
                        <p>{msg.text}</p>
                        <div className="text-xs text-gray-500 mt-1">{formatTime(msg.timestamp)}</div>
                      </div>
                    </div>
                  )
                } else if (msg.type === "contact") {
                  return (
                    <div key={msg.id} className="flex justify-start">
                      <div className="max-w-[90%] rounded-lg p-3 bg-white text-gray-800 shadow-sm rounded-tl-none">
                        <p className="mb-2">{msg.text}</p>

                        <div className="grid grid-cols-2 gap-2 mt-3">
                          <a
                            href="https://wa.me/5521971386634"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs bg-green-600 hover:bg-green-700 text-white px-3 py-2 rounded-md transition-colors flex items-center justify-center"
                          >
                            <MessageSquare className="h-3 w-3 mr-1" />
                            Centro: (21) 97138-6634
                          </a>
                          <a
                            href="https://wa.me/5521996643987"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs bg-green-600 hover:bg-green-700 text-white px-3 py-2 rounded-md transition-colors flex items-center justify-center"
                          >
                            <MessageSquare className="h-3 w-3 mr-1" />
                            Icaraí: (21) 99664-3987
                          </a>
                        </div>

                        <div className="text-xs text-gray-500 mt-2">{formatTime(msg.timestamp)}</div>
                      </div>
                    </div>
                  )
                }
              })}

              {isLoading && (
                <div className="flex justify-start">
                  <div className="max-w-[80%] rounded-lg p-3 bg-white text-gray-800 shadow-sm rounded-tl-none">
                    <div className="flex space-x-1">
                      <div
                        className="w-2 h-2 bg-gray-300 rounded-full animate-bounce"
                        style={{ animationDelay: "0ms" }}
                      ></div>
                      <div
                        className="w-2 h-2 bg-gray-300 rounded-full animate-bounce"
                        style={{ animationDelay: "150ms" }}
                      ></div>
                      <div
                        className="w-2 h-2 bg-gray-300 rounded-full animate-bounce"
                        style={{ animationDelay: "300ms" }}
                      ></div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </CardContent>
          <CardFooter className="p-3 border-t flex flex-col">
            <div className="flex flex-wrap justify-between w-full mb-3 gap-1 md:gap-2">
              {quickOptions.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleQuickOptionClick(option)}
                  className="text-xs bg-gray-100 hover:bg-gray-200 text-jdblue px-2 py-1 rounded-full transition-colors whitespace-nowrap mb-1"
                >
                  {option}
                </button>
              ))}
            </div>
            <form onSubmit={handleSendMessage} className="flex w-full space-x-2">
              <input
                type="text"
                placeholder="Digite sua mensagem..."
                className="flex-grow px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-jdblue text-base h-10"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                ref={inputRef}
                disabled={isLoading}
              />
              <Button type="submit" size="icon" className="bg-jdred hover:bg-jdred/90 h-10 w-10" disabled={isLoading}>
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </CardFooter>
        </Card>
      ) : (
        <Button
          onClick={toggleChat}
          className="h-12 w-12 md:h-14 md:w-14 rounded-full bg-jdred hover:bg-jdred/90 shadow-lg flex items-center justify-center"
        >
          <MessageCircle className="h-5 w-5 md:h-6 md:w-6" />
        </Button>
      )}
    </div>
  )
}
