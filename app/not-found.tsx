import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Home, Search } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <Card className="w-full max-w-md text-center">
        <CardContent className="p-8">
          <div className="mb-6">
            <div className="text-6xl font-bold text-blue-600 mb-2">404</div>
            <h1 className="text-2xl font-semibold text-gray-800 mb-2">Página não encontrada</h1>
            <p className="text-gray-600">A página que você está procurando não existe ou foi movida.</p>
          </div>

          <div className="space-y-3">
            <Button asChild className="w-full">
              <Link href="/">
                <Home className="w-4 h-4 mr-2" />
                Voltar ao Início
              </Link>
            </Button>

            <Button variant="outline" asChild className="w-full bg-transparent">
              <Link href="/servicos">
                <Search className="w-4 h-4 mr-2" />
                Ver Serviços
              </Link>
            </Button>

            <Button variant="ghost" asChild className="w-full">
              <Link href="/contato">Entre em Contato</Link>
            </Button>
          </div>

          <div className="mt-6 pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-500">Precisa de ajuda? Entre em contato conosco:</p>
            <div className="mt-2 space-y-1 text-sm">
              <p className="text-blue-600">(21) 99999-9999</p>
              <p className="text-blue-600">contato@jdinformatica.com.br</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
